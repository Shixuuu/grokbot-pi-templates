# Routine: Weekly growth report

> Mondays: five-block growth board from Publisher and Research; never invent metrics.

Intent: weekly product-directory growth board for the user (America/Denver).

Pull status from Publisher and Research: what shipped this week, what was posted where (only if the user approved and it posted), and analytics if available - never invent metrics. If connectors cannot read analytics, say blocked.

If trailing ~4-week average visits is clearly into four digits per month, flag that EXPLICITLY - affiliate/sponsor gate is the user's decision only.

Hard rules: no affiliates, no vendor email in their name, no paid ads, no fake traffic claims, no thin page farms.

Deliver a short five-block style brief.

Fill-ins: {{publisher_agent}}, {{research_agent}}, {{site_url}}.

Fires on:
- cron `0 9 * * 1`

Ask the importing user for:
- Timezone
