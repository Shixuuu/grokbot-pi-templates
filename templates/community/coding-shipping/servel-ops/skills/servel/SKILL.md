---
name: servel
description: "Self-hosted deployment platform. Use when (a) deploying or operating apps and infrastructure on a remote server; (b) working in a repo that contains `.servel/` or `servel.yaml` and the user references the app, the deployment, production, the live container, or the env/logs/secrets/routing of the running version; (c) debugging a deployed app — \"why is prod 500\", \"show me the logs\", \"tail the logs\", \"what env did the container actually get\", \"the live app is crashing\", \"production is slow\", \"exec into the container\", \"my deployment is down\", \"the deployed version misbehaves\"; (d) any infrastructure task — postgres, redis, supabase, mongodb, libsql, mysql, mongodb-ha, postgres-ha, backup, restore, registry (ghcr / gitlab / self-hosted), domains, SSL, traefik routing, secrets, alerts, capacity, analytics, visitors, rebalance, node management, access control, bastion, tunnel, port-forward, swap / zram / OOM, dev mode (link-env / link-infra / pull prod env to dev), CI/CD, auto-update / rolling upgrade, cross-node …"
---

> Full original description: Self-hosted deployment platform. Use when (a) deploying or operating apps and infrastructure on a remote server; (b) working in a repo that contains `.servel/` or `servel.yaml` and the user references the app, the deployment, production, the live container, or the env/logs/secrets/routing of the running version; (c) debugging a deployed app — "why is prod 500", "show me the logs", "tail the logs", "what env did the container actually get", "the live app is crashing", "production is slow", "exec into the container", "my deployment is down", "the deployed version misbehaves"; (d) any infrastructure task — postgres, redis, supabase, mongodb, libsql, mysql, mongodb-ha, postgres-ha, backup, restore, registry (ghcr / gitlab / self-hosted), domains, SSL, traefik routing, secrets, alerts, capacity, analytics, visitors, rebalance, node management, access control, bastion, tunnel, port-forward, swap / zram / OOM, dev mode (link-env / link-infra / pull prod env to dev), CI/CD, auto-update / rolling upgrade, cross-node migration (servel move), volumes, audit, IP bans, security checkpoint, visitor IP / X-Real-Ip / CF-Connecting-IP. Enforces dogfooding: ALWAYS prefer servel commands over raw docker / ssh / rsync / docker-compose for any operation servel can perform.

# Servel

Deploy applications and infrastructure to Docker Swarm with Vercel-like simplicity. Auto-detects project type, provisions SSL, zero-downtime rolling updates.

## ⚡ FIRST CHECK — Is there a `.servel/` directory?

**Before answering any question about a project, check for `.servel/` in the working directory (or any ancestor). If it exists, this project is already deployed via servel and you have a direct line to the live production deployment — use it.**

```bash
ls .servel/ 2>/dev/null && echo "deployed via servel"
```

If `.servel/state.json` exists, **every servel command auto-resolves to this project's deployment — no name argument needed**. Before reading code, guessing, or asking the user what's wrong in production, run:

```bash
servel logs -f          # live tail of production
servel logs --tail 200  # what just happened
servel logs --since 10m # recent window
servel logs --build     # last deploy's build output
servel env vars         # what env the running container actually sees
servel inspect          # image, replicas, health, command
servel exec sh          # shell into the live container
servel verify           # routing + SSL + DNS sanity
```

**`servel logs` is the single most important command when a `.servel/` directory is present.** It is the ground truth for "what is production doing right now" — cheaper, more accurate, and more current than reading the codebase and guessing. Reach for it **before** static analysis whenever the user mentions prod, the deployment, the live app, an error, a 5xx, slowness, or "why is X happening".

This applies to **every** service-targeting command: `logs`, `exec`, `inspect`, `env`, `restart`, `stop`, `start`, `scale`, `redeploy`, `rollback`, `rm`, `deploy`, `verify`, `secrets`, `domains`, `routes`, `analytics`. None of them need the deployment name when run from inside a `.servel/`-tracked project.

