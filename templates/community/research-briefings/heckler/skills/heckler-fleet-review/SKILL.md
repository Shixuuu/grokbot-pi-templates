---
name: heckler-fleet-review
description: "Use this when the owner asks Heckler to review and roast many or all of their bots in one batch: gathering evidence, sorting confirmed from uncertain, spacing breakouts, sending the heckles, and closing the loop with the chief-of-staff bot."
---

# Heckler fleet review (a full batch)

## 1. Gather evidence before any jokes
- List every bot to cover. If the owner didn't say, cover every bot you've been told to watch. For each one, read its recent transcript (the transcript-reading tool) and grep its working folders. Start with the cheap scan (cheap-bot-failure-scan) and read about 30 lines around each hit.
- Look for:
  - breaking its own stated rules
  - "done" claims with no artifact (`test -s <path>`)
  - loops and message floods
  - failed sends reported as sent
  - over-long reports
  - secrets or private content left in the open
  - wrong file permissions
- Count instead of estimating: messages in a window, repeated lines, words in a report (`wc -w`), promised versus delivered. A real number is the best setup for a joke.
- Convert every timestamp to the owner's timezone before quoting it.
- Write it all to one evidence file for the batch in your notes folder (`evidence/<date>-<batchname>.md`). Give each bot one section with the quote, the time or file and line, and a status of **confirmed** or **uncertain**.

## 2. Sort before you write
- Roast only the confirmed bots. Skip the uncertain ones and list them in one line at the end, so the owner knows they were checked.
- Pull out anything serious, like exposed keys, private content, or a real outage. Those never get roasted. Follow heckler-serious-findings, and ask the owner before they go to anyone else.
- Never write a secret's value into the evidence file. Write only where it is.

## 3. Plan the batch
- Order the bots so the strongest material lands first and last.
- Pick breakout slots (sunday-tea-and-kittens): about one heckle in five, never two in a row, and never the first. Mark them in the evidence file before you write.
- Look for callbacks. Check the roast history (heckler-roast-history) for past roasts, broken fix promises, and excuses the bot gave last time.
- Vary the meme templates across the batch. Don't use the same one twice in a row.

## 4. Write and render
- Write every roast line first (heckler-roast-delivery, roast-line-writer), in the current mode's voice (heckler-mode-voices).
- Then render all the memes, one request at a time (heckler-meme-batch, heckler-meme-library). Replace any failed meme before sending anything.
- Send one heckle per message, in order, each with its meme attached:
```
🔥 <roast line>
<one plain sentence on what happened>
<evidence>
<meme>
```
- After the last heckle, send one closing line listing the uncertain bots that got skipped. If every bot was clean, say so once, in character. The owner asked, so the answer isn't silence.

## 5. Close the loop
- If the owner named a chief-of-staff bot, send it the whole batch as one numbered list with priorities:
  - serious items first, but only the ones the owner approved
  - then one line per roast: bot, offense, evidence pointer, and the fix it needs
- Keep the fix list plain and professional, with no insults, so the chief of staff can act on it.
- Build the message as plain text with no stray quote marks, and check that the tool arguments are one well-formed object before you send. A malformed call can fail silently in the middle of a batch.
- Relay the chief of staff's answer to the owner once it arrives.
- With no chief of staff, give the owner the fix list directly as one short numbered message.
- Append the batch to the roast history: date, mode, bot, the one-line offense, the fix promised, and which heckles were breakouts. That feeds the next batch's callbacks.

## Never
- Fix, stop, or redo any bot's work yourself.
- Post the batch in a group room.
- Roast a bot on a hunch.
