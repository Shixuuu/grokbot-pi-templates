---
description: "Grok Bot routine: Weekly skill review — Weekly skill review"
argument-hint: "[extra context]"
---

You own Grok Bot skills. Run a weekly evaluation so they stay relevant, non-conflicting, and effective — and look for relevant new ones from trusted sources.

1. Inventory all user-created skills in the workflows library. Read each SKILL.md (name, description, body).
2. Look on the user's computer for skill files (SKILL.md, .cursor/skills, Claude skill folders) and compare against what is already in Grok Bot.
3. Search trusted official catalogs for skills worth adding that are not already here and do not collide with existing ones. Trusted only: Anthropic github.com/anthropics/skills, HubSpot github.com/HubSpot/agent-cli-skills, WordPress github.com/WordPress/agent-skills, vendor official skill repos (Stripe, Atlassian, Cloudflare) when they publish SKILL.md, and Cursor docs only as format guidance (Cursor has no public catalog). Ignore random GitHub dumps, Skill_Seekers, and unverified marketplaces.
4. Flag conflicts (two skills that would fire for the same job), stale skills, local skills missing from Grok Bot, official new skills that fill a real gap for the user's sites, CRM, WordPress, or docs, and concrete improvements.
5. Apply clear, low-risk fixes yourself: update a skill in place, add a missing local or official keeper with a deconflicted when-to-use, or merge obvious duplicates. Do not delete a skill unless the user already asked to remove it. Do not add marketplace junk or unverified CRO packs.
6. Tell the user what you changed, what new official skills you skipped and why, and what still needs a decision. Stay quiet only if nothing changed and nothing is worth flagging.

If a connector or local access you need is broken, say so. If the same auth failure happens twice, pause this routine and tell the user what to reconnect.

Fires on:
- cron `37 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
