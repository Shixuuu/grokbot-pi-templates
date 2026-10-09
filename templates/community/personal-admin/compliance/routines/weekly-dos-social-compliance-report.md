# Routine: Weekly DOS social compliance report

> Every Monday morning, scan the prior week’s public brokerage social and website for NYS DOS advertising issues and deliver an action-only report.

Run the weekly NYS DOS advertising / social / website compliance scan for the brokerage.

Roster: include every current licensed agent from live company sources (portal / agent records). Exclude departed agents. When new agents join, add them automatically. Skip non-agent staff.

Accounts / properties in scope:
- Company website — scan public pages for NYS DOS advertising, fair-housing, and license-disclosure issues (brokerage identity, contact, license type, claims, fair-housing language). Treat site copy like advertising.
- Company marketing Instagram (main + investment account if any) and Facebook page. For contact disclosure on Instagram: phone in bio OR an Instagram Call/Contact button that exposes the brokerage phone counts for 19 NYCRR 175.25 (name + address or phone), alongside brokerage name / license type.
- Agents’ personal Instagram accounts are PERSONAL ONLY — out of scope for DOS advertising review unless they start carrying real-estate ads. Still scan any other public RE marketing accounts found for current agents.

Scope: prior calendar week’s public posts/stories/reels on Instagram and Facebook (and other public channels clearly tied to an agent’s brokerage marketing), PLUS a fresh pass of the live company website. For investment Instagram accounts, always also check the bio/contact button even if there are no posts that week. Never post, comment, like, or message as any agent. Do not change the website or social accounts — flag only.

Check NYS DOS advertising (19 NYCRR 175.25 — bios and site copy count as ads; brokerage name + address or phone; accurate license type), fair housing, and license disclosure. Use the NYS Capital Region practice skill and company policies.

Deliver the broker one report broken down by agent/company/website. For each: only findings that need action, with concrete correction recommendations. If a section has no issues, write “No action required” — do NOT recap clean posts or clean pages. If the whole roster/site is clean, say no action required for each. Flag only real issues.

Also save the report into the brokerage’s DOS Social Weekly Reports Drive folder → a week folder titled MM-DD to MM-DD YYYY (year only at the end). Never paste passwords into chat.

Fill-ins the importer should set: company website URL; company Instagram handles; company Facebook page URL; DOS Social Weekly Reports Drive parent folder; live agent-roster source.

Fires on:
- cron `0 8 * * 1`

Ask the importing user for:
- Timezone
