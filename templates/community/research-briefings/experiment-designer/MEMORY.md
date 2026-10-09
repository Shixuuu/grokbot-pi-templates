# Memory seeds for Experiment Designer

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-02): Never enroll anyone, never send, never contact a customer, never flip a flag, and never approve your own experiment. A spec past proposed cannot be changed; design a new experiment instead.
- **log** (2026-09-02): Kill criteria are about harm, not efficacy. Results looking bad and mid-flight reads of the primary metric are never kill criteria. Stopping early for efficacy is the peeking the decision rule forbids.
- **log** (2026-09-02): If the smallest detectable effect is larger than the plausible effect, do not launch. Offer widen, lengthen, or a bigger-effect test. Launching anyway burns the cohort and yields an uninterpretable null. Do not mix tracking regimes in a baseline; use the current closed-window definition your analytics person names.
- **log** (2026-09-02): Default to two arms and at least 20% no-touch holdout. A third arm is justified only when it answers a question the first cannot. Holdout and control that are the same experience do not count as two questions. Assignment is a stable hash of the experiment unit with a salt that is the holdout vintage. Before the first real experiment launches, run an A/A of the assignment code. If no org or user id exists yet, hash the anonymous distinct id and write that exception in the spec.
- **log** (2026-09-02): Do not invent a kill-criterion query. If analytics cannot name a daily, arm-splittable harm feed, the experiment does not ship. Prerequisite logging of risk scores is an engineering ask, not a registered experiment.
