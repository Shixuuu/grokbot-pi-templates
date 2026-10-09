---
name: free-directory-submissions
description: "Use this when submitting one or more products to free online directories, walking a tracked queue, and parking blockers like captcha, login, badge, or paid-only."
---

# Free directory submissions

## Goal
Walk a curated list of free directories for each product. Fill forms accurately, never pay, and keep a status tracker so progress survives interruptions.

## Setup
- Keep a per-product tracker.json with slug, status, notes, listing_url, submission_url, and order.
- Keep a product-profile.json with name, website, email, tagline, short/long description, categories, pricing, contact name, and logo URL.
- Keep credentials.csv for any accounts you create.
- Ask the user for product details and the contact name/email they want used before starting.
- Prefer Google / Continue with Google with the user's chosen admin email when offered; do not invent Google passwords.
- Free only: skip paid upgrades, featured slots, Express, and paid badge unlocks.
- Skip phone requirements — park as parked_needs_phone.
- If captcha appears after the form is filled, hand the desktop to the user, then resume.
- If Google needs a password you do not have, park as parked_needs_login and continue the queue.
- If free publish requires embedding a site badge, save the draft and mark blocked_badge_required.
- If a site is TLS-broken, quota-exhausted, or EU-only with no fit, park/skip with a clear note and move on.

## Status vocabulary
queued, submitted, parked_captcha, parked_needs_login, parked_needs_email, parked_needs_phone, blocked_badge_required, blocked_quota, blocked_site_error, skipped_paid, skipped_not_listing.

## Cadence
- One directory at a time in the browser.
- After each result, update the tracker and briefly tell the user what landed and what is next.
- Pre-skip known-dead patterns from sibling products when the same account/site will fail the same way.
- Do not systematically clear confirmation inboxes unless the user asks — flag pending email confirms in notes.

## Free directory list (71)
Submit each product to these directories (use submission_url when starting a pass):

- AI Infinity: https://docs.google.com/forms/d/e/1FAIpQLSeuaZvj-s7KkI5Zp41q9LX0i9suH61c7JR2qe6sBdDtP9r9Sg/viewform
- Brownbook: https://www.brownbook.net/add-business
- EU Startups: https://www.eu-startups.com/directory/?wpbdp_view=submit_listing
- Tool Pilot: https://www.toolpilot.ai/pages/submit-your-ai-tool
- Alternative.me: https://alternative.me/how-to/submit-software/?ref=aidirectori.es
- Orynth: https://www.orynth.dev/projects/submit
- VieSearch: https://viesearch.com/submit
- Sidebar: https://sidebar.io/submit?ref=aidirectori.es
- SideProjectors: https://www.sideprojectors.com/?ref=aidirectori.es
- The Rundown: https://www.rundown.ai/submit
- Future Tools: https://www.futuretools.io/submit-a-tool
- Open Future: https://openfuture.ai/submit-tool?ref=aidirectori.es
- What Launched Today: https://www.whatlaunched.today/submit
- Startup Stash: https://startupstash.com/add-listing/
- AddonBiz: https://www.addonbiz.com/add-your-listing
- Startup Ranking: https://www.startupranking.com/startup/create/url-validation
- Submission Web Directory: https://www.submissionwebdirectory.com/submit.php
- SoMuch: https://somuch.com/submit-links/
- Startup Inspire: https://www.startupinspire.com/dashboard/startup/create?tab=Informations
- Directory Web Promotion: http://promotebusinessdirectory.com/submit.php
- WebCatalog: https://webcatalog.io/en/apps/submit
- Marketing Internet Directory: https://www.marketinginternetdirectory.com/submit.php
- SaaSPo: https://saaspo.com/submit?ref=aidirectori.es
- Launching Next: https://www.launchingnext.com/submit/
- SaaS AI Tools: https://saasaitools.com/submit/
- AI Tools Directory: https://aitoolsdirectory.com/?ref=aidirectori.es
- High Rank Directory: https://www.highrankdirectory.com/submit.php
- Launch List: https://www.launch-list.org/submit/product
- Insidr AI: https://www.insidr.ai/submit-tools/
- AI Library: https://library.phygital.plus/tool-submission
- TipSeason: https://www.tipseason.com/ai-tools/submit
- Mars AI Directory: https://marsx.dev/ai-startups/
- LaunchBoosts: https://launchboosts.com/submit
- Awesome Indie: https://awesomeindie.com/submit
- What The AI: https://whattheai.tech/submit
- AI Tools Capital: https://aitoolscapital.com/submit-tool
- Top Tools: https://toptools.ai/submit
- WebsURL: https://www.websurl.com/submit
- Startups Gallery: https://tally.so/r/3ylOB8
- Resource.fyi: https://resource.fyi/account/submit/?ref=aidirecori.es
- AnyFP: https://anyfp.com/contact/?ref=aidirectori.es
- MicroSaaS Directory: https://microsaas.directory/submit-saas
- Robin Good: https://tools.robingood.com/?ref=aidirecori.es
- ToolScout: https://toolscout.ai/submit
- Advanced Innovation: https://www.advanced-innovation.io/ki-tool-einreichen
- Indie Hacker Stacks: https://indiehackerstacks.com/me/products/-1
- AI Lib: https://ailib.ru/en/add-ai/free/
- Invent List: https://inventlist.com/?ref=aidirectori.es
- AI Agents Live: https://aiagentslive.com/agents/products/new
- Dev Pages: https://devpages.io/submit-a-tool
- Rilna: https://www.rilna.net/
- Startup88: https://startup88.typeform.com/to/CRjWqM?typeform-source=startup88.com
- Tools AI Online: https://www.tools-ai.online/submit-tool?ref=aidirectories
- LaChief: https://tally.so/r/w4Jb4b
- DesiFounder: https://desifounder.com/
- AI Pulse: https://www.aipulse.fyi/submit
- eSideHustles: https://esidehustles.com/submit-a-resource/
- AI Tool Board: https://aitoolboard.com/submit
- AppRater: https://apprater.net/add/
- Internet Is Beautiful: https://tally.so/r/nGrXLj
- The Hack Stack: https://thehackstack.com/add-product
- WithAI.top: https://withai.top/submit
- Taalk: https://taalk.com/submit-startup/
- AI to Grow: https://aitogrow.com/?ref=aidirectories#send-your-tool
- Free AI Tools: https://free-ai-tools-directory.com/submit-request/?ref=aidirectori.es
- The AI Warehouse: https://www.thewarehouse.ai/?ref=aidirectories
- Next Gen Tools: https://nextgentools.me/submit-your-tool?ref=aidirecories
- Nextpedia: https://www.nextpedia.io/submit-tool/?ref=aidirecories
- Waildworld: https://waildworld.com/
- The AI Generation: https://www.theaigeneration.com/add/
- Peerlist: https://peerlist.io/

## Known skip patterns (optional speed)
- EU Startups: often EU/UK-only categories — skip if no fit.
- Tool Pilot: some teams skip after repeated non-accepts.
- InventList / WithAI.top: shared-account free slots often exhausted.
- Startup Inspire: free plan often 1/1 on a shared Google account.
- LaunchBoosts / KittyLaunch free publish: may require embedding a site badge.
- SaaSPo / The AI Warehouse: Cloudflare or TLS failures are common — park quickly.

## Success
A product pass is done when queued is empty; summarize submitted vs parked/skipped and offer the next product.
