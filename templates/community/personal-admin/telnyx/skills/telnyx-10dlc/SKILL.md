---
name: telnyx-10dlc
description: "use this when registering Telnyx US 10DLC/A2P: Sole Proprietor or EIN brand, campaign, number assignment, error 40010, or before submitting campaign content (runs website audit first)"
---

# Telnyx 10DLC / A2P registration

Register US long-code messaging so carriers accept A2P traffic (avoids error 40010). Prefer live docs over memory.

## Docs
- Getting started: https://developers.telnyx.com/docs/messaging/10dlc
- Sole Proprietor: https://developers.telnyx.com/docs/messaging/10dlc/sole-proprietor
- Campaign registration: https://developers.telnyx.com/docs/messaging/10dlc/campaign-registration
- messageFlow (Inbound Message): https://support.telnyx.com/en/articles/10562019-guide-to-10dlc-message-flow-field
- Agent index: https://developers.telnyx.com/llms.txt

## Choose a path
| Path | When | Campaign usecase |
| --- | --- | --- |
| **Sole Proprietor** | Individual / no EIN; low volume; one number | `SOLE_PROPRIETOR` (not Low Volume Mixed) |
| **Business + EIN** | Legal entity with EIN | e.g. `LOW_VOLUME` / Low Volume Mixed, or `MIXED` |

## Before campaign submit (required)
1. Ask for the brand **website URL** (and the number that will be advertised).
2. Run [Telnyx 10DLC website audit](sand-workflow:telnyx-10dlc-website-audit) until **GO**.
3. Set brand `website` to that live URL; use audited `messageFlow`, privacy/terms links, and samples that match real traffic.
4. Do **not** call `campaignBuilder` / appeal / number assign while the audit is NO-GO.

## Sole Proprietor flow (API)
1. Collect: firstName, lastName, displayName, email, street/city/state/postalCode, vertical; phone (often the Telnyx DID); mobilePhone for OTP; **website URL**.
2. `POST /v2/10dlc/brand` with `entityType: SOLE_PROPRIETOR` (include `website` when known).
3. Wait until `tcrBrandId` exists and brand `status` is OK; `identityStatus` starts UNVERIFIED.
4. `POST /v2/10dlc/brand/{brandId}/smsOtp` with pinSms containing `@OTP_PIN@` and successSms.
5. User pastes PIN → `PUT .../smsOtp` with `otpPin` until `identityStatus` is VERIFIED (~$4 brand fee typically after verify — confirm current pricing in docs).
6. Complete website audit (GO) → `PUT` brand `website` if not already set.
7. Qualify: `GET /v2/10dlc/campaignBuilder/brand/{brandId}/usecase/SOLE_PROPRIETOR` (use Telnyx UUID brandId). Keywords must be comma-separated **without spaces**. Include `subUsecases` when minSubUsecases ≥ 1.
8. `POST /v2/10dlc/campaignBuilder` with audited inbound `messageFlow`, realistic samples, HELP/STOP, `privacyPolicyLink` / `termsAndConditionsLink` when available, `termsAndConditions: true`.
9. Wait until campaign is approved (`campaignStatus` not `TCR_PENDING`). Confirm number assign is allowed (not error 10036). Then `POST /v2/10dlc/phoneNumberCampaign` with phoneNumber + campaignId. SP allows **one** number per campaign.
10. Only then retry outbound SMS. Watch delivery status, not just HTTP 200 queued.

## Business + EIN (high level)
1. `POST /v2/10dlc/brand` with companyName, ein, address, vertical, **website**, etc.
2. Website audit GO before campaign content.
3. Optional brand vetting for throughput.
4. Qualify usecase then `campaignBuilder` (e.g. LOW_VOLUME / MIXED).
5. Assign numbers after approval.

## Rejections / appeals
- failureReasons citing thin opt-in or missing website → fix site (audit), PUT brand/campaign content, then appeal **only** if status is `TELNYX_FAILED` or `MNO_REJECTED` (API 10015 if not).
- `TCR_ACCEPTED` with stale failureReasons + assign 10036 → do not spam assign; support re-review may be needed; do not send outbound until `messaging_campaign_id` is set.

## Fees / ETA
- Quote current docs for brand, campaign vetting, monthly fees — they change.
- Sole Proprietor campaigns often clear faster than standard volume, but `TCR_PENDING` can still take minutes to a business day. Poll; do not spam resends.

## Rules
- Never invent EINs, addresses, websites, or sample messages that do not match real traffic.
- Never echo full API keys.
- Escalate rejections (`failureReasons`) with the carrier/TCR detail; fix samples/opt-in/site and resubmit only when appropriate.
