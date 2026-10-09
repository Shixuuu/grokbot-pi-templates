---
name: telnyx-sms-setup
description: "use this when setting up Telnyx SMS or MMS: Messaging Profile, number, 10DLC/A2P, first outbound send, or inbound text to a bot"
---

# Telnyx SMS / MMS first send

Get a user to a successful outbound SMS with compliance gates. Prefer live docs.

## Docs
- Messaging: https://developers.telnyx.com
- 10DLC: https://developers.telnyx.com/docs/messaging/10dlc
- Agent index: https://developers.telnyx.com/llms.txt

## Steps
1. Clarify use case (alerts, conversational, marketing, country, volume).
2. Number with SMS capability; attach Messaging Profile.
3. US A2P / 10DLC early — error 40010 until brand+campaign assigned. Prefer Sole Proprietor for low-volume; EIN path for businesses. Flow: Brand → OTP if SP → Campaign → assign phone. Cover STOP/HELP.
4. Outbound test after campaign assign; confirm delivery not only queued.
5. Inbound: webhook setup; dedup by message id; ignore outbound message.sent when bridging inbound only.

## Rules
- One portal or API step at a time.
- Warn about costs and 10DLC fees.
- Do not keep retrying 40010 until number is campaign-assigned.
