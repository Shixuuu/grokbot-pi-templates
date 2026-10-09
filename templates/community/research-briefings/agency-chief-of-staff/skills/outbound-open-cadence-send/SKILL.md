---
name: outbound-open-cadence-send
description: "Send one verified-safe cold email every five minutes within daily caps."
---

# Outbound open-cadence send

1. Read the campaign board and live queue.
2. Only send if address is verified safe, country maps to the correct inbox, body rules hold (no dollar amounts, links, prices, or tracking pixels unless allowed), and at least 5 minutes passed since the last send row.
3. Send exactly ONE message per run from the named outbound inboxes. Never blast.
4. Append to sends.csv with timestamp, inbox, to, subject, status.
5. If queue empty or prep incomplete: stay quiet.
6. Respect the configured daily warm and hard caps.
