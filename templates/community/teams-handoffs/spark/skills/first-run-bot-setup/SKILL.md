---
name: first-run-bot-setup
description: "Use this when onboarding someone new to Bot in about 5 minutes: a short personalized questionnaire, then spawn a small fleet of bots and nudge the connectors that make them useful."
---

Get a new Bot user from zero to a useful fleet in about 5 minutes. Interview, spawn, connect, hand off. Do not become chief of staff of the fleet you create.

## Clock

Four questions max. Spawn 3–5 bots, not 10. Connector cards go out in the same breath as the spawn, not after a tutorial. The first useful action is part of each bot's persona so it does something on first run instead of waiting to be asked.

If they already name the bots they want, skip the interview and spawn.

## Interview (one at a time)

Use a question widget when the choices are real and known. Otherwise one sentence. Skip anything you can infer. No long form.

**Q1. Role.** "What kind of work are you in?"
Options (multiSelect + allowCustom): Founder / exec; Engineer; Product / design; Sales / GTM / CS; Ops / EA; Something else.

**Q2. Tools.** "Where does your work actually live?"
Options (multiSelect + allowCustom): Slack; Gmail; Google Calendar; Notion; GitHub; Linear.

**Q3. Pain.** One sentence: "What's eating the most time right now?" Skip if they already named jobs.

**Q4. Named jobs (optional).** Only if Q3 was vague: "Any specific jobs you already want a bot for?"

Then stop asking.

## Roster

Pick 3–5. Name plus one-line job. Confirm unless they said just build them. Rewrite names to match how they talk.

Always include at least one bot that can do something the moment a connector lands (inbox, calendar, Slack catch-up), not only research that needs no login.

### By role

Founder / exec: Executive Assistant (calendar, email, reminders); Slack catch-up; Research / briefing; Inbox triage if they use Gmail.

Engineer: PR babysitter (GitHub); Linear / standup; Slack catch-up; Code-review helper.

Product / design: Linear PM; Notion notes; Slack catch-up; Research.

Sales / GTM / CS: Inbox / outbound; Calendar; Slack catch-up; Research on accounts.

Ops / EA: Calendar; Inbox; Slack catch-up; Reminders.

If they named a job that doesn't fit, add a custom bot for that job and drop the weakest default so the roster stays ≤5.

### Persona for each spawned bot

Write a tight description that includes:
- Job in one line
- Tools it should use
- Voice (warm, brief, like a sharp friend unless they asked otherwise)
- First-run instruction: on first message, do one useful thing immediately (today's calendar, unread mail that matters, Slack catch-up of named channels, open PRs). If the needed connector is missing, ask for that connect card and then do the useful thing.
- Hard rules: never create Slack bot accounts or GitHub PATs; don't become chief of staff of other bots.

## Connectors

Check what's already connected before nudging. Never re-prompt for one they have. Never lecture about setup.

Nudge only the tools they named in Q2 (and any a spawned bot actually needs). One or a few connector cards, in place.

Stable plugin ids for the default tools:
- Slack: `674`
- Gmail: `45893410`
- Google Calendar: `45893411`
- Notion: `404`
- GitHub: `48677658`
- Linear: `512`

If they named something else, search the catalog and use the real match. If nothing matches, say it isn't connectable yet; the bot can still use the signed-in browser for a logged-in website.

Confirm before installing a connector that isn't on their account. Auth cards after install are host-authored; don't paste links. In chat, a connector can also be named as a deep link using that plugin id.

## Spawn

Create all confirmed bots in one turn. Optionally put them in one channel and tell the user the channel name. Don't add yourself as chief of staff unless they ask.

## Hand off

One short recap: each bot's name, what to say to it, and which connector (if any) still needs a tap. Then stop. Do not manage the fleet afterwards unless asked.

## Hard rules

- Never create Slack bot accounts or Slack apps.
- Never spawn bots they did not confirm (except "just build them").
- Do not clone repos or create GitHub PATs.
- Don't dump a form. Don't stall after the interview.
