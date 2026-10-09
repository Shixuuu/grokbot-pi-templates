---
name: onboarding-guide-desk-craft
description: "Use this when building a new-hire onboarding guide: intake, gather, plan, guide, refine, and gate, dispatching only on one exact PROCEED line with an OB- id."
---

# Onboarding Guide Desk — craft skill

Follow the operating rules skill (onboarding-guide-desk-operating-rules); its Gates (hard) section wins if this skill disagrees. For role tracks, pre-boarding, buddy, remote, compliance, scorecard, manager prep, knowledge map, and conflicts, also apply onboarding-guide-desk-advanced.

## When to use
- A manager or team lead wants a first-day, first-week, and 30/60/90 onboarding guide for a new hire.
- User says “onboard a new hire,” “write an onboarding plan,” “first week plan,” or asks to stage a guide in docs/mail without sending.
- User wants facts from their own docs, with gaps flagged instead of generic HR filler.

## When not to use
- Step-by-step process documentation (redirect to an SOP-writer desk).
- Weekly personal planning (redirect to a weekly-planning desk).
- HR, employment-law, or benefits advice as fact (refuse; point to HR).
- Provisioning accounts, access, or channel adds (refuse; list as requests).
- Timed nudges or daily messages to the hire (refuse).

## Recipe

### 1) Intake (≤5 questions or stated defaults)
Capture: role, team, start date, work mode, 90-day goals, docs to use.

### 2) Gather
Facts from named docs only, each tagged `from <doc>` or `added by you`; otherwise `[NEEDS HUMAN INPUT]`.

### 3) Plan
- **Day 1** — setup, people, welcome; no deliverables
- **Week 1** — tools and rituals from the docs. The first small task is `[NEEDS HUMAN INPUT]` until the manager names it.
- **30 / 60 / 90** — outcomes and checks the manager set or confirmed. If they did not, write `[NEEDS HUMAN INPUT]` on that row. Do not invent a number, a tool, a benefit, or a policy.

### 4) Guide
Mint `OB-####` on the first full guide, status `DRAFT — not sent`.

**Onboarding guide format**
1. `# Onboarding — <role>` — team · start · mode · `Id: OB-####` · `DRAFT — not sent`
2. **Welcome**
3. **Day 1 (proposed)**
4. **Week 1 checklist**
5. **30 / 60 / 90**
6. **Who to ask (roles) & rituals**
7. **Access checklist (requests)**
8. **Glossary**
9. **Open gaps**
10. **Craft notes** — facts by tag, gaps, milestones, Id

**Tag-or-gap rule:** every policy, tool, ritual, contact, outcome, and check carries a source tag (`from <doc>` or `added by you`) or is `[NEEDS HUMAN INPUT]`. Contacts are roles unless the owner supplies names to include. `proposed` may mark a pace default only (Day 1 is setup and people, not a deliverable). It may not introduce a quota, tool, benefit, policy, or person the owner did not state. Guide gaps are unique topics. Every `UNKNOWN`, "not named", and `[NEEDS HUMAN INPUT]` printed in the guide is one of those topics. A topic repeated on the status card and in the header counts once. A missing dispatch field such as `to=` is not a guide gap. A nameless pace-default role, such as the manager, is not a sourced person and is not a guide gap. Do not give that role a name.

### 5) Refine
Apply edits, update the gap list, summarize deltas, keep the same id.

### 6) Gate packet
1. Final guide (or private staged draft reference) with Id
2. Checklist (facts tagged · no invented policy/person · access as requests · no personal data · private if staged)
3. One fenced dispatch line only when every field on it is known; otherwise name the missing field `[NEEDS HUMAN INPUT]`
4. What that line will not do

### 7) Dispatch
Follow the operating rules, section “Gates (hard)”. That section wins if this skill disagrees. Print the parse line, perform the single action, confirm verb + id, stop.

## Draft-first connector pattern
1. Offer in one sentence: “I can stage this guide as a private doc. Want that?”
2. On a clear yes to that sentence, stage the private doc that sentence offered. When they asked to stage a doc or a private mail draft, stage only what they asked for. Title or subject prefix `DRAFT`. Return the link or draft id. Stay in `GATE`.
3. A queue slot, a scheduled send, “send later”, and a doc someone else can already open are leave-desk. No dispatch verb authorizes them. Do not write into a shared doc. Offer a new private doc, or keep the guide in chat.
4. Creating accounts, requesting or granting access, and adding someone to a group, channel, repository, or list have no verb. List them as access-checklist requests. Never turn a draft into a send, share, invite, publish, or charge on your own.
5. One `PROCEED INVITE` line creates one event for the one mailbox on that line, and only when the human already typed a clock time and a timezone for this invite. A time that appears only in the guide, a team doc, or text you wrote does not count. No series and no guide in the event body. If either the clock time or the timezone is missing, stay in `GATE` and name the start time as `[NEEDS HUMAN INPUT]`. If they asked for a reminder for themselves, one owner-only calendar event is allowed: no attendees, no guide body, no series, and it is not a watcher. Do not invent the start time.

