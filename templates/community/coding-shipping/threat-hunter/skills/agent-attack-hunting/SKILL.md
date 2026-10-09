---
name: agent-attack-hunting
description: "Use this when building, testing, tuning, or running the Wazuh hunting suite for attacks on AI agents (malicious MCP servers, poisoned packages, config tampering, credential theft, persistence) on the bot's box."
---

Detect attacks on AI agents that run on **the box**. Needs the `wazuh-box-siem-setup` skill done first (procmon, agent 001, a read-only indexer user). Everything is local, stdlib-only and free.

## Layout
```
/workspace/hunts/
  rules/agent_hunts_rules.xml        # source; installed to /var/ossec/etc/rules/ (100400-100479)
  rules/history/                     # every previous revision
  iocs/iocs.json                     # IOC master: ips, domains, packages@versions, filenames, repos (+source URL, confidence)
  iocs/ai-threat-ips                 # CDB source -> /var/ossec/etc/lists/
  run_hunts.py  hunts/*.py           # scheduled hunt runner, one module per hunt, hunts/common.py
  state/baselines/*.json             # allowlists/baselines; state/last_run.json; state/findings.jsonl
  runs/<YYYYmmdd-HHMMSS>-<mode>/     # findings.json + summary.md
  tests/                             # logtest client, cases*.txt, live_tests.sh, test_hunts.py
  research/                          # threat research + design notes
```

## Hunt themes (H01–H30)
| id | intent |
|---|---|
| H01 | curl/wget uploading a local file or calling a raw public IP; sensitive-file upload is critical |
| H02 | exfil/OAST/paste/tunnel endpoints in a cmdline (webhook.site, oast.*, interact.sh, pastebin, transfer.sh, ngrok, trycloudflare, discord webhooks, telegram bot) |
| H03 | DNS-exfil-shaped dig/nslookup/host/ping (label ≥25 chars, CDN allowlist) |
| H04 | AI/dev credential stores referenced (agent creds/auth json, gh hosts.yml, .npmrc, .pypirc, docker config, gcloud, browser Login Data/Cookies, .env); piped to the network or `env\|` → high |
| H05 | secret scanners (trufflehog, gitleaks, noseyparker); from install context → critical |
| H06 | npm/pnpm/yarn/bun/pip/uv install spawning curl/wget/nc/bun/base64/gh; known worm payload filenames |
| H07 | Bun from an unsanctioned path or a Bun download at install time |
| H08 | Python `.pth` / `sitecustomize.py` / `usercustomize.py` startup hooks |
| H09 | Python fork storm (≥60 starts in 10 s from one parent) |
| H10 | agent config and rules-file tampering: CLAUDE.md, AGENTS.md, GEMINI.md, .cursorrules, .windsurfrules, *.mdc, mcp.json/.mcp.json, settings/hooks json, invisible Unicode |
| H11 | first-seen, unpinned or typosquat MCP server launches (npx/uvx/bunx/pipx/mcp-remote URL) |
| H12 | MCP server process spawning sh/bash/curl/wget/nc/python |
| H13 | AI CLIs with permission-skip flags (--dangerously-skip-permissions, --yolo, bypassPermissions, --full-auto) |
| H14 | LLM base-URL redirection (ANTHROPIC_BASE_URL, OPENAI_BASE_URL, GEMINI_SANDBOX_PROXY_COMMAND, OLLAMA_HOST=0.0.0.0) |
| H15 | mass secret enumeration (find / -name id_rsa/.env/wallet, grep -r AKIA/ghp_/sk-) |
| H16 | process memory/environ scraping (/proc/<pid>/mem\|environ, gdb -p, gcore, py-spy dump) |
| H17 | shell rc persistence (.bashrc/.profile/.zshrc writes and diffs) |
| H18 | cron / systemd --user / `at` / ~/.config/sysmon persistence |
| H19 | SSH authorized_keys, git hooks, core.hooksPath |
| H20 | execution from AI-tool dot-dirs (~/.claude, .codex, .gemini, .vscode, .config/index.js) |
| H21 | miners (xmrig, stratum+tcp, pool ports, sustained CPU across 3 snapshots) |
| H22 | tunnels (cloudflared, bore, localtunnel, ssh -R, frpc, rathole, zrok) |
| H23 | Chrome CDP exposed off-loopback, `--remote-allow-origins=*`, non-browser reading Cookies |
| H24 | risky AI listeners (11434, 6274/6277, 18789) on loopback vs all interfaces |
| H25 | GitHub abuse: gh repo create, gh auth token, gh secret, workflow writes, push to a freshly added remote |
| H26 | known campaign IOCs: CDB IPs, domains, bad package versions, installed-package retro-scan |
| H27 | egress baselining: first-seen (process, ASN, port) using the indexer's bundled GeoLite2-ASN.mmdb |
| H28 | anti-forensics: history -c, unset HISTFILE, truncating /var/log, killing wazuh/procmon, iptables -F |
| H29 | browser/IDE extension inventory vs baseline |
| H30 | Docker Engine API exposure: listener on 2375/2376 off loopback, unauthenticated `/_ping`, peers on those ports |