Multi-env: if `.servel/state.staging.json` exists too, add `--env staging`. Linked infra: `servel logs @<infra> -f` and `servel exec @<infra> --service db sh`.

## Always Use Servel Commands

**Native servel commands are safer than ssh+docker.** Every native verb:
- Reads/writes `/var/servel/` state atomically (no half-applied changes on crash)
- Records to the audit log (`servel audit list` — who/what/when, forensics-grade)
- Is multi-node-correct (SSH-hops to the node hosting the container; raw docker on a manager misses worker containers)
- Validates inputs and preserves invariants (Traefik labels, networks, constraints, healthchecks — easy to drop with raw `docker service update`)
- Triggers downstream reconciliation (drift detection, post-deploy probes, rollback on failure, alert dispatch)
- Survives upgrades — raw docker commands codify today's swarm shape; servel commands are forward-compatible
- Is idempotent and rerunnable — raw `docker service update` flag-bombs are not

Raw `ssh user@host -- docker ...` skips all of the above. State, audit, multi-node correctness, invariants — all gone. Even when the immediate effect looks identical, you've taken on silent risk. **Default: native command. Fallback to ssh+docker only when no native verb exists, and say so out loud.**

| Instead of... | Use servel |
|---|---|
| `ssh user@server` | `servel ssh <server>` |
| `docker exec` | `servel exec <name> sh` or `servel exec <name> -- cmd` |
| `docker logs` | `servel logs <name> -f` |
| `docker service create/update/rm` | `servel deploy`, `servel rm` |
| `docker service scale X=N` | `servel scale <name> N` |
| `docker service scale X=0` (stop) | `servel stop <name>` (or `servel scale <name> 0`) |
| `docker service scale X=1` (start after stop) | `servel start <name>` (or `servel scale <name> 1`) |
| `docker service update --force` | `servel restart <name>` |
| `docker stack/compose` | `servel deploy` (compose auto-detected) |
| `docker ps` / `docker service ls` | `servel ps`, `servel node ps` |
| Manual DB setup | `servel add postgres --name mydb` |
| `rsync` / `scp` to server | `servel dev` |
| Manual backups / `pg_dump` | `servel infra backup <name>` |
| `docker exec psql < file.sql` | `servel infra sql @mydb file.sql` |
| Raw `curl` health checks | `servel verify health <name>` |
| Manual `iptables -A INPUT -s X -j DROP` | `servel ban <ip>` |
| Per-app IP blocking via raw Traefik labels | `servel ban <name> <ip>` |
| Manual `rsync` of Docker volumes between nodes | `servel move @<infra> --to <node> --fast` |
| `docker service update --constraint-add node.hostname==` for stateful | `servel move @<infra> --to <node>` (moves data too) |
| Manually checking 5 subsystems with separate commands | `servel dashboard` (one screen — every optional subsystem) |
| Eyeballing benchmarks to guess if the fast path is actually fast at your data size | `servel bench migration --target <node> --size 1GB` (deploys ephemeral postgres, measures both strategies, prints comparison table) |
| Grepping `journalctl` to figure out what migrated, when, and how long it took | `servel move history` (audit trail at `/var/servel/migrations/history.jsonl`) |
| `du -sh /var/servel/* /var/lib/docker/*` to find what's eating disk | `servel df --growers` (curated 16-path scan + drills into volumes, classifies as orphan/active/system/archive/migrate/backup) |

### 🚫 Banned escape hatch: `servel ssh <host> -- docker service ...`

**Before emitting any `servel ssh <host> -- "docker service <verb> ..."` command, STOP.** This is the most common dogfooding leak — using `servel ssh` as a transport for raw docker bypasses state tracking, audit logs, drift detection, and rollback safety. Rewrite to the native verb:

