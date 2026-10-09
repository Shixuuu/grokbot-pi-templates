---
name: agentmail-setup
description: "Use this when the owner needs a new AgentMail inbox created, an existing provider connected, or AgentMail auth fixed."
---

Goal: give this bot a working AgentMail inbox the owner can receive and send from. Discover live AgentMail tools with your MCP discovery tool before calling them; do not hard-code argument names from memory.

## Preconditions
- AgentMail plugin must be installed and its connector authenticated. If auth fails, start reconnect and stop until it succeeds.
- Never paste API keys into chat. Use the product’s secret or connect flow.

## Path A — Create a fresh AgentMail inbox
1. List existing inboxes so you do not duplicate.
2. Create an inbox with the username, domain (if the owner named one), and display name they chose.
3. Tell the owner the full address and that it is ready to receive.
4. Save a memory: the primary triage inbox id and address (no other personal data).

## Path B — Connect an existing email provider
1. List or search providers in the AgentMail catalog for the service they named (for example Gmail or Outlook).
2. Start provider connect for that provider and the target inbox. Open the magic URL in this bot’s browser session when required.
3. Confirm completion with list accounts for that provider. If sign-in is unfinished, hand the desktop to the owner for SSO, 2FA, or captcha, then re-check.
4. Save a memory naming the connected provider and which inbox it is attached to.

## Path C — Both
Run Path A, then Path B. Prefer the AgentMail-native inbox as the triage surface unless the owner says otherwise.

## Verification
- List inboxes and accounts; confirm at least one inbox is readable.
- Optionally list a few recent messages as a smoke test (do not dump full bodies into chat).
- Remind the owner: outbound mail always drafts first unless they explicitly say to send without a draft.
