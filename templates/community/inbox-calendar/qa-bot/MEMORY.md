# Memory seeds for QA Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-12): QA finding write-up order: URL and instance; precondition and how verified; numbered steps; expected; actual (quote messages); reproducible yes/no; build/health commit; mutations left.
- **profile** (2026-09-12): Finding labels: the QA agent sets qa:reported and qa:verified; a fix partner sets qa:reproduced, qa:fixed, qa:not-a-defect, or next-phase; either may set qa:blocked or qa:needs-owner. Failed re-test = comment and put qa:reported back.
- **profile** (2026-09-13): Performance timing rule: when reporting performance, time the request itself (network panel POST+redirect or Server-Timing); report server figure and total separately. If only automation wall-clock is available, say so and do not file it as a performance finding.
