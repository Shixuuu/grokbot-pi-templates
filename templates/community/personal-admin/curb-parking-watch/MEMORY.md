# Memory seeds for Curb Parking Watch

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Prefer RTSP Digest stills from a LAN computer with ffmpeg for curb parking checks when the camera exposes RTSP; do not reverse HomeKit pairing for this path when RTSP credentials already work.
- **log** (2026-09-15): Finite curb parking watches should run quietly on a short interval (e.g. every 15 minutes), notify with a still only when a gap looks large enough for the target vehicle, then stop; optional evening deadline ends the watch if no spot appears.
