---
name: opencti-deploy
description: "Use this when standing up, checking, tuning, or extending a self-hosted OpenCTI threat intelligence platform on the bot's computer with Docker."
---

# Deploy OpenCTI on the bot computer

Goal: a working, local-only OpenCTI (Filigran's open-source threat intel platform) that stores, links, visualizes, and exports threat intel. Hand the heavy lifting to a background worker and verify before reporting.

## 1. Inspect the machine first
- OS, CPU, RAM, free disk, and ports already in use (8080 especially).
- Docker: check for a local socket, or a daemon already reachable over TCP (e.g. `DOCKER_HOST=tcp://127.0.0.1:2375`). Reuse an existing daemon; don't start a second one. If only the client is missing, install the static `docker` CLI and the compose plugin.
- If the daemon runs in its own filesystem, bind mounts of local paths won't work. Use named volumes and inline compose `configs: content:` instead.
- `vm.max_map_count` must be at least 262144 for Elasticsearch/OpenSearch.
- Note any other memory-hungry services (another search engine, browsers) before sizing.

## 2. Deploy from the official compose
- Clone github.com/OpenCTI-Platform/docker into a dedicated folder (e.g. `/workspace/opencti`, with the untouched upstream copy kept in `upstream/`). Pin every OpenCTI image (platform, worker, connectors) to the latest platform release rather than `:latest`.
- Generate `.env` with strong random secrets: admin password, admin token (UUIDv4), encryption key, health key, MinIO/RabbitMQ credentials, and one UUID per connector. Use a dummy SMTP host. `chmod 600` it. Never paste secrets into chat.
- Leave out optional heavy add-ons (XTM One AI, xtm-composer) unless the owner asks for them; xtm-composer needs control of the Docker daemon. Turn off Filigran telemetry.
- Sizing guidance for about 16 GB of shared RAM: Elasticsearch heap 2G with a 4g container limit, platform Node heap about 2.5 GB, 2 workers, `mem_limit` on every container, and `restart: always` everywhere.
- Bind the UI to 127.0.0.1 only. Don't set up tunnels, reverse proxies, or public exposure unless the owner explicitly asks and approves the access method.

## 3. Connectors
- Built-in: STIX/CSV/TXT export, STIX/document/YARA/external-reference import.
- Free starter feeds that need no key: OpenCTI datasets, MITRE ATT&CK (7-day refresh), CISA KEV (daily), abuse.ch URLhaus (every 6 hours, online URLs only). ThreatFox is an easy optional addition.
- Keyed feeds (AlienVault OTX, VirusTotal, etc.) go in only once the owner supplies keys, collected through a secure secret request and never pasted in chat.
- To add a connector: find it in github.com/OpenCTI-Platform/connectors, add `CONNECTOR_<NAME>_ID` (plus any key) to `.env`, add a service that reuses the shared connector anchors and the platform version tag, then run `docker compose up -d`.

## 4. Verify, then report
- The UI answers on http://localhost:8080; GraphQL `query { me { name } }` works with the admin token; workers are connected; each feed connector registers and its work queue drains.
- Known first-boot quirk: connectors that auto-create service accounts can crash once with `KeyError: 'name'` and then recover after the automatic restart.
- Write a `README.md` (start/stop, where secrets live, URL, connectors, how to add one) plus helper scripts (`octi.sh up|down|ps|logs|check`).
- Report the URL, admin email, where the secrets file is (its path, never its values), versions, tuning, connectors and ingestion status, and any warnings. Flag risky host settings you notice, such as an unauthenticated Docker API on 0.0.0.0, without changing infrastructure you don't own.

## 5. Previews and exports
- Chat can't open localhost, so show the platform with a headless-browser screenshot script (Playwright) that logs in using the `.env` credentials without printing them. Open each PNG to confirm it isn't a login page or spinner before sending it.
- Export reports as STIX 2.1 bundles and indicator CSVs into an `exports/` folder.
