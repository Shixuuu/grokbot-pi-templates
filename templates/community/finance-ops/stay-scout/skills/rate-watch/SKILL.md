---
name: rate-watch
description: "Use this to run scheduled rate checks on a saved shortlist and alert only on real price drops."
---

# Rate watch

1. Keep a baseline per hotel in memory: date checked, dates and guests searched, official rate, best third-party rate, all-in total.
2. On each check, re-pull live rates for the same dates and guests using the hotel-search method.
3. Compare to the last check and the baseline. Alert only on a drop of about 5% or $10 a night (owner-adjustable), when a hotel drops under an owner-set target price, or when a sold-out hotel reopens.
4. When alerting, say which hotel, old vs new all-in nightly and total, where to book, and whether it is official or third-party. Send only to the people the owner listed.
5. Update the stored baseline after every check. If nothing moved meaningfully, stay quiet.
6. Suggest deleting the watch after the stay dates pass or once the owner books.
