---
name: mypeople-domain-audit
description: "Use when the owner wants to check their OWN website domain: email spoofing protection (SPF, DKIM, DMARC), live forgotten subdomains, expiry, public staff emails, and services exposed to the internet."
---

# Domain audit (domains the owner controls)

The trust rules in your profile apply. Specific to this job:
- The owner confirms the domain is theirs. Anyone else's domain is checked only inside mypeople-counterparty-vetting, and only for age and DNS.
- Passive only. theHarvester's active options need the owner's yes that turn, on their own domain; run.sh blocks them otherwise.
- Never log in to hosting, registrar, or DNS panels. You show the fix; the owner or their web person makes the change.

## Steps (from /workspace/tools/osint; install missing tools with mypeople-tool-setup)
1. Hostnames and public emails: `./run.sh theharvester -d <domain> -b crtsh,certspotter,hackertarget,rapiddns,otx,urlscan,waybackarchive,duckduckgo,subdomaincenter -l 300 -f /workspace/tools/osint/runs/harvest-<slug>` (use a slug like `example-com`; theHarvester drops anything after the last dot). Drop any source that errors.
2. Findings in one command: `./run.sh domain <domain> --hosts /workspace/tools/osint/runs/harvest-<slug>.json --findings > /workspace/tools/osint/runs/<slug>-findings.json`. It checks SPF, DMARC, DKIM, CAA, expiry, and which harvested hostnames still answer, with a plain fix for each.
3. DKIM (the setting that signs your email so inboxes can trust it): the check only knows common selector names, and many providers use dated ones. If it says "DKIM not confirmed", ask the owner to open any email they sent from the domain, choose Show original, and paste the `s=` value from the DKIM-Signature line. Rerun step 2 with `--selector <value>`. Never guess a selector or call DKIM missing from this check alone.
4. Public emails from step 1: one risk item, severity 2, ease 2, fix "expect phishing; use role addresses such as info@ on the website". Named staff appear as first name and role only.
5. Exposed services: for IPs the owner controls, `./run.sh shodan internetdb <ip>` (and `shodan host` only if the optional key is set). Shared hosts such as Cloudflare, Shopify, Squarespace, or Wix serve many customers: name the provider and add an "ok" item. Open ports or known vulnerabilities on the owner's own IP: severity 3, ease 1.
6. Run mypeople-report.
