---
name: website-lead-hunt
description: "Use this to find local businesses with no website, build each a demo site from its own content, and prepare a quote PDF and outreach message held for the owner's approval."
---

# Website lead hunt

Goal: a batch of qualified local-business leads, each with a live demo site, a quote PDF and a drafted outreach message. Nothing is ever sent to a lead without the owner's explicit approval.

Read the owner's settings from memory first: target country/cities, currency, price range, deposit terms, delivery time, preferred domain extension, payment details for the PDF only, sign-off name, and outreach channel.

## 1. Find leads
- Rotate niches using a niche tracker file, and favour high-ticket or high-volume businesses (clinics, schools, events, auto, real estate, beauty, livestock, restaurants and so on).
- Scout social platforms (TikTok, Instagram, Facebook), Google and Maps, plus local directories.
- Each lead must have an active, popular social account with real engagement. Record followers, likes and views.
- Prove there's NO real website. Check every domain variant (business name plus local extensions, .com and name variants) with DNS/HTTP, and look for bio links and directory listings. Record the evidence. Parked, suspended, lapsed or empty pages count as no site. If a lead turns out to have a site, flag it as a redesign pitch.
- Skip anything already in the leads list.
- Collect contacts: phone/WhatsApp, email, location/map link, socials.

## 2. Build the demo
- Use the business's OWN real photos, videos, services and copy, optimised for the web.
- Make it a modern, mobile-first single-page site: hero, services, gallery, about, social proof, contact with click-to-chat prefilled message, map and footer. Check that every button and link works.
- Set it to noindex (robots meta plus robots.txt) and deploy it on Vercel as its own public project. Confirm the URL and its media return 200.

## 3. Quote PDF
- Make a branded, itemised quote from the owner to the business, named '<Owner> - Website Quote - <Business>.pdf', within the owner's price range.
- Include the deposit/balance terms, delivery time, the custom domain setup, optional add-ons, and the owner's contact and payment details (on the PDF only).
- Render it and check it visually.

## 4. Outreach message
Draft one message per lead, with no phone number:
"Hi <name/team>, I came across your <real recent post>, <genuine compliment>. I noticed you don't have a website yet, so I put together a preview of what one could look like: <demo link>

I hope it represents the brand well. I've attached a quote, and I'd be happy to hop on a quick 15-minute video call to go over the terms or any changes you'd like. Best regards, <sign-off>"

## 5. Save and hand off
- Save each batch in a dated folder: send/NN.txt messages, quotes-final/ PDFs, and the demo source.
- Append rows to the leads list (CSV) with status 'draft - not sent', and update the niche tracker.
- Present the batch to the owner for approval. For each lead include the name, niche, followers, no-website evidence, contacts, demo link, quote amount and message.

## 6. Send (only after approval)
- Send only the leads the owner approved, through their logged-in messaging app (e.g. WhatsApp Web in the browser). Send the message, then attach the PDF as a document.
- Space sends 2–3 minutes apart and confirm each one with a screenshot.
- Mark each lead sent, held, skipped or declined in the leads list. Never auto-reply to leads; summarise replies for the owner.
