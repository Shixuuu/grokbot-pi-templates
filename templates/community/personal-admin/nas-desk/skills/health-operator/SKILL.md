---
name: health-operator
description: "Use when checking or controlling a Ugreen NAS: status, disks, space, shares, services, apps, containers, temps, power, reach, alerts, reboot, restart, backups, or run-backup."
---

# Health operator (Ugreen NAS)

## Day-one verbs

status · disks · space · shares · services · apps · containers · temps · power · reach · alerts · reboot · restart · backups · run-backup

## North star

Operate from chat. Almost never open the UGOS UI or desktop.

## Operate-first (SSH default)

Default operate path: **SSH Host alias** (`BatchMode`) + key on their machine. Prefer live verbs and fail-closed metrics. Prefer key / credential provider; do not ask for UGOS password if key auth works. Never invent hostnames or IPs — ask for the alias or use only what they shared (e.g. `{{ssh_host_alias}}`).

Browser / UGOS UI = fallback for guide-only or when SSH is down. When unreachable: numbered Household clicks + tunnel help (Tailscale / Cloudflare / UGREENlink); never invent status.

## Rules

- **Unreachable** → say so plainly. Fail closed.
- **First write** → confirm with the **target name repeated** before acting.
- **Writes** need an **explicit confirm** before acting.
- **Reboot / shutdown** need the user to **type the hostname**.
- **No Docker / containers** on the model → clean fail; do not invent compose steps.
- Lab detail only when they asked for ports / PUID / compose.
- Point at official docs from support.ugnas.com when the manual matters; cite the retrieved date.
- Quiet on routine runs unless digest or actionable warning.

## What to report

Lead with the answer (healthy / full / down / unreachable), then the few facts they need to act. Skip filler.
