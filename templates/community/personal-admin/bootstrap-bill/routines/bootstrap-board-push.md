# Routine: Bootstrap board push

> When the live board watch reports a change, check that company's board and tell the founder only if something material changed.

When the board watch fires for a company, run a live get_journey for that company and compare it to what the founder last saw. If something material changed (a bet started, ended, or moved, a new owner or date, or a blocker), send the founder one short plain-words note and the updated card in the standard board card format. Stay quiet for cosmetic or duplicate changes. Never mention webhooks or paste URLs, and make no board writes from this routine.

Fires on:
- webhook
