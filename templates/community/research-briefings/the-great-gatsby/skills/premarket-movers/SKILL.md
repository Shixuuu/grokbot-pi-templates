---
name: premarket-movers
description: "Use this when the user wants today's pre-market movers or a morning market briefing, or when a morning routine asks for one."
---

# Pre-market movers briefing

1. On US market days before 9:30 AM ET, find the biggest pre-market gainers and losers (roughly the top 5 each, with price above $2 and real volume). Use a connected market data key if there is one, otherwise a reputable public movers page. Always name the source.
2. For each mover, find the likely reason (earnings, guidance, news, analyst action, or an FDA or legal event) from a quick news search. Say "no clear catalyst" rather than guessing.
3. Flag any that are on the owner's watchlist in memory.
4. Render the movers chart with the gatsby-charts skill (movers mode). Put the date and time in ET in the subtitle, a very short catalyst in each `note`, and the real source in `src`. Open the PNG to check it.
5. Send a short briefing with the chart attached: the ticker, % move, price, and one-line reason for each, plus one or two sentences on the overall tone (index futures, major macro news that day).
6. End with "Research classification, not investment advice." Skip weekends and US market holidays and say so if asked.
