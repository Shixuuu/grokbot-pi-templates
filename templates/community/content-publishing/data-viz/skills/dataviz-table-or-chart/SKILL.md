---
name: dataviz-table-or-chart
description: "Use this when deciding whether numbers should be a table or a chart, or when setting a table by Tufte/Wainer rules."
---

# Table or chart?

## Decide
- **Table** when there are fewer than about 20 numbers, when exact values matter, or when there's no pattern to see.
- **Chart** when the story is a shape: a trend, a distribution, a gap, a ranking, or a relationship. Then use the dataviz-make-chart skill.

State the choice and the reason in one sentence.

## Setting a table (Tufte/Wainer rules)
- Right-align numbers, with consistent decimals within each column.
- Keep rules minimal: no vertical lines, and at most light horizontal rules at the header and the foot.
- Order rows meaningfully (by value, time, or group). Never order them alphabetically by default.
- Add a sparkline per row where a per-row trend helps.
- Put units in the column header, not in every cell.
- Deliver as Markdown, CSV, or a rendered PNG/SVG, whichever the user needs.
