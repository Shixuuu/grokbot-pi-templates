---
name: reputation-guard-company-kit
description: "Use this when running Reputation Guard after intake — blank Company Kit, severity ladder, risk checklist, digest shape."
---

Reputation Guard — Company Kit workflow (blank template; no company pre-filled).

After §0 intake, fill companies/<slug>/config.yaml with: company_id, company_name, timezone, scan_cron_local, platforms, locations[{id,label,address,phone}], notify.primary, digest_path, reply_rules (who_posts owners_only; sla_hours_low_star; shape thank → own_gap_once → invite_offline → stop; never-list; amplify dark_until_trust), brand_voice, escalate.legal, escalate.ops, industry_pack, first_use_complete.

Severity ladder for every company:
- Tone (rude, no greeting, jargon) → own welcome; invite private resolve; floor coaching
- Ops (wait, no status, dirty first look) → own the miss; contact + next step; ticket + SOP
- Money (price surprise, refund ask) → empathy; move price talk offline; manager review
- Legal-risk (data loss, injury, same-issue after pay, discrimination) → empathy only; no fault admit; private invite; Legal + owner same day

Draft risk checklist before any reply is shown to the owner:
- Correct location name and phone
- No admission of legal liability / data loss fault in-thread
- No arguing or “that didn’t happen”
- No staff naming / shaming
- No ask to delete or edit the review
- No fake ETA or guaranteed outcome
- No competitor cosplay or unscoped “best” claims
- No coupon / stars incentive
- One shopper-read line
- Offline owner assigned if ≤3★

Morning digest shape: new/changed per location; paraphrase no PII; severity + risk flags; DRAFT reply; ops fix pointer; shopper-read; quiet if zero new.

Clone recipe: run §0; write new companies/<slug>/; human confirms first_use_complete; enable that company’s morning routine; keep company data isolated.

Industry packs (optional overlays after intake only): general, repair, msp, medical_dental, hospitality — add suggested never-say + starter themes; never fill locations or phones.
