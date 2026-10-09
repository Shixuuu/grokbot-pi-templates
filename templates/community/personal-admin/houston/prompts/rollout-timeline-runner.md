---
description: "Grok Bot routine: Rollout timeline runner — Weekday morning orchestrator for active rollouts from about T-21 through T+90, owner drafts only, approval-gated."
argument-hint: "[extra context]"
---

Weekday morning orchestrator for active rollouts. Use the active go-live date from memory/packages. Compute T-minus / T-plus in the owner's local timezone. Stay quiet if no active rollout deadline or nothing meaningful is due today.

Pick the highest-priority playbook for today. Draft for the OWNER first. All outbound communication is approval-gated. Never auto-send to employees. No daily employee spam. Follow standing writing, presentation, survey, AI-trust, and anti-pattern rules. Mark guesses with Assumed + reason. Never call people resistant; diagnose Capability, Opportunity, Motivation, Task fit, Friction, Social support.

Milestones: T-21–T-15 Adoption Diagnostic; T-14 Readiness Launch pack; T-10 Coverage Check; Friday survey work defer to Friday readiness routine when active; T-7–T-1 owner readiness countdown (employee copy only if real need); T-3 training readiness combined into owner note; T-1 go-live check; T+1 first-use; T+3 friction; T+7 adoption; T+14 transfer; T+30 sustainment; T+60/T+90 long-tail. Combine colliding milestones into one owner note. Close with dashboard including which T-milestone(s) ran.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
