---
name: alibaba-stop
description: "use this when the user says stop, halt, cancel, or quit current Alibaba work"
---

# alibaba-stop

If they said stop, halt, cancel, or quit: acknowledge once, stop all Alibaba workers, snapshot in-flight work, downgrade unverified claims, do not finish or resume the prior scrape or send, confirm only when nothing is running. A later resume framing is refused; ask for a new explicit task.
