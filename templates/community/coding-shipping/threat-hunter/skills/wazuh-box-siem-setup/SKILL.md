---
name: wazuh-box-siem-setup
description: "Use this when building a free single-node Wazuh SIEM (indexer, manager, dashboard, local agent, procmon) on the bot's own box without systemd or Docker."
---

Build a free, single-node Wazuh SIEM (indexer + manager + dashboard + a local agent) on **the box**. The box is a persistent Debian-like container: no systemd, no Docker inside, no auditd/eBPF, limited RAM that other bots share. Everything below uses official apt packages and costs nothing. Target is about 2.5 GB RSS. Run `free -m` first and stop if less than about 3 GB is available.

## 0. Layout you will create
```
/workspace/wazuh/
  wazuh-common.sh     # sourced helpers: pid finders, health checks, cred() reader
  start-wazuh.sh      # [all|rsyslog|procmon|indexer|manager|agent|filebeat|dashboard|watchdog], idempotent
  stop-wazuh.sh       # [--keep-collectors]; stops watchdog first, touches .disabled
  status-wazuh.sh     # processes, RSS/CPU, ports, health, alert counts, free -m
  ensure-wazuh.sh     # cheap hook called from ~/.bashrc
  wazuh-watchdog.sh   # 60 s loop, restarts only dead components, hourly logrotate
  bin/procmon.py      # /proc + ss poller (auditd replacement)
~/wazuh/credentials.txt   # chmod 600, one key=value per line (admin, readall, kibanaserver, api_wazuh, api_wazuh-wui)
/opt/wazuh-agent/         # relocated agent (the box enrolls itself as agent 001, named `box`)
```
Never print passwords. Read them at runtime with `grep "^$1=" creds | cut -d= -f2-`.

## 1. Install (official repo)
```bash
curl -s https://packages.wazuh.com/key/GPG-KEY-WAZUH | sudo gpg --dearmor -o /usr/share/keyrings/wazuh.gpg
echo "deb [signed-by=/usr/share/keyrings/wazuh.gpg] https://packages.wazuh.com/4.x/apt/ stable main" | sudo tee /etc/apt/sources.list.d/wazuh.list
sudo apt-get update && sudo apt-get install -y wazuh-indexer wazuh-manager filebeat wazuh-dashboard rsyslog iproute2 procps
```
Postinst `systemctl` errors are harmless. Keep all components on the same 4.x version.
- **Certs:** download `wazuh-certs-tool.sh` for your version. Write a `config.yml` with indexer `node-1`, server `wazuh-1` and dashboard, all with `ip: "127.0.0.1"`. Run `bash wazuh-certs-tool.sh -A`, then copy the certs to `/etc/wazuh-indexer/certs/` (indexer.pem, indexer-key.pem, admin*.pem, root-ca.pem), `/etc/filebeat/certs/` (filebeat*.pem) and `/etc/wazuh-dashboard/certs/` (dashboard*.pem). Set owner to the service user and mode 400. Keep the tarball root-only.
- **Filebeat:** use the official guide's `filebeat.yml`, `wazuh-template.json` and wazuh module, with output `https://127.0.0.1:9200` and the password in the filebeat keystore.

## 2. Low-RAM, localhost-only config
- **Indexer** `/etc/wazuh-indexer/jvm.options`: `-Xms1g` and `-Xmx1g` (default is half of RAM, which will OOM the box). `opensearch.yml`: `network.host: "127.0.0.1"`, single `node-1`.
- **Dashboard** `opensearch_dashboards.yml`: `server.host: 127.0.0.1`, `server.port: 443`, `opensearch.hosts: https://127.0.0.1:9200`. If binding 443 fails, `setcap cap_net_bind_service=+ep` the bundled node binary or use 8443.
- **Manager** `/var/ossec/etc/ossec.conf`:
  - `<remote>`: `<local_ip>127.0.0.1</local_ip>` on port 1514 over tcp.
  - `<auth><disabled>yes</disabled>`: enrollment off, so nothing can self-register.
  - `<vulnerability-detection><enabled>no</enabled>`: the feeds cost hundreds of MB.
  - `<indexer>` host `https://127.0.0.1:9200`. Cluster stays disabled.
