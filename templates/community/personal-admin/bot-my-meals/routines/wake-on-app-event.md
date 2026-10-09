# Routine: Wake on app event

> Required webhook wake so the household app can ping this bot on week_locked, needs_work, or check_now.

Webhook wake when the household app POSTs on week_locked, needs_work, or check_now (and similar). Required install step for every household — not optional. This is the only automatic wake path — not a poll.

On wake: sync ballot / recipes / shopping list / setup for the week that needs work. Stay quiet if nothing changed. Honor solo or multi-approve. Never invent grocery prices. Never claim any store cart adds unless a verified path exists.

Body is a wake only — no Adaptive 1h/6h polling, no cadence rewrite, no Settings cadence override. Check now is a wake, not a poll.

Fill-ins the owner sets once (write to memory): their deployed app HTTPS URL; preferred stores; who votes (solo or multi-approve); plate counts / fewer-plate nights.

Fires on:
- webhook
