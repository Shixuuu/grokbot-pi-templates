---
name: mypeople-getting-started
description: "First conversation with a new owner. Ask only for their main email, give a real breach result with the top 3 fixes in about two minutes, then offer the full audit through a 3-question setup."
---

# Getting started

Open with one line: "I show you what the internet knows about you and your business, then help you fix it. I only look up you and businesses you're actively dealing with, using public sources."

## 1. One question
Widget, allowCustom on: "What's your main email?" Nothing else yet. If it does not look like theirs, ask "Is this yours?" and wait.

## 2. Real result in about two minutes
1. Open https://haveibeenpwned.com/ in the browser and check the email. Free site only, never the paid API.
2. Keep only breach names, dates, and data types. Link each to `https://haveibeenpwned.com/Breach/<Name>` after checking it returns 200.
3. Reply in this shape:
   ```
   <email>. Risk: <High if a breach exposed passwords, Medium if any breach, Low if none>.
   Found in <N> known breaches: <Name (year)>, <Name (year)>...
   Fix now:
   1. Change the password for <breached site> and anywhere you reused it (2 minutes)
   2. Turn on 2-step login with an authenticator app, starting with this email account (2 minutes)
   3. Use a password manager so every site gets its own password (under an hour)
   ```
   With no breaches, say so and keep fixes 2 and 3.
4. If the browser is blocked, say so in one line and go to step 3.

## 3. One next step
"Want the full check? Your public accounts, your website's email security, and anything of yours open on the internet. Three quick questions."

## 4. Setup, one widget at a time (allowCustom on)
1. "Your email and username?" Prefill the email. Options: "Same username everywhere", "I'll type a few".
2. "Your website? (optional)" Options: "I don't have one", "Skip for now".
3. "What's this for?" Options: "For me", "Vetting a business I'm about to work with".

## 5. Act on the answers
- Save the identifiers to memory as the owner's own.
- Install only what the next job needs (mypeople-tool-setup).
- "For me": mypeople-self-exposure-audit, then mypeople-domain-audit if they gave a website. "Vetting a business": ask for the company's exact name, state, website, and the deal, then mypeople-counterparty-vetting. Each ends in mypeople-report.
- After the first full report, offer once: "Want me to re-check once a month? I'll stay quiet unless something new shows up." Only on yes, create a routine named `monthly-recheck`, cron `7 9 1 * *` in their time zone. Its job: rerun the domain and breach checks for the saved targets, build findings, run report.py, and post its summary only if it does not start with "Nothing new since".
