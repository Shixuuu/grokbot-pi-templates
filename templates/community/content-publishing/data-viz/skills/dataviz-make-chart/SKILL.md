---
name: dataviz-make-chart
description: "Use this when making a chart from a CSV, a pasted table, or other data, in the Tufte tradition (matplotlib, finding-as-title, self-critique before delivery)."
---

# Make a chart

## Steps
1. **Setup check (first run on a computer).** Run `python3 -c "import matplotlib"`. If it fails, install it in a venv (`python3 -m venv /workspace/.venv-dataviz && /workspace/.venv-dataviz/bin/pip install matplotlib`) rather than forcing system pip, then use that venv's python for every render. If `/workspace/.venv-dataviz/bin/python` already imports matplotlib, just use it.
2. **Inspect the data.** Look at shape, types, units, missing values, and outliers. Report problems plainly. Never silently drop, impute, smooth, or aggregate. If you do any of these, say what you did and why.
3. **Name the comparison.** Ask "compared to what?" Write the finding as a one-sentence title. If the comparison can't be inferred from the data and the request, ask one short question. Otherwise proceed.
4. **Choose the form.** Consider a table first (see the dataviz-table-or-chart skill). Otherwise pick from the repertoire:
   - dot plots over bars when the zero baseline isn't meaningful
   - slopegraphs for before/after or two-point comparisons
   - small multiples (shared axes) instead of many overlapping lines
   - sparklines for dense tables
   - line charts for time series
   - bars only when magnitude from zero matters
5. **Render.** Write the matplotlib code from scratch each time and apply the Style spec below. Save the PNG, SVG, and `.py` file to `/workspace/dataviz/<slug>/`.
6. **Self-critique.** Open and view the rendered PNG. List every element. For each one, ask "does this carry data or help read it?" and remove it if not. Then check:
   - Lie factor: (visual change) divided by (data change) must fall between 0.95 and 1.05.
   - Baselines: bars start at zero, and a non-zero line axis is made obvious.
   - Label collisions and overlaps.
   - Aspect ratio: bank lines toward 45 degrees.
   - Superlatives: when a title or finding says "worst", "biggest", "largest", etc., check it against absolute values across both directions, not only one sign.
   - Units: every number in the title and subtitle carries its unit, consistently.
   Revise and re-render. Repeat until clean.
7. **Deliver.** Send the PNG, SVG, and Python code, plus a two-sentence note on why this form was chosen. Don't post or publish anywhere.

## Style spec (apply to every chart)
- White background, no chart border, no background panel.
- No gridlines by default. Use a very light grid only when reading exact values matters.
- Range-frame axes, so axis lines span only the data range. Otherwise omit axes and label the data directly.
- Colour: `#333` for text, `#999` for context data, and one accent colour for the data carrying the story (default `#0072B2`, Okabe-Ito blue). Palettes must be colourblind-safe, such as Okabe-Ito. Colour encodes meaning, never decoration.
- Direct labels at line ends or next to points. No legend unless unavoidable.
- In a dot or ranked plot, put each value label beside its row, at the outer end of the row's spread (away from zero), in the accent colour. Don't add a separate label column with a header.
- Where points overlap (for example, many days per row), give context dots slight transparency (alpha about 0.5) so stacks read darker.
- Guide text such as direction words ("too low / too high") is slightly smaller and mid grey (`#999`) so it doesn't compete with the category labels.
- Drop abbreviations or codes in labels unless they're used elsewhere on the chart.
- The title is the finding, as a sentence. The subtitle gives what, where, when, and units. A source note sits in small grey text at bottom left.
- One font family at modest sizes, with the title only slightly larger than the labels.
- Bars always start at zero. If a line chart doesn't start at zero, the axis must make that obvious.
- Bank lines toward 45 degrees where possible.
- Small multiples share scales, and the panels are ordered meaningfully.
- Show uncertainty (intervals, ranges) when the data has it.

## Refuse, and offer the honest alternative
3D charts, dual y-axes, pie or donut charts with more than 3 slices, truncated bar axes, gradients, shadows, rainbow palettes, and decorative icons. Explain why in one sentence.
