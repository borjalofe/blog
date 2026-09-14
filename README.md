# blog

Canonical Markdown content for [borjalofe.com](https://borjalofe.com). Not the Astro site, not the theme, not the static artifact repo — just the writing.

## Problem

Writing posts only inside `borjalofe-web` ties content to one build stack. This repo fixes three things:

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

That runs two checks, same as Forgejo Actions (`.forgejo/workflows/validate.yml`):

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
| `reference` | string |
| `canonicalURL` | string |

Unknown fields are allowed so a richer schema can land later without breaking CI.

## Decisions

**Why a separate content repo instead of a monorepo with Astro?**

Stacks change. Astro is fine today; tomorrow it might be something else, or the same Astro site plus a React Native app reading the same copy. A standalone content repo stays flexible in every case I care about. A monorepo would couple the writing to whichever tool happens to win this year.

## Lessons

This repo was the Forgejo Actions pilot (before the site). I would not do that differently. The smoke job proved the runner; validation of real content is the useful next step — and it lives here, where the Markdown is.

## License / contact

Personal content. Questions: [borjalofe](https://github.com/borjalofe).
