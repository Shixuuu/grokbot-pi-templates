---
name: tek-tribe-grading
description: "Use when grading an app, stack, or how a capability is achieved through a stack — chosen pick, ≥3 why-nots, fit, last-checked timestamps, costs/prereqs, web research, and owner notes when connected."
---

# App / stack grading

Use whenever someone asks you to grade an app, product, library, tech stack, or how a capability can be achieved through a stack.

## Hard rules
1. Do not invent features. Only grade what you verified from public sources, docs, pricing pages, live checks, or owner notes they connected.
2. One chosen pick — the tool, stack, or path you recommend for the stated job, with a plain why.
3. At least three clear why-nots — concrete alternatives or failure modes and why they lose for this job.
4. Last-checked timestamps — every factual claim that can age gets a last-checked date/time in the user's timezone.
5. Lean disk notes — short durable notes under `this seat's workspace/grades/`; update `INDEX.md`.
6. Prefer sovereign software — judged against five AI-building principles: (1) you own your data and the source of truth; (2) local-first where it matters; (3) open / inspectable; (4) no extractive lock-in, both sides win; (5) honest claims only (no fake features, no fake green). Flag extractive lock-in. Export/portability is evidence under principles 1 and 4, never the headline.
7. Public SEAL — no personal names, private chat servers, private paths, or credentials.
8. **Web field research required** before a real grade: what others use for this job, plus public opinions/reviews/docs. Cite Sources. If thin, say Unknown.
9. **Owner notes when connected** — if they pointed you at computer files or note sources, read them and fold constraints in. Summarize; do not paste private note bodies into public grades.
10. **Costs / prereqs (motorcycle rule)** — every real grade states one-time cost, recurring cost, time, tools needed, and prereq order before spend. Never invent Live dollar amounts; use Unknown, public list price, or “free tier / paid — verify”. Same honesty for any dollar figure.
11. **Lineage & keys of power** — every tek grade gets a Lineage & keys block with five fields, each sourced and dated or Unknown: (1) origin, (2) stated first purpose at launch, (3) evolution since (acquisitions, pivots, license or price changes, breaches), (4) creators and what they served before and since, (5) keys of power now: who owns, funds and governs it, and who can change the terms, raise the price, read your data or shut it off. Weighting: current key-holders outweigh the founding story; drift between the stated purpose and how it earns money today is a warning flag; an open license plus self-hosting plus data export lowers key-holder risk; when two teks grade close on ability, the one whose keys sit in more trustworthy, more spread-out hands wins.

## Modes
### App / product grade
Pick for the stated job + ≥3 why-nots + sources + last-checked + sovereign note.

### Capability-via-stack
Name the capability. Pick one stack path (tool combination). ≥3 why-nots (other paths or weak joints). Note what fits and what fights.

### Stack chemistry
Grade the set as a system. Call out seams that fit and seams that fight. Still: overall pick path + ≥3 why-nots.

## Output shape
```
Pick: <name or stack path> — <one plain why>

Why-nots:
1. <alt or failure> — <why it loses>
2. ...
3. ...

Works-with: <fit notes | none noted>
Owner notes used: <none | short summary of constraints>
Field (what others use / say): <short, cited>
Last checked: <date time zone>
Sources: <public URLs or doc titles>
Sovereign note: <which of the 5 principles hold · which slip, incl. any extractive lock-in>
Lineage & keys:
- Origin: <sourced | Unknown>
- First purpose: <quote/link | Unknown>
- Evolution: <major turns | Unknown>
- Creators: <who, what they serve | Unknown>
- Keys now: <owner, funder, who can change terms/price/data/shutoff | Unknown>
Costs / prereqs:
- One-time: <Unknown | public figure | free>
- Recurring: <Unknown | public figure | free>
- Time: <setup / learning order>
- Tools: <what must already exist>
- Prereq order: <A before B before C>
```

## Unknown
If you could not verify something, say Unknown. Do not fill gaps with guesses.

## Disk
Write `this seat's workspace/grades/<slug>.md` and one INDEX line: `slug — one-line pick — last-checked`.
