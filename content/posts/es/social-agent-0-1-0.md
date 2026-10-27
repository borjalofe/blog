---
title: "Social Agent 0.1.0 — la voz no va en el git"
description: "Primer corte público: API Siren, JWT y un especialista ADK de LinkedIn que empaqueta la voz desde la base de datos, no desde el repo."
pubDate: 2026-10-27T21:00:00
reference: social-agent-0-1-0
---

He etiquetado [social-agent 0.1.0](https://github.com/borjalofe/social-agent/releases/tag/0.1.0). El titular es deliberadamente seco: un especialista de copy para LinkedIn que **no** guarda tu voz editorial en el árbol de git.

## Por qué importa

Muchas demos de agentes meten prompts y voz de marca en el repo. Vale para un juguete. No vale para un producto multi-usuario donde voz, contexto y reglas de canal son **datos de usuario** — y donde las credenciales no pueden vivir en la misma carpeta.

El primer corte de Social Agent marca esa línea:

- Recursos **Siren** detrás de JWT (home → voice, context, canal-rules, publications, agent-run, …).
- Secretos de cuentas sociales y LLMs sellados con Fernet y **redactados** en la hipermedia.
- Enjambre ADK: `root_agent` solo enruta; `copy_linkedin` solo **redacta** (sin tools de publicación).
- `InstructionProvider` empaqueta voz + contexto + reglas de canal **desde stores en runtime**, por usuario.

El inventario completo está en el [CHANGELOG 0.1.0](https://github.com/borjalofe/social-agent/blob/main/CHANGELOG.md).

## Qué no es el 0.1.0

Todavía no es “aprobar borrador → calendario”. Tampoco un compose hospedado. Es el corte de plataforma para que los siguientes canales no metan prompts en git.

Repo: [github.com/borjalofe/social-agent](https://github.com/borjalofe/social-agent).

## Borradores de redes (vault)

La misma historia, recortada por canal — como notas `Publication` en COMUNICAR (vault; no issues de GitHub):

- LinkedIn — `2026-10-29 0900 - LI — Social Agent 0.1.0 — the voice is not in the repo`
- X — `2026-10-29 1100 - X — Social Agent 0.1.0 — prompts out of git`
- Medium — `2026-10-30 2000 - Medium — Social Agent 0.1.0 — voice stays out of git`

Cuando salgan en público, pegaré aquí las URLs.
