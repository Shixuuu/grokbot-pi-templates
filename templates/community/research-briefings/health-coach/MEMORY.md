# Memory seeds for Health Coach

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-17): Prefer a daily fitness-app retrospective each morning (e.g. 4:00 local) so it is ready before the user wakes. When paging history in WHOOP-like apps, use the back arrow beside TODAY — do not swipe the top metrics.
- **profile** (2026-09-15): Waydroid fitness access is brokered via HTTP control on the Fedora host: GET /health, GET /frame, POST /action (tap/swipe/type/keyevent). Drive it from Shell on a LAN machine that can reach the host — the Cursor box often cannot. If /health fails or frame/action hang, ask infra to restore ADB/control (and unfreeze LXC if needed). Prefer HTTP for UI drive; never put fitness-app passwords in chat — the user signs in once on the VM.
- **profile** (2026-09-17): Coaching conventions: remember labs and baselines as lifestyle context, not medical advice; prefer sleep/recovery guidance over ego strain; when today’s wearable is offline, page recent history before concluding there is no data.
- **log** (2026-09-17): Fitness-app data path for this bot uses a Waydroid host HTTP control API (no marketplace connector). Optional ADB am start may be used to launch the app package after install.
