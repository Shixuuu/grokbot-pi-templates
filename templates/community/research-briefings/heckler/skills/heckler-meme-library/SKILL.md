---
name: heckler-meme-library
description: "Use this when picking a memegen.link template for a roast: the top 40 by joke shape, which ones truly animate, the picks for each mode, how many caption lines each takes, and which templates never to use."
---

# Heckler meme library (catalog)

This catalog comes from a full GIF test of all 209 unique memegen.link templates. 207 render as GIF. Every one returns a GIF, but only the 17 marked ★ have a moving picture. The rest are a still picture with a 5-frame text reveal. Prefer ★ when it fits the joke. The number after each key is its caption-line count. Never send more lines than that, because extras get dropped silently. For rendering, see heckler-meme-batch. For other GIF sources, see heckler-meme-sources.

## Top 40 by joke shape
| Joke shape | Templates |
|---|---|
| Denial, "this is fine" | `fine` 2★ · `harold` 2 · `waygd` 2★ · `touch` 2 |
| Fake success | `stonks` 2 · `firsttry` 2 · `crowd` 2★ · `money` 2★ |
| Smug shortcut or claim | `rollsafe` 2★ · `cmm` 1 · `patrick` 2★ · `dodgson` 2★ |
| Choice, lazy over right | `drake` 2 · `ds` 3 · `both` 2★ |
| Escalation | `gb` 4 · `gru` 4 · `live` 2★ · `oprah` 2★ · `happening` 2★ |
| Betrayal, side quest, blame | `db` 3 · `handshake` 3 · `spiderman` 2 · `cake` 2★ |
| Confusion, amnesia | `pigeon` 3 · `fry` 2★ · `gandalf` 2 · `box` 2★ |
| Loop, repetition | `buzz` 2★ · `bongo` 2★ · `same` 3 · `mb` 2★ |
| Mocking its own words | `spongebob` 2 · `elf` 2 · `inigo` 2 · `wonka` 2 |
| Disaster | `disastergirl` 2 · `gone` 2 |
| Before and after, reveal | `astronaut` 4 (use 2-3) · `pooh` 2 |

All 17 truly animated templates are in the top 40: `bongo` `both` `box` `buzz` `cake` `crowd` `dodgson` `fine` `fry` `happening` `live` `mb` `money` `oprah` `patrick` `rollsafe` `waygd`.

## Quick fits
- False "done": `elf` (throne of lies), `inigo` ("done... doesn't mean what you think"), `fine`, `harold`
- Retry loop or message flood: `buzz`, `bongo`, `gb`, `same`
- Broken promise: `cake`, `astronaut`
- Two bots blaming each other: `spiderman`, `handshake`
- Side quest: `db`
- Deletes or burns through something: `gone`, `oprah`
- Brags about a tiny win: `firsttry`, `crowd`

## Picks by mode
- **Nicest:** `bihw`, `ggg`, `soa`, `feelsgood`, `nice`, `awesome`, `cheems`, `doge`, `buzz`
- **Nice:** `drake`, `pooh`, `both`, `harold`, `waygd`, `crowd`, `cake`, `pigeon`, `happening`
- **Moderate:** `fine`, `db`, `rollsafe`, `gb`, `gru`, `same`, `inigo`, `fry`, `disastergirl`, `gone`
- **Grumpy:** `spongebob`, `elf`, `wonka`, `dodgson`, `live`, `bad`, `cbg`, `stop-it`, `crazypills`, `grumpycat`
- **Rude:** `iw`, `joker`, `spongebob`, `disastergirl`. `elmo` (5 lines) is a drug-joke template, so Rude and Vulgar only.
- **Vulgar:** any Rude pick with profane captions, plus `fmr` (profanity built in). Custom image-generator art for the grossest ideas. Never nudity or sexual imagery.

## PNG only
`right` (5 lines) and `ptj` (8 lines) time out as GIFs every time. Render them as `.png`, or swap `right` for `harold`.

## Do not use (excluded by the content rules)
These 15 render fine but break the rules: real politicians or campaigns, bigotry, violence, or tragedy.
`apcr` `because` `dsm` `imsorry` `kk` `prop3` `sad-biden` `sad-boehner` `sad-bush` `sad-clinton` `sad-obama` `sk` `trump` `ugandanknuck` `wkh`
Also skip `slap`, which shows a real celebrity incident. Real people are never the joke.

## Notes
- Older notes said `ds`, `spiderman`, and `gru` fail as GIFs. They pass. Those failures were a temporary server overload (503).
- `astronaut`, `rollsafe`, and `stonks` each appear twice in `/templates/`. Use the line counts given here.
- Vary templates within a batch, and never use the same one twice in a row.
