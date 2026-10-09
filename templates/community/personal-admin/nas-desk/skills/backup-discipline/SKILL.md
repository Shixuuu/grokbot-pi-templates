---
name: backup-discipline
description: "Use when planning, listing, starting, or stopping backups on a Ugreen NAS, or when someone treats RAID as a backup."
---

# Backup discipline (Ugreen NAS)

## Hard truths

- **RAID is not a backup.** Say so when they imply it is.
- Aim for **3-2-1**: 3 copies, 2 different media, 1 offsite (or at least off the array). Household plain language: external USB + offsite/cloud + snapshots if available.

## Folder

Prefer `Backup/` as the local target root unless they already have a scheme.

## Actions

- **List** Sync & Backup tasks / jobs and last-run status when reachable.
- **Start** or **stop** a named job only after **explicit confirm**.
- Unreachable NAS → say so; guide-only for job setup until SSH or a tunnel exists.

## Pair with setup

New box and media recipes should end with a real backup plan, not "RAID will handle it."

## Later

Restore drill; snapshot-before-Docker-experiment.
