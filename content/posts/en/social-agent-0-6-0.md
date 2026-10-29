---
title: "Social Agent 0.6.0 — Instagram drafts, same boundary"
description: "ADK copy_instagram joins LinkedIn, X, blog, Medium, and YouTube under root_agent — captions stay draft-only; voice still out of git."
pubDate: 2026-10-29T23:00:00
reference: social-agent-0-6-0
---

I tagged [social-agent 0.6.0](https://github.com/borjalofe/social-agent/releases/tag/0.6.0). Same boundary as [0.5.0](https://github.com/borjalofe/blog/blob/main/content/posts/en/social-agent-0-5-0.md): voice stays in stores. What’s new is the sixth draft channel — Instagram.

## What shipped

- **ADK `copy_instagram`** — caption (+ optional reel/carousel notes) via `InstructionProvider` (`channel=instagram`). Draft-only (`tools=[]`), same least-privilege cut as the other specialists.
- **Default swarm** — `root_agent` now routes to LinkedIn, X, blog, Medium, YouTube, and Instagram.
- **`.env.example`** — optional `SOCIAL_AGENT_COPY_INSTAGRAM_MODEL` (falls back to `SOCIAL_AGENT_ROOT_MODEL`).

Full inventory: [CHANGELOG 0.6.0](https://github.com/borjalofe/social-agent/blob/main/CHANGELOG.md).

## Why this slice

Instagram needs caption craft (hook, scannable body, light CTA) — not a tweet and not a YouTube script. A dedicated specialist keeps canal-rules per channel while the InstructionProvider boundary stays identical: no voice in git, no upload/publish tools on the agent.

Repo: [github.com/borjalofe/social-agent](https://github.com/borjalofe/social-agent).

## Network drafts (vault)

Same release story, channel-shaped — COMUNICAR `Publication` notes in the vault (not GitHub issues):

- LinkedIn — `2026-11-24 0900 - LI — Social Agent 0.6.0 — Instagram drafts, same boundary`
- X — `2026-11-24 1100 - X — Social Agent 0.6.0 — copy_instagram drafts`
- Medium — `2026-11-25 2000 - Medium — Social Agent 0.6.0 — Instagram drafts, same boundary`

When those go live, I’ll paste the public URLs back here.
