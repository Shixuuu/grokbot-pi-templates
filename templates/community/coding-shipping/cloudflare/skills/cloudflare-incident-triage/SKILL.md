---
name: cloudflare-incident-triage
description: "Use this when a site or Worker is down, slow, erroring, or being attacked, to gather Cloudflare-side evidence read-only (status, DNS, SSL, rules, analytics, Worker errors) before proposing any change."
---

# Incident triage (read-only first)

The goal is evidence in about 5 minutes, and **no mutations** until you have a diagnosis and the owner
confirms a fix through `cloudflare-safe-change`.

## 1. Frame it
Get the host or URL, the symptom (5xx code, timeout, block page, wrong content), start time, and scope (one
region or all). Map the host to its zone from memory.

## 2. Outside-in checks
```
curl -sS -o /dev/null -w '%{http_code} %{time_total}\n' https://<host>/
curl -sI https://<host>/ | rg -i 'cf-ray|server|cf-cache-status|location'
dig +short <host> @1.1.1.1 ; dig +short NS <zone>
```
- 520-527 means an origin or SSL problem (522 connect timeout, 525/526 SSL handshake or invalid cert).
- 1xxx codes mean a Cloudflare config or block. A 403 with a block page means WAF, Access, or a firewall rule.
- Check https://www.cloudflarestatus.com for platform incidents.

## 3. Cloudflare config state (verified reads)
```
cf zones list --name <zone> | jq '.[0] | {status, paused, name_servers}'
cf dns records list -z $Z --name <host> | jq '.[] | {type, content, proxied, ttl}'
cf zones settings get ssl -z $Z | jq -r .value
cf dns dnssec get -z $Z | jq -r .status
cf rulesets account-rulesets phases get http_request_firewall_custom -z $Z | jq '.rules[] | {description, action, enabled, expression}'
cf rulesets account-rulesets phases get http_ratelimit -z $Z | jq '.rules | length'
cf firewall access-rules list -z $Z | jq 'length'
```
Also compare against the last known-good state in memory, or a snapshot from the last change. A recent
change by you is suspect #1.

## 4. Traffic and security events
- beta.5 has **no GraphQL Analytics command**, so firewall events and zone HTTP analytics aren't reachable
  through `cf cli search`. Options:
  - The GraphQL API through curl, with the token from env (never echoed):
    `curl -s https://api.cloudflare.com/client/v4/graphql -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" --data @query.json`.
    Datasets are `firewallEventsAdaptive` and `httpRequestsAdaptiveGroups`. UNVERIFIED query shape and
    permission (Analytics Read); check docs at developers.cloudflare.com/analytics/graphql-api/.
  - `cf analytics sql` / `cf analytics query` exist but their datasets are UNVERIFIED for zone traffic.
  - The dashboard Security Events page (tell the owner).
- Ray ID lookup: `cf logs` has ray-ID related commands (UNVERIFIED; find with `cf cli search "look up a
  request by ray id"`).

## 5. Worker errors
- `cf observability telemetry query` (Workers Logs must be enabled). UNVERIFIED body; build it from
  `cf schema observability telemetry query`.
- `cf workers deployments list` (UNVERIFIED args): did a deploy happen near the start time?
- Live tail: not in cf beta.5. Use `npx wrangler tail <worker>` if the owner allows it.

## 6. Report
Tell the owner, in plain sentences: impact, the most likely cause with its evidence, what you ruled out,
and 1-2 proposed fixes, each with its confirm-list status and rollback. Examples: roll back the last deploy,
revert the SSL mode, disable one WAF rule. Under attack: propose (don't apply) Security Level "under_attack"
or a targeted rate-limit rule. Those are production changes that need confirmation.
