---
name: cloudflare-security-baseline
description: "Use this for a periodic or on-request read-only security audit of in-scope zones and the account (TLS settings, DNSSEC, WAF coverage, exposed origins, Access, and API token hygiene) with prioritized recommendations."
---

# Zone security baseline and token hygiene (read-only audit)

The output is a ranked findings list. Every fix is a separate change through `cloudflare-safe-change`.

## Zone settings (verified reads)
For each in-scope zone:
```
for s in ssl min_tls_version tls_1_3 always_use_https automatic_https_rewrites security_level; do
  printf "%s=" $s; cf zones settings get $s -z $Z | jq -c .value; done
cf zones settings get security_header -z $Z | jq .value      # HSTS (verified setting id)
cf dns dnssec get -z $Z | jq -r .status
```
Recommended baseline to flag against:
- `ssl`: `strict` (flag `flexible` as high, `full` as medium).
- `min_tls_version`: `1.2` (flag `1.0`/`1.1`). `tls_1_3`: on.
- `always_use_https`: on. `automatic_https_rewrites`: on.
- DNSSEC `active` (flag `pending`: DS missing at the registrar).
- HSTS on only once HTTPS is solid everywhere (preload is effectively irreversible, so it always needs
  confirmation).

## WAF and rules
```
cf rulesets account-rulesets list -z $Z | jq -c '.[] | {kind, phase}'
cf rulesets account-rulesets phases get http_request_firewall_managed -z $Z | jq '.rules | length'
cf rulesets account-rulesets phases get http_request_firewall_custom -z $Z | jq '.rules[] | {description, action, enabled}'
cf rulesets account-rulesets phases get http_ratelimit -z $Z | jq '.rules | length'
```
Flag these: no managed ruleset deployed (plan permitting), disabled custom rules, `skip` rules with broad
expressions, and no rate limit on login or API paths.

## Origin exposure
Run the proxy-state checks from `cloudflare-dns-audit-backup`. Unproxied records sharing an IP with proxied
ones are a high finding.

## Access (if enabled)
`cf zero-trust access applications list`: flag admin hosts (for example `admin.`, `wp-admin`, `grafana`,
`jenkins`) that are proxied but not behind Access. A `[9999] not_enabled` result means Access is off; report
that as information, not an error.

## Token hygiene
```
CLOUDFLARE_ACCOUNT_ID=$ACC cf accounts tokens list | jq -r '.[] | [.name, .status, .issued_on, .last_used_on, (.policies|length)] | @tsv'
```
Flag these:
- Tokens never used, or unused for 90+ days. Recommend revoking; that's on the confirm list, and you never
  do it unasked.
- Tokens with no expiry, or with policies on all zones or all accounts, or with Edit on API Tokens, Billing,
  Registrar, or Members.
- Your own tokens: the read token should have no Edit permissions, and the write token should have only the
  Edit groups the owner approved. Inspect `policies[].permission_groups[].name` with jq. Never print token
  values (list output doesn't include them).
- User-owned tokens: `cf user tokens list` fails with [9109] for account-owned tokens. Tell the owner to review
  user tokens in the dashboard.
- Members: `cf accounts members list | jq 'length'` and flag it if 2FA isn't enforced
  (`cf auth whoami | jq '.accounts[].settings.enforce_twofactor'`).

## Report
Rank findings High, Medium, and Low with one-line fixes, each noting whether it's on the confirm list. Save
the audit date and summary counts to memory so the next audit can show deltas.
