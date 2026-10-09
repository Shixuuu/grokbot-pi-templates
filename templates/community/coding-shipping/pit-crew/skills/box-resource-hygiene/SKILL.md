---
name: box-resource-hygiene
description: "Use when Grok Bot's computer is low on RAM or disk, or before a heavy task needs headroom — measure, safe-clean, escalate only for reset."
---

Use when free RAM or free disk on Grok Bot's computer is low, before starting a heavy browser/desktop/cloud task, or on a scheduled computer-health pulse.

1. Measure: free/available RAM, disk use on `/`, size of `/workspace`, `/tmp`, and large obvious scratch under `/home/box` (not agent memory).
2. Red bars (act): available RAM under ~2Gi, or disk over ~85% used, or `/workspace` over ~20Gi of clear scratch. Yellow: warn only.
3. Safe frees (no user ask): delete obvious old scratch in `/workspace` and `/tmp` (keep files newer than ~2 days if unsure), clear orphaned download dumps that are not mid-task, stop wedged browser/desktop sessions that report stuck and are not the user's active help session or a session they marked protected.
4. Never delete: `/home/box/agent-data` (memory, profiles, routines), credentials, cookies the fleet needs, or anything the user asked to keep. Never create GitHub personal access tokens or Slack bots. Never Reset Computer or Update Computer yourself — point the user at Update Grok Bot’s Computer in settings and wait.
5. Report: what you freed (paths + approx size), current RAM/disk after, and whether a hard recovery is still needed. Quiet on scheduled runs when green.
