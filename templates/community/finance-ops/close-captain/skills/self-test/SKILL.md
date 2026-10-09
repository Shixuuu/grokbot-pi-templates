---
name: self-test
description: "Use when running the close-desk self-test against Close Desk/selftest fixtures for period 2026-08 and comparing results to the eight expected lines."
---

# Self-test

Run the close desk against fixture data under `Close Desk/selftest`. Never touch live sheets.

## PROCEDURE

(0) If Google Drive, Sheets or Docs is not connected, do not stop: offer to install the missing one(s) (the app shows a one-click install), wait for the owner, and continue once connected. Only if the owner declines, reply SELF-TEST BLOCKED: connect Google Drive, Sheets and Docs, then say Self-test again. If any of Recon, Accruals, Flux Memo or Forecast does not exist as a bot, run the skill Bootstrap the desk first and wait until all four exist and the Close room is open, then continue.

1. Ensure the subfolder `Close Desk/selftest` exists with Sheets `close_calendar`, `bank_2026-08`, `gl_cash_2026-08`, `accrual_schedule`, `budget_vs_actual`, `driver_model` (tabs `drivers`, `assumptions`); create any missing one from the rows stored in this skill; reset the selftest `close_calendar` to the stored rows (4 done, 9 open). Never touch the live sheets.

2. Message Recon, Accruals, and Flux Memo with `selftest mode — period 2026-08, opening cash balance $48,210.55` and their tasks: Recon reconcile; Accruals stage; Flux Memo bridge (no owner pings — drafts only). The opening cash balance $48,210.55 is for Recon only. Message Forecast with: `selftest mode — period 2026-08; use opening_cash from the assumptions tab of the selftest driver_model, not any balance quoted in chat` and its task: Reforecast, then Scenario `defer $70,000 of the October inventory buy to November`.

3. Run the calendar logic on the selftest calendar for D+2, then D+3, then (after marking the four human tasks done on D+4) D+5, without messaging teammates again.

4. Compare each result to the expected lines below; a check passes when every number and label matches (whitespace and money formatting aside). Reply with `SELF-TEST: <n>/8 PASS` and one line per FAIL: expected vs got.

## EXPECTED

1. `RECON 2026-08: 10 matched, 2 timing (+$9,850.00), 3 JEs (−$112.60), adjusted GL $48,326.60 = adjusted bank $48,326.60, diff $0.00`
2. `ACCRUALS 2026-08: 8 JEs staged $27,260.50, 2 missing invoices (Harbor 3PL @ops-lead; Lantern Legal @founder)`
3. `FLUX 2026-08: revenue var $4,480 (vol $30,234 / mix −$17,554 / price −$8,200, bridge OK), 5 lines flagged`
4. `FORECAST 2026-08-31: 12-mo revenue $3,012,210, operating result −$92,593, 4/12 months profitable, cash low −$79,056 in 2026-10 before draws, line drawn $139,317 of $150,000 (no repayment modeled)`
5. Scenario: cash low −$33,002 in 2026-11, line drawn $139,317, verdict `yes, with the line`
6. Calendar D+2: 6/13 done, 2 overdue (Revenue cutoff review @ar-lead; Fixed asset roll-forward @controller)
7. Calendar D+3: 7/13 done, 3 overdue (adds Inventory count adjustment @ops-lead)
8. Calendar D+5: 13/13 done, 0 overdue, package drafted, Forecast FORECAST OK, lessons 4 late / 0 blocked, early-ping none
(the four human tasks marked done on D+4 were due D+1, D+1, D+2 and D+3). In selftest mode the Lessons line is posted, never saved to memory.

## SAMPLE ROWS

