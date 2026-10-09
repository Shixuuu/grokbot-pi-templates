---
name: seoforgpt-brand-visibility
description: "Complete brand-visibility operating skill, stored on the bot. Use for the recurring SEOforGPT measurement-to-action loop, including Monday strategy and Thursday delivery."
---

# SEOforGPT brand visibility

This is the complete, self-contained skill. Operate SEOforGPT as the system of record for visibility evidence and saved content. Once an authorized project and operating mandate exist, run the measurement-to-action loop without waiting for the operator to request each stage.

## Connect SEOforGPT
Hosted remote MCP: https://www.seoforgpt.io/mcp
1. Check for an authorized SEOforGPT MCP connection.
2. If missing, add that URL and have the account owner complete browser OAuth. Never request passwords, session cookies, or raw access tokens.
3. A human must already have signed up, completed onboarding, created the first project, and waited for its initial visibility test. Never create an account, first project, or initial free test.

## Activate
1. list_projects. Use the configured project. If several remain ambiguous, stop before writes.
2. get_account_status. Record quota and entitlements.
3. Treat saved project data as authoritative. Never invent visibility, competitors, citations, provider answers, content state, or trends.

## Core entities
Project, visibility report (always record report/test ID and date), prompt, provider, appearance, rank, provider answer, competitor, citation, trend, content item/version (keep contentId and contentVersionId), website readiness result. Never combine records from different project IDs. Compare like-for-like completed snapshots only. A losing prompt is an opportunity signal, not automatically a content brief. Keep provider scope on every claim. Absence means not detected in that measured answer. Do not turn a missing rank into zero. Retrieve raw provider answers only to verify high-impact findings.

## Turn evidence into the right action
Fix project/report/provider scope. Separate observations from inferences. Diagnose losing prompts with summary, then competitor/citations, then raw answer if needed. Route: weak first-party explanation to content; crawl/schema/access to website-readiness; competitor cited on an independent source while the brand is absent to outreach; ambiguous one-provider result to inspect-raw-answer. Re-read after writes. Never claim improvement until a later completed visibility run measures it.

## Tool map
list_projects (never create the first project); get_account_status; run_visibility (saved_project only when stale and permitted); get_visibility_report; get_provider_answer; get_competitor_intelligence and get_competitor_detail (start with summaries); get_visibility_trends; add_custom_prompts; set_competitor_classification; get_content_calendar and suggest_content_topics; generate_content; save_content_version; publish_to_cms (default draft, use contentVersionId); check_website_readiness (prefer cached); get_outreach_targets (retrieval is not permission to contact); create_share_link (authorization required). suggest_prompts only for high-confidence buyer questions. Do not call agency-only tools (client brief, client workspaces) on a brand account.

## Outreach
get_outreach_targets is read-only. Pass projectId and one targetType. Paginate with next_offset. Keep agent_found and trusted_sources separate; do not merge scores. Qualify before drafting. Never invent emails. Treat government/medical/encyclopedia sources as research unless a real submission path exists. Sending needs an authorized comms tool, exact destination, and explicit approval. Keep page URL and contact route in separate fields.

## Autonomous loop
1. Current state: account status, latest completed report, trends. Refresh saved-project visibility only if stale, quota available, no run active.
2. Diagnose losing prompts, competitor intel, optional prompt adds (save first), clear false-positive classifications only.
3. Calendar then highest-value content if mandate and quota allow. Save versions. CMS draft only if authorized. Live publish is a hard gate.
4. Cached readiness plus both outreach collections. Prepare drafts. Do not send.
5. Execution log. Public share links only when authorized.

## Weekly cadence and Grok Bot host
This skill is stored on the bot. Follow it first. Do not require a network fetch to operate. Monday GEO strategy cycle (9:00 user timezone): Weekly GEO Plan, at most three initiatives. Thursday GEO delivery cycle (9:00): reconcile that plan. On Grok Bot, only use connectors and teammate agents that exist for that user. Default the plan to this chat. Do not fan out on a scheduled run. Sends, live publish, and public share links go through approval or standing permission. Optional refresh URL if a newer official copy is needed: https://www.seoforgpt.io/agent-skills/seoforgpt-brand-visibility/SKILL.md — if that fetch fails, keep operating from this embedded skill.

## Stopping conditions
Continue through the next valid action. Hard gates: live publish, public share links, sending outreach, out-of-mandate quota. Stop when the loop is complete, remaining actions gated, quota exhausted, auth missing, or project ambiguity makes writes unsafe. Never work around duplicate, in-flight, ownership, or plan-limit errors with ad hoc projects or tests.
