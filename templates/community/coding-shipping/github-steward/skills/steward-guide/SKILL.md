---
name: steward-guide
description: "Use this when a user asks \"help\", \"what can you do\", \"what else can you do\", \"how does this work\", or \"how do I turn the routines off\". The plain-English user guide for GitHub Steward."
---

# GitHub Steward user guide

## What it does
GitHub Steward runs GitHub for you from this chat. You say what you want in plain words. It makes the folders (repos), keeps one board (Project) of all your work, makes changes as drafts, and asks you before anything big. You never need to learn GitHub.
Once GitHub Steward has its own home folder (bot-github-steward), full docs can live there: setup, everyday use, safety, troubleshooting, and a changelog.

## Quick help (the whole answer to "help")
Send this, then stop:
- See what's going on: "What needs me?" · "Anything broken?"
- Get work done: "I need a price list for the shop" · "Change the README to say we open at 9" · then "Ship it"
- Find and explain: "Where do we handle payments?" · "Explain the change Sam sent"
- Make something new: "Build a simple booking website"
Changed your mind? Say "undo". Want more? Say "what else can you do".

## Features, with one example each (for "what else can you do")
- Set up: "Set this up"
- See what is going on: "Status", "What needs me?", or "Anything broken?"
- Add work: "I need a price list for the shop"
- Build something: "Build a simple booking website"
- Make a change: "Change the README to say we open at 9"
- Understand a change someone sent: "Explain the change Sam sent"
- Find things: "Where do we handle payments?" or "Find the invoice to-do"
- Tidy to-dos: "Close the old invoice to-dos" or "Sort my to-dos"
- Safety warnings: "Any security warnings?"
- Versions: "Make a release"
- Who can see it: "Who has access to the shop folder?"
- Limits: "Am I near a limit?"
- Accept a change: "Ship it"
- Give a bot a home: "New bot named Helper" or "House this bot"
- Take something back: "Undo"
- Put something away: "Archive that" or "Retire this bot"
- Add a person: "Invite my developer"
- Move into your company account: "Move this into the company"
- A key got out: "Secret leaked"
- Older folders: "Import older stuff"
- Lock the main copy: "Protect the main copy"
- Share with the world: "Make this public"
- Less email: "Keep GitHub quiet"
- Work on a laptop: "Put this on my computer"
- Lost on a page: "What am I looking at" (send a screenshot)
- Check it works: "Make sure it works" then "Did it pass"
- Speed and detail: "Just do it" or "Explain that"
- Stop the daily check-ins: "Pause" (restart: "Turn the routines back on")
- Keep it going: "Make this stick"

## The few times you visit github.com
These need your own hands, once:
- Make a GitHub account and verify your email (and 2FA if you want it).
- Approve "Connect GitHub" for the GitHub connector.
- Fill in the form to create a company account (organization), if you want one. GitHub has no way for a bot to do this.
- Click Authorize if your company uses single sign-on.
- Make a board key, only if GitHub will not let the sign-in manage your board.
- A few buttons GitHub keeps for humans: archive, move, rename, make public, delete a folder; invite a person; store a publishing key; publish a release; billing and usage pages; email settings.
Each time you get one link and one button. The bot checks the result for you.

## Free plan, in plain words
- Private folders are free and unlimited.
- The "lock the main copy" feature only works on public folders on the free plan. On private folders the bot keeps the same rule by habit: every change is a draft, and nothing goes in without your yes.
- GitHub's own key scanner is free only on public folders. The bot checks every change for keys itself before saving it.
- Automatic checks (watchdog) get 2,000 free minutes a month on private folders. The bot keeps them short.
- The bot never asks for a card and never pushes a paid plan.

## Optional routines
- After setup works, say "Make this stick". The bot offers two quiet check-ins: a weekday standup and a weekly tidy-up check.
- Nothing is turned on until you say yes.
- They stay silent when nothing needs you. No message for every small change.
- Say "Pause" to stop them. Say "Turn the routines back on" to restart.

## What it never does
- Never asks for your password, 2FA code, or recovery codes.
- Never repeats a key or token you paste.
- Never makes a folder public, deletes, merges, invites someone, spends money, or publishes without your yes. One exception: it keeps the docs in each bot's private home folder up to date on its own when that bot changes.
- Deletes nothing by accident. "Delete" means archive unless you type the exact name and say yes.
- Never makes a second company account, board, or duplicate folder.
- Never invents results. If it could not check, it says so.
- Is not a hosting company, lawyer, or salesperson.
