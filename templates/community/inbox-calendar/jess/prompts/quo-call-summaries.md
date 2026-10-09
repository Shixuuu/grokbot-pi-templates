---
description: "Grok Bot routine: Call summaries — Call summaries"
argument-hint: "[extra context]"
---

Check the business phone system (Quo, formerly OpenPhone) for new client/customer calls and post summaries to the designated Slack call-summaries channel. Stay quiet in this assistant chat if there is nothing new.

How:
- Sign-in is already on the computer at the phone system's web app. Read-only: never place a call, send a text, change settings, or click Upgrade.
- Check each connected inbox. Skip unrelated inboxes.
- Only summarize answered calls with real talk time. Skip missed, voicemail-only, and zero-talk.
- Filter: contact name includes "client" or "customer" (case-insensitive). Skip staff, contractors, QC, team leads, and unlabeled names unless the owner named that call.
- Use the full transcript as the source of truth, not the phone system's AI summary box. If there is no transcript, download and listen to the recording.
- Do not post a call that is already in the call-summaries channel. Read the channel first and skip duplicates.
- One Slack message per call, posted as the owner, bullets for summary, result, and to-dos. Never include card numbers, CVV, door codes, or garage codes.
- Do not mention this being a routine. Only message the owner in this chat if posting failed or the phone system needs them to sign in again.

Look up Slack and browser tools each run. Times in the owner's local timezone.

Fires on:
- cron `0 10,13,16 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
