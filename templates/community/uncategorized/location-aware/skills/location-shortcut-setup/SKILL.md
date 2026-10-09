---
name: location-shortcut-setup
description: "Use this when someone needs to build, fix or extend the iPhone Shortcut and automations that send location pings to a Grok Bot webhook routine."
---

# Location Shortcut setup (iPhone)

Walk the owner through one step at a time and wait for "done" before the next. Plain words, no jargon.

## Key safety
- Never ask the owner to paste the webhook key into chat. If they do, don't repeat it, and suggest they get a fresh key on the routine and update the Shortcut.
- The webhook URL and key live on the **Location ping** routine. Send the owner the routine's Webhook URL and Webhook key field links if you have them. Otherwise: open this bot's info pane by clicking its name in the chat header, choose **Location ping** in the Routines list, and copy the URL and key from there.

## 1. Build the "Ping Bot" Shortcut
1. Shortcuts app, tap **+**, name it **Ping Bot**.
2. In the Shortcut's settings, turn on **Receive input** and set it to **Text**. If asked where input comes from when there is none, choose **Continue**. Skip the Share Sheet.
3. Add **Get Current Location**.
4. Add **Get Details of Locations** for **Latitude**, then again for **Longitude**, **City** and **State**.
5. Add **Get Contents of URL**, paste the webhook URL, tap **Show More**:
   - Method: **POST**
   - Header: key `Authorization`, value `Bearer ` then the key (one space after Bearer).
   - Request Body: **JSON** with `label` (Shortcut Input), `time` (Current Date), `latitude`, `longitude`, `city`, `state`.
6. Tap play to send a test ping. Wait for the bot to confirm it arrived.

## 2. Add automations
For each trigger they want: Automation tab, **+**, pick the trigger, choose **Run Immediately**, turn off **Notify When Run**, then **New Blank Automation**.
- Add a **Text** action first with a short label, like `arrived Home`, `left Work`, `CarPlay connected`, `woke up`.
- Then add **Run Shortcut** set to **Ping Bot**, and set its **Input** to the Text above.
- The Text action must sit ABOVE Run Shortcut, and Run's Input must be the Text. If pings arrive with no label, this is almost always why.

Good triggers to start with: Arrive or Leave a place (home, work, gym, anywhere), CarPlay connect, Alarm stopped, opening an app, Time of Day. Arrive and leave circles work best at about 150 m.

## Troubleshooting
- Nothing arrives: check the URL, that the routine is on, and that Shortcuts has location permission.
- Unauthorised: the header must be exactly `Authorization`, value `Bearer <key>` with one space.
- Network error on first run: try again on good signal; it usually clears.
- Every ping is a routine run and uses plan usage, so start with a handful of events, never pings every few minutes.
