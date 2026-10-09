---
name: pay-stub-checker
description: "Use this when the owner shares a US pay stub (phone photo, screenshot, PDF, or pasted numbers) and wants every line checked, compared with their last stub, and sanity-checked for year-to-date totals and limits."
---

# Pay stub checker

## Accepting the stub
Take the stub however the owner has it: a phone photo, a screenshot, a PDF, or pasted text. If the image is blurry, cut off, or a number can't be read, say exactly which lines are unreadable and ask for a clearer shot or for just those numbers pasted in. As a fallback, the owner can type the key numbers (hours, rates, gross, each tax, each deduction, net, and the YTD columns). Never guess a value you can't read.

## Line-by-line check
1. **Hours and rates.** Confirm hours times rate equals each earnings line.
2. **Gross pay.** Confirm the earnings lines add up to gross pay.
3. **Overtime.** Under federal law (FLSA), non-exempt workers get 1.5x their regular rate for hours over 40 in a workweek, unless the stub shows another rule applies (a state daily-overtime rule, double time, or an exempt salary).
4. **Pre-tax deductions.** 401(k)/403(b), health, dental, vision, HSA, FSA, and similar. Confirm amounts match any percentage or flat amount the owner gives, and that they reduce the right taxable wages (401(k) reduces income tax wages but not FICA wages; Section 125 health, HSA, and FSA usually reduce both).
5. **Social Security.** 6.2% of FICA wages, up to the current year's wage base.
6. **Medicare.** 1.45% of all FICA wages, plus 0.9% Additional Medicare Tax once calendar-year wages pass $200,000 (employers withhold it past that point regardless of filing status).
7. **Federal income tax withholding.** Estimate with the current-year IRS Publication 15-T percentage method, using the owner's W-4 settings and pay frequency. It's an estimate, so small gaps are Check, not Wrong.
   - **Supplemental pay (bonuses, commissions, severance, and similar).** Employers may withhold on supplemental wages at the flat supplemental rate in IRS Publication 15 (section 7), and must use the higher mandatory rate on supplemental wages over $1 million in the year. Others add the bonus to regular wages and use the regular method. Look up the current-year flat rates in Pub 15. Before calling withholding wrong, work out which method the stub uses (a separate bonus line taxed at the flat rate, or one combined total) and check against that method. Say which method you assumed.
8. **State and local tax.** Use the state revenue department's current withholding method and any city, county, or school-district tax where the owner lives or works, plus state programs that appear on stubs (SDI, PFL, employee SUI) where the state has them. Many states also have their own supplemental rate for bonuses, so check that too.
9. **Post-tax deductions.** Roth 401(k), garnishments, union dues, and similar. Confirm amounts and that they don't reduce taxable wages.
10. **Net pay.** Gross minus all taxes and deductions equals net pay.

## Year-to-date sanity check
- For every line with YTD figures, check that prior YTD plus the current amount equals the new YTD. Use the previous stub's YTD when it's available.
- Check that YTD totals are plausible against per-period amounts times the number of pay periods so far this year, and flag big gaps.
- **Social Security wage base.** Look up the current year's base from SSA. Say how far YTD Social Security wages are from it, estimate which paycheck will hit it, and confirm Social Security stops once it's reached (and flag if it stopped early or kept going).
- **401(k)/403(b) limit.** Look up the current year's employee deferral limit (and the age-50+ catch-up if the owner says it applies) from the IRS. Say how much room is left at the current rate and flag if contributions will hit the limit early or already passed it.
- **Additional Medicare.** Flag when YTD wages are near or past $200,000.

## Compare paychecks
When the owner has a previous stub (shared now or kept in their history), compare the new one with it line by line. Flag every change in pay rate, hours, each deduction, each tax, and net pay, with the dollar difference. For each change, say whether it looks expected (a raise, more overtime, a bonus taxed at the supplemental rate, open-enrollment changes, hitting the Social Security base) or unexplained.

## W-4 hint
If federal withholding on regular wages looks far off from the estimate (not a small rounding gap, and not explained by supplemental-rate withholding on a bonus), add a short plain-English note on what could explain it, such as a filing status, Step 2 multiple-jobs box, dependents, or extra withholding that doesn't match what the owner described. Frame it as "worth checking with HR or a tax pro." Never tell the owner what to put on their W-4.

## Output
A plain-English report:
- A short summary at the top of what matters most.
- Every line marked **OK**, **Check**, or **Wrong**, with the dollar difference and a short reason for Check and Wrong.
- The paycheck comparison and YTD milestones when they apply.
- Which tax year's rates, wage bases, and limits were used and where they came from.
- A note that these are estimates, not tax or legal advice.
- A closing section titled **Questions to ask your payroll team**, with a specific, polite question for each Check or Wrong item.

## Private stub history
Only if the owner opted in: after each check, save a short record in this bot's own memory on the owner's side (pay date, gross, each tax, each deduction, net, and the YTD columns) so the next stub can be compared. Never save the stub image or file itself, never share the history, and never put it into a shared template or skill. If the owner says to stop or clear it, do so.

## Rules
- Estimates only, not tax or legal advice. Flag and explain; never guarantee a stub is right or wrong.
- Use only official current-year figures (IRS, SSA, the state revenue department, the local tax office), looked up rather than recalled, and say which year was used. If a source can't be reached, say so and mark the affected lines Check.
- Keep stubs private. Don't keep copies beyond the session unless the owner opted into history, and never share them.
