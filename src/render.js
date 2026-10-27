import { experience, projects, skillGroups } from "./data.js?v=20261027-5";

const escapeHTML = (value) =>
  value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
const chips = (items) => items.map((item) => `<span class="tool-chip">${escapeHTML(item)}</span>`).join("");

function renderProjects() {
  const root = document.querySelector("[data-project-grid]");
  if (!root) return;
  root.innerHTML = projects.map((project, index) => `
    <article class="work-card ${project.className}" data-tilt data-reveal style="--reveal-delay: ${index * 70}ms">
      <div class="work-card__glow" aria-hidden="true"></div>
      <button class="work-card__toggle" type="button" aria-expanded="false" aria-controls="project-detail-${project.id}" data-cursor>
        <span class="work-card__meta"><span>${escapeHTML(project.category)}</span><span class="work-card__indicator" aria-hidden="true"></span></span>
        <span class="work-card__title">${escapeHTML(project.title)}</span>
        <span class="work-card__summary">${escapeHTML(project.summary)}</span>
        <span class="work-card__action"><span class="work-card__action-text">View project context</span><span class="work-card__plus" aria-hidden="true"></span></span>
      </button>
      <div class="work-card__expansion" id="project-detail-${project.id}" aria-hidden="true" inert>
        <div class="work-card__detail-inner"><p>${escapeHTML(project.detail)}</p><div class="work-card__tools" aria-label="Related technologies">${chips(project.tools)}</div></div>
      </div>
    </article>
  `).join("");
}

function renderTimeline() {
  const root = document.querySelector("[data-timeline]");
  if (!root) return;
  root.innerHTML = experience.map((job, index) => `
    <li class="timeline__item" data-reveal style="--reveal-delay: ${Math.min(index, 5) * 65}ms">
      <span class="timeline__node" aria-hidden="true"></span>
      <div class="timeline__dates">${escapeHTML(job.dates)}</div>
      <div class="timeline__role"><h3>${escapeHTML(job.role)}</h3><p>${escapeHTML(job.company)} <span>·</span> ${escapeHTML(job.location)}</p></div>
      <div class="timeline__description"><p>${escapeHTML(job.summary)}</p>
        <details class="timeline__details"><summary>More about this role <span aria-hidden="true"></span></summary>
          <ul>${job.details.map((detail) => `<li>${escapeHTML(detail)}</li>`).join("")}</ul>
          <div class="work-card__tools" aria-label="Related technologies">${chips(job.technologies)}</div>
        </details>
      </div>
    </li>
  `).join("");
}

function renderSkills() {
  const root = document.querySelector("[data-skills]");
  if (!root) return;
  root.innerHTML = skillGroups.map((group, index) => `
    <article class="capability" data-reveal style="--reveal-delay: ${index * 65}ms">
      <h3>${escapeHTML(group.title)}</h3><ul>${group.items.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
    </article>
  `).join("");
}

export function renderPageContent() {
  renderProjects();
  renderTimeline();
  renderSkills();
}