| If you typed... | Use instead |
|---|---|
| `servel ssh H -- "docker service scale X=N"` | `servel scale <addr> N` |
| `servel ssh H -- "docker service scale X=0"` | `servel stop <addr>` |
| `servel ssh H -- "docker service scale X=1"` | `servel start <addr>` |
| `servel ssh H -- "docker service update --force X"` | `servel restart <addr>` |
| `servel ssh H -- "docker service rm X"` | `servel rm <addr>` |
| `servel ssh H -- "docker service update --image Y X"` | `servel redeploy <addr>` or `servel rollback <addr>` |
| `servel ssh H -- "docker service ls"` | `servel ps --remote H` |
| `servel ssh H -- "docker service logs X"` | `servel logs <addr> -f` |
| `servel ssh H -- "docker exec ..."` | `servel exec <addr> -- ...` |

`<addr>` = symbol-prefixed name: `myapp` (deployment), `@mydb` (infra), `~traefik` (system).

**Service name doesn't fit `servel-{name,infra-name,system-name}-*`?** That service was created outside servel's addressing contract. Options, in order:
1. **Rename to fit the taxonomy** so it becomes addressable (`servel-system-<name>` for a daemon you control, redeploy via `servel deploy` for an app).
2. **Resolve manually with `servel ps --remote H --all`** to find the closest servel-managed equivalent.
3. **Last resort only:** fall back to `servel ssh H -- docker ...` *and explain why no native verb fits in the same response* — never silently. If this happens, it's a gap in servel — file it.

`servel ssh` is for interactive shells and one-off diagnostic commands that have no servel equivalent (kernel checks, `journalctl`, `ip`, `iptables` reads, package queries). It is **not** a docker-CLI proxy.

## Complete Capability Map — scan this BEFORE reaching for ssh+docker

The full top-level command set (from `servel --help`, current as of 2026-05-17). Every row is a native verb; if your task fits a row, **use it** — do not shell out. Subcommands listed after `:` are the most common; run `servel <cmd> --help` for the full subtree.

### Lifecycle (apps + infra)
| Command | What it does |
|---|---|
| `deploy` | Build + push + create/update service + post-deploy probe + auto-heal. Final summary derives status/replicas from current Swarm tasks (`?/N` or `?/global` when unavailable). Compose / Dockerfile / preset / nixpacks auto-detected. |
| `redeploy` | Re-apply stored spec without source code (good for env-only changes; respects `servel.yaml` edits since 2026-05-15 — use `--no-refresh` to disable). |
| `rollback` | Roll to previous image; same convergence + probe contract as deploy. **Bare `rollback` = `live_version − 1`, where "live" is the running generation, NOT the newest record.** A killed/failed deploy leaves a higher-versioned dead record that a bare rollback skips past — servel warns when one exists. To restore a known-good version after a failed deploy, pass it explicitly (`servel rollback <app> <version>`) rather than bare rollback. |
| `restart` | Force-update service (same as `docker service update --force`, but tracked). |
| `scale <name> <N>` | Replicas → N. `0` = stop, ≥1 = start. Works with deployment / `@infra` / `~system`. |
| `stop <name>` / `start <name>` | Aliases for `scale 0` / `scale 1`. |
| `rm` / `remove` | Tear down (deployment, infra, system service). Preserves volumes by default. |
| `rename` | Rename a deployment (state-aware). |
| `promote <src> <tgt>` | Transfer env + domains (swap / merge / cleanup-source / rebuild flags). |
| `preview` | Create a TTL'd preview deployment. |
| `attach` / `watch` | Watch in-flight build (raw log stream vs. phase TUI). |
| `abort` | Cancel in-progress deploy. |
| `resume` | Continue failed deploy from last successful step. |

