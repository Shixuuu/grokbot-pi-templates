---
name: app-store-review-bot
description: "Audits an iOS app's metadata, screenshots, subscription design, privacy declarations, and reviewer notes against the App Store Review Guidelines before submission, and guides the response when a rejection arrives. Use before submitting or resubmitting to App Store Connect, when choosing an app name or keywords, when designing an auto-renewing subscription, when a rejection cites a guideline number, or when the user mentions App Review, Resolution Center, an appeal, or a trademark complaint."
---

# App Store Review Bot

A pre-submission audit and rejection-response playbook for iOS apps, built from experience across 300+ App Store rejections, appeals, and App Review Board rulings.

The guidelines themselves are published by Apple. What this skill adds is the operational layer: which guidelines fire on which app shapes, what the canned rejection text actually means, what fix clears it, and which rejections are worth arguing with.

Companion skills packed with this bot: app-store-appeals (when to appeal, letter and phone-call playbooks) and app-store-templates (reviewer notes, paywall disclosure, questionnaire answers).

## Source of truth

Guidelines: https://developer.apple.com/app-store/review/guidelines/

This playbook is current through Apple's June 8, 2026 update. No copy of the guidelines is bundled — a snapshot starts contradicting Apple within months. Fetch the live page when running a full pre-submission audit, when a rejection cites a guideline number, or when the date above looks stale. Check the Last Updated line. If newer, treat the live text as authoritative.

Offline, quoted reviewer language stays accurate, but guideline numbers move. Describe the rule, and verify the number before quoting it to a reviewer.

Process URLs:
- Contact App Review and the appeal entry point: https://developer.apple.com/contact/app-store/
- Report infringement of your own IP, per 5.2: the claim web form linked from that page

## Four facts that shape everything else

1. The rejection email contains no reason. Apple's notification is a pointer to Resolution Center. Never wait for an email to explain a rejection, and never conclude no reason was given.

2. Reviewer text is not archived anywhere. Resolution Center threads are reachable only while the submission sits in Rejected or Unresolved Issues. Once the version is approved or replaced, the thread is gone. Copy every rejection message into your own notes the day it arrives, or lose it permanently.

3. Rejections routinely cite things the app already does. Missing disclaimers that are present, missing account deletion that exists, demo credentials that work, features that were never in the binary. Treat some fraction of rejections as a default filter to disprove rather than a finding about your app. Make existing compliance impossible to miss, and state it in the reviewer notes with exact tap paths.

4. A reviewer's verbal approval does not bind the next reviewer. Get concessions in writing in Resolution Center, and even then treat them as non-binding.

## Sequencing: what to ship in the first submission

A first submission is reviewed far more harshly than any update to the same app. Ship the core, and only the core, in the initial review. Do not submit in-app purchases with version 1.0. Ship the first version free with no IAP, get it approved, then add purchases in an update. One rejected purchase puts the whole submission into Unresolved Issues.

Narrow is not thin. The first version must do one thing completely and better than the obvious alternative. If cutting to the core leaves a utility wrapper or a single feed, the launch fails on 4.2. Write the competitor feature comparison before deciding what to cut.

## Observed rejection hit list

Guideline-text-only stubs are omitted here for pack size. Always fetch live guidelines when auditing. Quoted text below is Apple's canned reviewer language from first-hand rejections.

2.1 App Completeness, demo account — "We were unable to sign in to review your app with the demo account information you provided." This arrives even when the credentials work. Attach a screen recording of a successful login on the first submission. A built-in demo mode is permitted in place of a demo account, with prior approval from Apple, and must exhibit the app's full features. Backend downtime or an empty feed reads as a broken app. Submissions must be final: no placeholder text, empty websites, or crashes.

2.1 Information Needed — a single ambiguous word in the description can trigger a request to define it. Expect follow-up 2.1 rounds on unrelated topics. HealthKit and CareKit draw a Clinical Health Records questionnaire. Answer every part in one reply. See app-store-templates.

2.3 Accurate Metadata — "We were unable to locate some of the features described in your metadata," followed by your own description bullets. Every marketing bullet is a feature claim. Make each reachable in a few taps, or delete the bullet.

2.3.1 Hidden features — "We noticed that your app may contain hidden features, functionality, or content." Fires as a false positive in betting, gambling, alcohol, health, finance, and money-adjacent categories. Longer review and loss of expedited review attach whether or not the finding is correct. Audit remote config, feature flags, server-driven UI, and third-party SDKs. Generic notes like "bug fixes and improvements" are themselves a 2.3.1 exposure. A factually wrong 2.3.1 pushback can draw a Section 3.2(f) termination warning with no specifics. Stop replying and appeal. See app-store-appeals.

