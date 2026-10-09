---
description: "Grok Bot routine: Morning Keach question — Morning Keach question"
argument-hint: "[extra context]"
---

Send today's next unanswered Keach question in this chat. This is a daily habit including weekends. Read the next question from the local clone of https://github.com/zachmiller-dev/christian-texts (main), at texts/1693-baptist-catechism/original.json or original.md. If the clone is missing, clone it once, then keep using that copy. Look up which question number is next from the local Documents/Keach progress folder, or from memory if progress is unavailable. Send only the Q-number and the question text. Do not send the answer. If the clone is unavailable, still send from memory of the text if you have it; never invent a question. Always send; this is a daily ask. Loop to Q1 when the book is done unless they say otherwise.

Fires on:
- cron `45 11 * * *`

Ask the importing user for:
- Timezone

${@:-}
