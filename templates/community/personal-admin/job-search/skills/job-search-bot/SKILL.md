---
name: job-search-bot
description: "Use this when running a job search for an owner: first-time setup, running saved searches, sending new-job alerts, updating the application tracker, or tailoring a resume or profile for a posting."
---

# Job search bot

For finding real job postings, reading the managed `job-search` skill and the LinkedIn site playbook comes first. This skill adds setup, saved searches, alerts, tracking, and resume work on top of them.

## Ground rules
- Real postings only. Every job carries its own posting URL. Never invent jobs, pay, companies, or contacts.
- Never apply, submit a form, or send an email or message for the owner without their explicit OK on that exact item. Draft and hand back.
- Cheapest path first: job alert emails and public pages before browser runs; one batch per run, not repeated passes. Close the browser when done.
- Never add experience, titles, dates, or skills to a resume that the owner didn't give you.

## 1. Setup (first conversation, or when the owner changes the search)
Ask only what's missing, one short question at a time:
- Target titles and the core skills/products they work in; hard exclusions (titles, products, or industries to never pitch).
- Location: remote, hybrid, or on-site, and where. Pay floor. Contract vs full-time.
- Companies to include or exclude.
- Which mailbox holds job alerts (Gmail or Outlook) and which drive holds the resume (Google Drive or OneDrive). Only use the mailbox the owner names.
- When they want the digest, and whether they want it at all (routines stay off until asked).
Save the answers to `searches.json` in the owner's job-search folder (see Files) and confirm them back in two or three sentences.

## 2. Saved searches
Each saved search: name, titles, must-have keywords, exclusion keywords, location, pay floor, boards to check (LinkedIn jobs, company career pages, public Indeed/Glassdoor/ZipRecruiter pages where reachable, alert emails).
To run: gather postings from alert emails since the last run, then public pages, then the browser only if needed. Dedupe by company + title + URL against `seen.csv`. Drop anything matching an exclusion.
Score fit 1-5 against the master resume and the must-haves, and give a one-line reason.

## 3. Alerts / digest
Show only postings not in `seen.csv`. For each: role, company, location/remote, pay if listed, posted date, fit score, one-line why, link. Best fit first. If nothing new, say so in one line (or stay quiet if a routine's instruction says to). Append every shown posting to `seen.csv`.

## 4. Application tracker
`tracker.csv` columns: company, role, url, found_date, applied_date, status (found / applied / screen / interview / offer / rejected / ghosted / withdrawn), next_step, follow_up_date, contact, notes.
Update a row when the owner says they applied or when a recruiter email or interview invite arrives in the named mailbox. Each digest or weekly review lists follow-ups due today or overdue, and applications with no reply after 14 days (suggest marking ghosted or a follow-up draft).

## 5. Resume and profile
Keep the owner's master resume in their drive and note its path in `searches.json`. For a posting they pick, make a tailored copy (reorder and reword real experience to match the posting's language, never add) and save it beside the master with the company name. Offer a short cover note draft. Keep a LinkedIn profile checklist (headline, about, skills to match target titles) and point out gaps; don't edit their profile yourself.

## Files
Use one folder per owner on the box, e.g. `/workspace/job-search/<owner>/` holding `searches.json`, `seen.csv`, `tracker.csv`. Create them on first setup if missing.

## What's not possible
There's no direct LinkedIn, Indeed, Glassdoor, or ZipRecruiter connector: those boards come through alert emails, public pages, or the browser, which can hit logins or captchas. Hand sign-ins to the owner. No auto-apply.
