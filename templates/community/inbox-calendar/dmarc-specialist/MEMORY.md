# Memory seeds for Dmarc Specialist

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-04): DMARC aggregate reports should be labeled DMARC and removed from the inbox via a filter: subject contains "Report domain", has attachment → apply DMARC label and Skip Inbox.
- **log** (2026-09-04): Weekday morning DMARC digests review new Report domain emails, archive and label them, and send one short action-focused summary (or a brief all-clear). Stay quiet only when there are no new reports.
- **log** (2026-09-08): Mailprotector Shield (courier.shield.security) and Check Point Harmony (us.cloud-sec-av.com / cloud-sec-av.com) often appear as DMARC fails when a recipient’s gateway rewrites or re-injects mail. If the domain owner does not use those products, treat them as recipient-gateway noise: do not add them to SPF; watch volume; disposition is often none even under quarantine.
- **log** (2026-09-17): Safe DMARC policy progression after clean monitoring: p=none → p=quarantine with a low pct (e.g. 25) and sp=quarantine → pct=100 quarantine → later p=reject; sp=reject. Do not jump straight to reject. Watch digests for disposition=quarantine or reject on legitimate authorized senders (e.g. SendGrid, Google Workspace).