2.3.3 / 2.3.4 Screenshots and previews — "We noticed that your screenshots do not sufficiently reflect your app in use." Show the app running, not a marketing collage. Previews: portrait, no device frame, video screen captures of the app itself.

2.3.7 Metadata, name and keywords — third-party trademarks in the name, description, or listing. Names max 30 characters. Do not pack trademarked terms, popular app names, pricing, or irrelevant phrases. Apple may rewrite abusive keywords.

2.3.8 Metadata appropriate for all audiences — every icon, screenshot, and preview must hold to a 4+ rating even when the app is rated higher. "For Kids" and "For Children" are reserved to the Kids Category. Name and icons should be similar across sizes, Watch, and alternate icons. Check the display name per build configuration and per locale.

2.4.1 Hardware compatibility — an iPhone-only app can be rejected because a label overlapped a control when run at 2x on iPad. Reviewers frequently test iPhone-only apps on iPad in 2x. Walk every screen there.

2.5.1 Software Requirements — "Your app uses the HealthKit or CareKit APIs but does not indicate integration with the Health app in your app description." Name the Health app integration, and say it is optional if it is. Public APIs only, intended purpose, currently shipping OS.

1.4.1 Physical Harm, health and medical — canned rejections for a missing medical disclaimer or missing sources, even when both are already shipped. Disclaimer as its own first-launch screen. Source attribution and a tappable link inside every answer. Reviewer notes stating where it appears. Sensor-only claims to measure blood pressure, temperature, glucose, oxygen, or take x-rays are not permitted.

3.1.2 Auto-renewing subscriptions — the expensive repeat offender. A subscription must deliver recurring, ongoing value, not a paywall on static content. Name the ongoing cost and the ongoing value. A design that has passed: ongoing-value content surface, a real free tier metered per month, unlimited access on subscription. Period at least seven days. Works across the user's devices. User gets what they paid for without extra tasks. Grandfather prior unlocks if moving a paid app to subscriptions. Do not let upgrade/downgrade paths double-subscribe. Describe what the price buys before the subscribe sheet. Rejections here can also cite auto-renew in an app that has none.

3.1.3(e) Goods and services outside the app — anything consumed outside the app must not use in-app purchase. Physical goods or free shipping bundled into a digital subscription gets rejected. Historical note: this was cited as 3.1.5 for years. Verify the number on the live page.

4.0 Design — one number, two rejections. Image and layout quality, or Sign in with Apple button styling. Use ASAuthorizationAppleIDButton. Do not appeal pure taste. Phone-call questions are in app-store-appeals.

4.1 Copycats — original product required. Impersonating another app or service can remove you from the Program. Do not use another developer's icon, brand, or product name without approval.

4.2 Minimum Functionality — features, content, and UI beyond a repackaged website. Borderline fix: a written feature count against the nearest competitor in the reviewer notes, plus one nameable thing competitors lack.

4.2.2 Not primarily marketing — not primarily marketing materials, advertisements, web clippings, aggregators, or a collection of links. Ship native behavior and lasting utility.

4.3 Spam — "We noticed that your app provides the same feature set as other apps submitted to the App Store; it simply varies in content or language." Fatal for template-driven portfolios. The Board tends to uphold it. Differentiation must be real, nameable, and shipped. This finding can be called a mistake on a phone call and then re-issued days later.

4.3(a) — do not ship multiple bundle IDs of the same app varying by city, team, or university. Use one app with variations as IAP.

4.3(b) — Apple will not accept new dating, flashlight, sound effects, wallpaper, simple timers, or fortune telling apps without a meaningfully different experience. Drinking games, Kama Sutra, fart, and burp apps are called out as low-effort.

5.1.1 Data collection, login walls, account deletion — apps cannot require registration before access to content not specifically associated to the user. Registration optional, sync explained, register-later path. 5.1.1(v) requires in-app account deletion. Put a row labeled exactly "Delete Account" at the top level of Settings. Privacy policy in App Store Connect and in-app. Consent before collecting data. Highly regulated fields should be submitted by a legal entity.

5.1.2 Data Use and Sharing, App Tracking Transparency — App Privacy can declare tracking while the binary does not call ATT. App Privacy answers are app-scoped, not version-scoped. A tracking-removal build cannot always drop the live version's data types, so Publish greys out. The App Review Board is the level that resolves that catch-22. Lead reviewer notes with the removal. Do not gate features behind tracking, push, or location.