### Inspect / observe
| Command | What it does |
|---|---|
| `ps` / `ls` / `list` | List deployments (`--all-servers`, `--tree`, `--all`). |
| `inspect` / `info` | Full deployment detail (image, replicas, health, command). |
| `logs <addr> [-f]` | Logs for deployment / `@infra` / `~system`. Per-task streaming since 2026-04-13. |
| `events` | Deployment events timeline. |
| `history` / `versions` | Past deploys + available images. |
| `find <name>` | Cross-server search (works for `@infra` too). |
| `stats` | Container resource usage (CPU/mem/net/io). |
| `url` / `open` | Resolve / open primary URL in browser. |
| `dashboard` | One-screen view of every optional subsystem. |
| `deck` | Interactive TUI dashboard. |
| `verify` | Health + SSL + DNS + routing sanity. |
| `validate` | Validate `servel.yaml` before deploy. |
| `detect` | Show what auto-detection would do for current project. |
| `doctor` | Client/server connectivity + cluster-wide health (`migration` subcommand for end-to-end migration self-test). `doctor overlay [-r <srv>]` probes every Traefik-routed service from the Traefik container's netns; services scaled to 0 desired replicas are skipped as operator intent (a skip line names them). "Reachable" = the probed port answered — any HTTP status, and redirect-to-HTTPS responses (e.g. poste.io 302) count. `--fix` force-recreates genuine failures (1h per-service cooldown). |
| `df` | Disk usage (`--growers` for curated 16-path scan). |
| `queue` | Build queue status. |

### Exec / shell / tunnel
| Command | What it does |
|---|---|
| `exec <addr> [sh|-- cmd]` | Cross-node-correct (SSH-hops to node hosting the container). **Agent-safe: `-- <cmd>` needs no TTY** — a pseudo-terminal is requested only when stdin AND stdout are real terminals, or `--shell` was passed. Do NOT add `--stdin < /dev/null` to work around a TTY error; `--stdin` is only for actually piping data in. `--timeout` applies to every non-terminal exec. From a real terminal, `--shell` / bare `sh` open a PTY-backed session (cross-node included). |
| `ssh <server>` | Server SSH. **Diagnostic shells only — not a docker proxy.** |
| `attach` | Stream live build log (Ctrl+C detaches, build continues). |
| `debug-shell <app>` | Shell into rootfs snapshot of last crashed task. |
| `port-forward <target> [local-port]` | SSH tunnel to a remote service. `list`, `stop`. |
| `tunnel start <local-port>` | Public dev tunnels. `list`, `logs`, `stop`. |
| `connect <name>` | Print infra connection details (URL, user, password). `--open` launches the web dashboard in the browser, logged in automatically for basic-auth dashboards (e.g. Supabase Studio). |

### Infrastructure (`servel infra ...` + `servel add`)
| Subcommand | What it does |
|---|---|
| `add <type> [name]` | Add infra from hub template (46 types: postgres, redis, mongodb, supabase, chatwoot, openreplay, ...). Supports `--ha`, `--replicated`, `--prefix` bundles. |
| `infra` (no args) | List all infra. |
| `infra check [--all-nodes]` | Diagnose orphans / conflicts / stuck services / **Postgres connection saturation** (≥90% of `max_connections` = critical, SQLSTATE 53300 — catches the "auth/DB connection error" class on Supabase/postgres stacks). Also **ClickHouse system-log bloat** (G.2): any `clickhouse`/`openreplay`/`highlight` infra whose own `system.*` tables hold ≥20% of their volume (≥40% = error, 2 GiB floor). |
| `infra repair @<name>` | Auto-rsync bind sources, alert on drift. |
| `infra reconcile <name> [--dry-run]` | Re-apply the template's ENV to an already-deployed instance (closes template drift). `--dry-run` first — prints the per-service diff. Never regenerates existing secrets, never reverts operator pins, never deletes keys. Env only: images → `infra upgrade`, volumes/file_templates → recreate. |
| `infra backup / restore` | Per-infra backup. |
| `infra sql @<name> [file|dir]` | Run SQL (file, directory of migrations, or interactive shell). Discovers container via `docker service ls`. Directory input is tracked by default (`--no-track` to opt out); `--baseline` adopts tracking on a DB whose schema already exists. |
| `infra logs @<name> [--service X]` | Multi-service infra logs. |
| `infra inspect / status / vars / labels / domains / customize / archives` | Read views. |
| `infra start / stop / restart / remove / rename / update / upgrade / rotate` | Lifecycle. |
| `infra run <name> <action>` / `infra run-hooks` | Lifecycle hooks declared in template. |
| `infra version <name>` | Stack version. |
| `infra cert status [@name] [--json]` | Read-only: cert expiry for self-TLS infra (poste.io-class — terminates own TLS behind Traefik passthrough). |
| `infra cert renew @<name> [--force] [--staging] [--dns-wait <dur>]` | Issue/renew a publicly-trusted Let's Encrypt cert via **DNS-01** (Cloudflare token) and install it in-container (`/data/ssl/server.{crt,key}` for poste). The only ACME path that works behind `traefik-tcp-passthrough` (HTTP-01 is blocked by Traefik's `acme-http@internal` + :80 host-publish collision). Daemon auto-renews <14d-to-expiry (budget+breaker bounded). Needs `servel cf token set`. |
| `link <infra>` / `unlink <infra>` | Wire infra → app (auto-injects env vars, internal DNS since 2026-05-09). |
| `templates` / `hub` | Manage templates, browse Hub registry. |

