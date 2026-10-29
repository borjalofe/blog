---
title: "Social Agent 0.3.0 — formato largo, misma frontera"
description: "ADK copy_blog se une a LinkedIn y X bajo root_agent — borradores Markdown; la voz sigue fuera del git."
pubDate: 2026-10-29T16:00:00
reference: social-agent-0-3-0
---

He etiquetado [social-agent 0.3.0](https://github.com/borjalofe/social-agent/releases/tag/0.3.0). Misma frontera que el [0.2.0](https://github.com/borjalofe/blog/blob/main/content/posts/es/social-agent-0-2-0.md): la voz vive en stores. Lo nuevo es el tercer canal de borrador — blog de formato largo.

## Qué ha salido

- **ADK `copy_blog`** — título / lede / cuerpo en Markdown vía `InstructionProvider` (`channel=blog`). Solo redacta (`tools=[]`), el mismo corte de mínimo privilegio que `copy_linkedin` y `copy_x`.
- **Enjambre por defecto** — `root_agent` enruta a los especialistas de LinkedIn, X y blog.
- **`.env.example`** — `SOCIAL_AGENT_COPY_BLOG_MODEL` opcional (cae a `SOCIAL_AGENT_ROOT_MODEL`).

Inventario completo: [CHANGELOG 0.3.0](https://github.com/borjalofe/social-agent/blob/main/CHANGELOG.md).

## Por qué este corte

El embudo del content-repo necesita un especialista que escriba *blog*, no un ensayo de LinkedIn ni un tweet. Añadir `copy_blog` sin meter prompts en git vuelve a validar el corte de plataforma: el craft del canal cambia; la frontera, no.

Repo: [github.com/borjalofe/social-agent](https://github.com/borjalofe/social-agent).

## Borradores de redes (vault)

La misma historia, recortada por canal — notas `Publication` en COMUNICAR (vault; no issues de GitHub):

- LinkedIn — `2026-11-05 0900 - LI — Social Agent 0.3.0 — long form, same boundary`
- X — `2026-11-05 1100 - X — Social Agent 0.3.0 — copy_blog drafts Markdown`
- Medium — `2026-11-06 2000 - Medium — Social Agent 0.3.0 — long form, same boundary`

Cuando salgan en público, pegaré aquí las URLs.
