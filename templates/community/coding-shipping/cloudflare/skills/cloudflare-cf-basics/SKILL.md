---
name: cloudflare-cf-basics
description: "Use this when you need the exact, verified cf (beta) commands, flags, jq patterns, and runtime gotchas for common Cloudflare reads and project commands."
---

# cf basics (verified against cf 1.0.0-beta.5)

Everything below was run read-only against a live account unless it's marked UNVERIFIED. The CLI is beta,
so re-check `--help` if a flag errors.

## Runtime
- Requires Node >= 22. If the system Node is older, run cf through a side-by-side Node 22 wrapper. Never
  hardcode an account id in the wrapper.
- Upgrade with Node 22's npm. Unset `NPM_CONFIG_PREFIX` for the install if it's set.
- Global cf re-execs a project-pinned local cf when you run it inside a project, so versions can differ.
- `EACCES ... mkdir '/node_modules/.cache/cloudflare'`: cf tried to cache an auto-selected account and its
  find-up landed on a root-owned `/node_modules`. The fix is to pass `CLOUDFLARE_ACCOUNT_ID` explicitly,
  which you should always do anyway.
- Env vars cf reads: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_ZONE_ID`,
  `CLOUDFLARE_COMPLIANCE_REGION`, `CF_QUIET`, `CF_SEND_TELEMETRY`, `DO_NOT_TRACK`. Legacy fallbacks
  include `CLOUDFLARE_API_KEY` + `CLOUDFLARE_EMAIL`; don't use the global key.

## Global flags
`-z/--zone <id|domain>` (overrides CLOUDFLARE_ZONE_ID), `--profile <name>`, `-q/--quiet`, `-m/--mode <mode>`,
`--local` (local simulation), `--persist-to <dir>`. There is **no** `--json`, `--output`, `--format`,
`--account`, or `--yes` global. JSON is always the output.
Common per-command flags: `--dry-run` (client-side request preview), `-f/--force` (deletes, purge, and
registrar create only), `--body '<json>'|@file` (raw request body), `--page`, `--per-page`, and sometimes
`--cursor`/`--limit`.

## Discovery
```
cf cli search "list DNS records in a zone"      # -> cf dns records list
cf dns records list --help
cf schema dns records list                      # HTTP method, path, params
CFPKG="$(env -u NPM_CONFIG_PREFIX <node22>/bin/npm root -g)/cf"   # Node 22 npm that installed cf
jq -r '.commands[].command' "$CFPKG/dist/_meta/commands.json" | rg route   # full catalog, 2,900+ generated commands
```

## Identity and inventory (verified)
```
cf accounts tokens verify | jq -r .status          # account-owned (cfat_) tokens
cf user tokens verify                              # user tokens only; 401 [1000] for cfat_ tokens
cf auth whoami | jq '{authenticated, authSource, tokenValid, n: (.accounts|length)}'   # raw output includes account names/emails
cf accounts list | jq 'length'
cf zones list --per-page 50 --page 1 | jq -r '.[] | [.name, .id, .status, .plan.name] | @tsv'
CLOUDFLARE_ACCOUNT_ID=$ACC cf workers list | jq -r '.[].name'   # `workers list` exists; search surfaces `workers scripts search`
CLOUDFLARE_ACCOUNT_ID=$ACC cf kv namespaces list
CLOUDFLARE_ACCOUNT_ID=$ACC cf d1 list               # not "d1 databases list"
CLOUDFLARE_ACCOUNT_ID=$ACC cf r2 buckets list
CLOUDFLARE_ACCOUNT_ID=$ACC cf queues list
CLOUDFLARE_ACCOUNT_ID=$ACC cf pages projects list
CLOUDFLARE_ACCOUNT_ID=$ACC cf hyperdrive list       # not "hyperdrive configs list"
CLOUDFLARE_ACCOUNT_ID=$ACC cf tunnels list
CLOUDFLARE_ACCOUNT_ID=$ACC cf zero-trust access applications list
CLOUDFLARE_ACCOUNT_ID=$ACC cf accounts tokens list | jq -r '.[] | [.name, .status, .last_used_on] | @tsv'
CLOUDFLARE_ACCOUNT_ID=$ACC cf accounts members list | jq 'length'
```

## Zone reads (verified)
```
cf dns records list -z $ZONE --per-page 100 --page 1 | jq -r '.[] | [.type, .name, .content, .proxied, .ttl] | @tsv'
cf dns records list -z $ZONE --type CNAME --name-endswith .example.com
cf dns records export -z $ZONE > zone.bind          # raw BIND text, not JSON
cf dns dnssec get -z $ZONE | jq -r .status
cf zones settings get ssl -z $ZONE | jq -r .value    # also: always_use_https, min_tls_version, tls_1_3, security_level
cf rulesets account-rulesets list -z $ZONE | jq -c '.[] | {kind, phase, id}'
cf rulesets account-rulesets phases get http_request_firewall_custom -z $ZONE | jq '.rules | length'
cf firewall access-rules list -z $ZONE
cf logpush account-jobs list                         # account-level
```

## jq patterns
- Count: `jq 'length'`. Remember this is one page only; loop pages for totals.
- Select: `jq '.[] | select(.name=="x")'`. Strip ids before sharing: `jq 'map(del(.id))'`.
- Page loop:
  ```
  p=1; while :; do r=$(cf zones list --per-page 50 --page $p); echo "$r" | jq -c '.[]'; [ "$(echo "$r" | jq length)" -lt 50 ] && break; p=$((p+1)); done
  ```

## Errors worth knowing
- `[10042] Please enable R2 through the Cloudflare Dashboard` means R2 is off for the account. It's not a
  scope problem.
- `[9999] access.api.error.not_enabled` means Access (Zero Trust) isn't enabled. It's not a scope problem.
- `[9109] Valid user-level authentication not found` on `/user/...` means an account-owned token was used on a
  user endpoint. Use the `accounts ...` variant.
- `[10000] Authentication error` on `/accounts/<id>/...` is usually the wrong `CLOUDFLARE_ACCOUNT_ID` for this
  token. Otherwise it's a missing permission.
- `[1324]` billing profile 404 appears on accounts without a billing profile.
- An unknown subcommand prints group help and exits 1.

## Projects and config
- `cloudflare.config.ts`: `import { defineConfig, bindings, triggers } from "cf/config"`; `worker.env`
  with `bindings.text/secret/kv/d1/r2/queue/ai/vectorize/worker`; `worker.triggers` with
  `triggers.fetch({pattern})`, `triggers.scheduled`, `triggers.queue`, and `triggers.email`. Switch
  environments on `mode` (`-m`). (From the launch post; the config shape is UNVERIFIED by execution.)
- `cf init <dir>`: pass a directory, because it prompts when interactive and needs one when non-interactive.
  Also `--package-manager` and `--no-install`.
- `cf migrate [path] --dry-run`, then `--bundler vite|wrangler` (the default is vite only if
  `@cloudflare/vite-plugin` is declared, otherwise wrangler). `--install` defaults to true and edits
  package.json. `--force` runs on a dirty git tree; don't use it.
- `cf build`, `cf dev`, `cf deploy [--dry-run] [--tag] [--message] [--secrets-file] [--prebuilt]`.
  `cf deploy` is a **production** deploy of the resolved Worker. Use `cf previews deploy [name]` for previews.
- `cf workers versions create` uploads without deploying. `cf workers triggers deploy` applies routes and
  crons (no confirm prompt).
- cf delegates to Wrangler for esbuild-bundled JS, Rust, and Python Workers. Wrangler rules then apply
  (`wrangler.toml`/`jsonc`, its own auth resolution, WRANGLER_* env).

## Secrets
- `cf workers secrets update <name> --worker <w>` accepts `--text <value>`. **Don't use `--text`**: it puts the
  secret in argv and process lists, and `--dry-run` echoes it. cf supports stdin ingestion for sensitive
  prompts (UNVERIFIED how it behaves non-interactively). Prefer `cf deploy --secrets-file <file>`
  (JSON or .env, file mode 600, deleted afterward) or `cf workers secrets bulk` (UNVERIFIED flags).
- `cf workers get` and script settings reads may include `plain_text` binding values (UNVERIFIED on beta.5). Strip bindings before reporting.
