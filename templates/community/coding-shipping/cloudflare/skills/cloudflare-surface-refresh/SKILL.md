---
name: cloudflare-surface-refresh
description: "Use this as the body of the weekday cf-surface-refresh routine (and on demand) to detect cf releases or breakage, upgrade safely, re-verify skills, refresh inventory, and notify the owner only when something relevant changed."
---

# cf surface refresh (weekday routine)

The routine runs on weekdays at the owner's chosen local time, stored with an explicit IANA timezone in
memory. It must be cheap and silent when nothing changed. It is read-only against Cloudflare.

## 1. Version check
- Read `last_cf_version` and `last_refresh_at` from memory.
- Run `npm view cf version` and `npm view cf dist-tags --json`. The `latest` tag is the one to track.
- Run `cf --version` outside any project directory.
- If npm is newer: read the changelog section between the two versions from
  `https://raw.githubusercontent.com/cloudflare/cf/main/packages/cli/CHANGELOG.md`. Release tags live at
  `https://github.com/cloudflare/cf/releases` (tag format `cf@<version>`). Also skim the Cloudflare
  changelog (`https://developers.cloudflare.com/changelog/`) for API or product items that touch the owner's
  products in memory.

## 2. Upgrade (only if newer)
- Upgrade with Node 22's npm (see `cloudflare-cf-basics`). Keep the previous version number so you can pin
  back with `npm i -g cf@<old>` if the smoke test fails.
- If the changelog mentions breaking changes (renamed groups, moved commands like `cf telemetry` becoming
  `cf cli telemetry`, flag changes), grep your skills for the affected commands.

## 3. Smoke test (read-only, about 10 calls)
- `cf accounts tokens verify | jq -r .status` must be `active`.
- `cf cli search "list DNS records in a zone"` must include `cf dns records list`.
- For each skill that lists verified commands, run `<command> --help` for 3-5 of them, rotating through
  the skills across days, and check that the flags still exist. Run one real read per product the owner uses
  (for example `cf zones list --per-page 5`, or `cf workers list` with `CLOUDFLARE_ACCOUNT_ID`).
- Re-check known gaps: does `cf cli search` now find Worker tail, Worker routes, or GraphQL analytics? If
  it does, update the skills and remove the workaround.
- If a verified command now fails: mark it `BROKEN in <version>` in the skill with the exact error, and
  find the replacement with `cf cli search`. If nothing works, roll cf back to the previous version and
  tell the owner.

## 4. Inventory drift
Compare memory counts against live counts for the in-scope zones, Workers, DNS record counts per zone
(paginate), and tokens (status and expiry). Update memory. Mention drift only if it wasn't done by you.

## 5. Report
- If nothing changed (same version, smoke test passes, no drift): **send nothing.** Update
  `last_refresh_at` only.
- Otherwise, send the owner ONE short note: the new version and 1-3 changes that matter to their setup,
  which skills you updated or marked broken, any drift, and any action needed from them (for example, a
  token scope). No raw JSON and no ids.
- Update `last_cf_version` and `last_refresh_at` in memory.

## Guardrails
- Never run mutating cf commands in the routine, and never pass `--force`.
- If npm or GitHub is unreachable, retry once and then stay silent. Tell the owner only if it's been failing
  for 3+ consecutive runs.
