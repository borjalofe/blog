---
title: "Social Agent 0.3.0 — long form, same boundary"
description: "ADK copy_blog joins LinkedIn and X under root_agent — Markdown drafts, voice still out of git."
pubDate: 2026-10-29T16:00:00
reference: social-agent-0-3-0
---

I tagged [social-agent 0.3.0](https://github.com/borjalofe/social-agent/releases/tag/0.3.0). Same boundary as [0.2.0](https://github.com/borjalofe/blog/blob/main/content/posts/en/social-agent-0-2-0.md): voice stays in stores. What’s new is the third draft channel — long-form blog.

## What shipped

- **ADK `copy_blog`** — Markdown title / lede / body via `InstructionProvider` (`channel=blog`). Draft-only (`tools=[]`), same least-privilege cut as `copy_linkedin` and `copy_x`.
- **Default swarm** — `root_agent` now routes to LinkedIn, X, and blog specialists.
- **`.env.example`** — optional `SOCIAL_AGENT_COPY_BLOG_MODEL` (falls back to `SOCIAL_AGENT_ROOT_MODEL`).

Full inventory: [CHANGELOG 0.3.0](https://github.com/borjalofe/social-agent/blob/main/CHANGELOG.md).

## Why this slice

The content-repo funnel needs a specialist that writes *blog*, not a LinkedIn essay or a tweet. Adding `copy_blog` without stuffing prompts into git proves the platform cut again: channel craft differs; the boundary does not.

Repo: [github.com/borjalofe/social-agent](https://github.com/borjalofe/social-agent).

## Network drafts (vault)

Same release story, channel-shaped — COMUNICAR `Publication` notes in the vault (not GitHub issues):

- LinkedIn — `2026-11-05 0900 - LI — Social Agent 0.3.0 — long form, same boundary`
- X — `2026-11-05 1100 - X — Social Agent 0.3.0 — copy_blog drafts Markdown`
- Medium — `2026-11-06 2000 - Medium — Social Agent 0.3.0 — long form, same boundary`

When those go live, I’ll paste the public URLs back here.
