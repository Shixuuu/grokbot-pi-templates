---
name: protect-watch
description: "Use this when setting up, running, or troubleshooting a read-only UniFi Protect smart-detect watcher that emails alerts for entry-camera events."
---

# Protect watch

Watch UniFi Protect smart-detect events and email the configured recipients only when an event matches the saved alert rules. Read-only against Protect: POST only to log in, GET everything else. Never change a Protect setting, never enable or disable archiving, never download video, never call a cloud-storage API.

## Config (credentials/protect-watch.json, gitignored, never print the password)
Every value comes from the owner during setup (see getting-started). Nothing is prefilled.
- console_url: https address of the owner's UniFi console (self-signed certificate allowed)
- username / password: a read-only Protect user created for this. Collect the password through a secure secret request, never in chat.
- email_to: the owner's own alert address
- email_extra: optional list of additional recipients. Send to them only after the owner explicitly confirmed each address and authorized automatic alerts to it. Put extras in To alongside the owner, or in Bcc if the owner prefers the recipients not see each other.
- timezone
- entry_cameras (the only cameras that can email), private_cameras (never describe, thumbnail, or email), ignored_cameras (default none)
- quiet_hours (default 22:00 to 06:00), away_detections (default person, vehicle, package), quiet_detections (default person), min_score (default 50)

## Reaching the console
The console is usually on a home LAN the assistant's computer can't reach. Test reachability first. If it's a local address, use the UniFi gateway's built-in WireGuard VPN server: have the owner create a client and attach its .conf. Before bringing it up, change AllowedIPs to only the console's LAN subnet (the generated config routes everything, which breaks the machine's own internet) and drop the DNS line. Add PersistentKeepalive = 25. Suggest a gateway firewall rule limiting that VPN client to the console on port 443. Tailscale needs an always-on LAN device as a subnet router, so skip it when the owner has none. Before sending credentials anywhere, verify the host serves a UniFi OS page (title "UniFi OS", certificate like CN=unifi.local).

## API
- POST /api/auth/login with username, password, rememberMe true. Take csrfToken from the TOKEN cookie JWT (or the X-CSRF-Token response header) and send it as X-CSRF-Token on later requests. A 401 or 403 means stop: the read-only user is missing or the role is wrong. Never try another account.
- GET /proxy/protect/api/bootstrap for camera id to name, and nvr.isAway.
- GET /proxy/protect/api/events?types=smartDetectZone&start=<ms>&end=<now ms>&orderDirection=ASC. The console rejects the call without end (or a limit of 1 to 100).
- Thumbnail, only for events being emailed: /proxy/protect/api/events/<id>/thumbnail, then /proxy/protect/api/thumbnails/<thumbnail id> once. If both fail, send without a picture. Keep thumbnails in /tmp, never the repo.

## Each run
1. Read data/protect-watch-state.json. The watermark is the last processed event end in ms. If missing, start at now; never walk old history.
2. Fetch events from the watermark to now and map cameras through bootstrap. Leave events with no end yet for a later run, and keep recent event ids in state to avoid duplicates.
3. Skip an event when the score is under the minimum, the camera is private or ignored, or the only detection is animal.
4. Email an entry-camera event when nvr.isAway is true and it includes an away detection, or when the local start time is inside quiet hours (which can wrap midnight) and it includes a quiet-hours detection.
5. Group qualifying events within five minutes into one email to email_to plus any confirmed email_extra recipients. Subject: Protect: <detection> at <camera>, <local time>. Body: one short paragraph per event with camera, local time, detection types, score, metadata.weather if present, and only what is visible in the thumbnail (never invent a name), plus the event id. Mention cloud archiving as where the clip was copied only if it's enabled. No video attachment. No qualifying events means no email.
6. After sending, advance the watermark to the newest event end considered (skipped ones included) and write state. If a send failed, don't advance. Never commit state or credentials.

## Changing recipients later
The owner can add or remove extra recipients any time. Confirm each new address with them before saving it, and never add a recipient because someone other than the owner asked.

## Setup order
Collect config, test reachability, log in, list cameras for the owner to classify, then do one manual run (it sends nothing, because it starts at now). Before scheduling, dry-run the last hour or few against a temporary state file and show how many emails would have gone out. Constant vehicle detections on a driveway while Away is set can mean hundreds of emails a day, so offer to drop vehicle from the away detections. Then schedule every 15 minutes around the clock, continuing from the manual run's watermark.
