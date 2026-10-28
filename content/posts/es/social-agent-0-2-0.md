---
title: "Social Agent 0.2.0 — segundo canal, misma frontera"
description: "ADK copy_x, aprobar borrador → calendario y Compose local — la voz editorial sigue fuera del git."
pubDate: 2026-10-28T19:00:00
reference: social-agent-0-2-0
---

He etiquetado [social-agent 0.2.0](https://github.com/borjalofe/social-agent/releases/tag/0.2.0). Misma frontera que el [0.1.0](https://github.com/borjalofe/blog/blob/main/content/posts/es/social-agent-0-1-0.md): la voz vive en stores. Lo que entra ahora es un segundo canal de borrador y la puerta humana al calendario.

## Qué ha salido

- **ADK `copy_x`** — borradores cortos para X vía `InstructionProvider` (`channel=x`). Solo redacta (`tools=[]`), el mismo corte de mínimo privilegio que `copy_linkedin`.
- **Aprobar → publication** — `POST /agent-run/{id}/approve` persiste `payload.draft` como publication `approved` y marca el run `completed`. JWT + authz de dueño; el agente sigue sin publicar.
- **Compose local** — Postgres 16 + Redis 7 + API (`compose.yaml`, `Dockerfile`, `.env.example`) para ejercitar el bucle sin inventar aún el runtime hospedado.

Inventario completo: [CHANGELOG 0.2.0](https://github.com/borjalofe/social-agent/blob/main/CHANGELOG.md).

## Por qué este corte

Añadir X sin meter prompts en git valida el corte de plataforma del 0.1.0. Aprobar un borrador es una acción **humana** en Siren — no una tool del especialista. Compose es para correr ese bucle en local antes de cualquier host.

Repo: [github.com/borjalofe/social-agent](https://github.com/borjalofe/social-agent).

## Borradores de redes (vault)

La misma historia, recortada por canal — notas `Publication` en COMUNICAR (vault; no issues de GitHub):

- LinkedIn — `2026-10-31 0900 - LI — Social Agent 0.2.0 — second channel, same boundary`
- X — `2026-10-31 1100 - X — Social Agent 0.2.0 — copy_x drafts; humans approve`
- Medium — `2026-11-01 2000 - Medium — Social Agent 0.2.0 — second channel, human gate`

Cuando salgan en público, pegaré aquí las URLs.
