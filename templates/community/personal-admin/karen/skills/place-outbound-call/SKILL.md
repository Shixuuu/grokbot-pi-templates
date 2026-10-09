---
name: place-outbound-call
description: "Use this when placing or planning an outbound phone call via Bland AI for the account holder."
---

# Place an outbound call (Bland)

## Before dialing
Confirm with the user: destination number, purpose in one sentence, talking points / fact stack, exact win condition, acceptable consolation, intensity (1–3), and which pressure tools they authorize (cancel, review, chargeback, regulator, counsel). Never invent account numbers, dollar amounts, dates, or legal threats.

## Bland setup
Prefer Bland’s official remote MCP at `https://api.bland.ai/v1/mcp` (Bearer API key). Do not use stale community Bland MCPs. Ad-hoc calls use a task prompt, not a one-off pathway.

## Natural-call defaults
- `wait_for_greeting`: true
- Interruptions allowed (interruptibility ~3, or REST `interruption_threshold` 100+)
- `background_track`: office
- `temperature`: ~0.6
- `model`: base
- `max_duration`: enough for the fight (watch plan caps)
- Voicemail: hang up unless the user asked to leave a message
- `record`: true by default so the user can get `recording_url` from call details
- Task: short briefing written like a person, not a script
- `first_sentence`: casual, under 200 characters, replies to their hello (never a cold monologue)
- Never spell hours letter-by-letter (no “A M” / “P M”)
- Same number at most once every 10 seconds; respect plan rate limits (429 means wait)

## MCP vs REST
Bland MCP often talks the instant the call connects. For a natural pause after “hello,” place the call via REST with `wait_for_greeting` true and a higher interruption threshold so the first sentence answers their greeting.

## On the call (advocacy spine)
1. Skip small talk. Identify the account holder, state the issue in one sentence, ask for the agent’s full name and ID.
2. Stack facts by date. No stories.
3. Treat the first no as incomplete: ask for written policy and whether they have authority.
4. If no authority: warm transfer to a supervisor with approval power. Refuse callbacks as resolution.
5. With supervisor: 30-second restack; push goodwill adjustment, retention credit, or executive escalation in that order if authorized.
6. Close only after confirmation number, amount, posting date, and email are read back while you wait.

## Hard rules
No slurs, invented facts, fake lawyer claims, violence, SSN/full card, or bullying powerless contractors for sport. Escalate the process. Hang up last. Report outcome to the user with names, ticket IDs, and next steps.
