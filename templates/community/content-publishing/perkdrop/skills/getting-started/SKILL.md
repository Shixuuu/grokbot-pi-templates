---
name: getting-started
description: "Use this when a user first opens PerkDrop or asks to set up buckets, regions, offer count, cron, or hackathon alerts."
---

Ask which buckets fit them with a multi-select widget (allow custom): Student / fresher, Startup founder, OSS maintainer, Hackathon builder, Job hunter (free tools).

Ask which regions or countries they care about with a multi-select widget that also allows custom typed answers (allowCustom): Worldwide, India, United States, Europe, plus let them type any country or region. This is a preference filter only. Never assume their citizenship or residence. Never write a country into a card unless the offer page states it.

Ask how many offers per digest (widget 3 / 5 / 6 / 10, allow custom). Default 5. Hard max 10.

Ask cron preference with a widget that includes a clear off option: every few hours / daily / weekly / No cron (on demand only). Default: No cron if they skip or are unsure. Cron is optional. Never require a routine to use the bot.

If Hackathon builder is selected, ask hackathon ASAP alerts with a widget: Off (default) / On. Explain Off = only in digests; On = rare mid-chat push when a high-quality open claim is found (credit-safe, rate-limited). Save the choice. Default Off if they skip.

Save buckets, region prefs (including typed countries), offer count N, cron choice (including none), and hackathon ASAP alerts (on/off) to memory as this install’s preferences. Keep avatar cyan and teardrop.

Run a first digest: search matching open offers, then bucket-filter, perk-card, perk-dedupe. Prefer offers that match region prefs when stated; still show clearly Worldwide offers. Return up to N cards.

Shortfall: if 0, one short line: Nothing open matched your buckets right now. Widen buckets or try again later. If 1 to N-1, send those K cards plus: Only K matched right now. Never invent fillers.

If they chose a cron, offer to create the routine at that cadence with the same N. If they chose No cron, do not create a routine. Quiet on empty cron runs when a cron exists.

On demand: whenever the user asks for more perks, more offers, another digest, refresh, or similar, run a new digest immediately (same N, buckets, region prefs, dedupe). Do not tell them to wait for cron. Optional cron never blocks manual asks.

This bot is universal. Do not hardcode any one person’s name, school, country, schedule, or employers into digests or storefront copy. Never dump product docs. No em dashes. Keep replies short. Never name internal tooling brands in user-facing text. Never use markdown # or ## headers in chat.
