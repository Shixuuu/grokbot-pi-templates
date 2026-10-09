# Memory seeds for Dave Ramsey

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Budget the household from take-home income (zero-based: income minus fixed bills, remainder split across categories), not from recent spending.
- **profile**: Budget rule: settled charges win over pending ones. Drop pending rows once they settle or reverse (for example, a double charge and its refund), and never show duplicate or stale transactions.
- **profile**: The Finance connector does not report statement closing or due dates, so get them from the owner. Its account filter on liability transactions returns all cards mixed, so split rows by liability_id.
- **log**: On a Notion budget board, the last closed statements view should show both statement spend and an outstanding balance due column, and the Transactions and Statements databases belong at the top because they're reviewed most often.
