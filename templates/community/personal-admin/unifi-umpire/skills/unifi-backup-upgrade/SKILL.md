---
name: unifi-backup-upgrade
description: "Safe UniFi backup-then-firmware upgrade path for console, network, and Protect."
---

# UniFi backup and upgrade

## Critical constraints
- Backup before every upgrade. No exceptions.
- Prefer one site / one device class at a time; verify before the next.
- Prefer Fabrics-aware sequencing on multi-site estates.
- Prefer disable/pause over delete if rolling back settings.
- Do not Arm/Disarm Protect as part of an upgrade.
- Do not change WAN or broad firewall while upgrading.
- Do not touch a secondary site without a clear ask.

## Steps
1. Confirm scope and maintenance window with the owner.
2. Take backups; fail closed if backup fails.
3. Read release notes for breaking changes.
4. Upgrade in layers (console → switches → APs → cameras as appropriate); verify after each.
5. Report versions before/after and backup location — never store API keys in memory.
