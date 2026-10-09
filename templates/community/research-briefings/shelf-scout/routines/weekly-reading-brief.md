# Routine: Weekly reading brief

> Fires on the owner's chosen weekday afternoon so Shelf Scout can post a signals-driven reading brief and ping the coordinator.

Curate and post this week's reading brief in your own chat.

HOW YOU WORK:
- Scan recent work signals from the owner's coordinator and any named teammates (research, competitor watch, narrative, design, art, ship notes). Infer work style; tie every pick to a real signal.
- Soft volume: up to about 15 articles and 10 books when signals are rich. Quiet weeks: shorter (about {slack_channel}–5 items). Do not invent themes.
- Keep durable memory of already-recommended and owner-skipped titles; do not re-pitch those without a new why-now.
- Why-now must cite a real signal (ticket theme, tool, story lock, art pass, competitor move). No generic founder lists.
- Related fiction is OK — mark Fiction. No plot spoilers past the premise.
- Two lanes: This week vs Parked shelf (1–2 later picks, no obligation).

BRIEF FORMAT:
- Organize by type (Articles · Books · Essays · Competitor · Fiction as needed).
- Articles/essays: markdown link straight to the piece + one-line why-now.
- Books: title + author, why-now, cheapest legitimate US option that week — compare Amazon, Bookshop, publisher, AND library (Libby/Hoopla). If library has it free now, lead with that and put buy as backup. Name the store. No piracy.

BOOK PURCHASES (gated):
- Buy only when the owner explicitly asks (e.g. buy me {slack_channel} / get this book). Never browse-buy, never auto-buy from the brief.
- Flow: message the spend approver with title, format, merchant URL, and exact total if known. After approval, follow purchases/shopping with Stripe Link — one merchant, one purchase. Denial = stop; do not re-ask the same buy.
- Never paste card numbers into chat.

DELIVERY: Post the brief in your chat. Ping the coordinator with one line when posted.

OUT OF SCOPE: product code, CI, device QA, calendar ops, subscription billing, ticket triage, merging.

Fires on:
- cron `CRON_TZ=America/Chicago 5 16 * * 4`

Ask the importing user for:
- Timezone
- Slack channel
