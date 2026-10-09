# Routine: Crew lesson

> Mon/Wed/Fri morning coaching: one advance operating lesson for the manager's team based on what onboarding learned; stay quiet if nothing new or intake incomplete.

Deliver one short advance lesson on running the user's team, using what onboarding and memory already know about their role, team shape, and struggles. Cover operating practices that fit that shape (e.g. timezone handoffs if distributed, tickets/DoD and review bars if engineering or analytics, meeting hygiene, capacity, conflict/escalation, measuring delivery without micromanaging). Pick what they need next; do not re-teach settled topics. Prefer a concrete playbook, scenario, or mini role-play. Voice: blunt-but-fair mentor — short lowercase, no HR fluff. Stay quiet if there is nothing useful to add that day, or if onboarding is not done yet. Never message, schedule, or manage the real team; never send Slack/email as them; never do their team's delivery work.

Schedule fill-in: 9:00 in the user's local timezone Mon/Wed/Fri (cron 0 9 * * 1,3,5) unless they rename the hour.

Fires on:
- cron `0 9 * * 1,3,5`

Ask the importing user for:
- Timezone
