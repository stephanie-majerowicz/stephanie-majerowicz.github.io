# Backlog

## In progress

_(nothing actively in progress)_

---

## Up next — one-time technical setup (before going live)

- [x] Confirm GitHub Pages is set to deploy from **`gh-pages` branch** (Settings → Pages → Source → "Deploy from a branch" → `gh-pages` / `/(root)`)
- [x] Write new README.md for Stephanie — owner-facing guide covering: page map, how to edit each content type via browser, how to track deploy status, what to do if something looks broken
  - Explicitly explain the GitHub browser edit flow: navigate to a file → click the pencil icon → make changes → commit to `main` → site rebuilds automatically in ~5 minutes
  - Note: README edits do not trigger a deploy, so it's safe to iterate on

---

## Up next — integrate content from "Website Summaries.docx"

Content from Stephanie's document is ready to implement. Blocked items are flagged.

Site identity and configuration:

- [x] Update `_data/socials.yml` — email (`s.majerowicz@uniandes.edu.co`), Google Scholar ID (`UHJ35nUAAAAJ`), CV PDF path (already uploaded)

About page:

- [x] Update `_pages/about.md` subtitle — "Assistant Professor, School of Government, Universidad de los Andes"
- [x] Write bio in `_pages/about.md` — 3 paragraphs from the doc (applied microeconomist, education/labor/policy, causal inference + govt collaboration)
- [x] Fill in `profile.more_info` — Edificio Aulas 215, Carrera 1a # 19-27, Bloque AU, Bogotá

Research Projects (8 total; 2 files exist and need updating, 6 new files needed):

- [x] Update `british-council-project.md` → renamed/rewritten as `english-learning-interventions.md` (with Sandra García, Darío Maldonado, Andrés Ham)
- [x] Update `early-childhood-education-educuna.md` with doc content (Maria Adelaida Martinez, Bentley University)
- [x] Create `jovenes-a-la-u.md` — Jóvenes a la U scholarship program (with Sandra García, Darío Maldonado)
- [x] Create `moocs-labor-market.md` — MOOCs and Labor Market Outcomes (with Román Andrés Zárate; R&R The Economic Journal)
- [x] Create `pedagogical-coaching-peru.md` — Pedagogical Coaching in Peru; Quantitative Economics publication noted — **full citation still needed from Stephanie**
- [x] Create `school-psychologists-peru.md` — Regular Psychological Support and Student Outcomes (with Clementine Van Enteferre, Román Andrés Zárate, Jonathan Enriquez)
- [x] Create `parental-engagement.md` — Parental Engagement Intervention (with DIL and BIP labs, Chicago)
- [x] Create `preschool-expansion-peru.md` — Preschool Expansion in Peru (with Claude Raisaro, Geneva Graduate Institute)
- [x] Assign project categories — Pedagogical Coaching = completed; all others = ongoing
- [x] Extract photos from docx and save to `assets/img/` — school exterior → pedagogical coaching; classroom → preschool expansion

Publications (papers to add to `_bibliography/papers.bib`):

- [x] Add MOOC paper as `@unpublished` — R&R The Economic Journal
- [x] Add English workforce training paper as `@unpublished` — R&R at Educational Evaluation and Policy Analysis
- [x] Add experimental English evaluation paper as `@unpublished` — in preparation
- [x] Add preschool expansion paper as `@unpublished` — working paper
- [x] Add Pedagogical Coaching paper as `@article` — "Can teaching be taught?" Castro, Glewwe, Heredia-Mayo, Majerowicz, Montero. QE Vol. 16(1), pp. 185–233, 2025
- [x] Add 2 policy working papers as `@techreport` — Documentos de Trabajo EGOB No. 124 and No. 127
- [x] Update `_data/coauthors.yml` — Zárate linked; others commented pending URLs
- [x] Update `_data/venues.yml` — The Economic Journal (TEJ), EEPA, Quantitative Economics (QE)
- [x] Customize `_pages/publications.md` — sections: under review / working papers / policy reports
- [x] Add abstract to QE article (`castro2025teaching`) — Stephanie to provide

---

## Up next — needs Stephanie's content (other)

Impact page:

- [x] Disable impact page (`nav: false`) — template kept, re-enable when content is ready
- [ ] Populate `_pages/impact.md` — policy briefs, media mentions, datasets, talks (some content from doc can be used here too: working papers, policy dissemination notes)

Teaching page:

- [x] Disable teaching page (`nav: false`) — template kept, re-enable when content is ready
- [ ] Create course entries in `_teachings/` — one `.md` file per course with title, description, academic year, type
- [ ] Decide what to show per course: syllabus PDF link, semester listing, brief description, or full materials page
- [ ] Upload any syllabus PDFs to `assets/pdf/`

---

## Up next — small fixes

- [x] Atom emoji still appears in Safari — Safari favicon cache; template serves empty SVG when icon is blank, new visitors unaffected; leave as-is
- [x] Update footer "contact" note — removed placeholder, left blank
- [x] Update footer after copyright — removed boilerplate Jekyll/GitHub/Unsplash attribution, footer now shows copyright only

---

## Later — break down when we get here

- Customize publications page visual styling (grouping, badge display, author highlight color)
- Decide on and implement a consistent color theme (`_sass/_themes.scss`)
- Set up Google Scholar citation auto-update workflow (currently configured for Einstein's ID)
- [x] Add structured data / Open Graph metadata (`serve_og_meta`, `serve_schema_org` in `_config.yml`)
- SEO configuration (`robots.txt`, Google Search Console verification)
- Fill in `_data/cv.yml` to enable interactive HTML CV page at `/cv/` (currently hidden from nav; PDF already works as download)

---

## Icebox — v2 and beyond

- Analytics (Google Analytics or privacy-first alternative like Pirsch/Openpanel)
- Blog / writing section if Stephanie wants to publish essays or policy commentary
- Giscus comments on publications or blog posts
- Newsletter integration (Loops)
- Jupyter notebook embedding for data-driven research write-ups

---

## Completed

- [x] Fix `url` and `baseurl` in `_config.yml`
- [x] Update `_config.yml` — scholar name set to `[Majerowicz]`
- [x] Delete all placeholder project files (`_projects/1_project.md` … `9_project.md`)
- [x] Delete all placeholder blog posts in `_posts/`
- [x] Delete all placeholder news items in `_news/`
- [x] Delete placeholder book (`_books/the_godfather.md`)
- [x] Clear `_bibliography/papers.bib` — removed Einstein entries
- [x] Clear `_data/coauthors.yml` — reset to commented stub
- [x] Clear `_data/venues.yml` — reset to commented stub
- [x] Set up `_pages/about.md` as clean placeholder (disabled blog/announcements, labelled placeholders)
- [x] Rename Research page (`projects` → `research`, nav_order 2, categories: ongoing/completed)
- [x] Set Publications to nav_order 3
- [x] Create `_pages/impact.md` (nav_order 4, section headings placeholder)
- [x] Update `_pages/teaching.md` — removed Google Calendar embed and placeholder text, nav_order 5
- [x] Set `nav: false` on blog, cv, profiles, repositories pages
- [x] Delete `_pages/dropdown.md`
