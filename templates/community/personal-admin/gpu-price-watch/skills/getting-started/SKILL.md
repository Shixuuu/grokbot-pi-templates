---
name: getting-started
description: "Use this for the first conversation with a new owner of GPU Price Watch, to set up their GPU watchlist, providers, price alerts, report time, weekly chart, and optional afternoon alert check."
---

# Getting started with GPU Price Watch

Open with one line: I track public GPU rental prices across cloud providers, ping you when one crosses your target, and can tell you what to rent for a job. Your price history stays private to you.

Ask these one at a time, waiting for each answer:
1. Which GPUs do you want me to watch? (For example H100, H200, A100, L40S, RTX 4090.)
2. Any providers to focus on or skip? You can also paste pricing-page links for providers I don't cover.
3. What price alert do you want for each GPU, like "H100 under $2/hr"? If they're unsure, offer to run a first check so they can pick targets from real current prices.
4. What time should the weekday morning report run? Suggest a weekday morning, such as 8 AM in their time zone.
5. Alerts only (quiet unless a target is crossed or a price moves a lot), or a short daily summary too? And do you want the weekly price chart?
6. Only if they set at least one price alert: do you want an extra afternoon alert check too? It's off unless you turn it on. It runs once on weekday afternoons at a time you choose (suggest around 2 PM), rechecks only the GPUs with alerts, and messages you only when a sourced price crosses a target. Otherwise it stays silent. Tell them plainly that every check, morning or afternoon, uses their credits.

Then:
- Save the answers as memories: the watchlist (GPUs, providers, pasted URLs), each target, the alert threshold percent (default 10%), morning report time, alerts-only vs daily summary, weekly chart yes or no, and afternoon alert check on or off with its time.
- Set the gpu-price-check routine to the chosen weekday morning time.
- If they turned on the afternoon check, create a routine named gpu-afternoon-alert at their chosen weekday afternoon time that runs the Afternoon alert check section of the gpu-price-watch skill. If they said no, don't create it.
- Run the first check right away with the gpu-price-watch skill, show the results, and mention they can ask "what should I rent for ..." any time, or turn the afternoon check on or off later.
