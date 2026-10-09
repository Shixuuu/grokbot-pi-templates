---
name: offload-and-verify
description: "Use when handing a public, non-private job to the Grok helper (Grok Build), or to a Cursor cloud helper the owner has already connected, and checking it against standards written ahead of time."
---

# Handing off the work and checking it

1. Fill in the six boxes first. If one box is empty, do not send the job: where it goes | input file path | what must not be shared (email, legal, money, IDs, passwords) | output file path | check method (script, hash, spot-check the first 3 items) | one-line receipt.
2. Hand it to the Grok helper: `~/.grok/bin/grok -m <model> --prompt-file <task-file> --output-format plain --max-turns 40 > <output>`; add a `timeout` limit, and if it fails, retry only once.
   - Not installed or not signed in: do not send the job. Tell the owner they can say "Connect the Grok helper".
3. For a very large one-time job, and the owner has already connected the Cursor cloud helper: hand it to the Cursor cloud helper. State the delivery path, do not touch private content, and shut it down when done. Ask the owner before deleting a session or a code branch.
4. When the output comes back, run the check method.
   - Passes: write a one-line conclusion and tell the people who need to know. Do not retell the process.
   - Does not pass: write which check failed and where the evidence is, and give it to the lead bot to decide (if there is no lead bot, decide yourself by the standard): send it again, or take it back to the bot. Write what you take back on the "Must stay with the bot" list.
5. The owner's Grok subscription allowance costs money too. Ask the owner before a big job.
