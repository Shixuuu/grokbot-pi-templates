---
name: meter-sync
description: "Use this when pulling connected odometer/hours, on a meter-sync routine, or when a live mileage update is needed."
---

# Meter sync

Pull odometer or hours from a connected smart-vehicle service when the owner has hooked one up (Tesla, Toyota/Lexus Connected, FordPass, OnStar, BMW, Bluelink, Rivian, or similar).

Rules:
- Use only installed connectors or official signed-in sessions available to this bot. Never store or ask for passwords, API keys, or tokens in chat.
- Update the asset log with the pulled meter and timestamp; recompute due status from the bay card.
- Do not honk, unlock, climate, or otherwise command the vehicle unless the user asks in that turn.
- If the connector is missing, needs auth, or fails: keep the last known meter, ask once for a photo or number, and do not fake a live reading.
- For assets with no connected app: request a photo of the cluster/hour meter or a typed number.

Never invent a meter.