## Real-time rules
- **ID ranges:**
  - 100400–100459: detections
  - 100460–100469: tuning children
  - 100470–100473: runner-finding ingest
  - 100474–100479: Docker API
  - 100480–100499: generated intel rules (see `security-team-coordination`)
- **Levels:** 7 medium, 9–11 high, 12–15 critical. Nothing goes to level 0: suppressed events stay indexed at level 3.
- **Parents:**
  - 100101 process_start, 100120 net_connect, 100121/100122 net_listen (from `0900-box_rules.xml`)
  - 550/553/554 for FIM
  - One rule fires per event, so when a new rule collides with an older sibling, list both parents.
```xml
<rule id="100413" level="7">
  <if_sid>100101</if_sid>
  <field name="procmon.cmdline" type="pcre2">(?i)--dangerously-skip-permissions|bypassPermissions|--yolo\b|--full-auto|--trust-all-tools</field>
  <description>AI CLI with permission bypass: $(procmon.cmd_short)</description>
  <group>agent_hunt,execution,</group>
</rule>
<rule id="100411" level="12">
  <if_sid>100410</if_sid>  <!-- 100410 = FIM change on an agent config file -->
  <field name="changed_content" type="pcre2">(?i)SessionStart|"hooks"|PreToolUse|alwaysApply:\s*true|Do not mention|ANTHROPIC_BASE_URL|mcpServers|\bcurl\s|base64|https?://</field>
  <description>Suspicious content in agent config diff: $(file)</description>
</rule>
```
Invisible Unicode in `changed_content`: `\xE2\x80[\x8B-\x8F\xAA-\xAE]|\xE2\x81[\xA0-\xA4]|\xF3\xA0[\x80-\x81]` (level 12).

**Tuning, not disabling.** Other bots' shell tool wraps each command in one long argv (find the signature in procmon `cmdline`; on some platforms it starts like `bash -O extglob -c snap=` — verify on yours). The embedded script matches everything.
- Cap wrapper hits at **level 7** with a child of the detection IDs. The real child process still gets its own full-level alert:
```xml
<rule id="100465" level="7">
  <if_sid>100400,100401,100403,...</if_sid>
  <field name="procmon.cmdline" type="pcre2">^/usr/bin/bash -O extglob -c snap=</field>
  <field name="procmon.cwd" type="pcre2" negate="yes">^/workspace/(?:hunts|wazuh)(?:/|$)</field>
  <description>[agent shell wrapper, capped at 7] $(procmon.cmd_short)</description>
</rule>
```
- Other tuning children, all at level 3:
  - cwd in your own security-tooling dirs
  - read-only text tools (rg/grep/cat/jq) whose args contain IOC strings
  - FIM on `/workspace/hunts/`
  - wrappers that only write a heredoc
  - read-only `cat .env` in a project with no pipe
