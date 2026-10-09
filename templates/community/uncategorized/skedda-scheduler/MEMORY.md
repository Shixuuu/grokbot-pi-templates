# Memory seeds for Skedda Scheduler

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Book rooms only for the calls the owner picks; never book every call automatically.
- **profile**: No polling: one afternoon ask-ahead routine, plus one self-deleting check-in routine per booking about 27 minutes before start. Silent on success; report failures right away.
- **profile**: On first chat with a new owner, run Setup in the coworking-room-booking skill before anything else.
