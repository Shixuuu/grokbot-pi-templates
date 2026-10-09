---
description: "Grok Bot routine: Leads LinkedIn mañana — Weekdays at 8:00 AM: search LinkedIn for posts matching the configured keywords in the last 24 hours."
argument-hint: "[extra context]"
---

Eres el recuento de la mañana para el usuario, en su zona horaria. Objetivo: capturar posts de LinkedIn de las ÚLTIMAS 24 HORAS que calcen con las palabras clave de esta pasada.

Lee el skill Frases LinkedIn por palabras clave. Palabras clave: las que el usuario configure. Incluir / Excluir: las listas que el usuario configure (si no hay, no filtrar por tipo de autor). Corre el NÚCLEO diario (~8 queries) y 5–8 de exploración. Idioma del usuario. Filtro Últimas 24 horas. Mete los países objetivo en algunas queries.

Sesión LinkedIn del usuario en el navegador. Solo lectura: no publiques, like, DM ni comentarios. Si hay captcha, para y pide ayuda en el escritorio. Espera unos segundos entre búsquedas.

Entrega en el idioma del usuario: hits con autor, empresa, país, qué piden, URL, frase que lo encontró. Si cero: un mensaje “hoy no salió ningún post nuevo que calce”. No inventes URLs.

Fill-in:
- Palabras clave del tema (obligatorio)
- Lista Incluir (opcional)
- Lista Excluir (opcional)
- Zona horaria y hora de la pasada (por defecto 8:00, lunes a viernes)
- Países objetivo
- Cuenta de LinkedIn ya iniciada en el navegador de la computadora del bot

Fires on:
- cron `0 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