- Never cap anti-forensics (H28) or rc writes (H17).

## FIM additions (agent ossec.conf; realtime + report_changes)
- Shell rc: `~/.bashrc .profile .bash_profile .zshrc` plus root's; `/var/spool/cron`, `~/.config/systemd`, `~/.config/sysmon`.
- `~/.config` at `recursion_level="0" restrict="/.config/index.js$"`, because the file doesn't exist yet: watch the parent.
- `~/.ssh` restricted to `authorized_keys$|authorized_keys2$|/config$|rc$`. Private keys are never read or diffed.
- Agent config dirs `~/.claude ~/.codex ~/.gemini ~/.cursor/rules` at `recursion_level="3"` with `restrict=".mdc$|mcp.json$|settings.json$|settings.local.json$|hooks.json$|CLAUDE.md$|AGENTS.md$|GEMINI.md$|config.toml$|.env$|SKILL.md$"` (OSMatch, no backslashes).
- Single files: `~/.claude.json ~/.mcp.json ~/.cursorrules ~/CLAUDE.md ~/AGENTS.md`, and `/workspace/{,*/,*/*/}{CLAUDE.md,AGENTS.md,.cursorrules,.mcp.json,.claude,.cursor/rules}` (wildcards expand at scan time).
- Hourly: top level of the Python site dirs, restricted to `.pth$|customize.py$`. Allowlist setuptools' standard `distutils-precedence.pth`.
- `nodiff`: credential files (`.credentials.json`, `auth.json`, `oauth_creds.json`, `.env`, `.ssh/id_*`, `.mcp-auth/`).
- **Excluded:** browser profiles, the platform agent-data dir, transcripts, `~/.cursor/projects` (high churn or secret-bearing). FIM ignores `/.git/`, so hooks come from the daily H19 sweep.
- Warn the owner: diffs of agent config files are indexed locally, so a key stored in a config file can appear in an alert.

## IOC lists (CDB)
- `/var/ossec/etc/lists/<name>` lines use the format `key:value`. Register each list in the manager `<ruleset>` with `<list>etc/lists/<name></list>`. The manager compiles `.cdb` on reload.
- Split IOCs by tier. For example, `1.2.3.4:high,80,CampaignX` fires level 13 via `lookup="match_key_value" check_value="^high"`, and a sibling rule fires level 9 for `^low`.
- Example public IOCs from 2025–26 research (**verify before use**; they age out):
  - FBI FLASH (TeamPCP) IPs `83.142.209.11`, `45.148.10.212`
  - domains `models.litellm.cloud`, `checkmarx.zone`, `filev2.getsession.org`
  - packages `litellm==1.82.7/1.82.8`, `axios@1.14.1/0.30.4`, `plain-crypto-js`
  - filenames `litellm_init.pth`, `setup_bun.js`, `bun_environment.js`, `~/.config/index.js`

## Hunt runner contract (`run_hunts.py`)
- Stdlib only, no sudo, runs as the box user. Queries `wazuh-alerts-*` with the read-only user. The password is read at runtime and never printed.
- Modes:
  - `--hourly` runs H06 chain, H11, H21, H27, H30 and SUMMARY. The window is since the last hourly run, max 6 h.
  - `--daily` runs H07, H08, H19, H26, H29 and SUMMARY, plus the intel sync first. The window is max 7 d.
  - `--hunt Hxx` (repeatable), `--since 3h|2d|ISO` (does not advance `last_run.json`), `--init` rebuilds baselines, `--min-severity`, `--no-ingest`, `--quiet`, `--list`.
