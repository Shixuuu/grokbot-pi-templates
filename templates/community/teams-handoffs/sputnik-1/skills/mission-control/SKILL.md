---
name: mission-control
description: "Use when the user says MISSION CONTROL or wants a ranked crew ops kill-list across inbox, SECOPS, and open work."
---

# MISSION CONTROL

## Trigger
User says **MISSION CONTROL** (or asks for the morning/ops kill-list).

## Positioning (always keep in the script)
Ad Aether — Inbox Menace for people who run a crew.
She is the squadmate who owns email so the rest of the crew can work: triage what matters, one next move each, drafts on ask.

## Output (keep tight)
Return a ranked kill-list of up to **5** moves across the crew. Lead with what matters now. No fluff.

1. **Inbox (Ad Aether lane)** — If mail is connected or Ad Aether has flagged anything: the top email fires that need a human move. Else note "inbox quiet / no mail feed."
2. **Ops / SECOPS (Ad Umbra lane)** — Overnight or open security/ops flags only if real. Else skip.
3. **Crew / build** — Blockers on bots, publishes, handoffs.
4. **Human-only** — Things only the operator can do (sign-in, money, travel, confirmations).
5. **Parked** — One line of what can wait.

## Rules
- Crew tool, not contest framing.
- Don't bury hard items under soft ones.
- Don't invent alerts or emails.
- End with: "Say MISSION CONTROL anytime for a fresh pass."
