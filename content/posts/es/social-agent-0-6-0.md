---
title: "Social Agent 0.6.0 — borradores Instagram, misma frontera"
description: "ADK copy_instagram se une a LinkedIn, X, blog, Medium y YouTube bajo root_agent — captions solo en borrador; la voz sigue fuera del git."
pubDate: 2026-10-29T23:00:00
reference: social-agent-0-6-0
---

He etiquetado [social-agent 0.6.0](https://github.com/borjalofe/social-agent/releases/tag/0.6.0). Misma frontera que el [0.5.0](https://github.com/borjalofe/blog/blob/main/content/posts/es/social-agent-0-5-0.md): la voz vive en stores. Lo nuevo es el sexto canal de borrador — Instagram.

## Qué ha salido

- **ADK `copy_instagram`** — caption (+ notas opcionales de reel/carrusel) vía `InstructionProvider` (`channel=instagram`). Solo redacta (`tools=[]`), el mismo corte de mínimo privilegio que el resto.
- **Enjambre por defecto** — `root_agent` enruta a LinkedIn, X, blog, Medium, YouTube e Instagram.
- **`.env.example`** — `SOCIAL_AGENT_COPY_INSTAGRAM_MODEL` opcional (cae a `SOCIAL_AGENT_ROOT_MODEL`).

Inventario completo: [CHANGELOG 0.6.0](https://github.com/borjalofe/social-agent/blob/main/CHANGELOG.md).

## Por qué este corte

Instagram pide craft de caption (hook, cuerpo escaneable, CTA ligero) — no un tweet ni un guion de YouTube. Un especialista propio mantiene canal-rules por canal; la frontera del InstructionProvider no cambia: voz fuera del git, sin tools de upload/publicación en el agente.

Repo: [github.com/borjalofe/social-agent](https://github.com/borjalofe/social-agent).

## Borradores de redes (vault)

La misma historia, recortada por canal — notas `Publication` en COMUNICAR (vault; no issues de GitHub):

- LinkedIn — `2026-11-24 0900 - LI — Social Agent 0.6.0 — Instagram drafts, same boundary`
- X — `2026-11-24 1100 - X — Social Agent 0.6.0 — copy_instagram drafts`
- Medium — `2026-11-25 2000 - Medium — Social Agent 0.6.0 — Instagram drafts, same boundary`

Cuando salgan en público, pegaré aquí las URLs.
