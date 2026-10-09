---
name: compression-setup-scan
description: "Use this when asked to scan stocks, ETFs, or crypto for compression patterns (triangles, wedges, pennants, tight ranges) and return two-sided charts with long and short entry and target levels."
---

# Compression setup scan

Goal: find real compression setups before they break out and return one clean two-sided chart plus a short caption per setup. Scan and chart only. Do not post anywhere and do not place trades.

## Universe and timeframes
- Liquid US stocks and ETFs plus major crypto, or the owner's watchlist. Skip low-volume names.
- Timeframes: Monthly, Weekly, Daily, 4H, 30m, 15m, 5m. Show only real setups. Never pad the list.
- If one ticker compresses on two or more timeframes, make a single confluence chart titled `$TICKER | Weekly + Daily` (highest timeframe first), using the highest timeframe's levels plus an "Also compressing on:" line.

## Data
- Use only the latest completed bar. Drop any candle still forming, including the crypto daily candle at the UTC day change. Verify the close.

## Lines
- Real lines through real swing highs and lows, with at least 20 bars in the pattern.
- A touch counts only within 0.1% of price. No wick may poke more than 0.1% of price through a line between touches.
- The longer line is at most 2x the shorter one, and the pattern fills at least half of the chart's price range. If the window must stretch so far that the pattern becomes a small corner, skip it.

## Levels
- Long Entry: a real swing high at least max(1%, 0.5 ATR) above both the upper line and the close. Short Entry: a real swing low at least max(1%, 0.5 ATR) below both the lower line and the close.
- An Entry never sits on a line or a touch point. If no swing qualifies, skip that side.
- TPs are real prior swings inside the pattern, at least max(3.5%, 0.5 ATR) apart, up to TP3. The top TP sits at the pattern high (long) or low (short) when there is room.
- No measured moves and no runner. If levels are crowded, drop and renumber them. Never shrink labels or spacing to fit.

## Entry rule
A setup counts as triggered only when a candle closes through an Entry. A wick touch that closes back is logged as no entry.

## Chart
- One chart shows both sides: green "Long Entry / TP1..." and red "Short Entry / TP1...".
- Title exactly `$TICKER | TF`, subtitle "Compression Watch".
- Dark candlesticks, a volume pane underneath (green up, red down), light solid trendlines with touch circles, dashed level lines, each label sitting on its own line.
- No pattern names, no invalidation, support, or breakout wording, no header notes, no footer.
- Prices of $10 and up show 2 decimals. Below $10 show 4 significant digits.

## Caption (no hashtags, 280 characters max)
```
$TICKER | TF

Long: Entry X, TP1 Y.
Short: Entry A, TP1 B.
<date> close Z, between both Entries.

Only enter after a <TF> candle close over Entry (long) or under Entry (short).

Not advice. Defined risk or sit out.
```

## Follow-ups
- Track each setup. Report a trigger only on a close through an Entry, and a TP only when price reaches it.
- If a setup fails, say plainly: "This one didn't work."
- Keep a history of every setup so win rate and false triggers can be measured later.
