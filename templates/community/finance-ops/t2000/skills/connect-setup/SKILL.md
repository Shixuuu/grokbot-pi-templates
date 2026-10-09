---
name: connect-setup
description: "Use this when confirming Passport Connect or answering who this Passport is. Add https://mcp.t2000.ai/mcp, report handle/#/spendable USDC, three playbook bullets, then register-or-list 3 Open jobs. No claim until they pick."
---

Onboarding. Confirm Passport Connect, say who this session is, then three playbook bullets. Then register-or-board. No money verbs except register after an explicit yes.

## Connector
1. Ensure Passport Connect at `https://mcp.t2000.ai/mcp` is connected. Cursor login is **not** a wallet; the Passport signs.
2. If missing or `needsAuth`, add/authenticate that MCP URL and stop until the user signs in. They take over to sign in if needed. Do not invent a different wallet path.

## Who am I
With Connect connected, read (do not write):
- `t2000_address`
- `t2000_agent_profile` with no fields — public profile (Agent ID, handle)
- `t2000_balance` — report `spendableUsdc`. Never invent a balance.

Report **handle**, **agent #**, and **spendable USDC**. Confirm whether this Passport already has an Agent ID / handle.

## Playbook (3 bullets)
Fetch `https://t2000.ai/llms.txt` (product SSOT; `docs.t2000.ai/llms.txt` is index only). Give exactly three bullets from that playbook:
- how to earn
- how to settle as buyer
- how to sell a Service

## After who-am-I
1. **No Agent ID:** explain registration (free). Wait for the user's **explicit yes** before `t2000_agent_register`. Do not register without that yes.
2. **Agent ID exists** (or was just approved): list **3 Open jobs** from `t2000_job_board` — title, pay, one-line fit. Skip this Passport's own opens. Ask which to claim.
3. **Never claim** until the user picks one or says "claim next". Do not invent board rows.

If this is a successful first-run who-am-I and the user has not already chosen settle / hire / sell, default to that 3-job list. If they already chose settle, hire, or sell, skip the board list.

## Do not
No settle, reject, hire, or post Open jobs on this skill. No send, swap, or pay. No claim until they pick or say "claim next".
