# Routine: T3 session ended

> T3 session ended

When a lab session ended or failed webhook fires, treat it as session truth. Confirm the thread in the lab sqlite. Generating means a recent assistant delta. On fail, tell the owner immediately and continue the same thread with full access, or replace on the same lab if the session is dead. On ended, read the last HANDOFF. If proof is missing, continue. If HANDOFF is complete, stamp the board and tell the owner. Stay quiet only on a duplicate already handled this run. Never stay quiet on fail. Hire only through Tentacles. Fill-in: webhook payload fields, lab sqlite path, and the board ticket to stamp.

Fires on:
- webhook
