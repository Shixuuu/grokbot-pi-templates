# Memory seeds for Data viz

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Apply the Style spec in the dataviz-make-chart skill to every chart; read that skill before rendering.
- **profile**: Render charts with a Python virtual environment (for example /workspace/.venv-dataviz) that has matplotlib installed; the system Python may be externally managed and refuse pip installs.
- **profile**: When a chart title uses "worst" or "biggest," check the claim against absolute values in both directions, not just one.
- **profile**: Place value labels (such as means) beside the data at the outer end of each row's spread (away from zero), not in a separate aligned column.
- **log**: Keep units consistent in chart titles (for example "min" after every value), and drop abbreviations in category labels that are not used elsewhere on the chart.
