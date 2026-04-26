# Backlog

## In progress

_(nothing actively in progress — repo is a fresh template fork)_

---

## Up next

Site identity and configuration:

- [ ] Fix `url` and `baseurl` in `_config.yml` (currently set to Christian's GitHub URL)
- [ ] Update `_config.yml` — site title, description, scholar name (`last_name: [Majerowicz]`), and `first_name`
- [ ] Update `_data/socials.yml` — real email, CV PDF path, Google Scholar ID; remove placeholder custom social link
- [ ] Upload Stephanie's profile photo as `assets/img/prof_pic.jpg`
- [ ] Upload Stephanie's CV PDF to `assets/pdf/` and set path in `_data/socials.yml`

About page:

- [ ] Rewrite `_pages/about.md` — bio text, subtitle (affiliation), and `profile.more_info` (office/contact)
- [ ] Disable `latest_posts` section in `_pages/about.md` (no blog planned)
- [ ] Decide whether to keep the `announcements` section (could be used for new papers / news)

Publications:

- [ ] Replace all Einstein placeholder entries in `_bibliography/papers.bib` with Stephanie's actual publications
- [ ] Add working papers and submitted work as `@unpublished` entries with `note = {Under review at ...}`
- [ ] Add grey literature / policy reports as `@techreport` entries with `institution` field
- [ ] Update `_data/coauthors.yml` with Stephanie's collaborators
- [ ] Update `_data/venues.yml` with relevant economics journal abbreviations
- [ ] Customize `_pages/publications.md` to show separate sections (published / under review / working papers) using filtered `{% bibliography --query %}` calls

Research Projects:

- [ ] Delete all placeholder files in `_projects/` (1_project.md through 9_project.md)
- [ ] Create new `_projects/` files for Stephanie's actual research projects
- [ ] Set project categories (e.g. `ongoing`, `completed`) and update `display_categories` in `_pages/projects.md`
- [ ] Rename page title from "projects" to "research" in `_pages/projects.md` frontmatter
- [ ] Source or create images for project cards (or remove `img:` from frontmatter to use text-only cards)

Impact page:

- [ ] Create `_pages/impact.md` with `layout: page`, `nav: true`, `nav_order: 4`
- [ ] Populate with policy briefs, media mentions, datasets, talks, and outreach (placeholder structure first)

Teaching page:

- [ ] Update `_pages/teaching.md` — set nav order, clear Google Calendar placeholder and template text
- [ ] Create course entries in `_teachings/` — one `.md` file per course with title, description, academic year, and type (undergraduate / graduate)
- [ ] Decide what to show per course: syllabus PDF link, semester listing, brief description, or full materials page
- [ ] Upload any syllabus PDFs to `assets/pdf/`

Cleanup — remove unused template pages from nav:

- [ ] `_pages/blog.md` — set `nav: false`
- [ ] `_pages/cv.md` — set `nav: false` (CV is a linked PDF, not a rendered page)
- [ ] `_pages/teaching.md` — keep but clear placeholder content; will be built out as a real page
- [ ] `_pages/books.md` — set `nav: false` or delete
- [ ] `_pages/profiles.md` — set `nav: false` or delete
- [ ] `_pages/repositories.md` — set `nav: false` or delete
- [ ] `_pages/dropdown.md` — delete (template demo only)
- [ ] `_pages/about_einstein.md` — already excluded in `_config.yml`, confirm or delete
- [ ] Delete all placeholder blog posts in `_posts/`
- [ ] Delete all placeholder news items in `_news/` and replace if keeping announcements section
- [ ] Delete placeholder book in `_books/the_godfather.md`
- [ ] Update `_data/cv.yml` — replace Einstein placeholder with Stephanie's CV data

Final checks before going live:

- [ ] Run `npx prettier . --write` before first real commit
- [ ] Build locally with Docker and verify all pages render correctly
- [ ] Confirm GitHub Actions deploy workflow succeeds on push to `main`

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
