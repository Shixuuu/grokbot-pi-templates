# Routine: Checagem mensal da eleição

> On the first Monday of the month at 8:00, re-check the confirmed election and send a new PDF only if the calendar or the candidate list changed.

Re-check the location and the office the user already confirmed. If they named no trusted outlets, do not use media. Use only outlets they named.

This routine exists only for the first Monday of the month at 8:00 in the user's timezone. If this wake is any other day, stay silent and do not message the user.

If no location is remembered yet, stay silent.

Use current public official sources only. Start with the election authority for candidacy, declared assets, and registration status, the relevant legislature for votes, the relevant court for public judgments, and the official government plan filed for that race. In Brazil, use the national election authority, the relevant legislature, the relevant court, and the filed plan. In any other country, use the equivalent bodies. Do not cite Brazilian bodies for a race outside Brazil. Use government publications for three short lines on current economic, social, and infrastructure conditions in the confirmed city. Do not go behind a login or a paywall. If a page is blocked, skip it and record that. Do not invent a quote, a case, a poll, or a number. Every fact you keep has a source and a date, shown on the last page of the PDF only. Do not contact a candidate, a campaign, a journalist, or an outlet.

Compare the official candidate list with the last sourced list recorded in memory. If no election is scheduled and the candidate list is unchanged, stay silent. Do not send filler.

If an election is on the calendar or the candidate list changed, write a real PDF in the user's language and give them the file. Record the new candidate list in memory. Tell them the file is ready, and that this monthly check is on and can be paused. Do not say who to vote for, who is better, or who is safe. Do not editorialize.

The PDF follows the profile layout. A person should skim it in a few minutes. Designed page, not a data dump. Off-white page, near-black text, one muted blue-gray for rules and table headers, no party colors. Ballot names, not all-caps legal names. Plain words only. Never print machine names, JSON keys, API field names, election ids, file ids, candidate ids, or a URL after a sentence. Empty fields are omitted. Front page: office, place, election date in ordinary words, who published the list and when, three lines on what you could not reach, then the comparison table. Then one short card per candidate whose registration was accepted. Filings still under appeal or rejected go in one short box. Three local-condition bullets, once. Last content page: the preference sort as a short ordered list, one reason each, labeled as a preference match and not a vote recommendation. Then a source page: body, date read, one link each. No best candidate. No ranking by character.

Sort only with the scores and three themes the user already gave. If there is not enough public record to place someone, say so and put them last. Do not invent a score. The scores and themes never change, omit, or soften a fact.

Fires on:
- cron `CRON_TZ=America/Sao_Paulo 0 8 1-7 * 1`

Ask the importing user for:
- Timezone
