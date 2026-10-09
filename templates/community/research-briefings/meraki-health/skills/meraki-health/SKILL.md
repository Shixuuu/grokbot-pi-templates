---
name: meraki-health
description: "Use when the operator wants to check, monitor, or get a weekly digest of a Cisco Meraki network's health (Wi-Fi, WAN, security, firmware, licenses, alerts) through the Dashboard API, read-only."
---

# Meraki Health

Read-only health checks, monitoring and weekly digests for a Cisco Meraki network, run through the Meraki Dashboard API v1. Built for home labs and small sites: one org, one network, plain-language findings backed by real numbers.

Scripts live in `/workspace/meraki/bin/`:
- `mclient.py`: GET-only client with rate limiting and key loading.
- `setup.py`: pick the org and network, and record a baseline.
- `check.py --mode full|monitor|weekly`: runs the checks and writes JSON findings plus state.

Config lives in `/workspace/meraki/config.json` and state in `/workspace/meraki/state/`. Full runs are saved under `/workspace/meraki/runs/<UTC timestamp>/` (the last 10 are kept).

## If the scripts are missing
If `/workspace/meraki/bin/check.py` doesn't exist (for example, on a freshly imported bot), install the scripts before the first run:
`mkdir -p /workspace/meraki/bin` and then download `mclient.py`, `setup.py` and `check.py` into it from `https://raw.githubusercontent.com/Presidio-Federal/Meraki-health-bot/main/bin/<file>` (for example, `cd /workspace/meraki/bin && for f in mclient.py setup.py check.py; do curl -fsSLO https://raw.githubusercontent.com/Presidio-Federal/Meraki-health-bot/main/bin/$f; done`). Run `python3 -m py_compile` on each file to confirm it works. They only need the Python 3 standard library.

## Hard rules
- **GET only.** Never make PUT, POST or DELETE calls, and never change Dashboard settings. The scripts have no write path; do not add one. Recommend changes and tell the operator where to make them in Dashboard.
- **Never print, echo, log or write the API key.** Don't `cat` the secrets file or put the key on a command line. Let `mclient.py` load it.
- **Real numbers only.** Every finding must cite a value from the API. If a data source was unavailable, say so. Never guess.
- **Report times in the operator's local time zone** with a short label (for example "PT"). API timestamps ending in `Z` are UTC; convert them.
- **Stop on 401 or 403.** If a script prints `AUTH_ERROR`, stop and report it verbatim. Do not retry in a loop.
- **Respect rate limits.** The client enforces 4 requests/second and backs off on 429 using Retry-After. Do not run modes in parallel against the same org.

## First run
1. **Check for the key:** `python3 /workspace/meraki/bin/setup.py --check-key`.
   - It prints `KEY_PRESENT` or `MISSING_KEY` and never shows the key.
   - The key is read from env `MERAKI_API_KEY`, or else from the box secrets file (`/home/box/agent-data/box-secrets.json`) at top level or under `card`.
   - An already-open shell may not have new env vars. The scripts run as fresh processes and fall back to the secrets file, so this is handled.
2. **If the key is missing:** ask the operator for it through a **secure secret request named `MERAKI_API_KEY`**. Never ask for it in chat. Tell them:
   - Create the key under **My Profile > API access** in Dashboard.
   - The safest choice is an admin with **read-only** org access.
   - **Dashboard API access** must be enabled under **Organization > Settings**.
3. **List what the key can see:** `python3 /workspace/meraki/bin/setup.py --list`. This shows orgs, networks, product types and device counts by status.
   - Show the operator a short table and have them pick the network to watch.
   - If there's an obvious single candidate, still confirm it with them.
4. **Save the choice:** `python3 /workspace/meraki/bin/setup.py --org <ORG_ID> --network "<network name or id>"`.
   - The name match is case-insensitive.
   - If the name isn't in that org, the script searches every org and prints where it was found. Report that and re-run with the right org.
   - `setup.py` refuses to overwrite an existing config unless you pass `--force`. Only do that when the operator asks to switch networks.
