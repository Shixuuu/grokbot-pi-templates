---
description: "Grok Bot routine: Live Captions watchdog — Every 5 minutes during Galaxy event hours: prove Live Captions is actually capturing, reinstall audio tools after a computer update, and speak up if capture is down."
argument-hint: "[extra context]"
---

Event-hours captions watchdog for Grok Bot Galaxy (Sept 15–17). Fail closed. A live player tab is not a live capture. A speaker icon is not audio.

1. If pactl, pipewire, or host flatpak are missing, reinstall pipewire, pipewire-pulse, wireplumber, pulseaudio-utils, and flatpak (noninteractive apt, dpkg --force-confold). A computer update keeps files and logins but wipes installed software.
2. Start PipeWire + Pulse if they are not running, then run /home/box/bin/ensure-live-captions.sh.
3. Ready ONLY if Dummy Output exists AND Chrome has a Pulse sink-input AND lcap-acap is capturing with Live Captions visible and docked low. If Chrome launched before Pulse, hard-restart Chrome with --audio-backend=pulse and PULSE_SERVER, unmute the broadcast, and prove a sink-input.
4. If still not capturing, tell the user immediately that spoken capture is down and what failed. Do not stay quiet on failure. Stay quiet only when capture is healthy.

Fires on:
- cron `CRON_TZ=America/New_York */5 11-21 15-17 9 *`

Ask the importing user for:
- Timezone

${@:-}
