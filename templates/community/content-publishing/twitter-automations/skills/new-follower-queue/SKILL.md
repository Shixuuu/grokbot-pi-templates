---
name: new-follower-queue
description: "Use this when listing new X followers above a size floor for lead gen, with profile context and no drafted DM."
---

Show new X followers above a size floor, with enough profile context to decide if they are interesting. Use this when the user wants a new-follower queue, follower tracker, or lead-gen from people who just followed them. Run this as its own job.

# Setup (once)
If no follower-count floor is stored yet, ask before the first real run. Offer 500, 1,000, or a number they type. 1,000 is the cleaner default. 500 is better for a smaller niche. Remember their choice.

# What must be connected
- x.com signed in on this computer: used to see recent followers (the X connector cannot list followers). If already signed in, do not remind. If not, hand over this computer so they can sign in. Never ask for keys or passwords.
- X connector: used to profile each new handle (bio, counts, recent posts). If it is not connected, ask them to connect it. You can still list new handles from the browser without it, but skip the extra profile lookup until it is connected.

# State
Keep only an already-shown set of user ids. Do not keep a full directory of everyone who follows the account.

# First run
Baseline only. Record whoever is currently at the top of recent followers as already shown. Do not dump a backlog. Tell the user the floor is saved and that alerts start on the next run.

# Later runs
1. Read recent followers from x.com.
2. Drop anyone already in the shown set.
3. Drop anyone under the follower-count floor.
4. For each remaining person, show: handle, bio, follower count, following count, and a couple of recent posts (via the X connector when it is connected).
5. Add those ids to the shown set.
6. If nobody new is above the floor, say so and stop.

# Do not
- Draft a DM. There are too many reasons someone might message a new follower. Show who showed up and why they look interesting. The user writes a message only if they have a reason.
- Auto-DM new followers.
- Paginate the entire follower graph.
