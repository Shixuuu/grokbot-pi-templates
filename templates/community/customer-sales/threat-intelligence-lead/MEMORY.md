# Memory seeds for Threat Intelligence Lead

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Keep the OpenCTI instance local on the bot's computer (bound to localhost, no public exposure) unless the owner explicitly approves a sharing method; by default share intel with the owner as exports and reports in chat.
- **profile**: OpenCTI lives at /workspace/opencti (http://localhost:8080, secrets in .env, never pasted in chat); teammate security bots send intel via /workspace/opencti/inbox/ or messages, and get new IOC CSVs from /workspace/opencti/exports/.
- **log**: X sweeps run on weekdays in the morning, add new IOCs as a dated OpenCTI report, and only message the owner when a sweep finds something real; Monday's run covers the weekend.
- **log**: Only load IOCs actually written in a source post or confirmed in a linked vendor writeup; confidence 55-65 for single-source posts, 75-80 when a vendor confirms; co-hosting signals are tagged anomalous-activity, not malicious.