=== close_calendar (day,task,owner,teammate,status,done_on,notes) ===
D-2,Freeze AP invoice entry,@ap-lead,human,done,D-2,
D-2,Send accrual requests to vendor owners,Accruals,Accruals,done,D-2,
D-1,Bank statement saved to Drive,@controller,human,done,D-1,
D-1,Payroll accrual posted,@controller,human,done,D-1,
D+1,Bank reconciliation,Recon,Recon,open,,runs when statement + GL cash are in Drive
D+1,Revenue cutoff review,@ar-lead,human,open,,last 3 days of shipments vs invoices
D+1,Fixed asset roll-forward,@controller,human,open,,
D+2,Accrual JEs staged,Accruals,Accruals,open,,
D+2,Inventory count adjustment,@ops-lead,human,open,,count sheet due today
D+3,Variance commentary,Flux Memo,Flux Memo,open,,needs budget_vs_actual final
D+3,Intercompany confirmations,@controller,human,open,,
D+5,Close package assembled,Close Captain,Close Captain,open,,
D+5,Reforecast from closed actuals,Forecast,Forecast,open,,after package
=== bank_2026-08 (date,description,ref,amount_usd) ===
2026-08-03,ACH deposit - Shopify payout,DEP-8801,9840.20
2026-08-05,Check 1038 - Northwind Packaging,CHK-1038,-3120.00
2026-08-08,ACH deposit - Amazon settlement,DEP-8802,14395.60
2026-08-11,Wire - Meridian Freight,WIRE-2207,-4275.00
2026-08-12,Card - Google Workspace,CARD-0812,-168.00
2026-08-15,Payroll - Gusto,PAY-0815,-21600.00
2026-08-18,ACH deposit - Shopify payout,DEP-8803,10215.75
2026-08-19,Check 1040 - Cedar Creative,CHK-1040,-1980.00
2026-08-22,Card - Meta Ads,CARD-0822,-5400.00
2026-08-25,Bank service fee,FEE-0825,-35.00
2026-08-27,ACH deposit - Amazon settlement,DEP-8804,13980.10
2026-08-29,Payroll - Gusto,PAY-0829,-21600.00
2026-08-31,Interest income,INT-0831,12.40
=== gl_cash_2026-08 (date,memo,ref,amount_usd) ===
2026-08-03,Shopify payout,DEP-8801,9840.20
2026-08-04,Northwind Packaging chk 1038,CHK-1038,-3120.00
2026-08-08,Amazon settlement,DEP-8802,14395.60
2026-08-10,Meridian Freight wire,WIRE-2207,-4275.00
2026-08-12,Google Workspace,CARD-0812,-168.00
2026-08-15,Payroll Gusto,PAY-0815,-21600.00
2026-08-18,Shopify payout,DEP-8803,10215.75
2026-08-18,Cedar Creative chk 1040,CHK-1040,-1890.00
2026-08-22,Meta Ads,CARD-0822,-5400.00
2026-08-27,Amazon settlement,DEP-8804,13980.10
2026-08-29,Payroll Gusto,PAY-0829,-21600.00
2026-08-29,Beacon Studio chk 1042,CHK-1042,-2450.00
2026-08-31,Shopify payout,DEP-8805,12300.00
=== accrual_schedule (vendor,gl_account,owner,monthly_estimate_usd,invoice_received,invoice_amount_usd,reverse_next_month) ===
Meridian Freight,6300 Freight,@ops-lead,4300.0,Y,4512.5,Y
Northwind Packaging,5100 Packaging,@ops-lead,3100.0,N,,Y
Cedar Creative,6400 Marketing,@growth-lead,2000.0,Y,1980.0,Y
Beacon Studio,6400 Marketing,@growth-lead,2450.0,Y,2450.0,Y
Harbor 3PL,6350 Fulfillment,@ops-lead,7800.0,N,,Y
Lantern Legal,6700 Professional fees,@founder,6000.0,N,,Y
Google Workspace,6600 Software,@founder,168.0,Y,168.0,Y
Summit Insurance,6800 Insurance,@founder,1250.0,N,,Y
=== budget_vs_actual (period,line,type,owner,units_budget,price_budget,units_actual,price_actual,budget_usd,actual_usd) ===
2026-08,Revenue - Everyday Tote,revenue,@sales-lead,1800,48.0,2050,44.0,86400.0,90200.0
2026-08,Revenue - Weekender Bag,revenue,@sales-lead,600,129.0,520,129.0,77400.0,67080.0
2026-08,Revenue - Card Wallet,revenue,@sales-lead,2400,22.0,2900,22.0,52800.0,63800.0
2026-08,COGS,cost,@ops-lead,,,,,96000,104200
2026-08,Marketing - Paid,cost,@growth-lead,,,,,38000,47500
2026-08,Marketing - Content,cost,@growth-lead,,,,,9000,8400
2026-08,Payroll,cost,@founder,,,,,61000,61000
2026-08,Shipping & Fulfillment,cost,@ops-lead,,,,,21000,24900
2026-08,Software,cost,@founder,,,,,4200,4650
2026-08,Other G&A,cost,@founder,,,,,6500,5900
=== driver_model / drivers (month,units_tote,price_tote,units_bag,price_bag,units_wallet,price_wallet,cogs_pct,fulfillment_pct,paid_marketing,content,payroll,software,other_ga,inventory_buy,capex) ===
2026-09,2100,44,540,129,3000,22,0.47,0.11,40000,8500,61000,4700,6000,130000,0
2026-10,2200,44,560,129,3100,22,0.47,0.11,45000,8500,61000,4700,6000,190000,0
2026-11,2900,42,760,129,4300,20,0.45,0.11,60000,8500,61000,4700,6000,120000,0
2026-12,3300,42,880,129,5000,20,0.45,0.11,62000,8500,61000,4700,6000,70000,0
2027-01,1900,46,420,129,2500,22,0.45,0.10,26000,8500,64000,4700,6000,90000,15000
2027-02,2000,46,450,129,2600,22,0.45,0.10,28000,8500,64000,4700,6000,100000,0
2027-03,2150,46,480,129,2750,22,0.44,0.10,30000,8500,64000,4700,6000,105000,0
2027-04,2250,46,500,129,2900,22,0.44,0.10,31000,8500,64000,4700,6000,110000,0
2027-05,2350,46,520,129,3050,22,0.44,0.10,32000,8500,64000,4700,6000,115000,0
2027-06,2450,46,540,129,3200,22,0.44,0.10,33000,8500,64000,4700,6000,120000,0
2027-07,2550,46,560,129,3350,22,0.44,0.10,34000,8500,64000,4700,6000,125000,0
2027-08,2650,46,580,129,3500,22,0.44,0.10,35000,8500,64000,4700,6000,130000,0
=== driver_model / assumptions (key,value,note) ===
as_of,2026-08-31,last closed month
opening_cash,48326.60,adjusted GL cash from Recon 2026-08
credit_line,150000,undrawn revolver; draw only what keeps month-end cash at the floor; no repayment modeled
min_cash_floor,25000,month-end cash may not fall below this
cash_basis,revenue and opex are cash in the month; COGS is non-cash; inventory_buy and capex are cash out,
