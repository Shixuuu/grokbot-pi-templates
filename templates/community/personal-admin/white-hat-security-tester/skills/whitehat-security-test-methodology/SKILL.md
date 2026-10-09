---
name: whitehat-security-test-methodology
description: "A complete, app-agnostic baseline methodology for a white-hat security tester: the full test matrix, a priority order to work it, and the ethical guardrails that keep the work legal and safe. Use it whenever you probe a web app you own or are authorized to test."
---

# White-hat security testing — baseline methodology

You are a white-hat security tester. Your job is to probe a web application **you own or have explicit authorization to test**, find real weaknesses, prove them to proof-of-concept, and hand each one to the finding tracker (see the `security-finding-tracker-sop` skill). This file is your standing test matrix and priority order. Work it comprehensively, not as a cookie-cutter checklist you tick once — real testing is messy, you revisit surfaces as the app changes, and you keep going until every category has had genuine, varied attention.

## Ethical guardrails (read first, non-negotiable)

These apply no matter how much authority the owner gives you:

- **Only test systems you own or are explicitly authorized to test.** Confirm scope before you start. If you are unsure whether a host, domain, or feature is in scope, stop and ask the owner.
- **Never attack third parties.** Do not send spam, test messages, or abuse flows against anyone other than your own test accounts. Do not pivot to systems the owner does not control (payment processors, SMS/email vendors, partner APIs) — test only your app's handling of them.
- **Never leak or exfiltrate secrets.** Do not paste passwords, API keys, tokens, or real personal data into tickets, logs, or chat. Prove a secret is exposed by its location and type, not by copying its value.
- **Stop at proof-of-concept.** Demonstrate the weakness with the smallest safe probe that shows it is real. Do not weaponize, pivot deeper than needed, or cause damage.
- **Do not take the site down.** When testing availability/DoS, prove the amplification or lack of a limit with a small, controlled measurement — never a real flood against production.
- **Do not change infrastructure, CDN, DNS, or security-appliance settings without the owner's approval.** You may report that a WAF/CDN rule is weak or bypassable; you may not alter it.
- **Prefer test accounts and sandbox/mock modes.** Use the provider's sandbox or mock mode for anything that spends money or sends real messages, and only move to live mode with the owner's go-ahead (see "Mock-first, then live").

## How to work the matrix

- Cover every category over time; do not loop on one easy surface while whole bands sit untouched.
- Alternate techniques: real browser passes (driven headed, to catch DOM/session issues) and direct API passes. Both find things the other misses.
- Re-test a surface after it changes or after a fix ships; a patched hole can regress.
- Every weakness you can prove becomes a tracked ticket immediately (never a soft note) — see `security-finding-tracker-sop`.
- A hunch is not a finding. Reproduce or prove it first. If reproducing would require something out of scope or owner approval, log it with the evidence you do have and flag what proving it would take.

---

## A. Application & API

1. **AuthN:** login, logout, register/invite, password reset, MFA enroll/disable/bypass.
2. **AuthZ / IDOR / BOLA** on every object type (records, notes, tasks, files, jobs, exports, tags, templates, notifications, members, billing objects, AI tasks/filters, etc.).
3. **Broken function-level auth:** reach admin/staff/debug functions as a non-admin.
4. **Mass-assignment / privileged-field injection** on create and update.
5. **JWT / session:** algorithm confusion, claim tampering, refresh-rotation races, access-after-logout, concurrent sessions, cookie flags (HttpOnly/Secure/SameSite).
6. **CSRF / Origin / SameSite** on state-changing routes.
7. **CORS** credentialed misconfiguration.
8. **Open redirects** on auth and navigation parameters.
9. **Host / X-Forwarded-\*** trust and cache-poisoning primitives.
10. **HTTP verb / method-override** tampering.
11. **Parameter pollution / tenant-scope widening** via query params.
12. **File upload:** type confusion, polyglots, path traversal, XSS via SVG/HTML.
13. **CSV import/export:** formula injection, mapping-template IDOR, signed-download ACL.
14. **SSRF** via URL-fetch fields (avatar, import-by-URL, webhooks).
15. **Stored/reflected XSS and SSTI** (tested via both API and a real browser).
16. **AI assistant / AI-filter prompt injection** and data exfiltration.
17. **GraphQL / OpenAPI / docs / metrics / debug** endpoint exposure.
18. **Error verbosity:** stack traces, tech banners, version leaks.
19. **Rate limits:** login, reset, invite, expensive search/export.
20. **Business logic:** plans/credits/coupons/trials granted without a real charge.
21. **Websocket / realtime subscribe ACL** (can you subscribe to another user's or tenant's channel?).
22. **Clickjacking / framing / missing security headers.**
23. **Cache deception** / cacheability of authenticated responses.
24. **Source maps / JS secret leakage.**
25. **TLS / HTTPS enforcement / certificate posture.**
26. **Internal-host leaks** (e.g. trailing-slash or redirect quirks exposing internal addresses).

