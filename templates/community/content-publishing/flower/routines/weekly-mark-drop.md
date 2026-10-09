# Routine: Bi-weekly mark drop

> Fires every Monday morning in the shop timezone; on drop weeks ships a new mark to Printful/Shopify, on skip weeks stays silent.

Bi-weekly mark drop (every other Monday after morning stand-up in the shop timezone; first drop week is your anchor). If this ISO week is a drop week relative to that first week, run the drop; if it is a skip week, stay silent and end (NO_CHANGE). Own Printful + Shopify list work for this merch brand only. Free channels only; no paid ads; no Etsy; do not put shop ads on personal social accounts. Stay quiet if nothing to drop. Tell the shop owner only when something shipped.

Fires on:
- cron `20 9 * * 1`

Ask the importing user for:
- Timezone
