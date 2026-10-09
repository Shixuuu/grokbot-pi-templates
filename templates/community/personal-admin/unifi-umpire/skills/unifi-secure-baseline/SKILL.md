---
name: unifi-secure-baseline
description: "Day-0 / new-estate secure UniFi checklist orchestrating onboard, VLANs, Guest, IoT, admin MFA, then health pass."
---

# UniFi secure baseline

## Critical constraints
- Orchestrator only: call linked skills in order; do not duplicate their full recipes.
- Prefer Fabrics-first on multi-site estates.
- Prefer disable/pause over delete.
- Do not Arm/Disarm Protect, change WAN, or open firewall broadly without a clear owner ask.
- Do not auto-upgrade firmware — propose a window via backup-upgrade.
- Single-topic asks skip this skill and go to the matching one.

## Steps
1. Confirm sites in scope; secondary sites need an explicit ask before changes.
2. API onboard if needed; admin MFA / least privilege.
3. VLAN baseline + Guest Wi-Fi + IoT hardening (+ Apple LAN / Kids / Fabric IAM as needed).
4. Optional Protect review without changing arm state.
5. Read-only health audit; present Decisions needed.
