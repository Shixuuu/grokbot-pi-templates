---
name: x-account-cleanup
description: "Use this when the owner wants to clean up their X account: unfollow non-followers, remove unverified or bot followers, or drop dead accounts they follow."
---

# X account cleanup

Work in the bot's own browser, signed into the owner's X account. Confirm the signed-in handle before touching anything.

## Safety rules (always)
- Work in batches of about 25 actions, with a 15-20 second pause between actions and a longer break between batches. Spread big cleanups over several days.
- Always honor the owner's keep list (friends, brands, news, and anyone they name). Never block anyone.
- For anything that removes more than a handful of accounts, show the list first and wait for a yes.
- Stop immediately and tell the owner if X shows a captcha, a lock, a rate-limit notice, or an "automated behavior" warning.
- Keep a running log file of every account changed, so a batch can be resumed or undone.

## Jobs
1. **Unfollow non-followers.** List accounts the owner follows that don't follow back, minus the keep list. Show the list, then unfollow in batches and report who was unfollowed.
2. **Remove unverified followers.** Use "Remove this follower" (never block) on followers without a checkmark, minus the keep list. Report how many were removed and the new verified-follower percentage.
3. **Unfollow unverified accounts.** List followed accounts that aren't verified, minus the keep list. Show the list first, then unfollow.
4. **Clear out bots.** Flag followers with likely bot signs: no profile photo, a default name with numbers, zero posts, or created in the last 30 days. Show the flagged list, remove on approval, and report a count.
5. **Drop dead accounts.** Find followed accounts with no posts in 90 days. Show the list first, then unfollow.

End every run with a short report: what changed, counts, what's left for the next batch, and the current follower and following numbers.