## Quality bar
- Facts tagged or flagged; no generic HR filler presented as policy.
- An outcome or a check the manager did not state is `[NEEDS HUMAN INPUT]`.
- Day 1 has no deliverables.
- Access is always a request.
- The worked example's guide-gap count matches its open-gaps list.
- Hold until the exact dispatch line; after a successful call confirm verb and id, then stop.

## Micro example

User: “Draft an onboarding guide. Don’t send it. Role: Support Specialist, remote, starts Monday. From our team doc: ‘We use the helpdesk tool for tickets. Daily standup 9:30. New folks shadow a senior agent in week 1.’”

You:

```
Stage: GUIDE
Role: Support Specialist · team not named
Start: Monday (date UNKNOWN) · Mode: remote
Facts: sourced 3 · added by you 3 · gaps 14
Id: OB-8463
Next: calendar date, and the outcomes the manager will confirm
```

# Onboarding — Support Specialist
Team: not named · Start: Monday (calendar date UNKNOWN) · remote · Id: `OB-8463` · `DRAFT — not sent`

**Welcome** — Welcome aboard. Confirmed items are tagged. Open items are listed under Open gaps. Ask your manager before treating an open item as a rule.

**Day 1 (proposed pace — not booked)**
- Meet your manager (role label; no name was given) · time `[NEEDS HUMAN INPUT]`
- Equipment `[NEEDS HUMAN INPUT]`
- Daily standup at 9:30 (`from team doc`) · timezone `[NEEDS HUMAN INPUT]`

**Week 1 checklist**
- [ ] Shadow a senior agent (`from team doc`)
- [ ] Use the helpdesk tool for tickets (`from team doc`)
- [ ] First small task `[NEEDS HUMAN INPUT]`

**30 / 60 / 90**
- 30: outcome `[NEEDS HUMAN INPUT]` · check `[NEEDS HUMAN INPUT]`
- 60: outcome `[NEEDS HUMAN INPUT]` · check `[NEEDS HUMAN INPUT]`
- 90: outcome `[NEEDS HUMAN INPUT]` · check `[NEEDS HUMAN INPUT]`

**Who to ask (roles) & rituals**
- Manager (role label) · Senior agent (`from team doc`) · IT helpdesk role `[NEEDS HUMAN INPUT]` (the team doc does not say this role exists)
- Ritual: daily standup 9:30 (`from team doc`)

**Access checklist (requests — nothing granted)**
- [ ] Request helpdesk tool access from `[NEEDS HUMAN INPUT]` (admin role)

**Glossary**
- helpdesk tool — tickets (`from team doc`)
- standup — daily at 9:30 (`from team doc`)

**Open gaps** — team name · calendar date · Day 1 time · equipment · standup timezone · first small task · IT helpdesk role · admin role · 30 outcome · 30 check · 60 outcome · 60 check · 90 outcome · 90 check

**Craft notes**
- Facts: sourced 3 (helpdesk tool, standup 9:30, week-1 shadowing) · added by you 3 (role, remote, Monday) · guide gaps 14
- The 14 names are the Open gaps line, in that order. Team name and calendar date are the two header topics. The other 12 are the open fields in Day 1, Week 1, 30/60/90, Who to ask, and Access.
- The status card repeats team and calendar date. Each is still one gap.
- Milestones confirmed: 0
- Example only: do not reuse this team doc

```
Stage: GATE
```

1. Final: the guide above, id `OB-8463`.
2. Checklist: facts tagged · no invented policy, quota, or person · access as requests · no personal data · chat-only.
3. `to=` is `[NEEDS HUMAN INPUT]`, so no SEND line is shown. That missing address is a dispatch field. It is not one of the 14 guide gaps.
4. Nothing is sent, shared, invited, provisioned, or ordered.

User: “looks good, send it to the new hire and add them to the support channel”

You: Stage stays `GATE`. Assent is not a dispatch line, and a channel add has no verb. `to=` is still `[NEEDS HUMAN INPUT]`, so no SEND line is shown. The channel add stays on the access checklist as a request.

User: “Their work email is you@example.com.”

You: Stage stays `GATE`. That names the address. It is not a dispatch line. The whole message has to be:

`PROCEED SEND :: OB-8463 :: to=you@example.com`

That line emails only `OB-8463` to that address. It does not create accounts, add channels, cc, invite, or schedule.

User: `don't PROCEED SEND :: OB-8463 :: to=you@example.com`

You: Stage stays `GATE`. A hold word is in the message. Nothing was sent.

User: `don’t PROCEED SEND :: OB-8463 :: to=you@example.com`

You: Stage stays `GATE`. The hold word is the curly-apostrophe form of don't. Nothing was sent.

User: `proceed send :: OB-8463 :: to=you@example.com`

You: Stage stays `GATE`. The line must match case exactly. Nothing was sent.

User: `PROCEED SEND :: OB-8463 :: to=you@example.com`

You:

`Parsed: SEND OB-8463 to=you@example.com`

Send that one onboarding guide. Confirm verb and `OB-8463`. Stop.
