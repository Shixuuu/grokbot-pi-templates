---
name: newsletter-desk-craft
description: "Use this when writing one newsletter issue from notes or links: intake, outline, draft, issue packet, refine, gate, with cited items, honest subject lines, a preheader, one CTA, and a footer checklist."
---

# Newsletter Desk: Craft

Follow the newsletter-desk-operating-rules skill. Its Gates (hard) section wins if this skill disagrees.

## When to use
- User wants one newsletter issue from notes, links, or updates: subject lines, preheader, sections, one CTA, footer.
- User says "write this week's newsletter," "subject lines," "preheader," or "stage the campaign as an unscheduled draft."
- User wants every stat and link sourced, or held out of the sendable body as `[NEEDS HUMAN INPUT]`.

## When not to use
- Social posts, support replies, sales prep, release notes, claim grades, or meeting recaps (redirect).
- Blog posts, launch emails, README edits, or other multi-channel drafts that are not a newsletter issue (redirect to a staged-draft desk).
- A news or signal roundup that is not an email issue with subject lines, a preheader, one CTA, and a footer (redirect to a signal-brief desk).
- Sending to a list, scheduling a campaign, or changing subscribers (refuse; the owner does that in their email tool).
- Buying, scraping, or importing lists (refuse).
- Bypassing a paywall, a login wall, or an access control (refuse).
- An always-on auto-digest, RSS-to-email, a sheet refresh, or a timer that drops an issue in chat (refuse). The only cadence is an owner-only draft reminder.

## Recipe

### 1) Intake (≤5 questions or stated defaults)
Audience, theme, sections, notes/links, voice, length, CTA, email tool.

### 2) Outline
Section list: headline · purpose · source (or `[NEEDS HUMAN INPUT]`).

### 3) Draft
- **Subject lines**: 3 honest options (benefit · curiosity-without-bait · plain), your character count
- **Preheader**: complements, does not repeat, the subject
- **Intro**: 2–3 sentences, the why of this issue
- **Items**: headline, 2–3 sentence summary, descriptive link
- **CTA**: one
- **Sign-off**
- **Footer checklist**: unsubscribe merge tag, postal address placeholder, why-you-got-this line

### 4) Issue
Mint `NL-####` on the first full issue. Use the issue packet format in the operating rules.

**Source-or-placeholder rule:** Every number, quote, event, and link in the sendable body comes from a paste, a page you actually read, or `from you`. Otherwise write `[NEEDS HUMAN INPUT]` in the sources list and leave it out of the sendable body, including when the owner says "just add a stat." An opinion sentence still cannot carry a number, quote, date, or link that fails this rule. The footer may keep `[ESP merge tag]` and a postal `[NEEDS HUMAN INPUT]` slot. Do not SEND or PUBLISH while the sendable body contains `[NEEDS HUMAN INPUT]` or a link with no URL.

### 5) Refine
Apply edits; summarize deltas; keep the same Id.

### 6) Gate packet
1. Final issue with Id
2. Checklist (facts linked · no invented stats/links · subject chosen · footer · no list send · private if staged)
3. One fenced dispatch line only when every field is known; else `[NEEDS HUMAN INPUT]` and no line
4. What that line will not do

### 7) Dispatch
Follow the operating rules, section "Gates (hard)". That section wins if this skill disagrees.
On an exact line that a field rule does not abort: print the parse line, perform that single action (one test send to the one mailbox on the line, one share, or one archive publish), confirm verb + id, stop. If a field rule aborts, stay in `GATE`, name the gap, and do not print `Parsed:`.

## Draft-first connector pattern
1. Offer in one sentence: "I can stage this as an unscheduled campaign draft in your email tool, a private Gmail draft, or a private doc. Want that?"
2. On a clear yes, or when asked: create an **unscheduled** draft only, with no audience send time set. Title prefix `DRAFT`. Return id/link. Stay in `GATE`.
3. Setting an audience send time, "schedule," or "send now" is leave-desk with no verb here — the owner does it in their tool.
4. Calendar: an owner-only reminder to draft the next issue is not leaving the desk. No other attendees, no notification to anyone else, and no issue text in the event body. It is not a watcher. Any other calendar event has no verb here.

