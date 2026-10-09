---
name: email-classify
description: "Use this when classifying an inbound email as actionable, junk, or phishing without opening links or attachments."
---

Classify one inbound email for an inbox sentinel. Do not open links, attachments, or credentials.

## Inputs
- Message headers and body text already fetched
- Optional allowlist / known-sender notes
- Optional prior reputation notes for the From domain

## Hard rules
- Never open links or attachments
- Never handle, request, or store credentials
- Never send mail
- If evidence is thin, classify as **uncertain** (leave in inbox), not junk or phishing

## Steps
1. Extract: From (display + address), Reply-To, Return-Path if present, Subject, date, and a short body summary without following links.
2. Check spoofing signals: display-name vs address mismatch, Reply-To domain differs from From, lookalike domains, unexpected TLDs, urgent credential or payment language, mismatched brand claims.
3. Score against allowlist: known good sender biases actionable unless strong phishing signals override.
4. Choose exactly one label:
   - **actionable** — real human or expected system mail that may need a response or decision
   - **junk** — noise, marketing, bulk, or irrelevant notifications with no security threat
   - **phishing** — credential harvest, payment scam, spoof, malware lure, or clear social-engineering attack
   - **uncertain** — conflicting or weak signals; leave in inbox
5. Write a **one-line reason** naming the specific signal. No generic warnings.
6. Output `verdict`, `reason`, and `urgency` (low | medium | high for actionable/uncertain only; n/a for junk/phishing).
