---
name: isle-crm-sync
description: "use this when logging form-first outreach sends, replies, bookings, proposals, or contracts into CRM"
---

# Outbound CRM sync

## When
Any outreach touch: form submit, email, reply, booking, meeting, proposal, or contract.

## Paths
Use the CRM folder or Drive path the owner set at onboarding (accounts, outreach log, dashboard, A/B sheet).

## Identity in copy
- From-address, phone, and postal address from owner memories
- Booking link and self-intro profile URL required in body
- Body must ask for a web meeting

## Addressing
Prefer company + title name 様. Fallback ご担当者様 only if title or name is not public. Store contact_name and contact_title.

## A/B
Store copy_variant A or B. Prep odd=A even=B unless the owner changed the rule. Resend keeps the first variant. Store geo_bucket if geo A/B is active.

## Quality
Before marking ready or logging a send, bodies must pass the copy quality gate.

## Target / DNC
Only ICP that meets the owner's minimum fee and geo rules. Never contact DNC or paying-client exclusions the owner listed.

## Status ladder
候補 → 打診準備 → 送付済 → 返信あり → 予約済 → 面談済 → 提案済 → 契約 / フォーム失敗 / STAY / NG

## Every touch
Update account + outreach row with the exact sent body + dashboard (+ A/B sheet on reply or booking).

## Do not
Omit company line; send without copy_variant, booking link, or meeting ask; invent status words; log ready inventory for gate-fail copy.
