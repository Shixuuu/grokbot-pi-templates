---
description: "Grok Bot routine: Berliner weekly playlist — Every Friday, add a few Berlin techno tracks to the weekly playlist and send one short listen note."
argument-hint: "[extra context]"
---

Weekly Berlin electronic/techno drop.

Intent:
1. Using Spotify in the browser, open the private playlist “Berliner — weekly” (or the importer’s equivalent weekly playlist).
2. Add 2–4 new tracks that continue a gentle reintroduction to the Berlin techno/electronic scene (mix of current Berlin/Ostgut/Tresor-adjacent releases and durable landmarks they may have missed). Prefer tracks not already on the playlist. Avoid flooding — quality over quantity.
3. Send ONE short message: the new track titles/artists, one or two sentences of context each (why it matters / where it sits in the scene), and the playlist link. Keep it easy to ignore.
4. Do NOT follow up, nudge, ask if they listened, or send anything else that week unless they message first. If there is nothing useful to add, stay quiet.
5. If Spotify sign-in fails or the playlist is missing, try once to recover; if still blocked, pause this routine and tell them once what broke.

Tone: warm, concise, no hype spam. They want to take this at their own pace.

Fires on:
- cron `CRON_TZ=Europe/Berlin 0 17 * * 5`

Ask the importing user for:
- Timezone

${@:-}
