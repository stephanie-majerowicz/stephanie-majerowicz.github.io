# Key Decisions

## 2026-04-26

Decisions inferred from the repository as initialized:

- **Framework: Jekyll + al-folio theme** — Static site generator chosen for zero server costs, academic-portfolio conventions (BibTeX, scholar integrations), and GitHub Pages compatibility.
- **Hosting: GitHub Pages via `gh-pages` branch** — Free, automated deployment through GitHub Actions on every push to `main`; no separate hosting account needed.
- **Deploy mechanism: build-then-push, not Pages Actions deployment** — GitHub Actions builds Jekyll and pushes the compiled `_site/` to the `gh-pages` branch via `JamesIves/github-pages-deploy-action`; GitHub Pages is configured to serve from that branch (Settings → Pages → "Deploy from branch: gh-pages"). This is distinct from the newer "GitHub Actions" Pages source option. Consequence: the `gh-pages` branch is entirely auto-generated and must never be edited manually.
- **Deploy trigger: content files only** — The deploy workflow only fires on changes to site content (`.md`, `.yml`, `.bib`, `.liquid`, `.js`, `.scss`, assets). Pushing changes to README.md, CLAUDE.md, or other documentation files does not trigger a rebuild.
- **Browser editing supported** — Stephanie can edit content files directly via GitHub's browser editor (pencil icon on any file) and commit to `main`; this triggers the deploy workflow identically to a local push. No local setup required for routine content updates like updating the bio, adding a publication, or editing a project description.
- **Local dev: Docker (not native Ruby)** — Avoids Ruby/Python version conflicts across machines; prebuilt image `amirpourmand/al-folio` pins the environment.
- **Publications: BibTeX + jekyll-scholar** — Publications rendered from `_bibliography/papers.bib` rather than hand-coded HTML; supports DOI, PDF, abstract, and badge integrations out of the box.
- **CV format: RenderCV YAML (`_data/cv.yml`)** — Human-readable YAML preferred over JSONResume (`assets/json/resume.json`); GitHub Actions auto-generates a PDF on push.
- **CV delivery: linked PDF, not a rendered web page** — CV is a downloadable PDF linked via the social icons bar, rather than a full `layout: cv` page; keeps the nav minimal.
- **Dark mode: enabled** — `enable_darkmode: true` in `_config.yml`; visitor can toggle.
- **Math rendering: enabled (MathJax)** — `enable_math: true`; relevant for an economics site.
- **Profile image: rectangular** — `image_circular: false` in `_pages/about.md`.
- **Analytics: all disabled** — No Google Analytics, Cronitor, Pirsch, or Openpanel configured yet; can be added once the site is live.
- **Comments: not configured** — Giscus repo/category fields left blank; blog-style commenting not needed for an academic portfolio.
- **URL config: corrected (2026-04-26)** — `url` set to `https://stephanie-majerowicz.github.io`, `baseurl` left empty; matches a personal GitHub Pages site.
- **Teaching: include as a nav page** — Stephanie needs a teaching page listing courses taught; the template's `_pages/teaching.md` + `_teachings/` collection will be kept and populated rather than removed.

- **Project collaborators: plain-text front matter field** — Added `collaborators:` to `_projects/*.md` front matter, rendered as *"with [name]"* on the card below the title. Chosen over a structured list (name + affiliation as separate keys) for simplicity; plain text is easy for Stephanie to edit directly in the browser. Can be restructured later if linking to collaborator profiles becomes a requirement.

---

## Template for future entries

- **Decision:** [what was decided]
- **Alternatives considered:** [what else was on the table]
- **Rationale:** [why this one]
- **Date:** YYYY-MM-DD
