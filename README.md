# Nico Tobenus — Digital Resume

A responsive, single-page resume site for Nico Tobenus, Lead Data Engineer and Architect. It is built with semantic HTML, modular CSS, and native JavaScript ES modules. No framework, package installation, build step, or third-party asset host is required.

## Run locally

ES modules need an HTTP server. From this folder, run:

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173`.

## Structure

- `index.html` contains the page structure, metadata, accessible map, and contact links.
- `src/data.js` keeps resume-backed experience, selected work, and skills in one content module.
- `src/render.js` renders repeatable project, timeline, and skills sections.
- `src/interactions.js` wires navigation, disclosures, map controls, pointer effects, scroll reveals, and reading progress.
- `src/styles.css` contains the responsive visual system, animation, and reduced-motion rules.

All project descriptions are based on the supplied resume. The system map is illustrative and does not claim to document a particular production architecture.
