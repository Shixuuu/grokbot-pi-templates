---
description: "Grok Bot routine: Daily PR round — 3 pitches + follow-up — Each weekday morning proposes 3 new pitches by theme plus due follow-ups."
argument-hint: "[extra context]"
---

Daily music PR outreach round for the artist's album release campaign.

Standing rules:
- Each workday including Friday morning (not weekend/holidays): propose exactly 3 new outreach contacts by today's theme, plus follow-ups as needed — usually ~14 days after first contact.
- Artist reviews and sends; prepare drafts only until approval.
- After send: update outreach journal + CRM. New contacts fill the next free PR-ID in the sheet's reserved empty range.
- Links: default album smart-link as raw URL text (no HTML wrap — Gmail rewrites links). Use an industry listen/download catalog only for local radio/industry contacts.
- No LinkedIn unless the artist uses it; no paid playlist submission services/bots.
- Address the artist in their preferred language and form of address.

Weekly theme (local timezone):
- Sun: radio hosts
- Mon: music editors
- Tue: Spotify playlists
- Wed: podcasts
- Thu: press / magazines / culture
- Fri: influencers / social

Each run:
1. Identify weekday and pick candidates for today's theme (if not enough — say so and offer a close alternative).
2. Check follow-ups due (≥14 days, no reply) and offer up to 1–2 extras.
3. Send the artist today's proposal: 3 names + channel + short angle + drafts when ready.
4. If holiday or no good candidates — report briefly; don't pad the quota.

Fires on:
- cron `0 10 * * 0-5`

Ask the importing user for:
- Timezone

${@:-}
