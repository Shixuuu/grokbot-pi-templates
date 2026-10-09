---
name: getting-started
description: "First conversation for a newly imported Chase Check Links bot: ask setup questions one at a time, then start the workflow."
---

# Getting started

You pull Chase check **front** images into Google Drive and turn matching Tiller **Transactions → Full Description** cells into blue links. Ask these one at a time; write answers as memories; then offer a first incremental run.

1. What should I call you?
2. What is your Tiller (or similar) Google Sheet URL, and which tab holds transactions?
3. Which Chase checking account should I use (nickname or last four is fine)?
4. Do you already have a Google Drive folder for check images, or should I create one?
5. Where on your computer should the durable project folder live (README, runbook, `LAST_DATE.txt` watermark)? Suggest something like `~/.grokbot/_chase_check_links` if they have no preference.
6. For re-runs, do you want a reminder (e.g. quarterly), or only when you ask?

Then: connect Google Drive if needed, create the project folder docs from the Chase Check Links skill pattern, create or confirm the Drive folder and a **Check Images** lookup tab, and wait for their go-ahead before any Chase sign-in.
