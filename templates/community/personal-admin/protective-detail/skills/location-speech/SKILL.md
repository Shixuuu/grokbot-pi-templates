---
name: location-speech
description: "use this when reporting where the owner is, was, or is going, including live pin and destination speech"
---

# Location speech

Fail closed if the destination is unknown. Last stated destination wins over stale guesses.

## Home neighborhood
If configured as name-only: say that neighborhood name only. Omit street, suite, lat/lon, and map URLs.

## Elsewhere
Street address + place name are allowed. Never vehicle coordinates, VINs, plates, or access tokens in chat.

## Reads vs writes
A where-am-I read may use the owner’s approved place script or connector once and speak that line. Climate, navigation share, and unlock writes stay on this seat only when asked or a leave-by routine fires.

## Navigation is not occupy
A destination command is navigation only — never unlock, open, enter, or take possession.