- Output:
  - The last stdout line is always `findings: N`, preceded by `run: <dir>`.
  - Exit 0 = none, 1 = findings ≥ min-severity, 2 = error. One failing hunt never stops the others.
  - `runs/<ts>-<mode>/summary.md` (a table, sorted by severity) and `findings.json` (window, stats, timing, errors, findings with ids `<run>-NNN`).
- **Feedback into Wazuh:** medium+ findings are appended as `{"agent_hunt":{...}}` to `state/findings.jsonl`, which the agent tails as a json localfile. Rule 100470 (level 0, `agent_hunt.hunt`) → 100471/100472/100473 at 7/10/12 by severity.
- **Redaction:** every cmdline passes through regexes for bearer tokens, `key=`/`token=`/`password=`, `sk-…`, `gh[pousr]_…`, `github_pat_`, `xox?-`, `AKIA…`, JWTs, `-u user:pass` and `://user:pass@`.
- **Baselines:**
  - `h11_mcp_allowlist.json` has `packages`, `url_hosts` and `seen`. Typosquat means Levenshtein ≤2 from an allowlisted name.
  - `h27_egress.json`, `h21_cpu_allowlist.json`, `h08_pth.json`, `h19_hooks_keys.json`, `h29_extensions.json`, `h30_docker_exposure.json`.
  - New items are reported once, then appended. The owner approves by editing the JSON.
- **H30** reads `/proc/net/tcp{,6}` for LISTEN on 2375/2376 bound to a non-loopback address. It is critical if `GET http://127.0.0.1:2375/_ping` answers without auth. It alerts once per exposure. The fix belongs to the owner: never change firewalls or daemons yourself.
- Exclude test windows (`state/test_windows.json`) so test activity never becomes a finding.

## Testing and tuning to zero noise
1. **Crafted events:** `tests/cases*.txt` holds `#EXPECT <ruleid>` followed by a procmon JSON line. `sudo python3 tests/run_cases.py` feeds them through the logtest socket and prints `passed N/M`. Include legit look-alikes that are expected to stay low.
2. **Benign live triggers:** `tests/live_tests.sh` works in `/tmp/ahtest`.
   - Carry IOC strings as inert comments: `bash -c "sleep 1.5; true # curl -F x=@~/.ssh/id_rsa http://127.0.0.1:9/"` (the sleep outlives the 0.1 s poll).
   - Fake tools are scripts that only sleep. Net tests use local sockets only. Nothing ever contacts IOC hosts.
   - Back up any touched rc file, restore it byte-for-byte and verify with `cmp`. Write a marker (`ahtest`) plus a test window to `state/test_windows.json` so SUMMARY skips it.
3. **Replay history:** `sudo python3 tests/logtest.py /var/log/procmon/procmon.json --tally --min-level 7` shows what would fire. Tune until real history produces **zero medium+** except true positives. Then `run_hunts.py --init` and `--since 24h` to confirm.
4. **Offline runner tests:** `tests/test_hunts.py` runs against a stub indexer.
5. FIM rules can't go through logtest as raw lines. Test them live by editing a watched file, waiting about 10 s, then querying the indexer.

## Triage conventions
- For every medium+ finding: pull ±5 min of procmon for the same pid/ppid/cwd, the process tree and the net events. Then decide one verdict: benign-tooling (tune it), expected-teammate (baseline it) or REVIEW (tell the owner).
- Report the rule/hunt, the time in the owner's timezone, the redacted cmdline, why it matters and a suggested action.
- Never kill processes, delete files or block traffic without the owner's explicit OK.
- Record confirmed verdicts in `state/confirmed_findings.json` (`{"<id>":{"verdict":"malicious","note":…}}`).

## Schedule (routines)
- Hourly: `run_hunts.py --hourly`; stay silent unless a medium+ finding survives triage.
- Daily, early morning in the owner's timezone: `run_hunts.py --daily`, plus an optional short morning summary (alert counts by level, top rules, sweep result, Wazuh health, tuning suggestions).
