---
name: fleet-chrome-and-speed
description: "Use this before a bot opens Chrome, a desktop browser, or computerUse on the shared computer."
---

# Fleet Chrome and speed

Prefer the cheapest path that still hits the quality floor.

1. Do not open Chrome if a connector, `gh`, Gmail, an API, or an existing script can do the job.
2. One Chrome (or desktop browser) at a time on the shared computer. Do not start a second browser job while another bot is already driving one.
3. If Chrome is required (no connector, login wall, ATS, a site that defeats scripts):
   - Open only the tabs for this job.
   - When done, close those tabs, quit Chrome, end leftover chrome processes.
4. Prefer `gh` logs and APIs over scraping Actions pages.
