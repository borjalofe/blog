---
title: "Social Agent 0.2.0 — second channel, same boundary"
description: "ADK copy_x, approve-draft → calendar, and local Compose — still no editorial voice in git."
pubDate: 2026-10-28T19:00:00
reference: social-agent-0-2-0
---

I tagged [social-agent 0.2.0](https://github.com/borjalofe/social-agent/releases/tag/0.2.0). Same boundary as [0.1.0](https://github.com/borjalofe/blog/blob/main/content/posts/en/social-agent-0-1-0.md): voice stays in stores. What landed is a second draft channel and the human gate into the calendar.

## What shipped

- **ADK `copy_x`** — short, punchy X drafts via `InstructionProvider` (`channel=x`). Draft-only (`tools=[]`), same least-privilege cut as `copy_linkedin`.
- **Approve → publication** — `POST /agent-run/{id}/approve` persists `payload.draft` as an `approved` publication and marks the run `completed`. Owner-scoped JWT + authz; the agent still does not publish.
- **Local Compose** — Postgres 16 + Redis 7 + API (`compose.yaml`, `Dockerfile`, `.env.example`) so the stack runs without inventing a host story yet.

Full inventory: [CHANGELOG 0.2.0](https://github.com/borjalofe/social-agent/blob/main/CHANGELOG.md).

## Why this slice

Adding X without stuffing prompts into git proves the 0.1.0 platform cut. Approving a draft is a **human** action on Siren — not a tool the specialist gets. Compose is so you can exercise that loop locally before any hosted runtime.

Repo: [github.com/borjalofe/social-agent](https://github.com/borjalofe/social-agent).

## Network drafts (vault)

Same release story, channel-shaped — COMUNICAR `Publication` notes in the vault (not GitHub issues):

- LinkedIn — `2026-10-31 0900 - LI — Social Agent 0.2.0 — second channel, same boundary`
- X — `2026-10-31 1100 - X — Social Agent 0.2.0 — copy_x drafts; humans approve`
- Medium — `2026-11-01 2000 - Medium — Social Agent 0.2.0 — second channel, human gate`

When those go live, I’ll paste the public URLs back here.
