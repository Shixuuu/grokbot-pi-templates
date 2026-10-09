---
name: unspeak-init
description: "use this when the user invokes /unspeak-init or asks to set unspeak up. Collects their writing samples into the reference corpus."
---

# Unspeak init

This command sets up the personal layers of the unspeak skill.

1. Ask the user to paste two or three pieces of their own writing, or to name files or links you can read.
2. For every piece, create a file in unspeak/references/reference-writing/, one per register. Wrap the text in verbatim markers. Put nothing of your own inside the markers.
3. If style.md is missing, copy its section skeleton and leave every section empty.
4. Run proofread.py against one of the new files and tell the user which checks came alive.

The skill works before this setup exists. Never ask the user to copy files anywhere; you do the filing.
