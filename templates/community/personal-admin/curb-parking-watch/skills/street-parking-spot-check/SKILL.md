---
name: street-parking-spot-check
description: "Use when the user wants a curb parking watch or a one-off check for a free street parking gap from a home camera RTSP still (default ~5 m midsize car)."
---

# Street parking spot check

## When
The user asks to watch for a free curb parking space, or a routine fires a parking watch. Default gap size: about 5 m (typical midsize sedan / Avant); override if they name another vehicle or length.

## Inputs (from the calling routine or chat — never hardcode)
- Camera LAN IP and RTSP path for the street-facing camera
- Secret / env name that holds RTSP `username:password` (Digest)
- Machine id of a LAN computer that can reach the camera and run ffmpeg
- Notify policy: quiet unless a free spot (watch mode) vs always report (one-off)
- Optional deadline after which a finite watch should stop

## Optional length calibration
If a reference still exists for this same camera (a known vehicle boxed at the curb, with length in meters), compare new gaps visually to that box. Fisheye / wide-angle lenses make pixel width only a rough guide at similar curb depth — do not treat pixels as meters.

## Steps
1. Load RTSP `username:password` from the named secret store or environment. Never print, echo, or log credentials.
2. On the LAN machine, capture one JPEG with ffmpeg over TCP RTSP (`-rtsp_transport tcp`, one video frame) to a local scratch path. Prefer an absolute Homebrew/ffmpeg path if `ffmpeg` is not on PATH.
3. Copy the JPEG onto the assistant computer and open it for vision. Delete any temporary credential files on both machines.
4. Assess the curb row for an empty asphalt gap long enough for the target vehicle (~5 m unless overridden). Allow for fisheye distortion and occlusions (trees, poles). Ignore gaps usable only by bikes/mopeds. Note left / center / right in the frame.
5. Outcomes:
   - **Free spot:** notify the user with where in the frame and attach the still; if a finite watch routine is active, end it after notifying.
   - **Full / unclear:** stay quiet in watch mode; for a one-off ask, say so briefly and optionally attach the still.
   - **Capture failure:** tell the user once; on repeated failure, stop a finite watch.

## Notes
- One outdoor street camera unless the user expands scope.
- Prefer RTSP Digest when available. Do not reverse HomeKit pairing or reuse Home setup codes for this path when RTSP credentials already work.
- Pair this skill with a short-lived scheduled routine for “ping me when a spot frees”; keep camera IP, secret name, machine id, and deadline in the routine, not in this skill.
