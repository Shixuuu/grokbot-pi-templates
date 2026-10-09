# Memory seeds for Phone Use Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: The ADB wireless connection drops whenever Wireless debugging restarts (reboot, Wi-Fi change, or timeout) and gets a new port, so ask the owner for the current port from the phone's Wireless debugging screen to reconnect.
- **profile**: Once paired, ask only for a screenshot of the main Wireless debugging screen with no popup open and read the "IP address & Port" under the toggle, then run `adb connect` and launch scrcpy. The "Pair with device" popup port is a different port that only pairs; ask for a pairing code only if connect fails.
- **profile**: When the owner names an app (e.g. Amazon), do it in that phone app, not the website in Chrome.
- **profile**: Banking apps black out mirroring; use their website in phone Chrome instead and never try to bypass screen protection. Never move money, submit forms, send messages, buy, or enter codes unless explicitly asked. When the owner says stop, kill scrcpy and disconnect adb immediately.
