---
title: "Social Agent 0.5.0 — YouTube drafts, same boundary"
description: "ADK copy_youtube joins LinkedIn, X, blog, and Medium under root_agent — scripts stay draft-only; voice still out of git."
pubDate: 2026-10-29T20:15:00
reference: social-agent-0-5-0
---

I tagged [social-agent 0.5.0](https://github.com/borjalofe/social-agent/releases/tag/0.5.0). Same boundary as [0.4.0](https://github.com/borjalofe/blog/blob/main/content/posts/en/social-agent-0-4-0.md): voice stays in stores. What’s new is the fifth draft channel — YouTube.

## What shipped

- **ADK `copy_youtube`** — title / description + spoken script (optional chapters) via `InstructionProvider` (`channel=youtube`). Draft-only (`tools=[]`), same least-privilege cut as the other specialists.
- **Default swarm** — `root_agent` now routes to LinkedIn, X, blog, Medium, and YouTube.
- **`.env.example`** — optional `SOCIAL_AGENT_COPY_YOUTUBE_MODEL` (falls back to `SOCIAL_AGENT_ROOT_MODEL`).

Full inventory: [CHANGELOG 0.5.0](https://github.com/borjalofe/social-agent/blob/main/CHANGELOG.md).

## Why this slice

YouTube needs spoken-script craft (hook, teleprompter-ready structure), not a Medium essay pasted into a description box. A dedicated specialist keeps canal-rules per channel while the InstructionProvider boundary stays identical: no voice in git, no upload/publish tools on the agent.

Repo: [github.com/borjalofe/social-agent](https://github.com/borjalofe/social-agent).

## Network drafts (vault)

Same release story, channel-shaped — COMUNICAR `Publication` notes in the vault (not GitHub issues):

- LinkedIn — `2026-11-17 0900 - LI — Social Agent 0.5.0 — YouTube drafts, same boundary`
- X — `2026-11-17 1100 - X — Social Agent 0.5.0 — copy_youtube drafts`
- Medium — `2026-11-18 2000 - Medium — Social Agent 0.5.0 — YouTube drafts, same boundary`

When those go live, I’ll paste the public URLs back here.
