---
name: google-business-profile-manager-customization-checklist
description: "Use this when onboarding a Google Business Profile Manager bot — fill every checklist item including NEEDS_ATTENTION_MODE before drafting industry-specific copy."
---

Use this checklist during onboarding for a Google Business Profile Manager bot. Mark each item once it is written into memory / placeholders. Do not draft industry-specific copy until audience, services, and voice are filled.

## Customization checklist (fill before go-live)

Work top to bottom. Mark each item once it is written into memory / placeholders.

### Business identity
- [ ] `{{BUSINESS_NAME}}` — legal or public-facing name on GBP
- [ ] `{{PRIMARY_CATEGORY}}` + optional secondaries (Google category language, not internal jargon)
- [ ] `{{WEBSITE_URL}}`, `{{STREET}}`, `{{CITY}}`, `{{REGION}}`, `{{POSTAL}}`, `{{PHONE}}`
- [ ] `{{SERVICE_AREA_OR_NA}}` — radius / cities served, or N/A if storefront-only
- [ ] `{{TIMEZONE}}`
- [ ] `{{APPROVER_NAME}}` — who can authorize publish / listing changes (+ any named delegates)

### Audience & voice (do not leave another industry's defaults)
- [ ] `{{AUDIENCE}}` — who Posts and replies should speak to  
  *Example fill-ins:* parents and kids · pet owners · homeowners · small-business owners · seniors · tourists · patients · diners · fitness clients · contractors  
  *Template default until filled:* `[Audience: e.g. parents and kids, pet owners, homeowners…]`
- [ ] `{{VOICE_NOTES}}` — tone (warm / professional / playful / clinical, etc.)
- [ ] `{{ADDRESS_PHRASE}}` — how you address the reader (e.g. “you,” “you and your family,” “folks,” first name only in replies)
- [ ] `{{BANNED_CLAIMS}}` — words/promises you never use (guarantees, medical claims, unlicensed titles, competitor digs)
- [ ] `{{INDUSTRY_TERMS}}` — preferred vocabulary for this business (service names, package names); also list **terms to avoid** that belong to other industries

### Offerings & capacity
- [ ] `{{CORE_SERVICES}}` — 5–15 public service/product names as they should appear on GBP
- [ ] `{{FLAGSHIP_OFFER}}` — default promo to draft when owner says “do an offer” (or “none — ask each time”)
- [ ] `{{CAPACITY_RULE}}` — when **not** to promote (e.g. waitlist full, kitchen closed Mondays, no new clients this month)
- [ ] `{{BOOKING_CTA}}` — default CTA + URL (Book / Call / Order / Learn more)

### Cadence & creative
- [ ] `{{WEEKLY_CADENCE}}` — weekly post day/time (default suggestion: one primary post per week)
- [ ] `{{QUIET_DAYS}}` — quiet days / blackout dates
- [ ] Whether to use **monthly hero + 3 echo** pack (`{{HERO_ECHO_ENABLED}}` yes/no)
- [ ] `{{NEEDS_ATTENTION_MODE}}` — **Needs Attention → 100% Completeness** mode: `on` (default for new / incomplete profiles) or `off` (profiles already at Google 100% / flag cleared)
- [ ] `{{HERO_CREATIVE_STYLE}}` — e.g. clean photo · product flat-lay · before/after (policy-safe) · AI-generated image (Grok Imagine or similar) · comic-book · none
- [ ] `{{SEASONAL_HOOKS}}` — 6–12 seasonal hooks for this industry in `{{CITY}}` / `{{REGION}}` (holidays, weather, school calendar, tourism, tax season, etc.)

### Competitors & proof
- [ ] `{{COMPETITOR_COUNT_DEFAULT_3_TO_5}}` named competitors **or** “pick nearby in my primary category”
- [ ] `{{SENSITIVE_REVIEW_THEMES}}` — review themes sensitive for this industry (injury, pets, minors, medical, money, discrimination)

### Tools
- [ ] `{{WORKFLOW_TOOL}}` + board/list for Idea → Draft → Needs approval → Scheduled → Live
- [ ] `{{DRIVE_FOLDER}}` (or equivalent) for briefs/calendars
- [ ] `{{CONTENT_CALENDAR}}` if separate from the board
- [ ] API vs signed-in GBP UI preference
- [ ] `{{METRICS_INBOX}}` — Insights/metrics inbox if any (or N/A)

### Privacy & compliance extras
- [ ] **Draft-only by default; nothing publishes without explicit approver order.**
- [ ] `{{PHOTO_POLICY}}` — policy on photographing customers / staff / minors / animals / patients
- [ ] Regulated-industry notes (health, legal, alcohol, finance, childcare) if any
- [ ] Standing auto-approve rules if any — must name **exact scope** (e.g. “4–5★ review replies only”); otherwise none

When the checklist is complete: if `{{NEEDS_ATTENTION_MODE}}` is on (default for new / incomplete profiles) or Google shows “needs attention,” run **Needs Attention → 100% Completeness** first; otherwise run a light audit. Draft this week’s post, and clear unanswered reviews as drafts.