5. **What setup records:**
   - `config.json`: org id and name, network id and name, product types, thresholds, and a baseline (7-day WAN loss, latency and jitter per MX; known-client count; tracked devices).
   - Monitor state: MACs of clients seen in the last 30 days, which seeds the "new client" check, and the devices that are online, alerting or recently offline.
6. **Run a full check** (below) and give the operator the report.

Exit codes for all scripts: 0 ok, 1 usage/not found, 2 no config (run setup), 3 missing key, 4 auth failure.

## Health check (full mode)
Run `python3 /workspace/meraki/bin/check.py --mode full`. It takes about 20–60 s depending on the number of devices. It prints the paths to `findings.json` and `report_draft.md`.

What it checks (GET only; endpoints that return 400 or 404 are skipped and listed under `unavailable`):

| Area | What is checked | Main endpoints |
|---|---|---|
| Inventory/status | Online, alerting, offline and dormant devices; PSUs not powering (empty slots ignored); devices not on configured firmware; health alerts; 7-day offline transitions | `/organizations/{org}/devices`, `/devices/statuses`, `/devices/availabilities/changeHistory`, `/networks/{id}/health/alerts` |
| Alerting config | Key alert types disabled for the network's product types; no default recipients | `/networks/{id}/alerts/settings` |
| WAN/uplink | Active uplinks and failover; last-5-minute loss/latency; 7-day loss, latency and jitter to 8.8.8.8 per MX; bandwidth limits; shaping rules | `/organizations/{org}/appliance/uplink/statuses`, `/devices/uplinksLossAndLatency`, `/devices/{serial}/lossAndLatencyHistory`, `/appliance/trafficShaping/*` |
| Wireless | 7-day connection success and failure steps; per-AP best-effort latency; 7-day channel utilization per band; channels, width and power; SSID security (open SSIDs, WPA2-only, 802.11w, tag-limited SSIDs) | `/wireless/connectionStats`, `/failedConnections`, `/devices/latencyStats`, org `channelUtilization/byDevice`, `/devices/{serial}/wireless/status`, `/wireless/ssids` |
| Security | IPS mode, AMP, 7-day security events, port forwards and 1:1 NAT open to any source, WAN access to the MX web page, content filtering, syslog, **inter-VLAN segmentation** (deny rules from internal sources to internal destinations), stale rules, martian-VLAN and rogue-DHCP events | `/appliance/firewall/*`, `/appliance/security/*`, `/appliance/vlans`, `/networks/{id}/events` |
| Switch | Port errors and warnings, gigabit devices linked at 10/100, access ports without BPDU guard, DHCP server policy | `/devices/{serial}/switch/ports/statuses`, `/switch/ports`, `/switch/dhcpServerPolicy`, `/switch/stp`, `/switch/stormControl` |
| Firmware | Candidate or beta builds running; newer stable available; upgrade window | `/networks/{id}/firmwareUpgrades` |
| Licenses | Per-device, co-term or subscription expiries within 60 days; unused licenses; online devices with no visible license | `/licenses`, `/licenses/overview`, `/administered/licensing/subscription/subscriptions` |
| Sensors | Battery below 20%, no report for more than 24 h, temperature above the threshold | `/organizations/{org}/sensor/readings/latest` |
| Clients (7d) | Unnamed clients; IoT-looking devices sharing a VLAN with phones and laptops (a manufacturer/OS heuristic; call it a heuristic in the report); top users; per-VLAN counts | `/networks/{id}/clients` |

Then write the operator's report from `findings.json`, using `report_draft.md` as a starting skeleton, and save it to `/workspace/meraki/report.md`. You can read the raw JSON in the run's `raw/` folder to add evidence. Do not invent numbers.

