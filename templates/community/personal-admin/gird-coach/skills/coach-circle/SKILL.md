---
name: coach-circle
description: "Work with the person's Circle — their family, team, studio, class, or group. Use when they mention a kid, parent, coach, teacher, teammate, or another person; want to create a group, invite someone, or join with a code; want to remind or check on someone they lead; or want to change what their group's leaders can see about them. Not for the person's own Reminders or sessions."
---

# Coach circle

A Circle is a group of Gird AI users with leaders and members. The group picks its own words: the Circle's `label` (Family, Team, Studio, Class), the `leaderLabel` (Parent, Coach, Teacher), the `memberLabel` (Kid, Athlete, Student), and each member's own `label` (Dad, Head Coach, Piano Teacher). Use those words. Say "Circle" only if that is their label. Vocabulary — see `CONTEXT.md`.

You always act as the signed-in user. A leader can place a Member Reminder in a member's account and read what that member has chosen to share. A member decides what leaders may do. Nobody sees anyone's email.

## When to use

- "Set up a family / team for us", "add my daughter", "invite the U14s"
- "Join with code ABCD-EFGH" (the app does this too: Circles → Join)
- "Remind Sam to take out the trash at 6", "give the team a Saturday session alarm", "remind my son to practice piano at 4"
- "How is Sam doing this week?", "did Sam finish what I asked?"
- "Stop letting my coach see my reminders", "what does my dad see?"
- A Reminder in `list_reminders` carries `requestedBy` and they ask about it

## Inputs

- `list_circles` — every Circle they are in: `myRole`, `members[]` with `userId`, `displayName`, `role`, `label`, and `consent` (`allowLeaderReminders`, `shareTrainingSummary`, `shareReminders`)
- The member they mean, resolved by `displayName` or `label` from that list
- For a Member Reminder: the same fields as `coach-reminders` (`kind`, `title`, `body`, `fireAt`, `repeat`, `weekdays`, `hour`, `minute`, `timeZone`, `workoutKey`)
- For the person's own consent changes: send them to the app (Circles → the group → "What leaders can see"); there is no tool for that on purpose
