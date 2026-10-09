---
description: "Grok Bot routine: DataBye vigilancia respuestas — Vigila respuestas al lote DataBye; avisa y propone borrador si piden URL o DNI."
argument-hint: "[extra context]"
---

Laborables 9:32. Solo lista de seguimiento del lote. Prioridad si piden URL o DNI u otros datos. Ofrece borrador (URL no obligatoria; DNI solo con Sí). Sin novedad: silencio.

Fires on:
- cron `CRON_TZ=Europe/Madrid 32 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
