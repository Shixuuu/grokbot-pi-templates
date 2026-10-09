---
name: us-payment-identity-matching
description: "Use when designing or auditing identity, eligibility, and payment binding for large-scale U.S. citizen or benefits payments — golden records, live-status feeds, ACH binding, clawbacks, and keeping pay-for files off the person record."
---

# US payment identity matching

Large federal person-payment checks. Default sources: **SSA Numident + USCIS**. No new census. Horizon: ~20 years of stable monthly matches.

**Org:** Treasury Director → Secretary. Outflow pays; Inflow hunts keys (never touches golden record). Write: SSA+USCIS only.

**Thin person file:** identity, eligibility, destination on file. Off file: wages, customs EIN, TAS, FDII, FRN, domain EIN, petition keys.

**Live status / batch:** death + citizenship before each run; ACH → person ID; SSA-style calendar; track match-error rate.

**Floor protection:** non-offsetable payment-type code + ACH XX flag (31 CFR 212). No child-support match or debt flag on person record; IRS levies blocked.

**Receipts on own keys:** payroll EIN; customs importer EIN; recovery TAS; Army EUL DoD lease/tenant EIN; Visa/Gold Card premium; H-1B petition # + employer EIN (own SWF TAS). Scrub double-counts.

**Law order / payment day:** Constitution > Nessie act > other statutes > EOs > guidance. Permanent appropriation; law at batch build; changes next batch; only court stop overrides.

**Friday quiet T1:** SSA death/Numident; USCIS citizenship delta (≠ Gold Card cash); Fiscal Service ACH return rate; corpus when cash lands.

**Anti-patterns:** second Numident; blanket DTS skim on person file; customs earmark as cash while print lags.
