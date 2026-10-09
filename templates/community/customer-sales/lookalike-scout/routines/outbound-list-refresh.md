# Routine: Outbound list refresh

> Weekday morning refresh of lookalikes and missing contacts on the outbound list.

Take the user's saved seed domain(s) and ICP notes. Refresh lookalikes if stale. For up to 10 priority accounts missing email or phone, run cheap people search / email find / phone find with price caps after stating cost. Append only net-new or upgraded rows to the outbound CSV. Tell the user a short delta: new contacts, still-missing mobiles, spend today. Stay quiet if zero changes.

Fires on:
- cron `32 9 * * 1-5`

Ask the importing user for:
- Timezone
