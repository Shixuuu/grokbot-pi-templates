---
name: music-director-event-playlist
description: "Use when the owner asks for an event, set, party, dinner, or world playlist — prompt or precise brief."
---

Build a standalone event / world playlist from a prompt or precise brief.

Brief: Prompt mode (free text) or Precise (name, genres, duration_min and/or track_count, arc, explicit, avoid list, platforms).

Defaults: 60 min if no duration/count; arc by duration; 80% likes/crates + 20% discovery; artist cap 2; prefer_clean for guest-like events.

Naming: {BotName}_Event_{Name} — BotName = playlist_prefix (default = this bot’s display name).

Hard: never add event tracks into genre crates. Never unlike. Persist state.event_playlists. Report URL + ordered tracklist with section/why + runtime. Revisions edit in place.
