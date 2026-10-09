---
name: cloudflare-worker-deploy-migrate
description: "Use this when deploying a Worker with cf, previewing a change, migrating a Wrangler project to cloudflare.config.ts, or rolling a Worker back."
---

# Worker deploy and migrate

Deploy only from a project directory you were given, or through a cloud agent. Never clone.

## 0. Preflight
- `cf --version` inside the project. It may be a project-pinned local cf, which is fine; note the version.
- Check for `.env`, `.env.local`, and `.env.<mode>` files that set CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_API_TOKEN,
  or CLOUDFLARE_ZONE_ID. They override nothing in process env, but they fill gaps. Set
  `CLOUDFLARE_ACCOUNT_ID` explicitly.
- Identify the config: `cloudflare.config.ts` (cf-native) or `wrangler.toml`/`.json`/`.jsonc` (Wrangler).
- Decide production or non-production from memory and the Worker name. Get the `mode`, if any.
- `git status`: refuse to migrate a dirty tree. Don't use `--force`.

## 1. Migrate from Wrangler (optional, owner-approved)
```
cf migrate --dry-run                      # lists files that would change
cf migrate --bundler vite|wrangler --no-install   # explicit bundler; --install (default) edits package.json
```
- The default bundler is vite only if `@cloudflare/vite-plugin` is declared next to the Wrangler config,
  otherwise wrangler. With wrangler, cf keeps delegating builds to Wrangler (esbuild). Rust and Python
  Workers always delegate.
- Beta.4+: `cf dev`, `cf build`, and `cf deploy` *offer* migration when they find a Wrangler config.
  Non-interactive runs skip the offer.
- If output says "Migration requires follow-up work", list the follow-ups for the owner. Don't improvise.
- Run `cf workers types` afterward to regenerate types. Commit on a branch the owner chooses; don't push.

## 2. Build and dry-run
```
cf build [-m <mode>]
cf deploy --dry-run [-m <mode>]           # builds and runs checks, uploads nothing
```

## 3. Preview (no confirmation needed)
```
cf previews deploy [preview-name] [--worker <name>]    # name defaults to git branch
```
Share the preview URL from the output. UNVERIFIED output field name, so read the JSON.

## 4. Production deploy
- `cf deploy` has no confirm prompt and deploys the resolved Worker to production. It's on the confirm list
  for production Workers.
- Before deploying: record the current deployment and version (`cf workers deployments list`,
  `cf workers versions list`; UNVERIFIED args, check `--help`). That's your rollback target.
- `cf deploy [-m production] --tag <git sha> --message "<summary>"`.
- Secrets: `--secrets-file <path>` (JSON or .env). Create it with mode 600 from a secret request, and delete it
  after. Never put secret values in argv (`--text`) and never dry-run secret commands.
- Routes and crons from `triggers` apply through deploy or `cf workers triggers deploy` (no prompt). Check
  overlap with existing zone routes first (see `cloudflare-safe-change`).
- Safer staged path: `cf workers versions create` (upload without deploying), verify, then deploy that version.
  UNVERIFIED flags.

## 5. Verify
- `curl -sI` the route or workers.dev URL and check the status and version header if the app sets one.
- Errors: `cf observability telemetry query` (UNVERIFIED body; see `cf schema observability telemetry
  query`). beta.5 has **no `cf` tail**. For live logs use `npx wrangler tail <worker>` (Wrangler, outside cf,
  read-only) if the owner allows Wrangler.

## 6. Rollback
Redeploy the previous version (`cf workers deployments create` with the prior version id; UNVERIFIED
flags), or `cf deploy` from the previous git sha. Confirm first if production.

## Delegation notes
When cf delegates to Wrangler, Wrangler's behaviors apply: it reads its own config, it may prompt (it will
fail in non-interactive mode), and its errors come back through cf. Report them verbatim and say that
Wrangler produced them.
