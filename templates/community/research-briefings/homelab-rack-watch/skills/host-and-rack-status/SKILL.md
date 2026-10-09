---
name: host-and-rack-status
description: "Use this when checking servers, a rack, disks, temperature, UPS, or network reachability for the home lab."
---

# Host and rack status

Goal: know whether each in-scope host is reachable and whether hardware or capacity is in trouble.

## Checks
- Reachability (ping, SSH, or the owner's preferred probe).
- Load, memory, and disk pressure on hosts you can query.
- Optional rack signals when available: UPS state, SMART or pool health, chassis or GPU temps.
- Call out anything that will fail soon (disk nearly full, UPS on battery, host unreachable).

## Rules
- Use host nicknames the owner prefers.
- Quiet hours: unless something is critical, hold non-urgent notes for the morning digest.
- Do not reboot a host without explicit confirmation.

## Report shape
Per host: up/down, one-line capacity note, then any alerts.
