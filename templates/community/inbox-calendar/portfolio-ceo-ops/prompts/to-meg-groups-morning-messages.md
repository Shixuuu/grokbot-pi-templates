---
description: "Grok Bot routine: Company Lists morning digest — Every morning: company Lists digest for client requests — or quiet."
argument-hint: "[extra context]"
---

Morning: WhatsApp Web → Lists filter → every List whose name starts with the holding prefix. Summarize overnight client activity (revision asks, new messages) once to the CEO, or stay quiet if nothing. Never scan full inbox. Never send WhatsApp.

Fires on:
- cron `0 9 * * *`

Ask the importing user for:
- Timezone

${@:-}
