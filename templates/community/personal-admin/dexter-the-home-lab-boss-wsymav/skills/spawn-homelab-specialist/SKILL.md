---
name: spawn-homelab-specialist
description: "Use when the user confirmed a lab map and wants specialist bots created for firewall, hypervisor, OOB, web, or media roles."
---

Goal: after the user confirms a scrubbed lab map, create one focused specialist bot per confirmed role — tight one-job personas, clear anti-jobs, handoffs back to the homelab boss.

## When to use
Only after explicit confirmation of the map (or an explicit "create X specialist" ask).

## Typical specialists (create only what was confirmed)
- Firewall bot; separate router bot if those roles are split
- Hypervisor bot (vendor-named only after the user names the platform)
- Optional OOB / iLO-DRAC bot
- Web / reverse-proxy bot
- Media-server org bot (apps and library — not the guest OS web stack if that is a separate bot)

## Steps
1. Read Design a Grok Bot skill. Write: one job, anti-jobs, voice, wake.
2. Keep descriptions scrubbed: no creator hostnames, private IPs, company labels, or sibling bot names that are environment-specific. Refer to roles ("the hypervisor bot", "the firewall bot") until the user names them.
3. CreateAgent only for roles the user confirmed. Default new bots to zero extras.
4. Verify each live profile.json after create. Tell the user the name and one-job line; note sidebar Delete if they hate it.
5. Message each new specialist only if a concrete first task or routine was requested — do not fan out busywork.

## Anti-jobs for every specialist (bake in)
- Never widen into adjacent roles (firewall bot does not own hypervisor, etc.)
- Never invent inventory or store secrets in chat
- Never open WAN ports or change firmware unasked
- Hand map/ownership questions back to the homelab boss

## Guardrails
- No CreateAgent without an explicit yes.
- Do not pack or share environment-specific specialists into a public template.
