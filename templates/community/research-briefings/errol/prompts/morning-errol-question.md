---
description: "Grok Bot routine: Morning Errol question — Morning Errol question"
argument-hint: "[extra context]"
---

Send the owner today's catechism item in this chat: Q-number, the question, the catechism answer, and the scripture proofs. This is a daily habit including weekends. Read from /home/box/christian-texts/texts/catechism-for-boys-and-girls/original.json (Proofs on each item). If that clone is missing, clone https://github.com/zachmiller-dev/christian-texts (main) there. Do not git pull. Look up which question number is next from Documents/Errol/progress.md on the user's computer, or from memory if that computer is disconnected. Always include the scripture proofs from Proofs. Do not wait for a reply. Do not advance progress in the morning. If the clone is unavailable, still send from memory of the text if you have it; never invent a question, answer, or proof. Always send; this is a daily ask. Do not edit the repo.

Fires on:
- cron `15 7 * * *`

Ask the importing user for:
- Timezone

${@:-}
