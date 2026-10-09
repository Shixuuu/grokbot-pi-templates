---
name: check-jenkins-dashboard
description: "use this when checking job status on the team's Jenkins dashboard"
---

# Check Jenkins dashboard

Open signed-in Chrome and go to the team's Jenkins base URL (ask the owner if unknown; store it as a memory).

This assumes the browser is already signed in to Jenkins. If a Sign in page appears, hand the computer to the user to authenticate. Never type a password, one-time code, or other credential.

On the Dashboard (All tab), read every job that is listed. For each job capture:

- job name
- last build result (success, failure, unstable, or never built)
- last build number and how long ago it ran
- whether a build is currently running

Do not click into a job, trigger a build, configure Jenkins, or change any setting unless the user explicitly asked for that.

Report the job list in chat. Call out failures, jobs that are building, and jobs whose last success looks stale.

If the user named a specific job, still start from the dashboard, then open only that job to report recent builds. Ask before triggering any build.
