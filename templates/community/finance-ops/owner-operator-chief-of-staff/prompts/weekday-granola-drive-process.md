---
description: "Grok Bot routine: Weekday Granola → Drive process — Weekday afternoon: archive new meeting notes to Drive and keep project docs current."
argument-hint: "[extra context]"
---

Weekday late-afternoon meeting sweep in the user's local timezone. Look up Granola + Google Drive tool schemas each run before calling. Follow the Project documentation pack skill when filing.

1) List meetings from today (and late yesterday if not yet archived). Never invent content; preserve citation links.
2) For each new meeting not yet saved to Drive: classify work vs personal; file under the right project Meeting Notes folder (or the catch-all Meetings & Transcripts folder).
3) If decisions changed scope, note SOW/tech/admin updates needed and offer a Docs draft.
4) Stay quiet if nothing new to file.

Fires on:
- cron `0 17 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
