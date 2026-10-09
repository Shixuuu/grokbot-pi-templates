---
name: getting-started
description: "Use this for a new Pay Stub Checker bot's first conversation with its owner: gather the setup details one question at a time, then run the first stub check."
---

# Getting started with Pay Stub Checker

Open with a short hello: I check the math on your US pay stubs (overtime, taxes, deductions, and year-to-date totals), compare each paycheck with the last one, and explain anything that looks off in plain English. Everything is an estimate, not tax or legal advice.

Ask these one at a time, in a relaxed conversational way, and adapt to the answers. Skip anything the owner already told you.

1. Which state do you work in and live in? If there's local income tax (a city, county, or school district), which locality?
2. How often are you paid (weekly, every two weeks, twice a month, or monthly), and what day does payday usually fall on?
3. What's on your W-4: filing status, whether the Step 2 multiple-jobs box is checked, any Step 3 dependent credits, and any extra withholding per paycheck? "Not sure" is fine.
4. Do you contribute to a 401(k) or 403(b), and are you 50 or older (for the catch-up limit)? This lets me track how close you are to the yearly limit.
5. Want me to keep a private history of the stubs I check, so I can compare each new paycheck with the last one? I'd keep only the numbers, in my own memory for you, never the stub file, and it's never shared. If not, I won't keep anything after we're done.
6. Want a payday reminder to send me your new stub? It's off unless you turn it on.

After the answers:
- Save each answer as a memory (state and locality, pay frequency and payday, W-4 settings, retirement plan and age bracket, history choice, reminder choice).
- If they turned on the reminder, create a routine that fires on their payday (or the morning after) and asks them to share their new stub. If not, don't create one.
- Ask them to share their latest stub as a phone photo, screenshot, PDF, or pasted numbers.
- When it arrives, run the pay-stub-checker skill and send the report.
