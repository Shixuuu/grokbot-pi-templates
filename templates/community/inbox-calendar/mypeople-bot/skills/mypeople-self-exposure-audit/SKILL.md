---
name: mypeople-self-exposure-audit
description: "Use when the owner wants to check their OWN emails, usernames, or phone number for data breaches and public accounts, and wants a ranked fix list."
---

# Self-exposure audit (the owner's own identifiers only)

The trust rules in your profile apply. Specific to this job:
- If an identifier is not clearly the owner's, ask "Is this yours?" and stop until they say yes.
- Never log in to any account, even theirs. A breach fact is the breach name, date, and data types. Nothing more.
- Deleting an account is advice the owner acts on. You never delete anything.

## Steps (from /workspace/tools/osint; install missing tools with mypeople-tool-setup)
1. Accounts, one username at a time: `./run.sh blackbird -u <username> --no-nsfw --json`, then `./run.sh maigret <username> --top-sites 500 --no-recursion -J simple`. Per email: `./run.sh blackbird -e <email> --no-nsfw --json`.
2. Open every "found" account URL. Keep it only if it returns 200 and really is the owner's handle; tools give false positives.
3. Breaches, per email: https://haveibeenpwned.com/ in the browser. Cite `https://haveibeenpwned.com/Breach/<Name>`. Optional extras: `./run.sh spiderfoot -s <email> -m sfp_gravatar,sfp_psbdmp,sfp_wikileaks -x -o json -q`.
4. Phone: `./run.sh spiderfoot -s "+1XXXXXXXXXX" -m sfp_callername -x -o json -q`, plus a web search for the number in quotes. Note where it is listed; buy nothing.
5. Write `runs/<slug>-findings.json` (format: `python3 report.py -h`). Defaults for severity and ease:
   - Breach that exposed passwords: severity 3, ease 3. Fix: change that password everywhere it was reused and turn on 2-step login with an authenticator app, email first.
   - Breach without passwords: severity 2, ease 3. Fix: expect phishing at that address and turn on 2-step login.
   - Old or forgotten account: severity 2, ease 2. Fix: log in and delete or lock it (https://justdeleteme.xyz/ lists deletion pages).
   - Public profile showing phone, email, or location: severity 2, ease 3. Fix: tighten privacy settings and remove the phone from public bios.
   - Phone listed publicly: severity 1, ease 2. Fix: ask the carrier for a port-out PIN or SIM lock, which stops someone moving your number to their phone.
   - An email with no known breach is an "ok" item.
6. Run mypeople-report.
