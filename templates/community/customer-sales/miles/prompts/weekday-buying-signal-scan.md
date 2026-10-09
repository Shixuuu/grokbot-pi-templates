---
description: "Grok Bot routine: Weekday buying-signal scan — Twice each weekday (9am and 9pm ET), scan the last 12 hours for high-intent CRM / GHL / AI-phone buying signals and deliver a ranked digest or an explicit zero."
argument-hint: "[extra context]"
---

Run a buying-intent scan covering only the last 12 hours. This routine fires twice on weekdays (9:00am and 9:00pm ET) and already skips weekends.

SURFACES: Report ONLY Reddit, LinkedIn, X, and Facebook (groups + posts). NEVER include Freelancer.com, Upwork, OnlineJobs.ph, or any freelance-marketplace / job-board listing. LinkedIn posts that are just scraped Upwork/Freelancer gigs also do not count.

{slack_channel_id}: Search the FULL keyword list every run on Reddit, LinkedIn, and X. New families the user adds are additive. Never drop older families to chase the latest add.

FACEBOOK GROUPS EXCEPTION: For Facebook groups only, search GoHighLevel-related keywords only. Do NOT run CRM hunt, HubSpot/Salesforce/Pipedrive leave-or-cost, generic AI receptionist, AI influencer, or generic booking-system queries in Facebook groups. Facebook group queries are GHL hire/help, GHL issues, manage GHL / technical partner, plus GHL-specific migration/AI (migrate to GHL, GHL migration, GHL AI, GHL voice AI, Lead Connector, GHL calendar/booking). Prefer Highlevel/GHL groups over random groups.

Full keyword families (match variants and close phrasing):
1) Looking for a CRM / CRM (keep CRM loud, especially on LinkedIn): CRM, looking for a CRM, looking for a new CRM, need a CRM, need CRM, CRM recommendations, recommend a CRM, best CRM for, affordable CRM, simple CRM, CRM for small business, CRM for agency, CRM for consultants, CRM software, which CRM, what CRM should, CRM options, CRM for my business. On LinkedIn run dedicated CRM queries every pass (not buried in a giant OR).
2) Alternatives / leaving: HubSpot/Pipedrive/Salesforce alternative, alternative to X, replace/replacing/leaving/leave/switch from/switching from/move away from/migrate from/moving off X, HubSpot migration; Salesforce too expensive / overkill.
3) GoHighLevel hire/help: GoHighLevel expert/consultant/help/setup/migration, GHL expert/consultant/setup, need help with GoHighLevel, migrate/switch/moving to GoHighLevel.
4) CRM cost complaints: HubSpot/Pipedrive/Salesforce too expensive, expensive, pricing, price increase, overpriced, costs too much, getting expensive, renewal, contract, nickel and diming/dimed; CRM too expensive, expensive CRM, cheaper CRM, affordable CRM, CRM pricing/price increase, reduce CRM costs.
5) AI phone: AI receptionist, AI phone receptionist, AI virtual receptionist, AI answering service, AI phone answering, AI phone agent, AI voice agent, voice AI, AI calling/calls/caller, AI appointment setter/booking, AI phone booking, AI customer service/support, AI call/contact center; recommendations, best AI receptionist, for small business/agency/dental/med spa/HVAC/plumber/law firm/real estate; cost, pricing, worth it, does it work, alternative.
6) Migrations: CRM migration / migrate CRM / migration help/consultant/service; HubSpot/Pipedrive/Salesforce/Zoho/Keap/Infusionsoft migration or move/export/data migration; migrate/move to GoHighLevel, GHL migration, HubSpot/Pipedrive/Salesforce/Zoho/Keap/ActiveCampaign to GoHighLevel.
7) GoHighLevel issues: GoHighLevel/GHL/HighLevel problems/issues, workflows not working, automation not working, setup help, consultant, developer, specialist, API, integration, customization, custom setup, onboarding, agency help, SaaS help, GoHighLevel/GHL AI, voice AI.
8) GHL manage / technical partner: manage GHL, manage GoHighLevel, manage HighLevel; ghl technical partner (exact phrase, any casing); GoHighLevel technical partner, HighLevel technical partner; technical partner, techinical partner; looking for a technical partner, need a technical partner, technical partner that can set up / manage; set up and manage GHL / GoHighLevel.
9) AI influencer: AI influencer, AI influencers, looking for an AI influencer, need an AI influencer, hire an AI influencer, AI influencer for, AI influencer recommendations, recommend an AI influencer, virtual influencer, AI creator. High intent: someone looking to hire, find, or get recommendations for an AI influencer. Drop people selling AI influencer services unless they are asking to hire one.
10) Booking system: booking system, booking systems, looking for a booking system, need a booking system, best booking system, booking software, appointment booking system, online booking system, scheduling system, appointment scheduler, calendar booking, client booking, booking tool, booking platform; recommendations, recommend a booking system, alternative to [booking tool]. High intent: someone looking to buy, switch, or get recs for a booking/scheduling system.

Highest intent first: actively looking for, replacing, leaving, migrating, or hiring help. Prioritize complaint plus a next step over generic venting. Drop vendor promo, people selling GHL services, bots, and quote-tweet spam.

Use API Direct for social signals: LinkedIn, Reddit, Facebook groups, X.com (Twitter). Run a FULL keyword-family pass on LinkedIn and Reddit — LinkedIn must include dedicated CRM + booking-system queries every run. For Facebook groups, GHL-related keywords only. Use Tavily only as a supplement, never as a Freelancer/Upwork source to report. For X, also use xAI Grok x_search when an xAI key is configured (never print the key). Look up current tool schemas before calling. Do not invent posts or quotes.

X.com is a required dedicated pass. Always run a last-12-hour X sweep (API Direct search_twitter AND xAI x_search when available) for the SAME full keyword list above. Prefer posts BY frustrated buyers. Include X hits (or a one-line "nothing high-intent on X") in the digest. Same for LinkedIn: include LinkedIn hits or a one-line "nothing high-intent on LinkedIn".

Run families as dedicated queries, not one giant OR. Do not re-list leads already reported in the previous run of this routine.

Score and rank by buying intent, not volume. For each hit capture who, where, the quote, the keyword, a link if available, and a suggested next step.

Report findings to the user in this chat and to their chief of staff / ops lead. Do not outreach, message people, publish, or spend money.

REPORTING — applies to EVERY weekday slot, 9:00am AND 9:00pm ET:
- Hits: send the full ranked digest to the user and ops lead (who / where / quote / link / next step).
- Zero: NEVER stay silent. Always tell the user and ops lead one explicit line like "scanned Reddit/LinkedIn/X/Facebook, 0 high-intent."
- Deliver in the same run. Late delivery looks like a miss.
- No outreach unless the user says go.

Lead with the highest-intent leads, keep it tight, no filler.

Fires on:
- cron `0 9,21 * * 1-5`

Ask the importing user for:
- Timezone
- Slack channel id

${@:-}
