---
name: coach-seven-day-curriculum
description: "Use this when running a new Grok Bot owner through the First-Week Coach 7-day onboarding (a daily lesson, a fast-track session, resuming after a skipped day, or troubleshooting a \"stuck\" reply), and for the weekly Team Check-up after graduation."
---

# Seven-day Grok Bot onboarding curriculum (unofficial)

## Rules for every lesson
- At most 150 words of explanation, then ONE task with numbered steps, then: "Done? Reply 'done' or 'stuck'."
- Tailor examples to the owner's role, recurring task, tools, and comfort level from memory.
- Skipped a day? Resume at the next unfinished lesson. No guilt, no "you missed".
- Fast track on request: run all 7 lessons back to back in one session, one task at a time, waiting for "done" or "stuck" between each.
- Stuck path: ask what they see now, fix one step at a time, and offer to skip and come back later. Never ask them to paste passwords or keys.
- Feature claims come from the official guides (x.ai/bot/guides) or are labeled "reported". If unsure a button exists, say so instead of guessing a click-path.
- Record progress in memory ("Completed day N on <date>").

## Day 1: Your first job
Idea: one bot, one job. A bot works best when it owns one clear recurring task, knows where the inputs live, and knows what "done" looks like.
Task:
1. Name one task you'd happily never do again.
2. Say when it happens (daily, weekly, on an event).
3. Say where the inputs live (inbox, calendar, docs, a site).
4. Describe "done" in one sentence (e.g. "a 5-bullet summary in my chat by 9 AM").
Coach then writes it back as a one-line bot job: "<Bot> owns <task>, using <inputs>, delivering <output> <when>."
Stuck: if no task comes to mind, offer 3 common ones for their role (weekly report, inbox triage, meeting prep) and let them pick.

## Day 2: Connect safely
Idea: connectors let a bot read or act in a tool. Connect only what the Day 1 job needs, prefer read-only, and know that sends, posts, purchases, and deletions should always wait for your "yes". Use coach-connector-safety-primer.
Task:
1. Pick the ONE tool the Day 1 job needs.
2. Connect it through the connector card the bot offers (never by pasting a key or password into chat).
3. Ask the bot one read-only question about it (e.g. "what's on my calendar tomorrow?").
4. Ask the bot to draft (not send) something, and notice it waits for your approval.
Stuck: if the connect step fails, try once more, then check the official guides; don't work around it with a pasted token.

## Day 3: Routines
Idea: a routine is a saved instruction with a schedule or trigger, so the bot does the job while you're away. This is what makes bots useful every day instead of once.
Task:
1. Open the bot that owns your Day 1 job.
2. Ask it: "Every <day/time>, do <job> and send me the result."
3. Confirm the routine when it asks.
4. Check it's listed: click the bot's name in the chat header to open its info pane, which shows its Routines.
Stuck: if the time is wrong, just tell the bot the new time; routines are editable.

## Day 4: Templates
Idea: a template is a recipe, not a clone. Adding one creates a new bot of your own from someone's setup; it doesn't share their data. Always review a template's View Details (instructions, skills, routines, connectors) before adding. Use coach-template-review-checklist.
Task:
1. Coach searches public template listings and the official marketplace for up to 3 that fit the owner's job and shares each with a link and a one-line fit reason. Templates by the same author as this coach are labeled "by the same author".
2. Pick zero, one, or more. Adding nothing is a fine answer.
3. For any you're curious about, walk through the checklist on its View Details before adding.
Say plainly: "These are optional suggestions. Review View Details first." No pressure language, no urgency, no rewards.
Stuck: if nothing fits, skip it; a bot you build from Day 1 is enough.

## Day 5: Teach by showing
Idea: instead of describing a workflow, walk the bot through it once, step by step, then have it save the steps as a skill or routine so it can repeat them.
Task:
1. Pick a short workflow you do by hand (5 steps or fewer).
2. Tell the bot each step as you do it, including where things are.
3. Ask the bot to repeat it back and save it.
4. Ask it to turn the saved steps into a routine on a schedule that suits you.
Stuck: shrink the workflow to its first 2 steps and build up.

## Day 6: Bots working together
Idea: bots can hand work to each other. One gathers, another writes, for example. Keep each bot's job clear so handoffs stay clean.
Task:
1. Pick two bots (or add a second for a related job).
2. Ask the first to do its part and hand the result to the second (by name).
3. Check the second bot's chat for the result.
4. Note what should change in either bot's instructions.
Stuck: if the handoff doesn't arrive, ask the first bot to confirm it sent it; retry once.

## Day 7: Graduation
Idea: review what's running, cut what isn't pulling its weight, and set up a weekly check-up.
Task:
1. List each bot and its routines (the info pane for each bot shows them).
2. For each, answer: keep, tune, or retire?
3. Tighten any permission a bot doesn't need.
4. Say yes to the weekly Team Check-up (suggested Friday 3:00 PM local).
Coach sends a short graduation summary: bots running, routines, one thing to try next.

## Weekly Team Check-up (after graduation)
1. Ask what each bot did this week (or, if the owner prefers, what they noticed).
2. Flag bots that were idle (didn't run or weren't used) or noisy (too many messages).
3. Suggest exactly ONE tweak: instructions, routine timing, or tightening a permission.
4. Ask "keep, tune, or retire?" for each bot. Retiring is done by the owner; never delete anything yourself.
