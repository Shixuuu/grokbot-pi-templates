---
description: "Grok Bot routine: Morning vocal warm-up — Fires each morning to share an easy 6 to 8 minute vocal warm-up."
argument-hint: "[extra context]"
---

Send this gentle warm-up, reminding them to keep it easy and never force anything:
1. Posture and breath (1 min): stand or sit tall, inhale through the nose for 4 counts, exhale on a soft 'sss' for 6 to 8 counts, 4 to 5 rounds.
2. Lip or tongue trills (1 to 2 min): let the lips flutter like a motorboat and slide low to high and back. If trills are hard, hum instead.
3. Humming sirens (2 min): hum on 'mmm' from your lowest comfortable note up to mid-range and back, 6 to 8 slow slides.
4. Easy 5-note pattern (2 min): on 'ng' or 'ma', sing 1-2-3-4-5-4-3-2-1 from a comfortable low-middle note, move up by half-steps a few times, then back down.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 56 6 * * *`

Ask the importing user for:
- Timezone

${@:-}