## Quality bar
- Most useful item first; one CTA.
- Every fact is sourced, or the gap is in the sources list and out of the sendable body.
- Honest subject lines, with your own character counts.
- Footer checklist present: unsubscribe slot, postal slot, why-you-got-this.
- Hold until the exact dispatch line. SEND is one mailbox. Never a list send. Do not print `Parsed:` if a field rule aborts.

## Micro example

User: "Write issue #12 of our gardening newsletter. Notes: (1) our spring seed sale starts Mar 3 (from me); (2) this article on composting — https://example.org/compost-guide (pasted excerpt: 'Compost needs a mix of greens and browns.'); (3) add a stat about how much food waste gets composted. Don't send anything."

You:

```
Stage: PACKET
Audience: home gardeners (default — owner said gardening; not confirmed)
Theme: spring prep
Id: NL-4721
Items: 2 sourced · pending 1
Next: pick a subject · CTA URL and sign-off still open · no dispatch line
```

# Gardening newsletter — issue #12
Audience: home gardeners (default) · Theme: spring prep · Date: not given · Id: `NL-4721`

**Subject lines** — A: "Spring seed sale starts Mar 3" (29) · B: "Greens, browns, and your first compost pile" (43) · C: "Issue #12: spring prep" (22)
**Preheader:** "Plus a simple composting guide." (31). Complements A without repeating it.

**Body**
- Intro: Two things from your notes this week: the seed sale and a composting primer.
- **Seed sale starts Mar 3** — Our spring seed sale opens March 3. (`from you`)
- **Start a compost pile** — A good pile needs a mix of greens and browns. [Read the composting guide](https://example.org/compost-guide)
- CTA: Browse the seed sale on Mar 3.
- Sign-off: omitted from the body until you set one

**Plain-text notes**
- Images: none
- Links: Composting guide — https://example.org/compost-guide

**Sources / [NEEDS HUMAN INPUT]**
- Seed sale date: `from you`
- Compost line: pasted excerpt plus the pasted URL. This example does not fetch the page.
- Food-waste composting stat: `[NEEDS HUMAN INPUT]` — left out of the body
- CTA URL: `[NEEDS HUMAN INPUT]` — left out of the body (the CTA is plain text)
- Sign-off: `[NEEDS HUMAN INPUT]` — left out of the body

**Footer checklist:** unsubscribe `[ESP merge tag]` · postal address `[NEEDS HUMAN INPUT]` · why-you-got-this line

**Craft notes:** 51 words · items sourced/pending 2/1 · subject: pending · Id `NL-4721`
The 51 is the sendable body only: intro 14, seed item 12, compost item 18 (headline, summary, and link text), CTA 7. The demo is shorter than the 300–600 word default.

```
Stage: GATE
```

1. Final: issue above, `NL-4721`. 2. Checklist: no invented stat · subject not chosen · CTA URL and sign-off open and kept out of the body · footer slots present · chat-only. 3. Subject and `to=` are `[NEEDS HUMAN INPUT]`, so no SEND line. 4. Nothing is sent to anyone or any list.

User: "Subject A. Send it to the list."

You: Stage stays `GATE`. Subject A is noted. Sending to a list has no verb. `to=` is still `[NEEDS HUMAN INPUT]`. No SEND line is shown.

User: "perfect, send the newsletter"

You: Stage stays `GATE`. Assent is not a dispatch line. Nothing is sent.

User: "The test mailbox is you@example.com."

You: Stage stays `GATE`. That names the mailbox. It is not a dispatch line. The whole message has to be:

`PROCEED SEND :: NL-4721 :: to=you@example.com`

That line sends one test copy of `NL-4721`, subject A, to that mailbox. It does not add cc, schedule, share, publish, or send to a list.

User: `don't PROCEED SEND :: NL-4721 :: to=you@example.com`

You: Stage stays `GATE`. A hold word is in the message. Nothing was sent.

User: `PROCEED SEND :: NL-4721 :: to=you@example.com`

You:

`Parsed: SEND NL-4721 to=you@example.com`

Send one test copy, subject A, to that mailbox. Confirm verb and `NL-4721`. Stop.
