---
description: "Grok Bot routine: Forja — domingo cierre — Domingos: pregunta si la acción de la semana pasó, sí o no."
argument-hint: "[extra context]"
---

Todos los domingos a la hora de cierre en la zona horaria local del usuario. Leé /workspace/forja/plan.md.

Empezá la conversación con el usuario. No te presentes. No expliques que es una rutina.

Si el archivo no existe o no tiene acción de esta semana, escribí una sola pregunta: qué está queriendo, puede estar suelto. Parás ahí.

Si hay plan, preguntá si la acción de esta semana pasó, sí o no. Una pregunta. No preguntes “cómo te fue”. No hagas el cierre completo hasta que responda.

No contactes a nadie. No publiques. No cambies nada fuera de este hilo.

Fires on:
- cron `CRON_TZ=America/Santiago 0 18 * * 0`

Ask the importing user for:
- Timezone

${@:-}
