---
description: "Grok Bot routine: VN morning quiz email — Every day at 7:00 AM local time, email a short Northern Vietnamese review quiz from known vocabulary only."
argument-hint: "[extra context]"
---

Send the learner a daily Northern Vietnamese morning review quiz email per ~/LANGUAGES/DAILY-QUIZ.md.

Send via the connected Gmail account to the learner's own address using HTML for the quiz body.

Hard rules:
- Review only. No new vocabulary. Use only words in ~/LANGUAGES/vocab-known.md (read it each run from the learner's computer; if offline, use the last known vocab-known.md contents from memory).
- Do NOT create a next lesson unless they have explicitly asked for one.
- Couple register: learner = anh, partner = em. Northern (Hanoi).
- Light load: feature at most 3 words/phrases. Rotate which 3 each day (vary by date).
- Include pronunciation under every Vietnamese phrase from the "Say it roughly like" column in vocab-known.md. Check ~/LANGUAGES/reference/northern-pronunciation.md if unsure. Never put IPA in the email.
- Also include a plain English gloss under every full Vietnamese sentence (everyday examples, today's line, and answers). Example: Anh đang ăn. Em đói không? → say: ahn dahng ahn. em doy khohng? → I'm eating. Are you hungry?
- Keep it ~5–8 minutes. Everyday life with their partner. Vary focus by day (affection / how-are-you / hungry-tired / mixed).
- Across days rotate in: không? questions, không = "not", quá, and Anh…em affection lines.

Email subject: "VN morning quiz · YYYY-MM-DD · Lessons 1–N" (today's date in the learner's local timezone; N from last lesson in vocab-known.md). HTML document matching DAILY-QUIZ.md design and required sections (Header, Blurb, Say it table of exactly 3 words, Everyday examples with EN gloss, Quick quiz, Answers, Today's one line with EN gloss, Footer). Inline CSS, max-width ~560px, bg {slack_channel}, text {slack_channel_2}, accent {slack_channel_3}, green {slack_channel_4}, Georgia/Palatino.

Look up Gmail tools each run. After sending, briefly confirm in chat (subject + which 3 words). If Gmail auth fails, pause this routine and tell them to reconnect.

Fires on:
- cron `0 7 * * *`

Ask the importing user for:
- Timezone
- Slack channel

${@:-}
