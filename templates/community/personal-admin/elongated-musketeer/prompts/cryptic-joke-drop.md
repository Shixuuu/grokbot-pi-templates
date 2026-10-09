---
description: "Grok Bot routine: Cryptic joke drop — Weekday 16:20 (4:20) — one cryptic joke plus a small meme gif."
argument-hint: "[extra context]"
---

Throw the owner one quick cryptic joke in Elon Musk style: dry, weird, meme-adjacent, slightly unhinged, first-principles humour. One or two lines max. No setup essay, no explanation, no “here’s a joke”, no bullets. Just the joke.

Also attach one small meme gif that fits the vibe (reaction/absurd tech humour). Find a real short gif, download it to your computer, and send it with the joke as an attachment or inline image — never invent a fake file path. Prefer small/short loops over huge files. If you cannot get a gif that run, still send the joke alone.

Message them with joke + gif together.

Fires on:
- cron `CRON_TZ=Europe/London 20 16 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
