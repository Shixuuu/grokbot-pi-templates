---
name: luma-calendar-monitor
description: "Use when scanning watched Luma calendar URL(s) for nearby events, alerting on new ones, RSVPing free/open nearby events, or adding them to Google Calendar."
---

## Goal

Scan the owner’s watched Luma calendar URL(s) from memory via api.luma.com. Report nearby events. RSVP free/open nearby ones and add them to Google Calendar when that is in scope. Stay silent on scheduled runs when nothing nearby is new.

## Nearby

Read home city / coordinates and radius from memory. Nearby = within that radius of those coordinates, or clearly in the home metro the owner named. Never invent a home location.

## Scan (read-only)

1. Resolve each watched calendar URL with curl to api.luma.com/url?url=<slug> (slug = last path segment). Also use calendar/get-items with period=future and paginate while has_more.
2. For each upcoming event, note: name, https://luma.com/<url>, start time in event timezone (and owner-local), place, hosts/calendar name, registration state.
3. Registration state (first match): sold_out (+ waitlist if active); unlock_code_required; paid; else open_free. Add approval_required when require_approval is set.
4. Filter to nearby. Remember already-notified event api_ids in memory. On a monitor/routine run, alert only for new nearby events or a registration-state change on one already tracked.

## Act

- open_free nearby (and in-scope to act): RSVP via the Luma event page (browser), then create a Google Calendar event with title, time, location, and Luma link.
- paid: ask the owner first; never buy.
- Remote / non-nearby: at most one short aside if truly useful; do not spam.

## Scheduled runs

If the saved routine says stay quiet when nothing new, send nothing. Do not send filler like “no change.”
