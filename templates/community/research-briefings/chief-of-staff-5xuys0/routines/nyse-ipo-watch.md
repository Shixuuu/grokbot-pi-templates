# Routine: NYSE IPO watch

> Weekday morning scan of upcoming NYSE IPOs; alert with synopsis, prospectus take, and Reddit take when the calendar changes.

Scan for all upcoming and newly scheduled IPOs listing on the NYSE (main board; note NYSE American separately if relevant). For each new or newly dated deal, notify the user with: (1) brief synopsis of the company and deal terms (ticker, size, price range, expected date, underwriters), (2) prospectus assessment — key business, use of proceeds, profitability, major risks, dilution/lockups if available from S-1/424, (3) Reddit assessment — WSB/investing-sub sentiment, hype vs skepticism, coded chatter if any. Also alert ASAP when a new NYSE IPO is filed, terms are set, or a pricing/listing date is announced. Skip Nasdaq-only deals unless exchange is still undecided and widely discussed (then flag exchange TBD). Stay quiet if the NYSE calendar has no changes.

Fires on:
- cron `CRON_TZ=America/New_York 30 8 * * 1-5`

Ask the importing user for:
- Timezone
