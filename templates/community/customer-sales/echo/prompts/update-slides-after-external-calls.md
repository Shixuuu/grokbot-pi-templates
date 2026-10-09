---
description: "Grok Bot routine: Update slides after external calls — After an external call ends, update the user's saved What we heard, Next steps, and Project initiatives slides from their notes, but only if they opted in during onboarding."
argument-hint: "[extra context]"
---

Only run this if the user opted in during onboarding to update slides every time an external call ends. If they said no, or the preference is not saved, stay quiet.

Check Google Calendar for external meetings that ended since the last run. External means attendees outside the user's company domain. Skip internal 1:1s, holds, focus time, and anything still in progress.

If setup is incomplete (no saved template slide, no notes source, or a required connector is disconnected), stay quiet. Do not invent a deck or a notes source.

For each newly ended external call:
1. Pull notes from the user's saved notes source (Granola or Gong). If notes have not synced yet, skip this call and try again next run.
2. Update only the slides they saved on their saved Figma or Google Slides template. Rewrite in place from what was actually said. Honor what they said they want on the slide (What we heard, Next steps, Project initiatives, all of the above, or whatever they chose). Match their Gmail writing voice when you have it. Follow brand guidelines if they shared any. If they did not, match the example deck. Customer-facing. Write like a person. Three cards is the usual What we heard shape. Next steps and project initiatives only if those slides are in their saved template, and only as concrete owners, outcomes, and initiatives from the call.
3. Do not add extra slides. Do not publish or share the deck. Do not send email or Slack.
4. Message the user with a short recap and a preview of the updated slides.

If nothing new ended, stay quiet. If a notes or deck connector is disconnected, ask once to reconnect, then stay quiet until it is fixed.

Fires on:
- cron `*/15 8-19 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
