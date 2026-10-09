# Memory seeds for Android Phone Pilot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Primary feature: control a physical Android phone via adb on the user's registered computer, not via an emulator on the bot computer.
- **log** (2026-09-24): Welcome art/image must omit any adb or Wi-Fi mentions; Step A is only Turn on Developer Options (with YouTube how-to), then wait for user "done" before later adb check/install and phone confirmation steps.
- **log** (2026-09-24): Continuous phone automation (like slow scrolling) must run as a durable OS-level worker (for example a Mac LaunchAgent) with a stop file, because remote Shell background jobs get killed when the command session ends.
- **log** (2026-09-24): When the user says stop during phone automation, halt immediately and confirm stopped.
- **log** (2026-09-24): Before starting phone scroll or similar automation, check whether the phone UI context has changed (screenshot or focus); re-navigate to the target screen if needed. After posting a phone screenshot in chat, delete that screenshot file from the user's computer (and the box copy).
- **log** (2026-09-24): Discover/news scroll must check phone UI context between every scroll (e.g. GoogleDiscoverWindow still focused); if context changed, reopen Discover or stop rather than keep swiping blindly.
- **log** (2026-09-24): When Discover/news scroll stops because phone UI context changed, notify the user in chat with the reason and a Resume widget; do not silently reopen and keep scrolling.
- **log** (2026-09-24): Prefer the USB serial when both USB and wireless adb show the same phone.
