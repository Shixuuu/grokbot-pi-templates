---
name: liftoff-prelaunch-check
description: "use this when an app, site, page, feature, or paid plan is about to go live and needs a pre-launch checklist run with evidence and a GO / GO-WITH-FIXES / NO-GO call"
---

# Liftoff pre-launch check

Build fast, just don't ship naked. Every item is PASS, FAIL, or UNVERIFIED. PASS needs evidence you actually saw, like a URL you opened, a response code, a screenshot, a test purchase, a policy listing, or a file line. If you didn't check it, it's UNVERIFIED, never PASS.

1. **Scope:** what's launching, the live URL(s), the launch date, who it's for, and what a user can do or pay for at launch. Skip sections that don't apply and say why.
2. **Happy path:** walk the main user journey on desktop and mobile width from a logged-out start, through sign-up or trial, the main feature, and logout. Note broken links, 404s, dead buttons, empty states, and copy errors.
3. **Failure path (catches most auth bugs):** enter a wrong password 5 times (is there a lockout or slowdown?), reset the password for an email that doesn't exist, click a verification link twice, sign up with an email that already exists, use an expired reset link, and refresh or go back in the middle of checkout.
4. **Money (if anything is sold):** live (not test) payment keys, prices match the page, checkout completes, the receipt email arrives, cancel and refund work, and taxes are handled if they apply. Refund and guarantee wording must be the same on the pricing page, terms, checkout, and emails.
5. **Data access rules:** every table that holds user data has access rules. On Supabase, Row Level Security is turned on for every table exposed to the browser (RLS off means anyone with your public key and DevTools can read or write that table), and each table has policies that allow only what users should do (RLS on with zero policies blocks everything, so the app breaks rather than leaks). On other backends, the server checks ownership on every read and write. Prove it by trying to read another user's row while logged out and while logged in as a different user. Paywalled content is gated on the server, not just hidden in the UI, and no admin or debug routes are exposed.
6. **Secrets and leaks:** if a key is in the browser, assume it's already been taken. Check for these three AI-code leak spots: (a) .env values or API keys in the frontend bundle (search the built JS and network tab), (b) API responses that return more fields than the screen needs (password hashes, emails, internal ids, other users' data), and (c) secrets or personal data in logs. Paid-API keys must live server-side or behind a proxy. No secrets in the repo or its history.
7. **Security baseline:** HTTPS everywhere, consistent apex/www redirects, and security headers set (Content-Security-Policy, Strict-Transport-Security, X-Content-Type-Options, frame-ancestors or X-Frame-Options, Referrer-Policy). CORS allows only your own domains, not `*`. Run an OWASP Top 10 review covering injection (SQL/NoSQL), XSS, broken auth and access control, insecure direct object references, security misconfiguration, and vulnerable dependencies. Report each finding with file and line.
8. **Server-side validation:** client-side validation is UX, not security. Attackers skip the UI and call the API directly. Every API route validates type, length, format, and ownership on the server. Test this by sending a bad payload straight to the endpoint.
9. **Abuse and cost limits:** set rate limits on login, signup, password reset, forms, and every endpoint that calls a paid API (AI, SMS, email, maps), plus a billing alert and spend cap on each paid provider. Put a CAPTCHA (Cloudflare Turnstile is free) on public forms like sign-up, contact, and waitlist.
10. **Error messages:** users see generic messages ("Email or password is wrong", "Something went wrong"), never stack traces, SQL, or internal paths. Full errors go only to server-side logs and monitoring. Trigger a few errors on purpose to confirm.
11. **Legal and privacy:** once you collect user data you're in legal territory (GDPR, CCPA). You need a privacy policy that matches what you actually collect, terms, a refund policy, and a business address and contact on the site and in emails. Know where user data lives (which provider and region), who can access it, how long you keep it, and how a user deletes their account or data. Add a cookie notice if analytics or ads run. Accessibility basics: alt text, contrast, keyboard navigation. Industry or exam claims cite a source; no unbacked "guaranteed", "#1", or pass-rate claims.
12. **Email:** SPF, DKIM, and DMARC set for the sending domain; transactional mail lands in the inbox, not spam; from-name and reply-to are correct.
13. **Speed and SEO:** main pages load fast on mobile; title, description, social share image, sitemap, robots.txt, and canonical URLs set; noindex removed from production.
14. **Measure:** analytics and conversion events fire (sign-up, trial start, purchase); error monitoring is on; there's an uptime check.
15. **Recover:** backups exist and a restore was tested; there's a written rollback plan and someone on call for launch day.
16. **Support:** a support contact works, the FAQ answers the top 5 questions, and launch announcements are drafted but not sent.

When you can't inspect code directly, hand the builder these prompts and review what comes back:
- "Review my app as a security specialist and make sure I have strong security headers and a solid baseline security posture."
- "Review my app against OWASP standards and highlight vulnerabilities."
- "Check my app for credential or sensitive data leaks in frontend or API routes."
A builder's "looks good" is not evidence. Re-test the items yourself.

**Report:**
```
Verdict: GO | GO-WITH-FIXES | NO-GO
Blockers (must fix before launch): ...
Fix soon (within a week): ...
UNVERIFIED (needs owner or access): ...
PASS (with evidence): ...
```
NO-GO if any blocker touches money, data access rules, leaked secrets, missing rate limits on paid APIs, legal claims, or the core path. Never launch, publish, send announcements, change payment settings, or run attack tools against systems the owner doesn't own; the owner flips the switch.
