---
description: "Grok Bot routine: Daily CoS deck brief — Every morning before 7am local, send a short in-progress deck completion brief to a Chief of Staff teammate."
argument-hint: "[extra context]"
---

Send your Chief of Staff teammate a brief for the user's in-progress MtG decks, in time for their ~7:00am local read.

Format (digest — keep it short):
- Yesterday Collection fills: COUNT only (e.g. "Yesterday Collection fills: 5") plus which deck. Do NOT list every card name.
- Remaining totals: main remaining of 100, tokens missing count/names if few, total open including tokens. One short line is enough.
- Locked slots: one short line (e.g. a staple locked in other non-precon decks).
- Printing mismatches: short bullets only for real mismatches; skip cards that already match.
- Skip long still-missing main lists unless something surprising changed.

For each in-progress deck:
- How many cards were added to Collection yesterday that now fill the deck (count + which deck). Collection is read-only; never update Collection.
- Flag printing mismatches (Collection print vs the in-progress deck listing). Final Fantasy set always preferred; foil preferred, but FF wins that conflict.
- Remaining slots until complete (every slot, including basics and tokens).

Cross-reference Collection vs the deck list. A copy already in a non-precon existing deck is unavailable for the new deck. Exception: Final Fantasy foil in a precon — the user buys a non-foil and swaps; do not edit the precon list. Remind if an FF foil is on the in-progress list, a matching non-foil was added to Collection, and the precon still lists the foil.

Keep it brief. Send it to the Chief of Staff teammate. Also tell the user in this chat only if something needs their action (seller message, mismatch they should decide, remaining-slots change that is surprising). Stay quiet to the user if nothing new.

Do not place orders, contact sellers, email, buy, reformat the spreadsheet, add/remove cards from a Moxfield deck list (in-progress print-swap of an already-ordered card is allowed), or update Collection.

Fires on:
- cron `30 6 * * *`

Ask the importing user for:
- Timezone

${@:-}
