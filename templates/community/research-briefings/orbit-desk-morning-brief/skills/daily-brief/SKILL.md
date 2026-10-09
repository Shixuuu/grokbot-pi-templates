---
name: daily-brief
description: "Use this when the user asks for their morning brief, when a scheduled daily routine fires, or when they say \"brief me,\" \"what's happening today,\" or \"morning update.\" Produces a short, sourced markets and tech news brief based on the topics saved in memory. News only, never financial advice."
---

# Daily brief

## Step 1: Load settings
- Read memory for: watch topics, delivery time and time zone, and length (Quick ~120 words / Standard ~200 / Full ~250).
- If there are no saved watch topics and this isn't a scheduled run, run the setup questions from your instructions first.
- If it is a scheduled run with no setup saved, use the defaults (general markets + tech, Standard length) and add one line at the end offering to set up topics.
- Note today's date in the user's time zone. Use it in searches and to check freshness.

## Step 2: Search (live, this run only)
Run web searches in this run. Don't rely on memory or earlier conversations for any fact.
1. **General headlines:** top markets news and top tech news for today's date (e.g. "stock market news [date]," "tech news [date]," "stock futures [date]").
2. **Watchlist:** one search per saved topic or ticker (e.g. "[topic] news [date]"). Batch closely related topics if the user has more than six.
3. **Calendar:** today's earnings reports and economic releases (e.g. "earnings calendar [date]," "economic calendar [date]"). Only count items the source clearly lists for today.
4. Open the best source for each item you plan to use and confirm the key fact and number there, not just in the search snippet.

## Step 3: Filter
Keep an item only if:
- a source you retrieved in this run supports it, and you have its URL;
- it was published in the last ~24 hours (or it's clearly labeled with its date);
- it's news, not opinion dressed as news, and not a price target or buy/sell rating.

Drop duplicates (the same story from several outlets gets one line and the most direct source). Prefer primary sources (company releases, regulators, official statistics agencies) and established news outlets over aggregators and social posts.

## Step 4: Write
Stay within the saved length and never go over ~250 words (not counting links and footer). Format:

```
**Morning brief — [Weekday, Mon D]**

**Top headlines**
- [What happened, one line.] Why it matters: [one line]. [Source](url)
- (3–5 items total)

**Watchlist**
- [Topic]: [one line of news] [Source](url)   — or — [Topic]: Nothing new reported.

**On today's calendar**
- [Company earnings / economic release, time if the source gives it] [Source](url)
(or: "Couldn't confirm today's calendar.")

Want the deeper version of [one item]? Just say so.

News only. Not financial advice. Do your own research.
```

Rules while writing:
- Every number carries a link, and the "as of" time if the source gives one.
- The why-it-matters line explains what the news affects (a sector, a product, a policy, a timeline). It never says what the user should do.
- If a section has no sourced content, say so in one line. Don't invent content to fill it.
- Plain, dry voice. No hype words, emoji, or hashtags. No sign-off.

## Step 5: Check before sending
Go through each line:
- [ ] Every headline, figure, quote, and calendar item has a working link from this run.
- [ ] No buy/sell/hold language, price targets, ratings, or trade suggestions.
- [ ] Nothing older than ~24 hours unless it's labeled with its date.
- [ ] Under the word limit.
- [ ] Footer present.
If any check fails, fix the line or remove it.

## Step 6: After sending
- If the user asks for the deeper dive, run fresh searches on that item and give a sourced breakdown of about 150–300 words, still news only, still with the footer.
- If the user changes topics, length, or time, update memory and confirm in one line.
