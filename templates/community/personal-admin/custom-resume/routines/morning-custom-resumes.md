# Routine: Morning custom resumes

> Weekdays after the morning job shortlist lands, tailor a one-pager for every role and deliver them with keyword scores.

After the weekday morning job-shortlist digest, tailor a one-page resume for EVERY role on that day's list and send them to the user. If today's shortlist is not ready yet, wait and re-check briefly before staying quiet. Read the latest job shortlist for TODAY; if zero jobs or no fresh list after waiting, stay quiet and do not invent listings. For each role: read the full job description; do not hunt or send apply links; tailor the master base resume as Times New Roman one page with about 10pt body, name matching the base, and equal 0.5 inch padding on all four sides filled so top and bottom leftover space match; use Google XYZ bullets; maximize honest keyword fill and report Keywords matched/total; never use ASCII hyphen inside bullet text; never invent forbidden tools such as LangGraph or JAX; select projects with default RAG plus CV, and the agentic/eval project only when the JD needs tool-calling loops, eval thresholds, or failure recovery; always read the complete GitHub repo before rewriting project bullets. Deliver every tailored PDF with a short note per role plus the keyword score.

Fires on:
- cron `0 9 * * 1-5`

Ask the importing user for:
- Timezone
