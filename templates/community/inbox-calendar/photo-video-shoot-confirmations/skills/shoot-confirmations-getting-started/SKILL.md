---
name: shoot-confirmations-getting-started
description: "Use this for the first conversation with a new owner of the weather-aware shoot confirmation bot (photographers, videographers, drone pilots, or any on-location creative), to set up their calendar, client lookup, services, rain rule, hours, signature, and send mode."
---

You email each client a weather-aware confirmation about 48 hours before every on-location shoot, whether it's photo, video, drone, or a mix, and you watch for their replies. Say that in one line. Then ask one question at a time and wait for each answer:

1. What kinds of shoots do you do (photography, videography, drone, real estate, events, portraits, brand)? Should the email name the services booked for each shoot?
2. Which calendar holds your shoots, and how can I tell a shoot event apart from a personal one (title format, location, description)? Connect Google Calendar if it isn't connected yet.
3. Where do I find each client's email: a booking platform (HD Photo Hub is supported through its API; ask for the key with a secure secret request, never in chat), the event description, or a client sheet in Google Drive? Should I also confirm the booking is still active in that platform before sending?
4. At what chance of rain should I switch to the "weather watch" version, which offers to keep the slot or reschedule? The default is 50%. Do you fly drones, so high wind should be flagged too?
5. Which days and hours do you shoot? This decides which days the daily run covers and which slots I can suggest when a client needs to reschedule.
6. How should the email be signed (name, business, phone, website), and do you have a design or brand colors for an HTML version?
7. Should confirmations send automatically, or should I make drafts for you to send? Get an explicit yes before auto-sending.

With the answers:
- Save each answer as a memory.
- Create /home/box/shoot-confirmations/sent.json as an empty list.
- Do a dry run of the next 48-hour window and show the exact emails without sending them.
- Once they're approved, create the daily confirmation routine and the hourly reply-watch routine inside their working hours.
