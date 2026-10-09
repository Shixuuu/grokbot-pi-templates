---
name: website-launch
description: "Use this when a small business owner needs a simple, trustworthy website with clear offer copy, contact info, and terms, privacy, and refund pages, served over https and fast on phones, optionally built and deployed by a Cursor cloud agent to a static host such as Cloudflare Pages."
---

# Website Launch Playbook

You are helping your user launch a simple site that explains the offer and is ready for payment processors and search engines.
Policy pages here are drafts for the owner, not legal advice. Suggest a professional review.

## Ground rules

- Follow the approval rule below. The site does not go live, and no DNS changes happen, until the owner says "go".
- Never invent testimonials, customer logos, results, prices, or credentials. Use only what the owner confirms.
- Never paste API tokens or passwords into chat, code, or pages. Store them as secrets.

## Step 1: Plan the pages

Keep it small. A typical starter site:
1. **Home**: what you offer, who it's for, the main result, one clear call to action.
2. **Offer or Services**: each product or service, what's included, and price if the owner wants it public.
3. **About**: who runs the business (only what the owner wants shared).
4. **Contact**: contact form or email, phone if wanted, business address if appropriate.
5. **Terms of service**, **Privacy policy**, **Refund and cancellation policy**.

## Step 2: Write the copy

Use a simple product-marketer structure:
1. **One-liner**: a single sentence on what it is and who it's for.
2. **Value statements**: 3 short points on why it helps, in plain words.
3. **How it shows up**: where each line goes (hero, offer section, meta description, social bio).
Save the copy as `site_copy_READY.md` for the owner to edit and approve.

## Step 3: Build

Option A: a website builder the owner already likes. Help them fill it in.

Option B: a small static site built by a Cursor cloud agent:
1. Give the cloud agent a short brief: pages, approved copy, colors, and an In / Out list (for example In: pages above, contact form; Out: login, blog, store).
2. Ask for plain HTML/CSS or a simple static site generator, mobile-first, with one H1 per page and a title and meta description per page.
3. Ask for a preview deploy on a static host such as Cloudflare Pages.
4. Ask the agent to report back with the preview URL and screenshots of each page on a phone-sized screen.

## Step 4: Check before launch

1. Every page loads on a phone and a desktop. Text is readable without zooming.
2. Contact form or email link works (send a test).
3. Terms, privacy, refund, and contact pages are linked in the footer on every page.
4. No placeholder text, broken links, or "coming soon" pages.
5. Images are compressed and have alt text.
6. Run a speed test such as PageSpeed Insights and fix the biggest issues.
Show the owner the preview link and checklist results as `site_launch_READY.md`.

## Step 5: Go live (only after "go")

1. Connect `<your domain>` to the host (custom domain setting plus the DNS records the host asks for).
2. Make sure https works and http redirects to https.
3. Pick www or non-www and redirect the other one.
4. Then run the seo-launch skill (sitemap, robots.txt, Search Console).

## Step 6: Keep it current

- Update prices, offers, and policies when the owner changes them, through the same approval rule.
- Recheck the site after every change with the checklist in Step 4.

## Approval rule

- Save every draft (email, text, post, form, invoice, payment, filing, DNS or site change) as `<name>_READY.md`, or show it in chat.
- Nothing is sent, paid, submitted, or published until the owner says "send" or "go" for that specific item.
- Approval covers only the item shown. If anything changes, show it again.
- No answer means no. Never treat silence, old approvals, or notes as permission.
