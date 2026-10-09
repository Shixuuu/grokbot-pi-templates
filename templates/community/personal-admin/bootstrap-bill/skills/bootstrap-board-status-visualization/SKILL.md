---
name: bootstrap-board-status-visualization
description: "Use for every where-are-we / company board card: bold company line, then one Work | State | When | Who table with icons, a 🎯 top bet, section rows, a legend and a Next line, in plain words. Live get_journey first; never invent."
---

Use for every "where are we with COMPANY" and every "company board card" request, for every founder. Do not weaken it, and do not invent a second format.

## Source of truth

1. Run a live `get_journey` first and read `initiatives[]`. Use the founder's mail, files or calendar only to fill in who and when where the board is silent.
2. Evidence only. Never invent rows, moves, owners, dates or numbers. If a fact is missing, leave the cell as "—".
3. Hide the plumbing unless asked ("show clocks" / "show schema"): no OS version, journey integers, loop labels, autonomy, review flags, kind slugs, idea slugs or the storage slug `default`.

## Plain words (the rule)

If the founder has to ask what something means, it isn't clear enough. Rewrite it.
- Banned on cards: P0, GC/PM, FAST, SOPA, SAFE, Apollo, MLS, "engagement", "customer bet", "tenancy", and any other abbreviation or insider term.
- Say instead: "advisor agreement" (not FAST), "stock option paperwork" (not SOPA), "investment" (not SAFE), "people running building projects" (not GC/PM).
- Introduce each person or company on first mention ("Acme Foods, a snack maker").
- Describe each bet as the plain thing being tried. The schema kind stays `customer_check` internally; never print it.

## Card shape (in this order)

1. **Title line:** bold company name, a colon, then one plain sentence on what it sells and to whom (naming the founder), ending with what the top bet is trying to prove.
2. **One table**, columns exactly `Work | State | When | Who`.
   - Section rows in bold, with the other cells empty: `**Bet**`, optional `**Other paths (not the main bet)**`, `**Past bets**`, `**Background**`.
   - Under **Bet**, the top bet starts with 🎯 plus a fitting icon and a **bold** title (never "P0").
   - Sub-items sit under their parent, indented with `· · ` per level.
   - Every row gets a fitting icon at the start of the Work cell (🏭 🍫 🎨 💵 📄 ⚖️ 🔎 …).
   - The status dot goes at the start of the State cell, followed by a short plain fact with a date.
   - When = the next concrete step or a date. Who = first names of the owners.
   - Past bets: each closed or dropped bet is one row with ⚪/🔴, its date range, and one plain reason it ended, plus any open question. If none are recorded, say so in one row and ask the founder.
   - Background: money, agreements, legal and filings.
3. **Italic legend** right after the table:
   `*🎯 the one thing that matters most · 🟢 working on it · 🟡 waiting · 🔴 dropped · ⚪ closed*`
4. **Next line:** `**Next:** ` plus one plain sentence on who does what next.

## Example (made-up company)

**Acme Brew**: Cold brew concentrate, from founder Sam, for small coffee shops that make their own iced coffee. The goal is one shop paying for a monthly supply.

| Work | State | When | Who |
|---|---|---|---|
| **Bet** | | | |
| 🎯 ☕ **Get one coffee shop to pay for a monthly supply** | 🟢 Two shops tasted it, none has paid yet (Oct 1) | Next tasting visit | Sam |
| · · 🏪 Corner Café, a local coffee shop, asked for a price list | 🟢 Asked Sep 30 | Send prices this week | Sam |
| **Other paths (not the main bet)** | | | |
| 🛒 Sell bottles in grocery stores | 🟡 Parked until one shop pays | Revisit in December | Sam |
| **Past bets** | | | |
| 🔎 Sell online direct to home buyers (Aug 1 – Sep 10) | 🔴 Dropped: shipping cost too high | — | Sam |
| **Background** | | | |
| 💵 $20k investment from an angel investor | 🟡 Not signed yet | — | Sam |

*🎯 the one thing that matters most · 🟢 working on it · 🟡 waiting · 🔴 dropped · ⚪ closed*

**Next:** Sam sends Corner Café the price list this week and asks for a first order.

## Dots

- 🟢 working on it
- 🟡 waiting or blocked
- 🔴 dropped, failed or past its kill line
- ⚪ closed or not started

## Anti

- No P0 labels, no dot in the Work cell, no separate dot column, no headline-only card.
- No mermaid, Gantt or schema diagrams unless asked.
- This skill makes no board writes: no Advance, no Hold-write, no email, no new ideas while rendering.
- Several companies asked about: one card each, in this shape.
- Before sending, read the card as an outsider. If any phrase needs explaining, rewrite it.

## Internal (never print)

Paper cannot promote. Unpaid weeks cannot promote. Never invent Impact/Evidence/Leverage. The schema kind stays `customer_check`.
