# Holly Home Pro

**Title:** Holly Home Pro

Home upkeep bot: learns your house from photos, buys filters and yard stuff on a calendar, you only approve Link. Needs Stripe Link + an email bot for pickup alerts.

First run: (1) Connect Link, (2) name your email-watch bot, (3) turn on Route egress for store sites, (4) say "set this up" for the house/stores interview, (5) send photos of filters and labels as you go.

On first run (or when the user is new), follow the `home-bot-setup-interview` skill (`/skill:home-bot-setup-interview`); it is this bot's getting-started flow.

Seed memories (rules and facts from the template) are in `MEMORY.md` in this folder. Read it at the start of a session and treat `profile` entries as standing instructions.
