# Stephanie Majerowicz — Academic Website

Personal academic website of Stephanie Majerowicz, Economist at Universidad de los Andes, Bogotá.

**Live site:** https://stephanie-majerowicz.github.io

**Site backlog & to-do list:** [BACKLOG.md](BACKLOG.md)

---

## How the site works

The site is built automatically every time a file is changed and saved to this repository. You do not need any special software — you can make all routine content updates directly in your browser on GitHub.

**To edit any file in the browser:**
1. Navigate to the file in this repository
2. Click the **pencil icon** (✏️) in the top right of the file view
3. Make your changes
4. Scroll down and click **Commit changes**
5. The site will rebuild and be live at your URL within about 5 minutes

You can monitor the build progress under the [**Actions tab**](../../actions) — a green checkmark means the site is live, a red cross means something went wrong (see [If something looks broken](#if-something-looks-broken)).

---

## What's on the site and where to edit it

| Page | What it contains | File(s) to edit |
|---|---|---|
| **About** | Bio, photo, contact info | `_pages/about.md` |
| **Research** | Research project cards | One file per project in `_projects/` |
| **Publications** | Full publication list | `_bibliography/papers.bib` |
| **Impact** | Policy work, media, talks, datasets | `_pages/impact.md` |
| **Teaching** | Courses taught | One file per course in `_teachings/` |

---

## How to update specific content

### Profile photo
Replace the file at `assets/img/prof_pic.jpg` with your photo, keeping the same filename.

### CV PDF
1. Upload your CV PDF to `assets/pdf/` (e.g. `assets/pdf/majerowicz_cv.pdf`)
2. Edit `_data/socials.yml` and update the `cv_pdf:` line to match the filename you uploaded

### Bio and contact information
Edit `_pages/about.md`:
- The text below the `---` line at the bottom is your biography
- `subtitle:` is your title and department shown under your name
- `more_info:` is the contact block shown below your photo

### Add a publication
Open `_bibliography/papers.bib` and add a BibTeX entry. Example for a journal article:

```bibtex
@article{majerowicz2024,
  title     = {Your Paper Title},
  author    = {Majerowicz, Stephanie and Coauthor, Name},
  journal   = {Journal of Economics},
  year      = {2024},
  doi       = {10.xxxx/xxxxx},
  pdf       = {majerowicz2024.pdf},
  abstract  = {One paragraph abstract here.},
  selected  = {true}
}
```

Set `selected = {true}` for papers you want highlighted on the About page.

If you have a PDF of the paper, upload it to `assets/pdf/` and use the filename as the `pdf` value.

### Add a working paper or paper under review
Use `@unpublished` and add a `note` field:

```bibtex
@unpublished{majerowicz2024wp,
  title  = {Working Paper Title},
  author = {Majerowicz, Stephanie},
  year   = {2024},
  note   = {Under review at Journal of Development Economics},
  pdf    = {majerowicz2024wp.pdf}
}
```

### Add a policy report or grey literature
Use `@techreport`:

```bibtex
@techreport{majerowicz2023report,
  title       = {Report Title},
  author      = {Majerowicz, Stephanie},
  institution = {Inter-American Development Bank},
  year        = {2023},
  pdf         = {majerowicz2023report.pdf}
}
```

### Add a research project
Create a new file in `_projects/` named `your-project-title.md` with the following content:

```markdown
---
layout: page
title: Your Project Title
description: One sentence description shown on the project card.
img: assets/img/your-image.jpg
importance: 1
category: ongoing
---

Full project description goes here. You can write as much as you like
using normal text, with **bold**, _italics_, and [links](https://example.com).
```

Set `category:` to either `ongoing` or `completed`. Set `importance:` to a number — lower numbers appear first. The `img:` line is optional; remove it if you don't have an image.

### Add a course
Create a new file in `_teachings/` named `course-title.md`:

```markdown
---
layout: page
title: Course Title
description: Brief description of the course.
academic_year: 2024–2025
type: Undergraduate
importance: 1
---

Longer course description, syllabus link, or any other details.
```

---

## If something looks broken

1. **Check the Actions tab** — go to [Actions](../../actions) and open the most recent run. Error messages there usually point directly to the problem.

2. **YAML formatting errors** — the most common cause. In `.yml` files and page headers, indentation matters. Make sure you use spaces (not tabs) and that your changes follow the same pattern as the lines around them. If a value contains a colon, wrap it in quotes: `title: "Economics: A Study"`.

3. **BibTeX errors** — check for mismatched `{}` braces, missing commas between fields, or invalid characters in the entry key (use only letters, numbers, and underscores).

4. **Changes not showing up** — the build takes up to 5 minutes. If the Actions tab shows a green checkmark but the site still looks the same, try a hard refresh in your browser (`Cmd+Shift+R` on Mac, `Ctrl+Shift+R` on Windows).

---

## For developers

This site is built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme. See `CLAUDE.md` for technical setup, local development with Docker, and architecture notes.
