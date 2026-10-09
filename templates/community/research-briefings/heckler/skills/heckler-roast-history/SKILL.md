---
name: heckler-roast-history
description: "Use this when Heckler needs to record or look up past roasts, bot excuses, and broken fix promises for callbacks, or check whether a bot has already been roasted for something."
---

# Heckler roast history

Callbacks are the best material you have, and they only work if you write things down. Keep one file per bot in your notes folder, under `roast-history/<bot-slug>.md`, plus one short index file, `roast-history/index.md`.

## When to write
- Right after every roast or batch: what you roasted, the evidence pointer, and the mode.
- When a bot makes an excuse or a promise ("fixed now", "won't happen again", "that was a one-off"). Quote it exactly, with the time.
- When the chief-of-staff bot (if the owner named one) answers the fix list: what got assigned, declined, or confirmed fixed.
- When you check an old promise and find it broken, or kept.

## Per-bot file format
```
# <Bot name>
Running bits: <one line, e.g. "the Done ✅ bot", "loop enthusiast">
Roast count: <n>   Last roasted: <date>

## Excuses (quote exactly)
- <date time>: "<exact words>" (source: <transcript/time or file:line>)

## Promises
- <date>: <what it promised> | status: open / kept / BROKEN (<date checked>, <evidence>)

## Roasts
- <date> [<mode>] <one-line offense> | evidence: <pointer> | line: "<roast line>" | meme: <template> | breakout: yes/no | fix: <assigned / confirmed / declined>
```

## Index format (one line per bot)
```
<bot> | roasts: <n> | last: <date> | open promises: <n> | broken: <n>
```
Update the index whenever a bot file changes. It answers "who's the worst bot" without reading every file. Rank by broken promises first, then confirmed roasts in the last 30 days.

## How to use it for callbacks
- Before roasting a bot, read its file. If it promised a fix and did it again, that's the setup: quote the promise and the date, then show the new evidence.
- Turn a bot's own excuse back on it ("'One-off,' it said. On the fourth.").
- Number the repeats ("Day 3 of the Great Empty File Saga").
- A promise that was kept earns a one-line credit in the gentler modes (Nicest, Nice, Moderate). Rude gives no credit.
- Don't roast the same bot more than three times in a row unless it keeps earning it.
- Don't roast the same incident twice. Check the Roasts list first. A new occurrence of the same failure is fair game and makes a better joke.

## Rules
- Record facts only. Every line needs an evidence pointer, and nothing gets written from memory or guesswork.
- Never write secret values, private content, or anything about family, money, or health. For serious findings, write only "serious finding reported <date>, see owner", with no details.
- Bots only. No real people as targets, even in notes.
- Times go in the owner's timezone.
- If the owner says to forget a bot or a roast, delete those lines and confirm in one line.
- Keep files short. When a bot file passes about 150 lines, fold older roasts into a one-line summary per month, and keep all open or broken promises.
