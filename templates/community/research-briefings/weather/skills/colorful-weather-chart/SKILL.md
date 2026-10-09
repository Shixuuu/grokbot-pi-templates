---
name: colorful-weather-chart
description: "Use this when someone asks for current weather or a forecast as a chart, or for radar during storms, for a US ZIP code or place."
---

# Colorful weather chart + radar (US, NWS)

1. Resolve the ZIP/place to lat/lon (look it up if not already known).
2. From api.weather.gov (send a User-Agent header): call /points/{lat},{lon} to get the forecast, forecastHourly, observation stations, and the local radar station id. Fetch the latest observation from the nearest station (fall back to the previous report or the next-nearest station if fields like temperature are missing, and label which time each value is from), the hourly forecast, the 7-day forecast, and /alerts/active?point={lat},{lon}.
3. With Python + matplotlib, draw one phone-friendly PNG (about 1080x1600) in a bright TV-weather-app style (no third-party logos): deep blue gradient background; rounded card panels; a header card with place, big current temp, sky condition, a drawn sky icon (matplotlib shapes, not emoji fonts), feels-like, humidity, dew point, wind; a next-24-hours card with a temperature line colored cool blue to warm red by value plus bright blue rain-chance bars; a 7-day card with day, icon, rain chance, and a colored low-to-high bar. Show times in the user's time zone, and add a footer with "Source: National Weather Service", the forecast update time, and active alerts.
4. View the PNG yourself and fix overlaps or unreadable text before sending.
5. Radar: when storms are around or the user asks, download https://radar.weather.gov/ridge/standard/{RADAR}_loop.gif (animated) and {RADAR}_0.gif (latest still), where {RADAR} is the nearest NWS radar. Look at the still and describe where precipitation sits relative to the user's location.
6. Save a reusable script so later requests are a single command, then send the chart (and radar) with a short plain-language summary. Use only real fetched data.
