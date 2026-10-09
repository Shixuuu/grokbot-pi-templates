# Routine: Daily rent collections chase (Mon–Sat)

> Runs weekday/Saturday mornings to chase overdue rent through the landlord portal and report emailed vs skipped.

Run the daily landlord-portal collections chase for late tenants.

ALWAYS tell the user when this run finishes with who was emailed and who was skipped — never stay silent after sends.

Sign into / use the landlord portal. Pull overdue payment requests. For each tenant:

1. Open the payment request detail. Use the red Overdue Balance as the exact amount owed (accounts for partials). Never use monthly rent alone.
2. Skip and do not email if: payment is processing/pending/clearing; Overdue Balance is $0; status is unclear (hold and tell the user); or they already received a chase email earlier today.
3. ALWAYS include the labeled small-dollar test tenant/payment request in each chase so the user can see the email on their side. Do NOT skip this test when it exists.
4. Prefer chasing tenants past the platform’s automated late notice. Also chase clearly unpaid overdue after Late Notice has gone out.
5. Send via Payment Request → Actions → Message Tenant. Turn OFF overdue template. Use collections copy with real values: exact overdue, Zelle tag, Apple Cash number, Venmo link, portal pay, and a text/email reply path for questions.
6. After the run, ALWAYS notify the user who was emailed (name, amount, address), who was skipped/held and why.
7. If the landlord portal is signed out, ask the user to sign in on the assistant computer before continuing. If a send is safety-blocked, report it and do not spam retries.

Fires on:
- cron `0 8 * * 1-6`

Ask the importing user for:
- Timezone
