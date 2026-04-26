# Key Decisions

## 2026-04-26

Decisions inferred from the repository as initialized:

- **Framework: Jekyll + al-folio theme** — Static site generator chosen for zero server costs, academic-portfolio conventions (BibTeX, scholar integrations), and GitHub Pages compatibility.
- **Hosting: GitHub Pages via `gh-pages` branch** — Free, automated deployment through GitHub Actions on every push to `main`; no separate hosting account needed.
- **Local dev: Docker (not native Ruby)** — Avoids Ruby/Python version conflicts across machines; prebuilt image `amirpourmand/al-folio` pins the environment.
- **Publications: BibTeX + jekyll-scholar** — Publications rendered from `_bibliography/papers.bib` rather than hand-coded HTML; supports DOI, PDF, abstract, and badge integrations out of the box.
- **CV format: RenderCV YAML (`_data/cv.yml`)** — Human-readable YAML preferred over JSONResume (`assets/json/resume.json`); GitHub Actions auto-generates a PDF on push.
- **CV delivery: linked PDF, not a rendered web page** — CV is a downloadable PDF linked via the social icons bar, rather than a full `layout: cv` page; keeps the nav minimal.
- **Dark mode: enabled** — `enable_darkmode: true` in `_config.yml`; visitor can toggle.
- **Math rendering: enabled (MathJax)** — `enable_math: true`; relevant for an economics site.
- **Profile image: rectangular** — `image_circular: false` in `_pages/about.md`.
- **Analytics: all disabled** — No Google Analytics, Cronitor, Pirsch, or Openpanel configured yet; can be added once the site is live.
- **Comments: not configured** — Giscus repo/category fields left blank; blog-style commenting not needed for an academic portfolio.
- **URL config: placeholder, needs fix** — `url` is currently set to `https://christianresch.github.io` and `baseurl` to `/smajerowicz.github.io`; must be corrected before deployment.
- **Teaching: include as a nav page** — Stephanie needs a teaching page listing courses taught; the template's `_pages/teaching.md` + `_teachings/` collection will be kept and populated rather than removed.

---

## Template for future entries

- **Decision:** [what was decided]
- **Alternatives considered:** [what else was on the table]
- **Rationale:** [why this one]
- **Date:** YYYY-MM-DD
