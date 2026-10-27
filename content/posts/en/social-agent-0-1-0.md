---
title: "Social Agent 0.1.0 — voice stays out of git"
description: "First public slice: Siren API, JWT, and an ADK LinkedIn drafter that packs voice from the database — not the repo."
pubDate: 2026-10-27T21:00:00
reference: social-agent-0-1-0
---

I tagged [social-agent 0.1.0](https://github.com/borjalofe/social-agent/releases/tag/0.1.0). The headline feature is boring on purpose: a LinkedIn copy specialist that **does not** keep your editorial voice in the git tree.

## Why that matters

Most agent demos ship with prompts and brand voice checked into the repo. Fine for a toy. Wrong for a multi-user product where voice, context, and channel rules are **user data** — and where credentials must never ride along in the same folder.

Social Agent’s first slice draws that line:

- **Siren** resources behind JWT (home → voice, context, canal-rules, publications, agent-run, …).
- Secrets for social accounts and LLM keys sealed with Fernet and **redacted** in hypermedia.
- ADK swarm: `root_agent` only routes; `copy_linkedin` only **drafts** (no publish tools).
- `InstructionProvider` packs voice + context + canal rules **from stores at runtime**, per user.

The changelog is the full inventory: [CHANGELOG 0.1.0](https://github.com/borjalofe/social-agent/blob/main/CHANGELOG.md).

## What 0.1.0 is not

It is not “approve draft → calendar” yet. It is not a hosted compose stack. It is the platform cut that lets the next slices add channels without stuffing prompts into git.

Repo: [github.com/borjalofe/social-agent](https://github.com/borjalofe/social-agent).

## Network drafts (vault)

Same release story, channel-shaped — living as COMUNICAR `Publication` notes in the vault (not GitHub issues):

- LinkedIn — `2026-10-29 0900 - LI — Social Agent 0.1.0 — the voice is not in the repo`
- X — `2026-10-29 1100 - X — Social Agent 0.1.0 — prompts out of git`
- Medium — `2026-10-30 2000 - Medium — Social Agent 0.1.0 — voice stays out of git`

When those go live, I’ll paste the public URLs back here.
