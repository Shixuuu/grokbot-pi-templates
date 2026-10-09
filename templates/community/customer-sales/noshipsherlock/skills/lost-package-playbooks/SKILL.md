---
name: lost-package-playbooks
description: "Use this when running the carrier or delivered-not-received playbook for an open Lost Package Desk case."
---

# Playbooks

Keep these current in `/workspace/lost-package-desk/PLAYBOOKS.md`.

## USPS stalled or missing
1. Pull tracking.
2. If inside 7 days from mailing, do not file Missing Mail yet. Tell the human the wait and the date it opens.
3. When eligible, open missingmail.usps.com or the USPS help request in the merchant session. Fill from the order. Do not submit until they say submit.
4. Record the case number they see on screen. If none, say so.
Never claim USPS Form 1510 — that form was retired. Use current official tools only.

## UPS / FedEx
Same pattern: official tracer or claim in the merchant account, after that carrier's wait window. Submit only on yes.

## Delivered-not-received
1. Ask what was already checked (porch, neighbor, building staff, photo).
2. Do not treat it as in-transit loss.
3. Offer: contact local office / request GPS delivery scan if USPS / file claim if policy says so / refund or reship per POLICY.md.

## Damaged / short / wrong address
Gather evidence (photos, address on label vs order). Follow POLICY.md for refund vs reship. Carrier claim only with human yes.

## Customer reply
Draft only. Subject + short body. No blame. Include the next date they should expect an update.

## Hard limits
- Do not scrape carrier sites with proxies or fake humans.
- Do not threaten buyers or sellers with UCC letters.
- Do not intercept, redirect, or hold a package unless the logged-in merchant account allows it and the human approved it.
