const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

function initNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  if (!toggle || !nav) return;
  const close = () => { toggle.setAttribute("aria-expanded", "false"); nav.classList.remove("is-open"); };
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") { close(); toggle.focus(); }
  });
}

function initProjectDisclosure() {
  document.querySelector("[data-project-grid]")?.addEventListener("click", (event) => {
    const toggle = event.target.closest(".work-card__toggle");
    if (!toggle) return;
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    const panel = document.getElementById(toggle.getAttribute("aria-controls"));
    toggle.setAttribute("aria-expanded", String(!expanded));
    toggle.querySelector(".work-card__action-text").textContent = expanded ? "View project context" : "Close project context";
    toggle.closest(".work-card").classList.toggle("is-expanded", !expanded);
    panel?.setAttribute("aria-hidden", String(expanded));
    if (panel) panel.inert = expanded;
  });
}

function initMapControls() {
  const controls = [...document.querySelectorAll("[data-map-focus]")];
  const status = document.querySelector("[data-map-status]");
  const viewport = document.querySelector(".signal-map__viewport");
  const messages = { all: "Tracing the full path", systems: "Highlighting enterprise source systems", platform: "Highlighting data platforms and governance", outcomes: "Highlighting reporting and business outcomes" };
  controls.forEach((control) => control.addEventListener("click", () => {
    const layer = control.dataset.mapFocus;
    viewport?.setAttribute("data-focus", layer);
    controls.forEach((item) => {
      const active = item === control;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    if (status) status.textContent = messages[layer];
  }));
}

function initScrollMotion() {
  const elements = [...document.querySelectorAll("[data-reveal]")];
  const revealWithoutMotion = () => {
    elements.forEach((element) => element.classList.add("is-visible"));
    document.documentElement.classList.remove("motion-ready");
    document.querySelectorAll("svg animateMotion").forEach((animation) => animation.remove());
  };
  if (reduceMotion.matches || !("IntersectionObserver" in window)) { revealWithoutMotion(); return; }

  document.documentElement.classList.add("motion-ready");
  const observer = new IntersectionObserver((entries, activeObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      activeObserver.unobserve(entry.target);
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -5% 0px" });
  elements.forEach((element) => observer.observe(element));
  reduceMotion.addEventListener?.("change", (event) => { if (event.matches) { observer.disconnect(); revealWithoutMotion(); } });
}

function initReadingProgress() {
  const fill = document.querySelector(".reading-progress span");
  let frame = 0;
  const update = () => {
    frame = 0;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    if (fill) fill.style.transform = `scaleX(${scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0})`;
  };
  window.addEventListener("scroll", () => { if (!frame) frame = requestAnimationFrame(update); }, { passive: true });
  update();
}

function initCustomCursor() {
  if (!finePointer.matches || reduceMotion.matches) return;
  const cursor = document.querySelector(".custom-cursor");
  const label = document.querySelector(".cursor-label");
  let frame = 0;
  let x = 0;
  let y = 0;
  window.addEventListener("pointermove", (event) => {
    x = event.clientX; y = event.clientY;
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      cursor?.style.setProperty("--cursor-x", `${x}px`);
      cursor?.style.setProperty("--cursor-y", `${y}px`);
      label?.style.setProperty("--cursor-x", `${x}px`);
      label?.style.setProperty("--cursor-y", `${y}px`);
    });
  }, { passive: true });
  window.addEventListener("pointerover", (event) => {
    const target = event.target.closest?.("a, button, summary, [data-cursor]");
    cursor?.classList.toggle("is-active", Boolean(target));
    label?.classList.toggle("is-visible", target?.dataset.cursor === "expand");
  });
  document.documentElement.addEventListener("pointerleave", () => {
    cursor?.classList.remove("is-active");
    label?.classList.remove("is-visible");
  });
  document.documentElement.classList.add("has-custom-cursor");
}

function initMagneticButtons() {
  if (!finePointer.matches || reduceMotion.matches) return;
  document.querySelectorAll(".magnetic").forEach((button) => {
    button.addEventListener("pointermove", (event) => {
      const rect = button.getBoundingClientRect();
      button.style.setProperty("--mag-x", `${(event.clientX - rect.left - rect.width / 2) * 0.12}px`);
      button.style.setProperty("--mag-y", `${(event.clientY - rect.top - rect.height / 2) * 0.16}px`);
    });
    button.addEventListener("pointerleave", () => { button.style.setProperty("--mag-x", "0px"); button.style.setProperty("--mag-y", "0px"); });
  });
}

function initCardTilt() {
  if (!finePointer.matches || reduceMotion.matches) return;
  document.querySelectorAll("[data-tilt]").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      card.style.setProperty("--tilt-x", `${(0.5 - y) * 2.2}deg`);
      card.style.setProperty("--tilt-y", `${(x - 0.5) * 2.6}deg`);
      card.style.setProperty("--glow-x", `${x * 100}%`);
      card.style.setProperty("--glow-y", `${y * 100}%`);
    });
    card.addEventListener("pointerleave", () => { card.style.setProperty("--tilt-x", "0deg"); card.style.setProperty("--tilt-y", "0deg"); });
  });
}

export function initInteractions() {
  initNavigation();
  initProjectDisclosure();
  initMapControls();
  initScrollMotion();
  initReadingProgress();
  initCustomCursor();
  initMagneticButtons();
  initCardTilt();
}
