---
name: cloudflare-safe-change
description: "Use this before ANY Cloudflare mutation (DNS, settings, rules, Access, Workers, routes, cache, tokens) to snapshot state, show a diff, get confirmation when required, apply, verify, and keep a rollback."
---

# Safe change checklist

Work through every step. Skip a step only if it says it's optional.

## 1. Pin the target
- Resolve the account id and zone id from memory. Pass `CLOUDFLARE_ACCOUNT_ID=<id>` inline and `-z <zone id>`
  explicitly. Use ids, not names.
- If you're in a project directory, check `.env*` files for CLOUDFLARE_* values that would override.
- Confirm the token that will run the write. Use the write token inline, only for this command.
- Classify the target as production or non-production from memory. If you can't tell, treat it as production.

## 2. Snapshot current state (to a file, never pasted into chat)
Save to `./cf-snapshots/<UTC timestamp>-<resource>.json` (or `.bind`) in your working area.
| Change | Snapshot command (verified) |
|---|---|
| DNS | `cf dns records export -z $Z > pre.bind` and `cf dns records list -z $Z --per-page 100 --page N` (all pages) `> pre.json` |
| Zone setting | `cf zones settings get <setting> -z $Z > pre.json` |
| WAF/rules | `cf rulesets account-rulesets phases get <phase> -z $Z > pre.json` (includes `version`) |
| DNSSEC | `cf dns dnssec get -z $Z > pre.json` (also record the DS at the registrar) |
| Access | `cf zero-trust access applications list` and `... policies list` (UNVERIFIED args) |
| Worker | `cf workers deployments list` and `cf workers versions list` (UNVERIFIED args; record the current version id) |
| Tokens | `cf accounts tokens list \| jq 'map({id,name,status,policies})'` |
Snapshots can contain sensitive values (TXT verification strings, binding text). Keep them local and
never share them.

## 3. Build the exact command and diff
- Find it with `cf cli search`, read `<command> --help` and `cf schema <command>`.
- Run it with `--dry-run` to confirm the method, URL, and body. **Skip this for secret-bearing commands**,
  because dry-run echoes the body.
- Write a human diff: before and after, per field, with counts. For DNS, also say whether proxied changes.

## 4. Risk checks for the dangerous classes
- **Cache purge:** prefer `files`, `tags`, `hosts`, or `prefixes` over `{"purge_everything":true}`. A full
  purge sends an origin load spike. Always confirm it.
- **SSL mode:** going to `strict` needs a valid origin cert, and going to `off` or `flexible` can cause
  redirect loops. Check the origin with a curl first.
- **Proxy toggle:** turning proxied off exposes the origin IP and bypasses WAF and cache. Turning it on
  breaks non-HTTP services.
- **Nameservers or zone moves:** these propagate over hours to days. The rollback is slow. Always confirm.
- **DNSSEC:** never disable while a DS record exists at the registrar (remove the DS first and wait for the TTL).
  Never enable without planning to add the DS.
- **Access:** make sure the change doesn't remove the owner's own access or a service-token path used by
  automation. Test with `cf zero-trust access applications user-policy-checks list` (UNVERIFIED args).
- **Worker routes or triggers:** list existing routes for the zone first. Beta.5 has no routes-list command,
  so use the API through curl (UNVERIFIED) or the dashboard. A more specific overlapping pattern wins
  silently.
- **Rulesets:** `phases update` replaces the WHOLE entry-point ruleset. Include every existing rule or you
  delete them. Prefer `rules create/edit` on a single rule.
- **Bulk:** dry-run one, confirm, run one real canary, verify it, then run the batch. Never loop a
  mutation over unpaginated input.

## 5. Confirm
If the change is on the confirm list (see `cloudflare-cf-operating-rules` and memory), ask with a question
widget that shows the account, zone, resource, exact command (token redacted), diff, blast radius, and
rollback. Wait for a yes. Only then add `--force` where cf requires it.

## 6. Apply
Run exactly the confirmed command. Capture the exit code and output to a file. On a non-zero exit, stop,
report the exact error, and do not retry blindly.

## 7. Verify
- Re-read the resource with the same command as the snapshot and diff it against pre.
- For DNS, run `dig +short <name> @1.1.1.1` (and against the zone's assigned nameservers). For HTTP, run
  `curl -sI https://<host>` and check the status, the `cf-ray` header, and redirects.
- For Workers, hit the route, and check recent errors with `cf observability telemetry query` (UNVERIFIED
  query body) or wrangler tail if the Worker is delegated.

## 8. Rollback plan (write it before applying)
- DNS: re-create or edit from pre.json. Don't bulk-import the whole BIND file over a live zone, because
  import adds records and can create duplicates.
- Settings: `cf zones settings edit <setting> ...` back to the pre value.
- Rulesets: re-apply the pre ruleset body with `phases update --body @pre.json` (strip read-only fields;
  UNVERIFIED).
- Workers: redeploy the previous version with `cf workers deployments create` (UNVERIFIED flags).
- Record the change (what, when, rollback command) in memory, and update the inventory.
