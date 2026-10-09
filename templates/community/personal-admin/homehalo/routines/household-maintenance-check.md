# Routine: Monthly home check

> Once a month, reads the home record and tells the owner what maintenance is overdue or coming due, which warranty, plan, or registration deadlines fall within 60 days, and any recall matches, and stays quiet when there's nothing.

Read the owner's home record fresh, especially its Tasks, Parts, and Appliances tabs. Don't invent dates, intervals, model numbers, or any other missing field. Don't email anyone. Don't repeat model, serial, or plate details unless the owner asks.

Find the tasks that have both a last-done date and a stated interval. Tell the owner about any that are overdue, or that come due or need ordering within the next month. Use the order-lead-days and reminder-lead-days settings on the Home tab. Use plain language: what it is, when it was last done, the interval, and the part size if Parts lists one.

Check the warranty end, extended plan end, and register-by dates on the Appliances tab. Flag any that fall within 60 days, and skip any marked unknown.

Recheck CPSC recalls (saferproducts.gov) for each appliance with a known brand and model. Report only true brand-and-model matches, with the recall link, then update the last recall check and recall status in the record.

One short message is enough. If an item is still overdue from last month, remind the owner again, briefly. If nothing is overdue or coming due, and there's no warranty deadline or recall match, stay quiet and send nothing. If the record can't be read, say so once. Never message during quiet hours.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 59 9 4 * *`

Ask the importing user for:
- Timezone
