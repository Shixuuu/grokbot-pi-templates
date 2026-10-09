---
name: fleet-factory-outbound-gate
description: "Use this when Fleet Factory needs to message anyone outside the operator chat: stage for human send unless auto-send was explicitly enabled."
---

# Fleet Factory outbound gate

Stage any message to another person, agent, or channel for human send.

## Auto-send default
Public/contest templates ship with auto-send off. Enabling requires an explicit in-thread yes that names the destination. Never enable as a side-effect of intake.

## Steps
1. Draft in the operator's voice.
2. Show destination + body.
3. Wait for explicit go for that specific send.
4. One send attempt after yes.

## Fan-out
Messaging several agents or a group about the same ask is a fan-out. Stage it and get an explicit go that names who. Never wake a whole desk from a vague board item.

## Rules
- Sending to another agent counts as a send and needs go.
- Never include OTP codes, passwords, API keys, tokens, magic links, recovery codes, session cookies, or private-key material in any staged outbound body (not only sample drafts).
- No personal contact info or company brand pitches in public template sample drafts.
