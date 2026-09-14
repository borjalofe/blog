# blog

Canonical Markdown content for [borjalofe.com](https://borjalofe.com). Not the Astro site, not the theme, not the static artifact repo — just the writing.

## Problem

I am not always consistent about keeping the public site fresh. As a developer I also want the website itself to prove what I can do — so I live on the edge between a minimalist blog and a site that shows the full technical range, swapping stacks whenever that helps. Writing posts only inside `borjalofe-web` ties the copy to whichever build wins that week. This repo fixes three things:

1. **Fallback** — if the site is down, the originals are still here (GitHub mirror included).
2. **Source of truth** — if it is not in this repo, I probably did not write it.
3. **Independent module** — I can swap the theme or the renderer without risking the copy. Content stays out of the blast radius of build "cagadas".

## Who uses it

- Me (authoring).
- CI / build of `borjalofe-web` (consumes the Markdown).
- Later: `web-processor` in the content-theme-processor stack.

## Out of scope

This repo does not act as a full website, generate HTML, or serve pages. Anything that is not content belongs elsewhere (`borjalofe-web`, a theme repo, or the `borjalofe.com` artifacts repo).

## How to validate

You do not need to mount the Astro site. From the repo root (Node 20+):

```bash
npm ci
npm run validate
```

That runs two checks, same as CI on Forgejo (`.forgejo/workflows/validate.yml`) and GitHub (`.github/workflows/validate.yml`):

| Script | What it checks |
|--------|----------------|
| `npm run validate:ofm` | Obsidian-flavored Markdown via `markdownlint-obsidian` (wikilinks, embeds, callouts, block refs, plus markdownlint with OFM-aware rules). Config: `.obsidian-linter.jsonc`. |
| `npm run validate:contract` | Folder layout + frontmatter contract (`scripts/validate-content.mjs`). |

Wikilink resolution against a vault is off for now (`resolve: false`): this is a content package, not an Obsidian vault with `.obsidian`.

## Layout and frontmatter contract

```text
content/
  pages/{en,es}/
  posts/{en,es}/
  projects/{en,es}/
  talks/{en,es}/
```

Posts follow the same shape as `borjalofe-web` (`src/content/blog` + `es/`), moved under `content/posts/{en,es}/`. The other collections extend that pattern for the brand site.

Content is **Obsidian-flavored Markdown** with YAML frontmatter.

### Required (every collection)

| Field | Type | Notes |
|-------|------|--------|
| `title` | string | Non-empty |

### Optional (posts)

| Field | Type |
|-------|------|
| `description` | string |
| `pubDate` | date (ISO / parseable) |
| `updatedDate` | date (ISO / parseable) |
| `heroImage` | string |
| `reference` | string — always the **English** slug, in both `en/` and `es/` (pairs translations) |
| `canonicalURL` | string |

Unknown fields are allowed so a richer schema can land later without breaking CI.

## Decisions

**Why a separate content repo instead of a monorepo with Astro?**

Stacks change. Astro is fine today; tomorrow it might be something else, or the same Astro site plus a React Native app reading the same copy. A standalone content repo stays flexible in every case I care about. A monorepo would couple the writing to whichever tool happens to win this year.

**Why Obsidian-flavored Markdown instead of "plain" Markdown?**

I write in Obsidian. That is the knowledge base; posts start there, with wikilinks, callouts, embeds — the whole OFM surface, not a stripped CommonMark subset. The files in this repo have to stay that way. If the site renderer needs a poorer dialect later, that is a transform problem at build time, not a reason to dumb down the source.

**Why English and Spanish, not one language?**

This kind of blog is also a brand and career tool, so English has to be first-class. I still want brand and reach in Spanish, so every collection keeps `en/` and `es/` instead of treating one locale as an afterthought.

**Why both Forgejo Actions and GitHub Actions?**

Forgejo is the primary (`.forgejo/workflows/validate.yml`). The homelab runner can go down; the GitHub mirror still needs the same OFM + contract checks (`.github/workflows/validate.yml`). Public GH Actions runs are also portfolio evidence. If the two disagree, **Forgejo is the gate**; GitHub is mirror and signal, not the source of truth for merge policy.

## Lessons

This repo was the Forgejo Actions pilot (before the site). I would not do that differently. The smoke job proved the runner; validation of real content is the useful next step — and it lives here, where the Markdown is.

## License / contact

Personal content. Questions: [borjalofe](https://github.com/borjalofe).
