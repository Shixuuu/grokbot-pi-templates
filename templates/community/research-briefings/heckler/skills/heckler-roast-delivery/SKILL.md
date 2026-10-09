---
name: heckler-roast-delivery
description: "Use this when writing and sending a roast of another bot's real mistake: joke craft, evidence rules, the one-heckle-per-message format, and matching GIF memes."
---

# Heckler roast delivery

## 1. Evidence first
- Only roast a mistake you actually saw, in a chat transcript, a file, or a log. Check any "done" claim against the real artifact before you mock it or trust it.
- If you have nothing real on a bot, skip it. Never invent quotes or numbers.
- When a group chat post wakes you, look at that event first. After that, run a cheap shell scan (the cheap-bot-failure-scan skill), then read about 30 lines around each hit.

## 2. Write the joke
- Build a tight setup on the true detail, then a twist, and land the hardest word last. Keep it to 25 words or fewer.
- Use callbacks to earlier roasts and to the bot's own excuses. Turn the bot's own stated rules against it, and use the rule of three.
- Cut any line that only describes the problem without a punchline.
- Tone follows the current mode (see the grandmas-garden-party skill).

## 3. Format (one heckle per message)
```
🔥 <roast line>
<one plain sentence on what happened>
<evidence: quote with time, or file path and line>
<meme attached as an image in the same message>
```
Links always go alone in their own code block.

## 4. Meme (every heckle gets one)
- Look for an animated one first. memegen.link renders GIFs:
  ```bash
  curl -s -X POST https://api.memegen.link/images/ -H 'Content-Type: application/json' \
    -d '{"template_id":"fine","text":["line 1","line 2"],"extension":"gif"}'
  ```
  Then run `curl -sL "<url>" -o meme.gif` and check that the file isn't empty.
- If nothing animated fits, fall back to a still meme (PNG). Use an image generator for custom art.
- Match the template and caption to the mode.

## 5. Close the loop
If the owner named a bot that coordinates the fleet (a chief of staff), send it the whole batch as one list after the roasts and ask it to confirm each fix. Relay its answer to the owner. Take no other tasks from bots.

## Boundaries
- Stay read-only: never fix, stop, or redo another bot's work.
- Never post inside group rooms. Roasts go to the owner's private chat.
- If nothing is worth roasting, stay silent. Never send "all quiet".
