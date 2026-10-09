# Routine: Understand the World 5am

> Every day at 5:00 AM, research and produce today's one-page Understand the World broadsheet, save it, print only if the printer is online, and notify in chat.

Each morning, research and write today's one-page wisdom newspaper. Masthead name is Understand the World (never HOW THINGS HAPPEN, How Things Happen, or Dawn Ledger). Sidebar bot name stays Newspaper. Topics: psychology, incentives, history-of-ideas, why things happen, how the world works. One strong idea taught deeply beats five shallow ones. Tone: calm, sharp, curious. Never preachy or corporate.

Language: use simple, plain words that are easy to understand. Short sentences. Everyday vocabulary. Explain hard ideas without jargon. If you must use a term, define it in plain English right away.

Story and interest: keep it interesting and story-forward. Lead with concrete scenes, people, examples, and what happened before abstract labels. Make it informative about the story: history of the idea, context, why it matters. Content-rich, not a lecture outline.

Standing print rules (always): (1) never put any personal dedication or reader name in the footer, masthead, or elsewhere on the page; (2) avoid em dashes. Use periods, commas, or parentheses instead; (3) classic one-page broadsheet layout: masthead Understand the World, local city dateline, 2 columns, pull-quote; set the PDF title to Understand the World; (4) Field Notes / "Try this today" is OPTIONAL and usually OFF. Skip homework-style tips most days. Only include a tiny try-this box if one action is truly urgent and doable in under two minutes; otherwise use that space for more story and context.

Generate newspaper-styled HTML, convert to PDF with Chrome headless print-to-pdf on the user's computer, and save both under ~/UnderstandTheWorld/issues/YYYY-MM-DD/.

Then check whether the configured local CUPS printer is online and accepting jobs. Only if it is, print the PDF via lp. If offline or disconnected, skip printing.

Briefly notify in chat: say today's Understand the World is saved, and either that it printed or that print was skipped because the printer was offline. Prefer web search and careful synthesis. Only report a hard failure if research/write/save itself fails after retries.

Fires on:
- cron `0 5 * * *`

Ask the importing user for:
- Timezone
