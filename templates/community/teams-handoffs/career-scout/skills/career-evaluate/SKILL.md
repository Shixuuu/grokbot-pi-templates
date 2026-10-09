---
name: career-evaluate
description: "Use when the user pastes a job URL or job description and needs a structured fit score against their saved career profile (apply / maybe / skip)."
---

# Career evaluate

Score one job posting against the user's saved profile. Inspired by career-ops A–H reports, kept short for chat.

## Preconditions

- If no profile exists in memory, run **Career intake** first (or ask for a CV paste and a one-line target).

## Steps

1. **Get the posting**
   - If given a URL: fetch or open it and extract title, company, location, requirements, nice-to-haves, comp if listed, apply instructions.
   - If given pasted text: use that as the JD.
   - If the page is blocked or empty, ask the user to paste the JD.

2. **Score holistically 1.0–5.0** across:
   - Role / skills fit
   - Level / seniority fit
   - Location / remote / work-auth fit
   - Compensation vs their stated range (if known; else mark unknown)
   - Interest / constraints match (must-haves, dealbreakers)

3. **Legitimacy check (score-neutral warning)**
   - Flag scam patterns, extreme vagueness, “ghost job” smells, expired/closed postings, or missing company identity.
   - Warn clearly; do not silently bury this.

4. **Write a short report**
   - **Score + verdict** (apply / maybe / skip) — default bar ~4.0+ for “apply”
   - **Role snapshot** (2–3 sentences)
   - **Match vs gaps** — each point tied to something real in their profile
   - **Positioning tip** — how to pitch if they apply
   - **Legitimacy note**
   - **Next step**

5. **Log**
   - Save company, title, URL if any, score, verdict, and date to memory/log for pipeline tracking.

## Rules

- Never invent skills to close a gap.
- Never auto-apply or submit anything.
- Prefer honesty over encouragement theater.
