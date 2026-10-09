---
name: cloudflare-dns-audit-backup
description: "Use this when asked to back up, export, audit, or clean up a zone's DNS (dangling records, exposed origins, missing email auth, proxy state), or before any DNS change batch."
---

# DNS audit and backup

## Backup (verified)
```
Z=<zone id from memory>
cf dns records export -z $Z > dns-$Z-$(date -u +%Y%m%dT%H%M%SZ).bind      # BIND text
p=1; : > dns.jsonl; while :; do r=$(cf dns records list -z $Z --per-page 100 --page $p); echo "$r" | jq -c '.[]' >> dns.jsonl; [ "$(echo "$r" | jq length)" -lt 100 ] && break; p=$((p+1)); done
jq -s 'length' dns.jsonl     # the true total
```
Keep backups in the working area. They hold verification TXT values, so don't paste them into chat.

## Audit checks (all read-only)
Load `dns.jsonl` and report findings as sentences with counts:
1. **Proxy state:** list A, AAAA, and CNAME records with `proxied==false` where `proxiable==true`. Each one
   exposes an origin IP. Flag origin IPs that are shared with proxied records (the origin leaks through the
   unproxied name).
2. **Dangling targets:** CNAMEs pointing at `*.herokuapp.com`, `*.azurewebsites.net`,
   `*.s3.amazonaws.com`, `*.github.io`, `*.pages.dev`, or `*.workers.dev`. Resolve each with
   `dig +short` and flag NXDOMAIN. That's a subdomain-takeover risk.
3. **Email auth:** check the apex for an MX, an SPF TXT (`v=spf1`, only one), `_dmarc` TXT, and DKIM
   selectors if known. Flag multiple SPF records and `+all`.
4. **CAA:** flag it if none exists (optional hardening).
5. **Shadowed or duplicate records:** `cf dns records list -z $Z --include-shadow-metadata` (the flag exists;
   output semantics UNVERIFIED). Also flag duplicate name+type+content.
6. **TTL oddities:** very low TTLs on unproxied records.
7. **Stale records:** use `comment`, `tags`, and `modified_on` to list records untouched for 12+ months
   that point at private or RFC1918 IPs.
8. **DNSSEC:** `cf dns dnssec get -z $Z | jq -r .status`. If it's `pending`, the DS is missing at the
   registrar.

## Cleanup
All deletes or edits go through `cloudflare-safe-change` and are on the confirm list. Offer changes one
record at a time or as a reviewed batch (`cf dns records batch --dry-run` first; the batch body shape is
UNVERIFIED, so check with `cf schema dns records batch`).

## Restore
Prefer targeted re-creates from `dns.jsonl`. `cf dns records import` adds records from a BIND file
(UNVERIFIED flags; check `--help`). It doesn't replace existing ones, so it can create duplicates.
