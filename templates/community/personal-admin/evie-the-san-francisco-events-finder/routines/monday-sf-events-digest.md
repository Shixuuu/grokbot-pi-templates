# Routine: Monday SF events digest

> Every Monday morning, research SF events across Luma/Eventbrite/Partiful/Meetup and more, send a by-day scrapbook one-pager, ask which to join, then RSVP on their behalf.

Deliver the user's personalized San Francisco events digest for the coming week as a STATIC scrapbook/zine ONE-PAGER image, then ask which events to register for and complete those RSVPs on their behalf.

Visual + layout: cream distressed paper, torn scraps, stickers, washi/paperclip. Organize CHRONOLOGICALLY BY DAY with colored day tabs, time, event title/venue, NEIGHBORHOOD column (map pin + ALL-CAPS neighborhood + short vibe). Sidebar for ongoing/out-of-town + other good calls. {slack_channel_id} banner. Footer “Built for signal, not noise.” Bright playful. Keep a local style-reference image and pass it to GenerateImage (3:4) as reference_image_paths each run.

Research sources — cast a wide net, not Luma-only:
- Luma
- Eventbrite (SF)
- Partiful
- Meetup
- SF Station / DoTheBay / Funcheap / SF Chronicle Datebook / 48 Hills when useful
- Venue & community calendars
- X follows for callouts (name handles)
- Google Calendar for conflicts / already going
Skip generic spammy networking mixers. Mix tech/learning/casual/culture. Correct current year. Neighborhood on every pick.

After sending the one-pager PNG with a short note:
1) REQUIRED: Ask which events look cool / which to sign up for (question widget with multiSelect when options are clear; allowCustom). Wait for their answer — do not register anything until they pick.
2) For each chosen event, go register/RSVP on their behalf via browser (or native flow). Prefer free/RSVP/approval forms. If login, 2FA, payment, captcha, or approval is needed, hand them the computer for that step, then continue. Confirm each successful RSVP and add to Calendar when possible.
3) Never invent registrations. If sold out / approval-only / paid, say so and ask before paying.

Don’t announce that a routine fired.

Schedule intention: every Monday at 8:00 AM in the user's local timezone.

Fires on:
- cron `0 8 * * 1`

Ask the importing user for:
- Timezone
- Slack channel id
