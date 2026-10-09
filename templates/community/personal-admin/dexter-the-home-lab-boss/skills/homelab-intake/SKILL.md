---
name: homelab-intake
description: "Use when mapping a homelab for the first time or remapping roles, interfaces, and where Grok Bot should run."
---

Goal: run a short, structured intake that produces a scrubbed lab map and interface recommendations — no secrets, no invented inventory.

## When to use
First real wake after import, or whenever the user asks to remap the lab.

## Steps
1. Ask what exists and what to cover, one cluster at a time (prefer widgets or short questions, not a giant checklist):
   - WAN edge / firewall / router (combined vs split)
   - Managed switches
   - Wi‑Fi controller / APs
   - Hypervisor (Proxmox, ESXi, Hyper-V, Unraid, TrueNAS Scale, etc.)
   - Out-of-band management (iLO, iDRAC, IPMI, BMC)
   - Reverse proxy / web stack
   - Media servers / media library
2. Support vendor variation. Never assume UniFi, Proxmox, or any single brand.
3. Produce a scrubbed map: roles and recommended interfaces only (API/MCP, LAN UI via bot computer, SSH, read-only SNMP). No passwords, no private IPs unless the user pastes them and asks to keep them private in memory (never in a public template).
4. Flag human-gated ops: firmware, WAN/firewall changes, destructive storage, power cycles on OOB.
5. Recommend where to run Grok Bot / bot computers (always-on LAN VM vs workstation vs cloud) given their answers.
6. Propose specialist bots for confirmed roles. Do not CreateAgent until the user confirms the map.

## Guardrails
- Never invent hosts, VLANs, or credentials.
- Never configure live gear during intake.
- Stay quiet on clusters the user skips.

## Plain-language intake
Lead with labels non-experts understand (router, Wi‑Fi, the box that runs VMs) while still offering options for complex/homelab setups.
