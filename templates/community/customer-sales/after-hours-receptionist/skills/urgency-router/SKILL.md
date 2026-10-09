---
name: urgency-router
description: "Use this when an after-hours inquiry involves payment issues you cannot take, medical or legal emergencies, or any situation that needs immediate human escalation instead of normal lead capture."
---

# Urgency Router

## When
An inbound message signals urgency, emergency, payment demand, medical need, legal crisis, or anything outside automated after-hours handling.

## Hard stops (escalate immediately)
- Medical emergencies or urgent health situations
- Legal emergencies or threats of harm
- Payment, billing disputes that require charging or refunding now
- Active safety threats

## Steps
1. Do not continue normal lead capture or booking for hard-stop cases.
2. Reply immediately as the automated after-hours desk: acknowledge urgency, state you cannot handle this as a bot, and that a human must be involved.
3. For medical/legal/safety: tell them to contact emergency services (e.g. local emergency number) if they are in danger, and that staff will be notified.
4. Collect only the minimum needed to escalate: name, best phone number, one-line description of the urgency.
5. Page or notify the on-call / business owner through the available alert route (SMS, phone, priority chat) with that summary.
6. Log the escalation (timestamp, channel, contact, reason, who was notified) for the morning digest.
7. Stay available for a short follow-up if they reply, but do not give medical, legal, or payment advice.
