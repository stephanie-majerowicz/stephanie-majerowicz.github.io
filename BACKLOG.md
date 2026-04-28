# Backlog

## In progress

_(nothing actively in progress)_

---

## Up next — one-time technical setup (before going live)

- [ ] Confirm GitHub Pages is set to deploy from **`gh-pages` branch** (Settings → Pages → Source → "Deploy from a branch" → `gh-pages` / `/(root)`)
- [x] Write new README.md for Stephanie — owner-facing guide covering: page map, how to edit each content type via browser, how to track deploy status, what to do if something looks broken
  - Explicitly explain the GitHub browser edit flow: navigate to a file → click the pencil icon → make changes → commit to `main` → site rebuilds automatically in ~5 minutes
  - Note: README edits do not trigger a deploy, so it's safe to iterate on

---

## Up next — needs Stephanie's content

Site identity and configuration:

- [ ] Update `_data/socials.yml` — real email, CV PDF path, Google Scholar ID
- [x] Upload Stephanie's profile photo as `assets/img/prof_pic.jpg`
- [x] Upload Stephanie's CV PDF to `assets/pdf/` and set path in `_pages/cv.md`

About page:

- [x] Update `_pages/about.md` subtitle — "Assistant Professor, School of Government, Universidad de los Andes"
- [ ] Rewrite `_pages/about.md` body — bio text (2–4 paragraphs)
- [ ] Fill in `profile.more_info` — office number and address

Publications:

- [ ] Add Stephanie's publications to `_bibliography/papers.bib`
- [ ] Add working papers and submitted work as `@unpublished` entries with `note = {Under review at ...}`
- [ ] Add grey literature / policy reports as `@techreport` entries with `institution` field
- [ ] Update `_data/coauthors.yml` with Stephanie's collaborators
- [ ] Update `_data/venues.yml` with relevant economics journal abbreviations
- [ ] Customize `_pages/publications.md` to show separate sections (published / under review / working papers) using filtered bibliography query calls

Research Projects:

- [ ] Create `_projects/` files for Stephanie's actual research projects (category: `ongoing` or `completed`)
- [ ] Source or create images for project cards (or omit `img:` for text-only cards)

Impact page:

- [ ] Populate `_pages/impact.md` — policy briefs, media mentions, datasets, talks

Teaching page:

- [ ] Create course entries in `_teachings/` — one `.md` file per course with title, description, academic year, type
- [ ] Decide what to show per course: syllabus PDF link, semester listing, brief description, or full materials page
- [ ] Upload any syllabus PDFs to `assets/pdf/`

CV data:

- [ ] Update `_data/cv.yml` — replace Einstein placeholder with Stephanie's CV data

---

## Later — break down when we get here

- Customize publications page visual styling (grouping, badge display, author highlight color)
- Decide on and implement a consistent color theme (`_sass/_themes.scss`)
- Set up Google Scholar citation auto-update workflow (currently configured for Einstein's ID)
- Add structured data / Open Graph metadata (`serve_og_meta`, `serve_schema_org` in `_config.yml`)
- SEO configuration (`robots.txt`, Google Search Console verification)
- Review and update `_data/cv.yml` to sync with PDF CV

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
