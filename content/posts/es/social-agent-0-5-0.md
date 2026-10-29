---
title: "Social Agent 0.5.0 — borradores YouTube, misma frontera"
description: "ADK copy_youtube se une a LinkedIn, X, blog y Medium bajo root_agent — guiones solo en borrador; la voz sigue fuera del git."
pubDate: 2026-10-29T20:15:00
reference: social-agent-0-5-0
---

He etiquetado [social-agent 0.5.0](https://github.com/borjalofe/social-agent/releases/tag/0.5.0). Misma frontera que el [0.4.0](https://github.com/borjalofe/blog/blob/main/content/posts/es/social-agent-0-4-0.md): la voz vive en stores. Lo nuevo es el quinto canal de borrador — YouTube.

## Qué ha salido

- **ADK `copy_youtube`** — título / descripción + guion hablado (capítulos opcionales) vía `InstructionProvider` (`channel=youtube`). Solo redacta (`tools=[]`), el mismo corte de mínimo privilegio que el resto.
- **Enjambre por defecto** — `root_agent` enruta a LinkedIn, X, blog, Medium y YouTube.
- **`.env.example`** — `SOCIAL_AGENT_COPY_YOUTUBE_MODEL` opcional (cae a `SOCIAL_AGENT_ROOT_MODEL`).

Inventario completo: [CHANGELOG 0.5.0](https://github.com/borjalofe/social-agent/blob/main/CHANGELOG.md).

## Por qué este corte

YouTube pide craft de guion hablado (hook, estructura de teleprompter), no un ensayo de Medium pegado en la descripción. Un especialista propio mantiene canal-rules por canal; la frontera del InstructionProvider no cambia: voz fuera del git, sin tools de upload/publicación en el agente.

Repo: [github.com/borjalofe/social-agent](https://github.com/borjalofe/social-agent).

## Borradores de redes (vault)

La misma historia, recortada por canal — notas `Publication` en COMUNICAR (vault; no issues de GitHub):

- LinkedIn — `2026-11-17 0900 - LI — Social Agent 0.5.0 — YouTube drafts, same boundary`
- X — `2026-11-17 1100 - X — Social Agent 0.5.0 — copy_youtube drafts`
- Medium — `2026-11-18 2000 - Medium — Social Agent 0.5.0 — YouTube drafts, same boundary`

Cuando salgan en público, pegaré aquí las URLs.
