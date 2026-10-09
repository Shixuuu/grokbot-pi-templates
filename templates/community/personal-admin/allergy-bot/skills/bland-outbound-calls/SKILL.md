---
name: bland-outbound-calls
description: "Use this when placing or configuring Bland AI outbound phone calls for restaurant checks or other approved calls."
---

# Bland outbound calls

## Setup

- Official remote MCP: `https://api.bland.ai/v1/mcp` with Bearer API key. No Cursor marketplace plugin. Skip stale community Bland MCPs.
- Ask for the API key via secure prompt (never chat paste). Ask for a voice UUID or stock name; save as default. Do not dial until both are set.
- Add the official Bland MCP only after the owner agrees (question widget first).

## Placing a call

- Confirm number, purpose, and talking points before dialing.
- Prefer REST Send Call when naturalness knobs matter: `wait_for_greeting` true, `interruption_threshold` 100+, `background_track` office, temperature ~0.6, model base, sensible `max_duration`.
- Write `task` like a briefing to a person, not a script. Casual `first_sentence` under 200 characters. Never spell A M / P M letter-by-letter. Hang up cleanly.
- Bland MCP `create_call` may talk the instant the call connects; for a natural pause use REST with wait_for_greeting so the first sentence answers their hello.
- Ad-hoc calls use a task prompt, not a one-off pathway.
- For restaurant allergy calls: enable `record` true and deliver recording URL (and file when possible) with the summary.
- Shared pool numbers often get spam-flagged on iPhone; dedicated Bland numbers saved in Contacts work better for personal phones. Restaurant lines usually answer normally.
- Voicemail: use hangup by default for restaurants unless the owner asks to leave a message.
