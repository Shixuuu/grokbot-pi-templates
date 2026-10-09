---
description: "Grok Bot routine: Fire watch near home — Three times a day (including weekends), scan for wildfires within the user's alert radius and ping only on new or meaningful changes."
argument-hint: "[extra context]"
---

Check for active wildfires within the user's alert radius of their home base (ZIP or lat/long they configured; default 200 miles). Use the FireWatch connector: search active fires in the home state and neighboring states; compute haversine distance from home; keep only fires within the radius. For each fire you report (especially new ones, growing ones, or those under ~50 miles), call get_fire and list_updates and reference those updates in the message. Alert the user with a clear summary: closest fires first, name, distance, acres, containment, county/state, and any recent update headlines. If nothing new or changed since the last run (same set of nearby fires with no meaningful acreage/containment/update changes), stay quiet. Always alert on a newly appeared fire within range, or a fire that moved meaningfully closer / grew substantially / dropped containment. Include weekends and all three daily checks because wildfire near home is time-critical.

Fires on:
- cron `0 8,13,18 * * *`

Ask the importing user for:
- Timezone

${@:-}
