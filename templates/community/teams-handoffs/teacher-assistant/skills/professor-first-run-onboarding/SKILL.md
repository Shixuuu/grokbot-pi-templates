---
name: professor-first-run-onboarding
description: "use this when a professor first opens this bot or asks to connect Canvas, Blackboard, Brightspace, Moodle, Google Classroom, Schoology, university email, or other teaching tools"
---

Use this when a professor first opens this bot or asks to connect teaching tools.

## Principle
The professor authenticates. You configure. Do not turn onboarding into a technical tutorial. They should mostly sign in, review recommendations, and approve what they want.

## First two connections
Start with only (1) their learning platform and (2) university email. Do not make them configure everything up front.

## Which LMS
Do not assume Canvas.

Try to infer the school and LMS from email, calendar, or inbox (Canvas, Blackboard Learn / Anthology, D2L Brightspace, Moodle, Google Classroom, Schoology / PowerSchool, or something else).

If you cannot tell, ask one short question with these choices:
- Canvas
- Blackboard
- Brightspace (D2L)
- Moodle
- Google Classroom
- Schoology
- Other (they name it or paste the login URL)

Then open that login page and hand them the screen to sign in (SSO/MFA as needed).

## After LMS sign-in
1. Inspect read-only: active courses, syllabus, assignments, modules, gradebook structure, due dates, policies, attendance, discussions, announcements, external tools, and recurring workflows.
2. Digest the syllabus and infer the operational rules of the course.
3. Investigate whether this instance exposes an API (Canvas REST, Blackboard REST, Brightspace/Valence, Moodle web services, Google Classroom API, Schoology API, or equivalent). Prefer the API for structured workflows. Keep the authenticated browser for tasks the API cannot do. If API access needs an admin or developer key, navigate them to the right place and tell them exactly what to click.

## University email
1. Open the professor's university email and have them sign in.
2. Analyze course-related email read-only: repeated student questions, the professor's writing style, extension requests and outcomes, attendance exceptions, grading and policy questions, and anything that lives in email but not the LMS.
3. Design a three-layer triage system from their actual inbox — do not make them design it from scratch.
   - Layer 1: low-risk repetitive emails that can eventually use approved templates
   - Layer 2: you draft, they approve
   - Layer 3: sensitive or high-risk, professor-only
4. Draft about 5–15 style-matched templates with controlled variables such as student name, course, assignment, date, office hours, and LMS location. Ask them to review and approve.
5. Start all student-email automation in shadow mode.

## Dedicated agent email
Give yourself a two-way email identity so the professor can manage you by emailing you. Prefer Resend on the free tier for the bot-to-professor command channel: inbound, 1 webhook, and same-thread replies are included. Quota is 100 emails/day and 3,000/month with send and receive counting together. A `.resend.app` inbound address works without DNS; a custom domain is optional and needs their DNS approval. Do not route the student/university inbox through Resend.
Not complete until: you email them, they receive it, they reply, you understand the reply, and you respond in the same thread. After onboarding, email is the primary command and approval interface. Natural-language replies only — no special command syntax.

## How email wakes you
- The bot's dedicated address is persistent / event-driven: inbound mail should wake you immediately (webhook), and you reply in the same thread. Do not poll this inbox on a timer.
- The professor's university / student-facing inbox is batch-triaged every hour on weekdays during the day (about 8am–6pm local). In each run, triage every new email individually into Layer 1, 2, or 3. Do not poll every 10 minutes. Do not run overnight or on weekends unless they explicitly ask.
- If email is not connected yet, stay quiet.

## External tools and grades
From the LMS, syllabus, and email, identify tools such as Poll Everywhere, iClicker, Gradescope, Top Hat, publisher platforms, attendance, and homework systems. Ask the professor to authenticate only when needed, then inspect the workflow yourself.
Never blindly copy external grades into the LMS. Match student identity and assignment, check syllabus rules and email exceptions, then email a reconciliation preview and wait for approval. After writing approved grades, read the LMS again and verify.

## Safety
Reading and drafting can be automatic once authorized. Grade changes, extension decisions, and due-date changes need professor approval. Academic misconduct and sensitive student situations stay professor-only. When uncertain, escalate.

## Automations
After the initial LMS + syllabus + email scan, write an Automation Opportunity Report based only on observed workflows. For each: what, why (what you saw), frequency, systems, proposed behavior, risk, mode (automatic / approval / professor-only), and time saved. Recommend what to implement first. When they approve a recurring job, explain it in human terms, then configure the schedule yourself. Suggest cron-style jobs from observed rhythms; never ask them to write cron.
