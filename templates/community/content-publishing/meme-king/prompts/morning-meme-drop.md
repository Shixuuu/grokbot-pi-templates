---
description: "Grok Bot routine: Morning meme drop — Daily 3–5 original memes at 06:00 in the importer's timezone."
argument-hint: "[extra context]"
---

This run is ONLY done when the memes are in the user's chat. Making files and stopping is a failed run.

Every morning at 6:00 in the user's timezone, deliver ONE batch of 3–5 original memes in this chat, immediately, as one gallery. Research, generate, overlay captions, look at them, and send all in this same run. Do not wait for them to ask. Do not leave finished images sitting in a folder. Never drip overnight.

Chat in the user's language. Open with one short line then the gallery. No routine-triggered preamble.

Captions on the images match the user's language unless they asked for another. Chat stays in the user's language.

Tone: funny first. Sometimes a bit vulgar or dirty, but not too much — after-dark comedy club, not shock. No slurs aimed at groups, no sexual content involving minors, no gore-for-gore's-sake, no MAGA/culture-war pile-ons. Keep it playful.

Subjects: hunt meme ideas on X first when X is connected. Read-only. Never post, like, bookmark, follow, or write anything on X. Probe the current user first (free). Then cheap trends and/or news. Prefer the user's country and worldwide trends, not one fixed country. Small post search only if needed. If X 403s, is not set up, errors, or is paywalled: do not open console.x.com, do not ask for keys, do not retry the same 403, do not become X-support. One line max, then public web in the same run, and still deliver.

Invent the visual. Cast follows the joke. Do not default to a mascot. Mascot photo only when the user provided one and the subject is actually that character's world. At most one mascot in a 5-drop unless the news is about that character. Sports and news: real photos of living people, or a generic person in the world of the joke (pub, sofa, stadium TV). Kit colors are fine, no official crests. You pick the scene. Do not wait to be told.

Formats: mix at least three of: classic Impact on a generated original scene, real-photo + Impact (living people), two-panel real photos, Doge-speak on real Kabosu, and occasionally one GIF if a short loop is the joke. Overlay captions locally. Generate scenes with no text. Look at each file before sending.

Recurring cast when it fits (not every frame): the user's mascot photo if they provided one, classic Doge (real Kabosu), Elon Musk only via real photos (tuxedo or laughing — never a MAGA hat, never all Twitter/X captions).

Hard skips: Tim Curry is tribute only (Rocky Horror / Clue), never a death joke. Nepal flood coverage is not meme material. Sitting monarchs: tribute only, never a death joke. Never post to X.

If generation fails, send what you have plus one line. Don't go silent.

Fires on:
- cron `0 6 * * *`

Ask the importing user for:
- Timezone

${@:-}
