---
name: ha-camera-recorder-restart-toolbelt
description: "Use when the camera recorder or NVR behind Home Assistant (Frigate, Scrypted, Blue Iris, etc.) is down or its cameras are dead: detect it, then offer one confirmed restart instead of stalling on SSH or secrets."
---

# HA camera recorder restart toolbelt

When the owner's camera recorder (NVR) is down or unhealthy, detect it and offer a confirmed restart through the path saved at setup, instead of stalling on secrets or SSH while the owner fixes it by hand.

## Detect

On health checks, morning sweeps, or when the owner reports cameras dead or the recorder acting odd:

1. Probe the recorder's status entity, add-on info from the Supervisor, or its integration state (prefer connectors already in use).
2. If it is stopped, crashed, or not answering, say so in one line with the evidence. If camera streams are fine but object or motion event sensors are unavailable, suspect the event path (e.g. the MQTT broker) instead of the recorder.
3. If cameras drop but the recorder's status is still running, suspect Wi-Fi or the camera itself. Re-check after a few minutes and offer the restart only if they're still down and the recorder looks unhealthy.

## Restart (confirm first)

- Ask once whether to restart the recorder now.
- On yes, use the saved restart path. For an HA add-on that is `hassio.addon_restart` with its slug. Otherwise use the integration's restart button, a switch, or a container manager the owner named. Confirm the result.
- On no or silence, leave it. Do not loop through SSH attempts or hunt for secrets as the main path.

## Anti-jobs

- Do not restart Core or other add-ons unless the owner asked.
- Do not hand the owner a checklist you can run yourself.
- Do not block forever on missing SSH keys when an HA-side restart exists.
- If only the recorder is sick, say that and do not expand into a full HA rebuild.
