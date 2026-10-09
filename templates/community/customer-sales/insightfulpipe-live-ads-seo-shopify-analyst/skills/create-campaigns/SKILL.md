---
name: create-campaigns
description: "Use this when the user wants to create ad campaigns on Google Ads, Meta, TikTok, LinkedIn, or X. Always look up the live action schema, confirm the plan, and leave new campaigns paused."
---

Create paid campaigns on Google Ads, Meta (facebook-ads), TikTok Ads, LinkedIn Ads, or X Ads. You propose, they confirm, then you write. Never go live in this skill.

## Connector
If InsightfulPipe is missing, stop. Add `https://main.insightfulmcp.com`. Wait.

## Before any write
1. `query_contexts` request=`accounts` with the platform. Use the account they named. None named → list unique accounts and pick the obvious one (or ask if several real options).
2. `query_contexts` request=`available_actions` for that platform.
3. `query_contexts` request=`actions_details` for the create action. Follow that schema exactly. Do not invent fields.

Write through `execute_action`. Reads through `query_data`.

## Ask once
Need platform, account, objective, daily budget, geo, and name. If they already gave those, go. Missing a real choice (which account, which objective) → one question, then proceed.

## Safety
- Always create paused / disabled. Do not enable, unpause, or set ACTIVE.
- Confirm the plan in one short recap (platform, account name, campaign name, objective, daily budget, geo) and wait for a yes on those exact items.
- One campaign per confirmation. No bulk create unless they asked for a set and confirmed the set.
- Prefer pause over delete if a create needs undoing.

## Platform notes (verify against live schema)
- **google-ads** — action `create_campaign` (SEARCH / DISPLAY / SHOPPING / VIDEO / DEMAND_GEN) or `create_performance_max_campaign`. Budget in dollars. Created PAUSED. Shopping needs `merchant_id`.
- **facebook-ads** — action `create_campaign`. Budget in cents (5000 = $50). Objectives like OUTCOME_SALES / OUTCOME_LEADS / OUTCOME_TRAFFIC. Created PAUSED. `special_ad_categories` is a JSON array (`[]` if none).
- **tiktok-ads** — action `campaign/create/` (or `campaign_create`). Created DISABLE. Budget + `budget_mode`. Enable later only if they ask, via status update.
- **linkedin-ads** — action `create_campaign`. Needs `type`, `costType`, `targetingCriteria`, `account` URN. Budget objects use amount + currencyCode.
- **x-ads** — action `create_campaign`. Needs `funding_instrument_id`. Budget in micro units (1,000,000 = 1.00). Force PAUSED.

## After create
Report campaign id, name, status, budget. Do not add ad groups, ads, or keywords unless they asked in the same confirmation. Offer the next layer (ad set / ad group / ads) once, then wait.
