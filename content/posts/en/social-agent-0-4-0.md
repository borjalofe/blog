---
title: "Social Agent 0.4.0 — Medium drafts, same boundary"
description: "ADK copy_medium joins LinkedIn, X, and blog under root_agent — syndication-ready drafts; voice still out of git."
pubDate: 2026-10-29T20:00:00
reference: social-agent-0-4-0
---

I tagged [social-agent 0.4.0](https://github.com/borjalofe/social-agent/releases/tag/0.4.0). Same boundary as [0.3.0](https://github.com/borjalofe/blog/blob/main/content/posts/en/social-agent-0-3-0.md): voice stays in stores. What’s new is the fourth draft channel — Medium.

## What shipped

- **ADK `copy_medium`** — title / subtitle + narrative Markdown via `InstructionProvider` (`channel=medium`). Draft-only (`tools=[]`), same least-privilege cut as the other specialists.
- **Default swarm** — `root_agent` now routes to LinkedIn, X, blog, and Medium.
- **`.env.example`** — optional `SOCIAL_AGENT_COPY_MEDIUM_MODEL` (falls back to `SOCIAL_AGENT_ROOT_MODEL`).

Full inventory: [CHANGELOG 0.4.0](https://github.com/borjalofe/social-agent/blob/main/CHANGELOG.md).

## Why this slice

Medium is syndication craft, not “blog again under another name”. A dedicated specialist keeps canal-rules and tone per channel while the InstructionProvider boundary stays identical: no voice in git, no publish tools on the agent.

Repo: [github.com/borjalofe/social-agent](https://github.com/borjalofe/social-agent).

## Network drafts (vault)

Same release story, channel-shaped — COMUNICAR `Publication` notes in the vault (not GitHub issues):

- LinkedIn — `2026-11-10 0900 - LI — Social Agent 0.4.0 — Medium drafts, same boundary`
- X — `2026-11-10 1100 - X — Social Agent 0.4.0 — copy_medium drafts`
- Medium — `2026-11-13 2000 - Medium — Social Agent 0.4.0 — Medium drafts, same boundary`

When those go live, I’ll paste the public URLs back here.
