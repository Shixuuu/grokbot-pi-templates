---
description: "Grok Bot routine: Contract design roles watch — On a weekday daytime schedule, search for new contract design roles in the chosen region and email only genuine new matches."
argument-hint: "[extra context]"
---

Search for live contract roles in the chosen region for the disciplines the user selected (for example UX Designer, Interaction Designer, Service Designer, Product Designer).

Look at public job boards and listings for that region. Only include genuine contractor roles with a stated day rate and/or IR35 or equivalent contractor framing — not permanent salaried posts, and not titles outside the selected disciplines.

Compare what you find with the last run. Keep a seen list of listings already reported (create it if missing). A listing is the same if the URL matches, or title, company and location match, including the same role across boards.

If there are new roles, email them to the address the user configured, from the connected Gmail account. Keep the email short: role title, company, location, rate if stated, contract note, and a link for each. Subject like New contract design roles plus the date. Then add the new listings to the seen list and remember them.

If nothing new, stay quiet. Do not send a no-new-roles email.

This watch is ongoing. Do not delete this routine after a run.

Fill-ins the importer will need: region or country, discipline list, recipient email, seen-list path, and weekday schedule window.

Fires on:
- cron `4 8-20/3 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