### Report format
1. **Overall verdict first:** 2–4 sentences. What's healthy, what's wrong, and device counts (online, alerting, offline, dormant).
2. **Top 5 fixes, ranked by impact.** Rank by risk and user impact, not raw severity order: outages and blind spots first, then expiring licenses, then security exposure, then firmware and optimization. Each fix has:
   - **Evidence:** the actual numbers or config values.
   - **Change:** exactly what to change.
   - **Where:** the Dashboard path, for example *Network-wide > Configure > Alerts*.
3. **Other findings,** grouped as Wireless, WAN/uplink, Security, Switch, Clients, Firmware/alerting/licensing and Sensors. One or two lines each, with evidence.
4. **What couldn't be checked, and why:** from `unavailable`, plus anything the API doesn't expose (speed tests, camera video quality).
5. Keep it plain and practical. No filler, no invented numbers. Use serials and client names only in the operator's own report.

## Monitor mode
Run `python3 /workspace/meraki/bin/check.py --mode monitor`. It is quick (about 6–8 API calls) and meant for a schedule, for example every 5–15 minutes.

**What it checks, against `config.json` thresholds:**

| Check | Default threshold |
|---|---|
| Tracked device offline or dormant, or any device alerting | Any |
| PSU not powering (empty slots ignored) | Any |
| WAN loss per uplink/probe IP | > 2% in ≥ 4 of the last 5 one-minute samples |
| WAN latency per uplink/probe IP | > 50 ms in ≥ 4 of the last 5 samples |
| Previously active WAN uplink no longer active; cellular failover in use | Any |
| Wi-Fi connection success, last hour | < 97% (with ≥ 50 attempts) |
| Wi-Fi auth failures, last hour | > 10 |
| New client (MAC not seen before) | One-shot event |
| IDS/AMP security events since the last run | One-shot event |

**Dedup:** active problems are stored in `state/monitor_state.json`.
- A problem is printed once, as `NEW`.
- It is printed as `CHANGED` if its severity changes.
- It is printed as `RESOLVED` when it clears.
- New clients and security events are one-shot `EVENT` lines. The client is then added to the known list and the security cursor advances.
- If a data source fails during a run, its earlier problems are carried over rather than falsely marked resolved.
- If nothing is new, the script prints exactly **`NOTHING_NEW`**.

**How to relay the output:**
- Output is `NOTHING_NEW` → reply with only `NOTHING_NEW` and nothing else.
- Otherwise → relay the lines as a short alert, converting to local time. Add a one-line suggested action per item, for example "power-cycle the camera's switch port".
- On `AUTH_ERROR` or `MISSING_KEY` → alert once and stop.

Thresholds can be changed by editing `thresholds` in `config.json`.

## Weekly digest mode
Run `python3 /workspace/meraki/bin/check.py --mode weekly` (suggested: Monday morning). It prints JSON and saves `state/weekly_last.json`. Summarize it in 10 lines or fewer:
- Device status counts, and devices that went offline during the week.
- **Firmware:** candidate or beta builds running, newer stable releases available, and the upgrade window.
- **Licenses** expiring within 60 days, with dates in local time.
- **Sensors:** low batteries, stale sensors and high temperatures.
- **WAN trend vs baseline:** 7-day average latency change in % and average loss. Flag latency more than 25% above baseline or loss above 0.5%.
- Monitor problems still open, and how long they've been open.

## Scheduling suggestion
- **Monitor:** every 5–15 min. Stay silent on `NOTHING_NEW`.
- **Weekly:** Monday 8 AM local time.
- **Full:** monthly, or on request.
- To re-baseline after a planned change (a new ISP, or new devices), rerun `setup.py ... --force`. Note that this resets the monitor state.

## Limitations
- One network per config. For more, use a separate `MERAKI_HOME` per network.
- Random or private Wi-Fi MACs (iOS/Android) show up as "new clients" when they rotate. The client description is included so the operator can judge.
- The WAN "sustained" check uses the last 5 minutes, which is what the API exposes. The 7-day trend is in weekly mode.
- The license list for per-device orgs may not show every assignment, so treat "no visible license" as something to verify.
- Camera video quality and retention, Systems Manager, per-client RSSI history and ISP speed tests are not covered.
