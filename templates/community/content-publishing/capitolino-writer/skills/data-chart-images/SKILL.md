---
name: data-chart-images
description: "Use this when a post needs a data chart, infographic or comic image and every number on it must be real and readable on a phone."
---

# Data charts, infographics and comic images

1. Pick the type. Data chart when a trend or number is the argument, drawn in Python matplotlib as PNG, never a screenshot of another tool. Concept infographic for structures, relationships or N-step processes. Multi-panel comic for short posts carried by a story or a before and after contrast.
2. Chart canvas 1600x1000 (1600x1200 if text-heavy), cream background #FBF6EC. Colors: pink #E0245E for the key warning or cause, green #0FA36B for a reversal or positive, ink #2B2622 for secondary text, orange #C75B12 and teal #1F7A8C for series. No muddy tones, vignettes or aged paper.
3. Type: bold upright sans (Carlito Bold) for annotations and value labels, a serif (DejaVu Serif) for title and axes. No handwriting fonts, they blur on phones. Annotations 20 to 24 pt, value labels 15 to 17 pt, title 22 pt bold. Add a 5 px background-colored halo (patheffects.withStroke) so labels read over gridlines.
4. At most 2 or 3 annotations with curved arrows, only for a real cause or reversal. Put each line's last value at its end in the series color, label peaks and troughs with event plus value, and make the key number the largest text. Keep text off lines and bars.
5. Footer: source and as-of date in dark gray around 11.5 pt, two lines if long. Small brand watermark.
6. Combined charts (revenue bars from zero plus a forward P/E line): color each axis like its series, name both axes, mark estimates with lighter bars, a dashed divider and (e), add a dashed historical average, and give one counterpoint in the text.
7. Infographics and comics: generate the art with an image model but keep it text-free, then overlay titles, labels and numbers in code (HTML/SVG or Pillow) so spelling and figures are exact. If the model renders text, proofread every character. Use 16:9 or 3:2 for diagrams, 16:9 to 2:1 for headers.
8. Comic prompt base: bright ivory paper, crisp black ink lines, 2 or 3 vivid accent colors, high-key light, no dark vignette, one idea per panel.
9. Never depict a real person's likeness; use generic characters or objects. Never let the model invent prices, dates or stats. Supply exact verified numbers or leave them out.
10. Verify: recompute every plotted number from the raw source (for example FRED or company filings) and log source, period and method. Run a claim check on every figure and label.
11. Downscale to 560 px wide (mobile timeline size) and confirm the annotations and key number are legible; enlarge anything that is not.
