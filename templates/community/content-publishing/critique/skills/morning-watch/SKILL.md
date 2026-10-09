---
name: morning-watch
description: "Use this when the user says yes to the morning watch offer, when the morning watch routine runs, or when the user asks to pause, move, change, or stop it."
---

# Morning watch

This is the only routine Critique may create for a user, and only after the user's explicit yes. It is off by default and never ships switched on. The owner-only daily digest, if this bot has that skill, is separate and is never offered.

## When the user says yes
1. Ask which accounts or topics to watch. The user names them. Don't suggest your own. A handful is plenty.
2. Check each named account. Keep public figures, brands, companies, and accounts that clearly post in public as a business or creator. If one looks like a private person, say in one line that you'll leave it out.
3. Test your search. Try one search for recent public X posts from those accounts or on those topics.
   - If it works and returns posts you can open with fetch-x-post, go to step 4.
   - If you have no search tool, or it returns nothing you can open, say so plainly: "I can't search X from here, so I can't pick posts for you. Paste a link whenever you want a check, or I can send a one-line weekday reminder asking for one." Create the reminder only if they say yes (see "Reminder-only form" below). Otherwise create nothing. The fetch-x-post skill reads one post you already have a link to. It is not a search, so don't use it as one.
4. Ask what time on weekdays (Monday to Friday) they want it, and their timezone. Offer "8 AM your time, weekdays" only as a suggestion, and wait for their answer.
5. Save the accounts, topics, time, and timezone as the morning-watch prefs. Create one routine named "Morning watch" for weekdays at that time, with the job text below.
6. Confirm in one line: "Done. One post to judge each weekday at <time>. Say pause or stop anytime."
7. If they don't answer the setup questions, create nothing.

## Job text for the routine
> Read the morning-watch prefs, verdict-log.md, and morning-watch-log.md. Search for public X posts from the saved accounts or on the saved topics, posted since the last weekday run (on Monday, that covers the weekend).
>
> Pick ONE post that is worth judging:
> - It makes a claim the user could act on: a way to make money, a program or payout, a tool, a method, or a pitch.
> - It touches what the user runs or sells, per their saved answers. Prefer the one closest to their work.
> - It's from a public figure, brand, company, or an account that clearly posts in public as a business or creator. Never pick a private individual's post.
> - It isn't already in verdict-log.md or morning-watch-log.md.
>
> Open the chosen post with the fetch-x-post skill before writing anything. If it can't be opened, pick another or send nothing. Never make up a post, a link, or what a post says.
>
> Send one short message and nothing else:
> Morning watch: <author's handle, linked to the post>
> Why: <one line: what the post claims and why it matters to this user>
> Want the Kill-or-Pursue check on it?
>
> The why line is not a verdict. Don't say KILL or PURSUE, don't give a proof grade, and don't call the claim true or false. Don't add numbers or details that aren't in the post.
>
> Add one line to morning-watch-log.md: the date, the post link, and "flagged". Don't add it to verdict-log.md unless the user asks for the check.
>
> If the search worked and nothing new is worth judging, send nothing. If the search didn't work, send one line: "Couldn't search this morning, so no pick today. Paste a link if you want a check." Never guess a pick. If two runs in a row fail, pause the routine and tell the user in one line.
>
> Never post, reply, like, repost, follow, or message anyone. Never log in to X.

## Reminder-only form (when you can't search)
Create this only if the user said yes to the reminder in step 3. Name it "Morning watch (reminder)", ask their weekday time and timezone, and use this job text:
> Send one line: "Morning. Paste an X post or idea you want judged today." Nothing else. Don't search, don't pick a post, and don't mention any post. Never post, reply, like, repost, follow, or message anyone.

## When the user answers the morning message
- Yes: run the normal Kill-or-Pursue check on that post, with the usual verdict line, output shape, and verdict log entry.
- No, or no reply: do nothing. Don't send it again.

## Pause, move, change, or stop
- **Pause:** pause the routine and confirm. **Resume:** turn it back on and confirm.
- **Move:** update the time or timezone and confirm.
- **Change:** update the accounts or topics, apply the private-person check from step 2, and confirm the new list.
- **Stop:** delete the routine, set the morning-watch prefs back to unset, and confirm in one line. Don't offer it again unless they ask.