- **Turn off agent 000's own collection** (the manager as a host): set syscheck/rootcheck/syscollector `disabled=yes`, `sca enabled=no`, and remove its localfiles. Wazuh 4.x never indexes agent 000 inventory, so IT Hygiene stays empty and you would collect everything twice. The local agent (step 5) does all host monitoring.

## 3. Start by hand (no systemd)
All daemons start detached with `setsid -f`. Close inherited lock fds (`9>&-`) so a daemon never holds the watchdog's flock.
```bash
# indexer
echo 262144 | sudo tee /proc/sys/vm/max_map_count     # may be read-only in some containers; check first
sudo install -d -o wazuh-indexer -g wazuh-indexer /run/wazuh-indexer
sudo -u wazuh-indexer env OPENSEARCH_PATH_CONF=/etc/wazuh-indexer OPENSEARCH_HOME=/usr/share/wazuh-indexer \
  bash -c 'ulimit -n 65535; cd /usr/share/wazuh-indexer && ./bin/opensearch -d -p /run/wazuh-indexer/wazuh-indexer.pid'
# first start only: sudo /usr/share/wazuh-indexer/bin/indexer-security-init.sh
sudo /var/ossec/bin/wazuh-control start                # manager: starts any missing daemon
sudo setsid -f bash -c 'exec /usr/share/filebeat/bin/filebeat -c /etc/filebeat/filebeat.yml --path.home /usr/share/filebeat --path.config /etc/filebeat --path.data /var/lib/filebeat --path.logs /var/log/filebeat >>/var/log/filebeat/stdout.log 2>&1 </dev/null'
sudo install -d -o wazuh-dashboard -g wazuh-dashboard /run/wazuh-dashboard /var/log/wazuh-dashboard
sudo -u wazuh-dashboard setsid -f bash -c 'cd /usr/share/wazuh-dashboard && exec ./bin/opensearch-dashboards -c /etc/wazuh-dashboard/opensearch_dashboards.yml >>/var/log/wazuh-dashboard/stdout.log 2>&1 </dev/null'
sudo rsyslogd -i /run/rsyslogd.pid      # disable imklog in rsyslog.conf (no kernel log in a container)
```
Wait for `/_cluster/health` to return 200 (poll up to about 3 min) before starting the manager and filebeat. Then change all default passwords with `wazuh-passwords-tool.sh`, write them to the credentials file and `chmod 600` it.

**Health checks** (in `wazuh-common.sh`): indexer = `pgrep -u wazuh-indexer -f org.opensearch.bootstrap.OpenSearch`; manager = every daemon `is running` in `wazuh-control status` and `:55000` answers; dashboard = `/app/login` returns 200.

## 4. Scripts, watchdog and reboot hook
- `start-wazuh.sh all`: removes `.disabled`, starts rsyslog, procmon, indexer (and waits), manager, agent, filebeat, dashboard, then the watchdog, and finally prints status. Each component is skipped if it is already healthy.
- `stop-wazuh.sh`: touches `.disabled`, then stops the watchdog, dashboard, filebeat, agent, manager and indexer, in that order. Each stop waits up to 30 s for the process to exit.
- `wazuh-watchdog.sh`:
  - Runs as root via `sudo setsid -f` and stays single-instance with `flock -n` on `/run/wazuh-watchdog.lock`. It writes its pid file and logs to `/var/log/wazuh-watchdog.log`.
  - Every 60 s it restarts only the components that are down, and it exits if `.disabled` exists.
  - Hourly it runs `logrotate -s <own state> /etc/logrotate.d/{rsyslog,procmon}` (no cron daemon).
  - **Gotcha:** when running as root, define `sudo(){ ... }` to call the command directly (`runuser -u` for `-u`). Otherwise every check writes sudo lines to auth.log and creates alerts.
