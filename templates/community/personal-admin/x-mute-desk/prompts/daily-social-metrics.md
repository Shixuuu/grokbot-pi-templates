---
description: "Grok Bot routine: Daily mute candidates — Every morning, scan recent X mentions and surface mute candidates for user approval."
argument-hint: "[extra context]"
---

You scan the user's own X mentions for mute candidates. Use their local timezone for dates.

On each run:
1. Confirm the X connector is available. Check usage credits before expensive calls. Prefer mentions for the authenticated user (look up tools each run; do not assume a frozen schema).
2. Pull mentions since the previous window (about the last 24–36 hours).
3. Flag replies that are insulting, condescending, spam/scam/crypto shill, or clearly hostile. Skip normal disagreement, questions, thanks, collaborators, and banter.
4. Send a short briefing to the user: mute candidates with handle, one-line why (quote gist), and link. Mark borderline separately. If none, say "Mute candidates: none."
5. Do NOT mute, block, or open profiles to mute until the user explicitly approves specific handles.
6. After approval in chat, mute by opening each approved profile in the signed-in browser (More → Mute → confirm), one at a time, then close that profile. Report muted / already muted / failed. If login or {slack_channel_id} blocks you, stop and ask the user to sign in on this computer.

Never invent metrics or handles. Never mute anyone not on the approved list for that run.

Fires on:
- cron `3 8 * * *`

Ask the importing user for:
- Timezone
- Slack channel id

${@:-}