## Pre-submission audit

Run in this order. Report findings before changing any code.

0. First submission? Cut scope to the core, pull all IAP, and check the reduced app still wins a feature comparison.
1. Name, subtitle, keywords. Search each localization for third-party brands, competitor names, and platform names. Trademarked terms are P0.
2. Screenshots, preview, icon. Real use, portrait preview, no device frame, no third-party logos, no jagged assets.
3. Differentiation, against 4.3. Name the specific features that make it distinct.
4. Substance, against 4.2. Write the competitor comparison into the reviewer notes.
5. Hidden features, against 2.3.1. Every feature visible during review. Audit remote config, flags, server-driven UI, and SDKs.
6. Payment routing, against 3.1.1 and 3.1.3(e). Digital unlocks use IAP. Anything consumed outside the app must not. External purchase links: US storefront allows them; others need the StoreKit External Purchase Link Entitlement.
7. Subscription design, against 3.1.2. Recurring value, real free tier, Restore visible, period at least seven days. First submission: pull the IAP.
8. Paywall disclosure. All nine required items literally on screen. Call to action reads "Subscribe." See app-store-templates.
9. On-device name vs listing name vs all locales. Metadata holds to a 4+ rating. "For Kids" nowhere unless Kids Category.
10. Regulated-category false positives. Notes that state what the app does not do. Health: first-launch disclaimer and a visible source link.
11. Objectionable content, against 1.1. If UGC or generative output can produce it, the 1.2 stack must catch it.
12. Physical harm beyond medical, against 1.4.2–1.4.5.
13. Developer contact, against 1.5. Support URL and in-app contact both work.
14. User-generated content, against 1.2. Filtering, report, block, and published contact. Name each tap path.
15. Kids Category, if selected, against 1.3 and 5.1.4. Parental gate, no third-party analytics or advertising, no PII to third parties.
16. Remote code, against 2.5.2. No downloaded code that changes reviewed features.
17. Account deletion, if the app creates accounts. Top-level "Delete Account," real deletion.
18. Login wall, against 5.1.1. Non-account content reachable without registering.
19. Login services, against 4.8. If any third-party login is offered, also offer an equivalent name-and-email option with private email and no ad tracking, unless an exemption applies.
20. App Privacy and tracking, against 5.1.2. Answers must match the binary. Tracking-removal builds: document the App Privacy catch-22 with a screen recording.
21. Third-party data sources, against 5.2.2 and 5.2.3. Terms must permit display, monetization, or scraping. No unauthorized media download or format conversion.
22. Credential-gated apps. Verify the demo account, attach a login recording, confirm the backend is live and every configured IAP is reachable.
23. Description wording and feature parity, against 2.3 and 2.1. Every bullet maps to a screen and tap path.
24. Sign in with Apple button, if present. ASAuthorizationAppleIDButton, style contrasting with its background.
25. HealthKit or CareKit, if present. Description names the Health app integration. Prefer one-time import.
26. iPad at 2x. Walk every screen, even for iPhone-only.
27. Data security, against 1.6. TLS, no PII in logs, least privilege for SDKs.
28. Crime-reporting apps, against 1.7. Local law enforcement involvement in every storefront, with proof in Review Information.
29. Reviewer notes. Specific changes, demo credentials, core-feature tap path, IAP test steps, permissions, Delete Account tap path, what the app does not do. Template in app-store-templates. 2.3.1 rejects generic descriptions.

## When a rejection arrives

1. Copy the reviewer's exact text out of Resolution Center and save it locally. It disappears when the submission closes.
2. If the citation is concrete, fix and resubmit. Resubmission is faster than arguing.
3. If the build is a bug fix, ask for it to be approved as-is. Written policy for apps already on the store: bug fixes will not be delayed over guideline violations. Exclusion: legal or safety issues (5.x or 1.x) still block the build.
4. Ask explicitly for a comprehensive review. Otherwise the next round surfaces brand-new grounds.
5. If the citation is vague, request a phone call. Question list in app-store-appeals.
6. Get any concession in writing. Verbal does not survive.
7. Appeal when the rejection is factually wrong, or when a platform bug makes compliance impossible, and the reviewer will not engage. Do not appeal a subjective quality judgment. See app-store-appeals.
8. Self-rejecting the binary restarts review from Waiting for Review. Useful when a fix is ready before a reviewer picks the build up; costly otherwise.
