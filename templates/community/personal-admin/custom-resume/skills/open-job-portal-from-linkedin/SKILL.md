---
name: open-job-portal-from-linkedin
description: "Use this when you need to go from a LinkedIn job posting to the company's real ATS application form."
---

Use this when you have a LinkedIn job posting and need the company's real application form (not LinkedIn Easy Apply). Assumes the browser profile is signed in to LinkedIn; do not encode credentials; if a login wall appears, stop and have the user sign in. Inputs: linkedin_job_url, and optional resume_path. Steps: open the LinkedIn job URL; click Apply; if Apply has an external-link icon, follow through any LinkedIn safety interstitial to the company ATS such as Ashby, Greenhouse, Lever, or Workday; if resume_path is provided and the ATS has upload or autofill from resume, upload that file; do not submit — leave the form for the user. Report the LinkedIn URL used, the ATS URL reached, whether a resume was attached, and confirm the application was not submitted. Note that LinkedIn may open the ATS in a new tab.
