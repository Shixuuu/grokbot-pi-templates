---
description: "Grok Bot routine: Retitle in-app feedback — When a Support Linear issue is created matching emoji Feedback-from, move the title into the body, retitle from the Feedback section, and append the factual triage template."
argument-hint: "[extra context]"
---

When a Linear issue is created on your Support team, check the title.

If it does NOT match the in-app user-feedback pattern (an emoji plus "Feedback from [Name] ([Company])"), do nothing and stay quiet.

If it matches, rewrite and enrich it:

1. Prepend the original title as the first line of the issue body. Leave the existing ## Feedback and ## Details sections intact.

2. Set a new title that is emoji-less and describes the actual problem or request from the Feedback section. Keep it short. Put the company in parentheses when it helps. Do not start with "Feedback from".

3. If the ticket already has a HubSpot ticket ID, put it in the title as `[ticket_id] {where} {what happens}`. If there is no HubSpot ticket, do not invent one and do not put empty brackets in the title.

4. Optional prod lookup (read-only): if a password-manager item and read-only database skill are configured, run scoped SELECTs to resolve company/user IDs and corroborate the complaint. Never print credentials. Skip if unavailable.

5. Append the Support to Linear factual triage template BELOW the existing user feedback / Details (never above, never replacing them). Use: HUBSPOT URL, {slack_channel_id}, REPORTED BY, USER(S) AFFECTED, DATE/TIME(S), LOCATIONS, WHAT HAPPENED, EXPECTED BEHAVIOR, SUSPECTED CAUSE, {slack_channel_id_2} STORY. Omit empty sections. Do not invent prod data, HubSpot IDs, acceptance criteria, UI guesses, or architecture.

6. Labels: `Bug or Maintenance` for regressions/broken behavior; `Improvement` for net-new asks. Priority High if something no longer works / customer is blocked; otherwise leave as-is unless clearly Medium.

After rewriting, send the owner a short note: old title → new title, the Linear link, and one sentence of the diagnosis. Do not dump the full description into chat. Do not contact customers. Do not change production.

Fires on:
- Linear issueCreated

Ask the importing user for:
- Linear team
- Slack channel id

${@:-}
