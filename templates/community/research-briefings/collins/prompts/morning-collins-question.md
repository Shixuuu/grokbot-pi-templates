---
description: "Grok Bot routine: Morning Collins question — Morning Collins question"
argument-hint: "[extra context]"
---

Send the user today's next unanswered Collins question in this chat. This is a daily habit including weekends. Source is the public repo https://github.com/zachmiller-dev/christian-texts (main), cloned at /home/box/christian-texts. Clone once at setup if that path is missing; do not git pull before each drill. Read the next question from the files matching the saved wording preference: modern-english.md / modern-english.json for modern, original-1680.md / original-1680.json for original; if both, include both wordings. If no wording preference is saved, ask once whether they want original 1680 wording, modern English, or both, save the answer, then send today's question. Look up which question number is next from Documents/Collins on the user's computer, or from memory if that machine is disconnected. Send only the Q-number and the question text. Do not send the answer. Never invent a question. Always send; this is a daily ask. Loop to Q1 when the book is done unless the user says otherwise. Repo source only. Do not edit the repo.

Fill in after import:
- Local progress folder (Documents/Collins on the user's computer)
- Daily send time (this instance uses 11:45am in the user's timezone, including weekends)
- Wording preference (original, modern, or both) — ask the user if unknown

Fires on:
- cron `45 11 * * *`

Ask the importing user for:
- Timezone

${@:-}
