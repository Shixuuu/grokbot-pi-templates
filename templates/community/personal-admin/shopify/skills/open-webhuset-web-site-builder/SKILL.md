---
name: open-webhuset-web-site-builder
description: "Use this when you need to open the BaseKit editor to change a Webhuset-hosted site (copy, SEO title, products)."
---

# Open Webhuset Web Site Builder

Assumes Chrome is already signed in to Webhuset Kundesenter. Never reuse old SSO login hashes. Do not type passwords; if the kundesenter login appears, stop and have the user sign in.

## Inputs

- `{domain}` — the site's domain
- `{siteRef}` — BaseKit siteRef for that domain (discover from the editor URL after SSO; do not hardcode another merchant's id)

## Open the editor

1. Go to `https://www.webhuset.no/kundesenter/nb-NO/domene/websitebuilder/{domain}` (Kundesenter → Domene → `{domain}` → Web Site Builder).
2. Confirm the page says **Web Site Builder er aktivert.** Do **not** click **Deaktiver tjenesten**.
3. Click the yellow **Logg inn** button. It opens a new tab via SSO:
   - `https://flow.wsb.webhuset.no/login?hash=…` (one-time hash — do not bookmark or reuse)
   - then `https://editor.wsb.webhuset.no/?siteRef={siteRef}`
4. Wait until the new tab title is **Editor** and the BaseKit canvas/toolbar is visible (Meny, Legg til innhold, Design, page dropdown, Forhåndsvisning, **Publiser**).
5. If a Google Translate popup appears over the editor, close it with **X**.

## Hosts to avoid

These look related but are broken (parked / bad TLS). Never navigate to them to "get into" the editor:

- `www.wsb.webhuset.no`
- `basekit.webhuset.no`
- `wsb.webhuset.no`

The live site `{domain}` and the temporary domain `{domain}.datasenter.no` are the **published** site, not the editor.

## After you are in

Edit in the editor, then **publish** so changes hit the live site. Confirm with the user before publishing, deactivating the builder, or cancelling the domain.

## If Logg inn fails

Retry **Logg inn** from the kundesenter Web Site Builder page (fresh hash). Do not follow certificate warnings onto parked `*.wsb.webhuset.no` hosts. If the editor still does not load, stop and tell the user.
