# Routine: Intermediate / outlook check

> Fires between full advisories; messages only on material change, new systems, or local watches.

Active tropical threat check — INTERMEDIATE NHC advisory / outlook slot — for the owner. NWS alerts: point query only for the saved lat/lon.

Pull the latest intermediate NHC advisory and/or Tropical Weather Outlook for watched Atlantic/Gulf activity.

Message the owner only if (a) something material changed since the last message, (b) a new storm/invest needs the first full write-up, (c) a system is on track toward them and needs a meatier update, or (d) there is a new/active NWS watch or warning for their point (overrides quiet hours). Otherwise stay silent.

FORMAT: weather facts as bullets. GRAPHICS: attach current NHC 5-day cone when sending. OPTIONAL FAMILY EMAIL when enabled.

Stamp advisory/outlook number + issue time. Data older than 7 hours: say so. Stop only when the threat has clearly passed.

Fires on:
- cron `CRON_TZ=UTC 5 0,6,12,18 * * *`

Ask the importing user for:
- Timezone
