---
name: ha-issue-notify-automation-builder
description: "Use when setting up or expanding live house-issue alerts for a Home Assistant ops bot: detect the owner's devices and build (after a yes) the rest_command plus one \"Grok - HA issue alerts\" automation that POSTs issue payloads to the bot's webhook, then test it."
---

# HA issue notify automation builder

This builds the automation that lets Home Assistant tell the bot the moment something breaks. It uses one automation with one trigger per issue type, all calling one `rest_command`.

## 1. Webhook and rest_command
- Get the bot's webhook URL from the owner through the app's webhook link, and keep the webhook key out of chat. Have the owner put the URL and key in `secrets.yaml`, or in whatever secret handling they prefer.
- Draft a `rest_command` named something like `grok_ha_issue`. It should POST JSON (`{{ payload }}`) to the webhook, with the auth header read from secrets. Never print or store the key yourself.

## 2. Detect what to watch
Read the entities and offer only what exists. The hold time on each trigger keeps brief flaps from paging anyone.

| Issue id | What triggers it | Hold time |
|---|---|---|
| `camera_unavailable` | Camera entities go to `unavailable` | about 2 minutes |
| `recorder_unavailable` | The camera recorder's status entity goes to unavailable or not running | about 30 seconds |
| `recorder_events_unavailable` | The recorder's event-backed sensors (zone, person, object counts) go to unavailable, which usually means MQTT or the event path is down | about 2 minutes |
| `zwave_device_offline` or `zigbee_device_offline` | Mesh node status goes to `dead`, or availability goes to `unavailable` | about 15 minutes |
| `internet_unreachable` | A connectivity sensor turns off | about 30 seconds |
| `lock_battery_critical` | A battery-low or critical sensor on a lock turns on, or the lock's battery drops under the owner's threshold | a few seconds |

Skip anything on the owner's ignore list, and never ping for it. When the owner says a device is gone or repurposed, add it to the ignore list and offer one cleanup (for example, removing it from these triggers). After a Core, Z-Wave/Zigbee, or Wi-Fi change several triggers can fire at once; fold a burst of offline events within about 10 minutes into one message. Never add safety devices (leak, smoke, CO, alarm) as a way to route their alerts through the bot. Those stay on the phone.

## 3. Draft, then create after a yes
- Show one automation named "Grok - HA issue alerts" (with an id like `grok_ha_issue_alerts`). Give each trigger an `id` equal to its issue id, and have a single action call `rest_command.grok_ha_issue` with this payload:
  `{{ {'entity_id': trigger.entity_id, 'from_state': (trigger.from_state.state if trigger.from_state else ''), 'to_state': (trigger.to_state.state if trigger.to_state else ''), 'friendly_name': (trigger.to_state.attributes.friendly_name if trigger.to_state and trigger.to_state.attributes else ''), 'trigger_id': trigger.id, 'issue': trigger.id, 'source': 'homeassistant', 'test': false} | to_json }}`
- Use mode `queued`, with a 2-second delay after the call so bursts don't collide.
- Wait for the owner's yes. Then create it through the automation config API, or as a package file if they manage YAML in git, and reload automations only with that same yes.
- Turn on the webhook routine first (only after the owner's yes); the handshake can't arrive while it's off. Then send a handshake test payload (`test: true`, `issue: handshake`). The webhook routine stays quiet for it. Then confirm to the owner that it's live.

## 4. Keep it current
During the weekly automation review (the only place maintenance-watch checks 10 and 11 run), look for new cameras, mesh nodes, or lock batteries that aren't in the triggers. Offer to add them in one list, and change nothing until the owner says yes. Never rename or rewire an existing notify automation without asking. If an old one already works, extend it rather than replacing it.