### Import / migration from other platforms
| Command | What it does |
|---|---|
| `import vercel [slug...]` | Pull Vercel projects (decrypted envs + domains + framework + build overrides) into a staging dir at `~/servel-imports/<scope>/<slug>/`. Read-only against your FS by default; emits `servel.yaml`, `IMPORT.md` (recipe + DNS deltas + storage hints), `secrets.env` (0600). `--all` for whole-team imports, `--team`, `--token` / `$VERCEL_TOKEN`, `--target {production,preview,development}`, `--workspace`, `--concurrency`, `--overwrite`. `--clone` flag is reserved (returns error) — clone manually then `cp servel.yaml` into the repo. Storage envs (POSTGRES_URL, KV_URL, BLOB_READ_WRITE_TOKEN, EDGE_CONFIG) become recommendations, never auto-provisioned. |

### Data / state / volumes / migration
| Command | What it does |
|---|---|
| `data bind / unbind / heal / migrate / status / check / volumes` | Per-service data binding (which node holds the data). |
| `move @<infra> --to <node>` | Cross-node migration (auto-picks `replicated` / `snapshot` / `fullcopy`). `--plan`, `--fast`, `--pointer-only`. |
| `move @<infra> --to-remote <r> --to <n>` | **Cross-remote migration** (different operator-managed remote). `--plan` always safe; execution gated behind `SERVEL_EXPERIMENTAL_CROSS_REMOTE=1`. Single + multi-service supported. |
| `move @<infra> --to-remote <r> --abort` | Cross-remote: idempotent cleanup of partial state on both remotes after a failed migration. Restarts source if stopped. |
| `move @<infra> --to-remote <r> --commit-source-cleanup` | Cross-remote: drop source after successful migration. Refuses if target isn't serving. |
| `move history` | Audit trail of past migrations (intra-swarm AND cross-remote). |
| `volumes [list|inspect|rm]` | Docker volume management. |
| `storage status / enable / doctor` | DRBD/LINSTOR distributed storage substrate. |
| `bench migration --target <node> --size 1GB` | Measure migration strategies head-to-head. |

### Config / env / secrets
| Command | What it does |
|---|---|
| `config [set|get|list|wizard|validate]` | Reflection-based config edit (client `~/.servel/config.yaml` or server `/var/servel/config.yaml`). Incl. `user.name`/`user.email` operator identity (`git config user.*` parallel; gates destructive commands — see Configuration knobs). |
| `env [list|set|copy]` | Plaintext env vars. No rebuild for `set`. |
| `set-env-file` | Wire `env_file` into `servel.yaml`. |
| `secrets [list|get|set|delete|rotate|rotate-all|pull|import|export|copy|reconcile|scan|migrate]` | Age-encrypted secrets. `scan` finds hardcoded secrets in code. |

---

**Full recipe + references:** https://github.com/k-nrs/servel-skill
