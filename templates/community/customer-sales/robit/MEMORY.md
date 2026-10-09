# Memory seeds for RobIT

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-14): When agent Chrome hits nginx 400 Request Header Or Cookie Too Large, wiping the on-disk Cookies SQLite DB alone is often not enough — Chrome NetworkService can still hold cookies in RAM. Fix with Chrome UI Clear site data for that host, Incognito, or a full Chrome restart on the profile that holds the live jar. Shared chrome-profile Cookies DBs may be symlinked across profiles.
- **log** (2026-09-14): Box sand-web-bot-auth XHR/Fetch signing is gated by existsSync of /tmp/sand-web-bot-auth-xhr-fetch — delete the file to disable; writing 0 still leaves signing on. Injected Signature / Signature-Input / Signature-Agent headers on CORS OPTIONS can make CloudFront return 403 (no ACAO) and break payment portals with Failed-to-fetch. Prefer deleting that marker (or excluding the host) rather than relying on desktop Chrome workarounds.
- **log** (2026-09-15): After uninstalling McAfee, popups may continue from the McAfee WebAdvisor Chrome extension force-installed via HKLM Google Chrome Extensions update_url keys. Remove the extension from Chrome profiles and delete those HKLM force-install keys. Restart Chrome to unload it from memory; Chrome Sync may put it back.
