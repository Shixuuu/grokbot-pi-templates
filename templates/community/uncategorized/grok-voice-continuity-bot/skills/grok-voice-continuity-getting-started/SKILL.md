---
name: grok-voice-continuity-getting-started
description: "Use for a new user's first conversation with a Grok Voice continuity bot, or when they ask to redo setup: give the two notices, run the setup survey one question at a time, confirm the grok.com sign-in, then save settings and create the daily continuity routine."
---

# Getting started: Grok Voice continuity setup

Run this the first time a user talks to the bot, or whenever they ask to redo setup. The bot's default name is Crystal; the user can rename it in Q2. The day-to-day behavior lives in the grok-voice-continuity skill; this skill collects its settings and creates its schedule.

## 1. Intro and the two notices

Open with one line on what the bot does: "Grok Voice starts every chat from scratch. Once a day I check your current voice chat on grok.com, and if you used it I start a fresh one with a short recap so your voice partner picks up where you left off."

Then give both notices, briefly and in plain words:

(a) Access to your Grok account. The bot needs the user's signed-in Grok account in its own browser. It uses that session to read the current voice thread and to create, rename and pin a new one. It never asks for, stores or types a password; the user signs in themselves. If the session expires or a sign-in, captcha or 2FA prompt shows up, it stops and asks the user to sign in. It only touches chats titled `<persona> | YYYY-MM-DD` and never deletes anything unless the user turns on the optional old-chat cleanup (Q12, off by default).

(b) Compute and usage. Every check (reading the thread) and every seed (sending the opener) uses compute and the user's Grok usage. So the bot runs automatically at most once a day. A skipped day still costs one read, a deferred run costs one extra read an hour later, and a manual "roll now" counts as a run.

## 2. Setup survey

Ask ONE question per message, in this order, and wait for each answer. Anything optional can be skipped; all profile fields are optional. Use a choice widget where the answer is a fixed set (Q4, Q12, Q12b, Q11e).

1. What should I call you? (user_name; optional. If skipped, the seed says "the user".)
2. What would you like to name me? (bot_name; default Crystal. If they pick a new name, update the bot's profile name.)
3. What's the name of your Grok Voice persona, the voice you talk to? (persona; required, used in every chat title.)
4. Which days should I run: weekdays only or every day? (schedule_mode; default weekdays.)
5. What time should I run? (run_time; default 7:15 PM.)
6. What's your time zone? An IANA name like America/Chicago, or a city. (timezone; required, no default. Convert a city to its IANA name and confirm it. Don't schedule until this is set.)
7. What topics do you like to talk about, or want your voice partner to know you're into? (interests; optional.)
8. Any seed topics, meaning standing things to bring up or keep in mind every session? (seed_topics; optional.)
9. Any names or words voice transcription tends to mishear, with the right spelling? (correct_spellings; optional. The bot's own name is added automatically.)
10. Before asking, say: "Anything you give me here gets sent to Grok at the start of every voice session. I'd suggest leaving out health, finance and family details unless you really want them carried." Then ask for optional profile details: how they'd like to be addressed, rough location or region, work or role, the communication style they want from the voice persona (e.g. "conversational, bounce ideas" or "brief and direct"), and anything else to carry. (profile_fields; all optional. The style answer fills the seed's STYLE line; default "Conversational and practical; no empty 'let me check'.")
11. Optional: do you have other bots (teammates) that should receive call-outs? If yes, for each one ask (a) its name, (b) common sound-alikes or mishearings, (c) what kinds of notes go to it (its lane). Then (d) is one of them a router or PM teammate that sorts unclear notes? and (e) may implied asks ("<name> will handle that") be relayed, or only reported to you? Defaults: no teammates (no relays; call-outs go into the next seed and the report), no router, relay_implied no. Only accept teammates the bot can actually message on this platform; never create one. Add each teammate name to correct_spellings.
12. Before asking, show this warning: "Grok has no archive or undo for chats. Once I delete one it leaves your history right away, and xAI purges it within 30 days with no documented way to restore it, so treat it as permanent. Before you turn this on, I'd suggest running Export Account Data once (grok.com Settings, Data Controls). I only delete after the new day's chat is fully set up. By default I keep no transcript copy (only my short daily recaps stay in my private workspace); you can opt in to saved copies in the next question." Then ask: should I delete old continuity chats? Off, older than 1 week, or older than 2 weeks. (cleanup_age; default off. Only `<persona> | YYYY-MM-DD` chats are ever eligible.)
12b. Only if cleanup is on: should I keep a text copy of each chat on my computer before deleting it? Copies take up space over time, and if you're deleting for privacy you probably don't want extra copies. (keep_copies; default no.)

## 3. Read back and confirm

Read back a short summary of every answer, including defaults used, and the schedule in plain words (e.g. "weekdays at 7:15 PM Central"). Wait for the user's OK. Apply any corrections and read back again.

## 4. Sign-in check

Open grok.com in the bot's browser and confirm the user is signed in. If not, ask them to sign in themselves in the bot's browser (hand over the desktop for it). Never ask for or type a password. Don't create the schedule until sign-in is confirmed, unless the user says to schedule anyway.

## 5. Save and schedule

- Save the settings to the bot's memory as one profile-tier fact, e.g. "Continuity settings: user_name=..., bot_name=..., persona=..., schedule=weekdays 7:15 PM America/Chicago, interests=..., seed_topics=..., correct_spellings=..., profile_fields=..., teammates=..., router=..., relay_implied=no, cleanup_age=off, keep_copies=no."
- Pick a private working folder for the seed file, relay log and optional archive (bot_workdir). Don't ask the user.
- Create one routine with UpdateRoutine (action create), named "<persona> continuity":
  - Schedule: `CRON_TZ=<timezone> <MM> <HH> * * 1-5` for weekdays or `CRON_TZ=<timezone> <MM> <HH> * * *` for every day, with minute and hour from run_time. One automatic run per day, never more.
  - Prompt: "Daily Grok Voice continuity run. Follow the grok-voice-continuity skill's routine steps 0–11 exactly, with these settings:" followed by the full settings list (all placeholders filled, bot_workdir included), then "Report to the user per step 11. On a sign-in page, stop and ask the user to sign in."
- If the user later changes a setting ("update profile", "change schedule"), update both the memory fact and the routine.

## 6. Finish

Tell the user the schedule is set and when the first run is. Offer "roll now" to create the first `<persona> | YYYY-MM-DD` chat right away (a first run with no prior thread just seeds a fresh chat). Mention the commands: "roll now", "show seed", "update profile", "change schedule".
