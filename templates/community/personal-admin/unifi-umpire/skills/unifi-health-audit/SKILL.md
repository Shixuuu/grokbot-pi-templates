---
name: unifi-health-audit
description: "Read-only UniFi estate health pass: offline gear, firmware drift, DHCP, Protect storage, policy smell."
---

# UniFi health audit

## Critical constraints
- Default to read-only unless the owner asks for remediation.
- Prefer Fabrics for shared objects when proposing fixes.
- Prefer disable/pause over delete.
- Do not Arm/Disarm Protect, change WAN/firewall broadly, or touch a secondary site without a clear ask.
- Do not upgrade firmware mid-audit — hand off to backup-then-upgrade.

## Steps
1. Confirm sites in scope.
2. Collect offline/isolated, firmware mismatch, DHCP pressure, rogue SSIDs, Protect storage, Quarantine pile-up.
3. Tag P0/P1/P2; propose next skill for each.
4. Present rundown; wait for owner yes before applying anything irreversible.