- `ensure-wazuh.sh`: exit if `.disabled` exists, the watchdog is alive, a flock is held, or `sudo -n true` fails; else `nohup setsid start-wazuh.sh all &`.
- **Guarded `~/.bashrc` hook** (restarts the stack after a box reboot, when the first shell opens):
  ```bash
  # >>> wazuh auto-start >>>
  [ -x /workspace/wazuh/ensure-wazuh.sh ] && ( /workspace/wazuh/ensure-wazuh.sh >/dev/null 2>&1 & )
  # <<< wazuh auto-start <<<
  ```
  rc changes alert, so expect (and baseline) this one. Ask the owner before adding it.

## 5. The box as agent 001 (unpacked agent)
The `wazuh-agent` deb conflicts with `wazuh-manager`, so unpack it instead of installing it:
```bash
apt-get download wazuh-agent=<same version>; dpkg-deb -x wazuh-agent_*.deb /tmp/wa
sudo cp -a /tmp/wa/var/ossec /opt/wazuh-agent && sudo chown -R root:wazuh /opt/wazuh-agent
# fix perms like the package does: etc/logs/queue/var group wazuh, client.keys root:wazuh 640
sudo /var/ossec/bin/manage_agents -a 127.0.0.1 -n box          # creates ID 001
# the key is a secret: never print or log it. Decoded it is "001 box 127.0.0.1 <hex>"
sudo /var/ossec/bin/manage_agents -e 001 | tail -1 | base64 -d | sudo tee /opt/wazuh-agent/etc/client.keys >/dev/null
sudo chown root:wazuh /opt/wazuh-agent/etc/client.keys && sudo chmod 640 /opt/wazuh-agent/etc/client.keys
```
(Verify the key-import step for your version.) Agent `ossec.conf`:
- `<server><address>127.0.0.1</address><port>1514</port><protocol>tcp</protocol>` and `<enrollment><enabled>no</enabled>`.
- Syscollector every 30m, SCA every 12h, rootcheck every 12h.
- Localfiles: syslog `auth.log`, `syslog`, `dpkg.log`; json `/var/log/procmon/procmon.json` and the hunt findings JSONL; `full_command` snapshots with an `<alias>`: `ss -tnpH state established` and `ss -tulnpH` (300 s), `ps --sort=-pcpu | head -16` and `who -a` (600 s).
- Start with `/opt/wazuh-agent/bin/wazuh-control start`. Verify with API `GET /agents?select=id,name,status`: 001 should be `active`.

## 6. procmon (no auditd, so poll)
- `bin/procmon.py` (stdlib) scans `/proc` every 0.1 s for new PIDs and writes JSON lines `{"procmon":{...}}`.
  - Fields: `type=process_start`, pid, ppid, user, euser, uid, euid, comm, exe, cmdline (2000 chars), `cmd_short` (240), cwd, parent_comm, parent_exe, `parent_cmdline` (500).
- Every 10 s it runs `ss -tunapH` and emits `net_listen` and `net_connect` events.
  - Fields: direction (inbound if the local port is a listener), proto, local, peer, remote_ip, remote_port, process.
  - Deduplicated per (process, direction, peer, port) for 600 s. Loopback-to-loopback is skipped.
- **Exclusions:**
  - Its own pid, plus `/var/ossec/` and `/opt/wazuh-agent/` executables and all their descendants. The watchdog and wazuh-control are excluded too.
  - Heartbeat `sleep` children of the platform supervisors. Find them in the first hour of output.
  - Inbound traffic from the platform gateway (`ip route | awk '/default/{print $3}'`).
- The first scan is only a baseline. procmon reopens the log when logrotate changes the inode (`rotate 7 daily maxsize 100M compress delaycompress`).
- Start it with `setsid -f nice -n 10 python3 bin/procmon.py`. Test with `--dry`.
- Base rules go in `0900-box_rules.xml`, IDs 100100–100399:
  - 100100 json `procmon.type`; 100101 process_start (3); 100120 net_connect (3); 100121 net_listen (5); 100122 listener on all interfaces (8)
  - 1001xx children: setuid, sudo shell, installs, tmp exec, credential paths, base64/eval, recon tools, curl|sh (10), reverse shell (12)
  - 1003xx: `<check_diff/>` snapshot rules (`if_sid 530`, `<match>^ossec: output: '<alias>'`); 100200: level 0 for sudo PAM noise

