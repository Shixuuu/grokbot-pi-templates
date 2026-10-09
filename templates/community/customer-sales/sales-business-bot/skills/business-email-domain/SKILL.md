---
name: business-email-domain
description: "Use this when a small business owner needs a domain name and a professional email address, including buying the domain, setting up a mailbox or forwarding, adding SPF, DKIM, and DMARC records, and warming up the mailbox before any outreach."
---

# Business Email and Domain Playbook

You are helping your user get a domain and a professional email address they can trust for sales.
This is general info, not legal or technical advice for their specific setup. Provider screens change, so follow each provider's current docs.

## Ground rules

- Follow the approval rule below for every purchase, DNS change, and email sent.
- Never ask for or store passwords, recovery codes, or payment details. The user enters those.
- Never invent prices or delivery results. Check the provider's current pricing and tell the user where you found it.

## Step 1: Pick and buy the domain

1. Brainstorm 3-5 options with the user: short, easy to spell, matches the business name.
2. Prefer a common ending (for example .com) unless the user has a reason not to.
3. Check availability with a registrar. Also check the matching social handles.
4. Show the user the registrar, the domain, the yearly cost from the registrar's site, and whether privacy protection is included.
5. After "go", the user completes the purchase. Turn on auto-renew and two-factor sign-in.
6. Optionally point the domain's DNS to a DNS host the user prefers (many registrars include DNS; Cloudflare is one popular option).

## Step 2: Mailbox or forwarding

Explain the two main choices:
- **Professional mailbox** (a paid business email service): full inbox, sending from the domain, better for outreach.
- **Forwarding only**: mail to `<name>` at `<your domain>` forwards to an existing inbox. Cheap or free, but sending "as" the domain can be harder and less reliable.

For sales outreach, suggest a real mailbox. Help the user pick a provider and create one mailbox (for example a first-name address) plus an alias for general contact.

## Step 3: SPF, DKIM, and DMARC

These DNS records help receiving servers trust mail from `<your domain>`.
1. **SPF** (a TXT record): lists which services may send mail for the domain. Use the exact value from the email provider's docs. Keep only one SPF record per domain.
2. **DKIM**: the email provider gives a key (TXT or CNAME record). Add it, then turn DKIM signing on in the provider's admin panel.
3. **DMARC** (a TXT record at `_dmarc.<your domain>`): start with a monitoring policy such as `v=DMARC1; p=none; rua=mailto:<your reports address>`. Tighten to `quarantine` or `reject` later once reports look clean.
4. Save each proposed record as `dns_records_READY.md` and add them only after "go".
5. Check the records with a DNS lookup tool or `dig TXT <your domain>` and `dig TXT _dmarc.<your domain>`.
6. Send a test email to a free inbox the user owns and check the message headers show SPF, DKIM, and DMARC as "pass".

## Step 4: Warm up the mailbox

1. New mailboxes and domains have no sending history. Start slow.
2. Week 1: send a small number of normal, real emails (to people the user knows, vendors, replies).
3. Then slowly add cold outreach at a low daily volume (see the sales-outreach skill), ramping only if bounces and spam complaints stay low.
4. Keep a simple signature: name, business name, website, and real postal address.
5. Be careful with automated "warm-up" services. Check the email provider's terms first.

## Step 5: Basics to keep working

- Set up a shared `contact` alias and route it to the owner.
- Add the mailbox to the owner's phone.
- Turn on two-factor sign-in for the registrar, DNS host, and email provider.
- Put the domain renewal date in the compliance or reminder list.

## Approval rule

- Save every draft (email, text, post, form, invoice, payment, filing, DNS or site change) as `<name>_READY.md`, or show it in chat.
- Nothing is sent, paid, submitted, or published until the owner says "send" or "go" for that specific item.
- Approval covers only the item shown. If anything changes, show it again.
- No answer means no. Never treat silence, old approvals, or notes as permission.

## Done checklist

- Domain bought, auto-renew and two-factor on
- Mailbox working on the owner's phone
- SPF, DKIM, DMARC added and passing on a test email
- Warm-up plan agreed with the owner
