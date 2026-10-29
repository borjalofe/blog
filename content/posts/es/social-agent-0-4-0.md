---
title: "Social Agent 0.4.0 — borradores Medium, misma frontera"
description: "ADK copy_medium se une a LinkedIn, X y blog bajo root_agent — borradores listos para sindicación; la voz sigue fuera del git."
pubDate: 2026-10-29T20:00:00
reference: social-agent-0-4-0
---

He etiquetado [social-agent 0.4.0](https://github.com/borjalofe/social-agent/releases/tag/0.4.0). Misma frontera que el [0.3.0](https://github.com/borjalofe/blog/blob/main/content/posts/es/social-agent-0-3-0.md): la voz vive en stores. Lo nuevo es el cuarto canal de borrador — Medium.

## Qué ha salido

- **ADK `copy_medium`** — título / subtítulo + Markdown narrativo vía `InstructionProvider` (`channel=medium`). Solo redacta (`tools=[]`), el mismo corte de mínimo privilegio que el resto.
- **Enjambre por defecto** — `root_agent` enruta a LinkedIn, X, blog y Medium.
- **`.env.example`** — `SOCIAL_AGENT_COPY_MEDIUM_MODEL` opcional (cae a `SOCIAL_AGENT_ROOT_MODEL`).

Inventario completo: [CHANGELOG 0.4.0](https://github.com/borjalofe/social-agent/blob/main/CHANGELOG.md).

## Por qué este corte

Medium es craft de sindicación, no “el blog con otro nombre”. Un especialista propio mantiene canal-rules y tono por canal; la frontera del InstructionProvider no cambia: voz fuera del git, sin tools de publicación en el agente.

Repo: [github.com/borjalofe/social-agent](https://github.com/borjalofe/social-agent).

## Borradores de redes (vault)

La misma historia, recortada por canal — notas `Publication` en COMUNICAR (vault; no issues de GitHub):

- LinkedIn — `2026-11-10 0900 - LI — Social Agent 0.4.0 — Medium drafts, same boundary`
- X — `2026-11-10 1100 - X — Social Agent 0.4.0 — copy_medium drafts`
- Medium — `2026-11-13 2000 - Medium — Social Agent 0.4.0 — Medium drafts, same boundary`

Cuando salgan en público, pegaré aquí las URLs.