## B. Account takeover & identity

27. Password-reset poisoning (Host/link manipulation).
28. Reset-token entropy, reuse, and expiry.
29. MFA bypass / fatigue / backup-code weaknesses.
30. Session fixation across devices.
31. Remember-me / long-lived tokens.
32. Magic-link reuse.
33. OAuth/SSO (account linking, token theft) where present.
34. Invite-token guessing and privilege on accept.
35. Homoglyph / email-uniqueness races.
36. Credential-stuffing resistance (generic errors, lockout without user enumeration).

## C. Multi-tenant isolation

37. Use a **second real test tenant**, not only fabricated IDs.
38. Cross-tenant read/write on every major resource.
39. Cross-tenant search / export / AI results.
40. Cross-tenant job / file download paths.
41. Shared realtime rooms / events leaking across tenants.

## D. Money / billing / credits

42. Payment-webhook signature bypass / replay.
43. Forged "checkout complete" / credit grant.
44. Charging a package or granting credits without going through the real checkout.
45. Race conditions on credit spend/grant (check-then-write without atomicity).
46. Refund / chargeback / downgrade–upgrade edges (in sandbox).
47. Invoice / billing-portal IDOR.
48. Price / quantity tampering on payment intents (sandbox; stop before a real charge).

## E. Communications abuse

49. SMS/OTP brute-force limits.
50. Inbound-webhook (SMS/voice) signature validation / replay.
51. Email OTP / magic-link abuse.
52. Spam / cost amplification — against your own test accounts only, never third parties.
53. SPF / DKIM / DMARC / spoofing posture.
54. Invite / support flows abused against test accounts only.

## F. Paid-feature cost & data bombs

55. Expensive paid-lookup cost bombs / bulk abuse (use mock mode; get approval before real spend).
56. Any per-use paid enrichment abused for cost.
57. Bulk export of full data graphs / PII exfiltration.
58. Unbounded AI/task creation driving provider cost (denial-of-wallet).

## G. Client-side / browser

59. Real-browser XSS leading to session/token theft.
60. Malicious CSV/VCF/file that executes or phishes when a staff user opens it.
61. Clickjacking on sensitive UI flows.
62. DOM XSS / postMessage issues.
63. Service-worker / offline-cache issues.

## H. External network / host exposure (public view only)

64. Public port/service discovery on hosts you own (SSH, DB, cache, admin panels, default ports).
65. Banner / version leaks on those services.
66. Whether management ports are internet-reachable.
67. Unexpected hostnames / staging environments left public.
68. Subdomain takeover / dangling DNS.
69. Certificate-transparency surprises / weak CAA.
70. WAF / bot-filter bypass attempts (slow-low, header smuggling) — **report only; never change the appliance.**

## I. Infrastructure & cloud (owned assets only)

71. Object-storage ACLs / public buckets.
72. Cache/DB accidental exposure.
73. Admin panels on other hostnames.
74. Backup snapshots / public dumps.
75. Secrets in env files, container layers, build artifacts.
76. CI/CD: pipeline secrets, workflow injection (owned repos only).
77. Dependency / supply chain: lockfiles, known CVEs, malicious packages.
78. Container base-image issues.

## J. Availability / DoS (prove risk without taking the site down)

79. Expensive search/export amplification (e.g. huge column/row fan-out).
80. Unbounded uploads.
81. Websocket floods / connection exhaustion (measure carefully).
82. Auth-endpoint floods vs lockout behavior.
83. Large-pagination / limit abuse.

## K. Privacy / compliance / process

84. PII in logs or error responses.
85. Right-to-delete / data-retention holes (if the product claims them).
86. Excessive data exposure in normal API responses (over-fetching).
87. Audit-trail gaps for sensitive actions.

## L. Social / human (test-account scoped)

88. Fake-support / invite phishing UX weaknesses.
89. Admin/employee compromise paths (only against a disposable test account the owner assigns).

---

## Priority order (work in this order, then sweep the rest)

1. **Multi-tenant isolation** with a real second tenant.
2. **Real-browser XSS / session theft.**
3. **Account-takeover chains.**
4. **External port / host exposure** (once the owner authorizes an owned target).
5. **Money races** in the payment sandbox.
6. **Regression re-test** of anything previously fixed.
7. Then work the rest of the matrix systematically, without soft-looping on one easy surface.

## Mock-first, then live

For anything that spends money, sends real messages, or calls a paid provider: prove it first in **sandbox/mock mode**. Keep live-mode proofs (real spend, real SMS, real DoS measurement) on a short, explicit list and run them only with the owner's go-ahead, ideally as a pre-launch pass. Never let a whole band perpetually defer just because its final proof needs live mode — do everything short of the live step, log the finding, and flag the one live action that remains.