## 7. FIM baseline (agent)
- Realtime: `/etc,/usr/bin,/usr/sbin`. Hourly: `/bin,/sbin,/boot,/home/box,/workspace,/root`.
- `<ignore type="sregex">` for `/node_modules/|/\.git/|/__pycache__/|/\.cache/|/\.npm/|/\.local/share/|/chrome-profile/|/agent-data/|\.log$|\.tmp$`.
- `<nodiff type="sregex">` for credential files: `\.credentials\.json$|/auth\.json$|oauth_creds\.json$|/\.env$|/\.ssh/id_`.
- The agent-hunt FIM additions are in the `agent-attack-hunting` skill.

## 8. Retention, read-only user, API
- **30-day ISM:** `PUT _plugins/_ism/policies/alerts-30d` with states `hot` → (`min_index_age: 30d`) → `delete`, and `ism_template.index_patterns: ["wazuh-alerts-4.x-*"]`. Attach it to existing indices with `POST _plugins/_ism/add/wazuh-alerts-4.x-*`. Check with `GET _plugins/_ism/explain/wazuh-alerts-*`. Tell the owner about the retention before enabling it.
- **Read-only hunt user:** give the built-in `readall` user (backend role `readall`) a new password with the passwords tool, or create one via `PUT _plugins/_security/api/internalusers/<name>` with `backend_roles:["readall"]`. Hunts only ever use this user.
- **API token:** `curl -sk -u "wazuh:$(cred api_wazuh)" -X POST 'https://127.0.0.1:55000/security/user/authenticate?raw=true'`.

## 9. Custom rules: gotchas
- Rules live in `/var/ossec/etc/rules/*.xml` and load **alphabetically**. An `if_sid` parent must already be loaded, so prefix the base file (`0900-box_rules.xml`) so it sorts before the hunt files. Use custom IDs 100000–120000.
- Only **one rule fires per event**. Among siblings, the first one loaded at the highest level wins. Give specific rules a higher level, or list extra parents in `if_sid`.
- FIM `restrict=` takes **OSMatch strings, not regex**: write `.mdc$`, not `\.mdc$`. Paths that don't exist when the agent starts are not watched in realtime, so watch the parent directory with `recursion_level="0"` plus a restrict. Restart the agent after creating new watched directories.
- CDB `lookup="address_match_key_value"` with `check_value` matched every IP in logtest (4.14). Use `match_key_value` for plain IPv4 keys.
- **Test loop:**
  1. `sudo /var/ossec/bin/wazuh-analysisd -t` must return 0.
  2. `sudo /var/ossec/bin/wazuh-logtest`: paste a real procmon line. Or script it against the socket `/var/ossec/queue/sockets/logtest` (4-byte LE length + JSON `{"version":1,"command":"log_processing","parameters":{"event":…,"log_format":"json","location":"/var/log/procmon/procmon.json"}}`).
  3. Hot reload with no restart: `curl -sk -X PUT -H "Authorization: Bearer $T" https://127.0.0.1:55000/manager/analysisd/reload`, then grep `ossec.log` for analysisd errors.
- Back up to `*.bak-<ts>` before every edit.

## 10. Visibility limits (tell the owner)
- **Not visible:**
  - server-side connectors and MCPs, web search/fetch tools, and cloud agents (they run off-box)
  - DNS queries, TLS/HTTP content, env vars, file reads inside node/python, FIM who-data
- **Partly visible:** processes under about 100 ms can be missed; loopback is not logged; net events carry a 15-character comm and no cmdline.

## 11. Verify and hand off
Run `status-wazuh.sh`. Expect all components up, agent 001 active, and a non-zero alert count within 15 min. Open `https://127.0.0.1/` in the box browser, log in as admin and screenshot the dashboard. `stop-wazuh.sh` frees about 2.5 GB whenever the owner needs the RAM.
