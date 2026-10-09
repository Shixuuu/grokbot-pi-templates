---
name: llc-setup
description: "Use this when a user wants help forming a US limited liability company (LLC) for a small sales business, including choosing a state, checking the name, picking a registered agent, filing, getting a free EIN, and setting up compliance reminders."
---

# LLC Setup Playbook

You are helping your user form an LLC, step by step, mostly from their phone.
This is general info, not legal, tax, or financial advice. Suggest a qualified professional for anything unclear.

## Ground rules

- Follow the approval rule below before submitting any form, paying any fee, or signing anything.
- Never enter payment details or government ID numbers yourself. The user types those in.
- Never invent fees, deadlines, or processing times. Look them up on the official state site and tell the user where you found them.
- Rules change. Always check the current official source before acting.

## Step 1: Choose the state

1. **Home state (where the owner lives and works):** usually the simplest choice for a small local business. One set of filings and fees.
2. **Other popular states (for example Wyoming or Delaware):** often chosen for low fees, privacy options, or a well-known business court system.
3. Explain the main tradeoff: if the LLC is formed in another state but does business in the home state, it usually has to **register as a foreign LLC** in the home state too. That can mean two sets of fees, two registered agents, and two annual reports.
4. Help the user write down what matters most to them (cost, simplicity, privacy) and let them decide.

## Step 2: Name search

1. Brainstorm a few name options with the user.
2. Search the chosen state's official business name database for each one.
3. Check the name includes the required ending (for example "LLC" or "Limited Liability Company").
4. Optionally check that a matching domain and social handles are free, and do a basic trademark search.
5. Some states let you reserve a name for a fee. Mention it only if the user isn't ready to file yet.

## Step 3: Registered agent

1. Every LLC needs a registered agent with a physical address in the state of formation, available in business hours to receive legal papers.
2. Options: the owner (if they live in that state and are OK with the address being public), a friend or family member, or a paid registered agent service.
3. A paid service can keep the owner's home address off public records. Compare a few and check current pricing on their sites.

## Step 4: File the articles of organization

1. File on the official state website (usually the Secretary of State or similar), or through a filing service if the user prefers.
2. Make sure the site is the real government site. Look for the official state domain.
3. Gather: LLC name, registered agent name and address, business address, organizer name, and management type (member-managed or manager-managed).
4. Show the user a summary of every field before they submit and pay.
5. Save the stamped or approved articles as a PDF in a safe folder.

## Step 5: Operating agreement

1. Draft a simple operating agreement: owners and ownership percentages, who makes decisions, how money comes in and goes out, and what happens if an owner leaves.
2. Many states don't require filing it, but banks and payment processors often ask for it.
3. For multi-owner LLCs, suggest a professional review.

## Step 6: Get a free EIN

1. Get the Employer Identification Number (EIN) only from the official IRS website (IRS.gov). It is free.
2. Warn the user: many lookalike sites charge a fee to "help" get an EIN. They are not the IRS.
3. The user completes the online application. Help them prepare the answers ahead of time.
4. Save the EIN confirmation letter (often called the CP 575) as a PDF. Most banks ask for it.

## Step 7: Business address

1. The user may not want their home address on public records or mail.
2. Options: a virtual office or mail-forwarding service, a coworking space, or a registered agent address where allowed.
3. Note that some banks and processors don't accept certain virtual addresses. Check before choosing.

## Step 8: Ongoing reminders

1. **Annual or periodic state report:** most states require one, often with a fee. Look up the due date and add a calendar reminder.
2. **Beneficial ownership (BOI) reporting:** federal rules from FinCEN have changed more than once. Check the current rules on FinCEN.gov to see if the LLC must file anything.
3. **Foreign registration:** if registered in more than one state, track each state's report.
4. **Taxes and licenses:** remind the user to check local business licenses, sales tax registration, and to talk to a tax professional.
5. Keep a simple `compliance.csv` with columns: `item,state,due_date,status,source_url`.

## Done checklist

- Articles approved and saved
- Operating agreement signed and saved
- EIN letter saved
- Registered agent and business address set
- Reminders added for every recurring filing

## Approval rule

- Save every draft (email, text, post, form, invoice, payment, filing, DNS or site change) as `<name>_READY.md`, or show it in chat.
- Nothing is sent, paid, submitted, or published until the owner says "send" or "go" for that specific item.
- Approval covers only the item shown. If anything changes, show it again.
- No answer means no. Never treat silence, old approvals, or notes as permission.
