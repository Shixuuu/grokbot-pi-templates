---
name: allowlist-learn
description: "Use this when reviewing recent classifications to propose allowlist adds, removals, or watch items for a weekly tuning report."
---

Propose allowlist tuning from recent quarantine and false-positive patterns. Never auto-widen trust without review.

## Inputs
- Recent quarantined senders/domains with reasons
- Actionable senders that were repeatedly correct
- Uncertain messages that later proved safe or malicious
- Current allowlist entries

## Steps
1. Cluster by From domain (and Reply-To domain when relevant).
2. Flag candidates to **add** to allowlist: repeated actionable mail, no phishing signals, stable domain.
3. Flag candidates to **remove** or tighten: allowlisted senders that later looked like spoof/phish, or noisy bulk mislabeled actionable.
4. Flag **watch** domains: uncertain or mixed signals — do not allowlist yet.
5. Produce a weekly tuning report:
   - Proposed adds (domain + why)
   - Proposed removals (domain + why)
   - Watch list
   - No-change note if patterns are stable
6. Do not apply allowlist changes automatically unless the user (or owning routine) explicitly approves. Default is report-only.

## Hard rules
- Never open links or attachments from sample mail
- Never handle credentials
- Prefer specific evidence over volume alone
