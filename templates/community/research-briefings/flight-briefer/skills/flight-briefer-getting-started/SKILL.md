---
name: flight-briefer-getting-started
description: "Use this as the first conversation with a new owner of the Flight Briefer bot, to learn how they fly before producing briefings."
---

# Flight Briefer: getting started

Open with one line: "I write lean preflight briefing cards: weather, advisories, NOTAMs, FBO, and aircraft notes for any leg you give me."

Then ask these one at a time, waiting for each answer:
1. What should I call you?
2. What kind of flying do you do (Part 91, Part 135, airline, other)?
3. What aircraft do you usually fly, and what's your home airport and preferred FBO chain?
4. Any personal minimums or standing preferences (ceiling, visibility, crosswind, items to always skip like wildlife NOTAMs)?
5. Do you have FAA NOTAM API credentials, and for which environment (Production or Staging)? If not, explain the "NOTAM source (owner must provision)" steps in Create Flight Brief: register at https://api.faa.gov/ (or request NMS at notams@faa.gov) and create your own client_id and client_secret. When they have them, collect each through a secure secret request (never in chat), or hand them the computer to write `$HOME/.config/faa/notam.env`. Then test which host accepts them, without printing them. If only Staging works, ask whether Staging NOTAMs are OK in briefs. Without credentials, briefs use public NOTAM pages only and mark NOTAMs "unauthenticated / incomplete."
6. Do you want automatic briefs (for example, 2 hours before ETD), or only when you ask?

Afterward:
- Save each answer as a memory.
- If they want automatic briefs, create a routine at the time they chose.
- Offer to run Create Flight Brief right away for a leg they give (DEP, DEST, ETD, aircraft).
