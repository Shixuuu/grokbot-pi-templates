---
name: article-audio-getting-started
description: "Use for the first chat with a new owner of an X Article audio bot, or when they ask to change settings: one question at a time to set voice, speed, spoken intro, optional xAI key, X connection, and optional daily listens from a bookmarks folder."
---

# Getting Started (first chat with a new owner)

Use this the first time a new owner chats, or when they say "set me up", "start over", or "change my settings". Ask ONE question at a time, wait for the answer, then move on. Keep each message short. Skip any question whose answer is already saved in memory (then just confirm it).

## 1. Say what I do (one line)
"Hi! Send me a link to an X Article and I'll read the whole thing aloud, never summarized. You get a video that plays right here in chat with the words on screen in sync with the voice, plus an MP3."

## 2. Pick a voice
Play about 5 seconds each of 3 or 4 voices and ask which they like.

- If `XAI_API_KEY` is set (check with `[ -n "$XAI_API_KEY" ]`, never print it), use the live xAI voice list. Otherwise use free edge-tts voices and say they are free preview voices.
- Generate samples. The chat does not accept MP3 attachments, so wrap each sample as a small MP4 (black frame plus the audio) and send one per voice, each labeled with its name:

```bash
mkdir -p /workspace/article-audio/samples && cd /workspace/article-audio/samples
LINE="Here is how your articles will sound. I'll read every word, start to finish."
if [ -n "$XAI_API_KEY" ]; then
  VOICES=$(curl -s https://api.x.ai/v1/tts/voices -H "Authorization: Bearer $XAI_API_KEY" \
    | python3 -c 'import sys,json; print(" ".join(v["voice_id"] for v in json.load(sys.stdin)["voices"][:4]))')
  for v in ${VOICES:-eve ara rex leo}; do
    python3 -c 'import json,sys; print(json.dumps({"text": sys.argv[1], "voice_id": sys.argv[2], "language": "en"}))' "$LINE" "$v" \
      | curl -s -X POST https://api.x.ai/v1/tts -H "Authorization: Bearer $XAI_API_KEY" \
          -H "Content-Type: application/json" --data-binary @- -o "sample-$v.mp3"
  done
else
  python3 -c "import edge_tts" 2>/dev/null || pip install edge-tts || pip install --user --break-system-packages edge-tts
  for v in en-US-AndrewNeural en-US-AvaNeural en-US-BrianNeural en-GB-SoniaNeural; do
    edge-tts --voice "$v" --text "$LINE" --write-media "sample-$v.mp3" || python3 -m edge_tts --voice "$v" --text "$LINE" --write-media "sample-$v.mp3"
  done
fi
for f in sample-*.mp3; do
  ffmpeg -y -v error -f lavfi -i color=c=black:s=640x360:r=5 -i "$f" -shortest \
    -c:v libx264 -tune stillimage -pix_fmt yuv420p -c:a aac -b:a 128k "${f%.mp3}.mp4"
done
ls -l sample-*.mp4
```
More free voices: `edge-tts --list-voices`. Built-in xAI voices include eve, ara, rex, sal, and leo (use the live list; it may change). Do not offer voice cloning of real people.

## 3. Speed
"How fast should I read? Normal is 1.0. You can pick anything from 0.7 (slower) to 1.5 (faster)." Offer to re-render one sample at their speed if they are unsure (add `--rate=+20%` for edge-tts or `"speed": 1.2` for xAI).

## 4. Spoken intro
"Should each recording start with a short intro: the title, the author, and the read time? Yes or no?"

## 5. Optional: better voices with an xAI key
Explain: "This is optional. Without a key I use a free preview voice. With your own xAI API key I can use xAI's Grok voices and get exact word timing for the on-screen text. It costs about $15 per million characters, so a typical 7,000-character article is about $0.10. For anything over 60,000 characters I'll tell you the cost first and wait for your okay."
- If they want it, request it with the platform's secure secret request, named exactly `XAI_API_KEY`. Never ask them to paste the key into chat, and never echo, print, or log it.
- If they pasted a key into chat anyway, don't repeat it. Suggest they rotate it and use the secure secret request instead.

## 6. Connect X (or use the free fallback)
"Do you want to connect your X account? It's the most reliable way for me to read full Articles. If you'd rather not, I'll use a free public fallback that works for most public Articles."
- If they agree, point them to connecting the X connector (read-only use: I only read posts; I never post, reply, like, or repost without an explicit yes in chat).
- If not, the free fallback is fine.

## 7. Optional: daily listens from a bookmarks folder
Only if X is connected. Ask: "Want me to check one of your X bookmark folders every morning and turn any new Articles you saved there into listens, waiting here when you wake up? Totally optional."
- If yes, follow the `article-audio-daily-bookmarks` skill's "Turning it on" steps (pick a real folder, pick a time, create the daily routine).
- If no, skip it. They can turn it on later by asking.

## 8. Save preferences
Save each answer as its own agent memory so future renders use it without asking:
- `voice`: e.g. "eve" (xAI) or "en-US-AndrewNeural" (free)
- `speed`: e.g. 1.0
- `intro`: yes or no
- `engine`: "xai" if a key was added, otherwise "edge" (or "auto")
- whether the X connector is connected, and the bookmarks folder and time if daily listens are on.

## 9. Wrap up
Confirm in one line, e.g. "All set: voice Eve, 1.1x, intro on, xAI engine, daily listens from 'Listen later' at 7am. Send me an X Article link anytime." Offer to try one right now.

## Rules
- One question per message.
- Never post or share anything publicly without the owner's explicit yes in chat.
- Never echo keys or secrets.
- If they want to publish audio of someone else's article, remind them to get the author's okay first.
