# Urlaubsfinder

Findet den günstigsten Urlaub über große Online-Anbieter (z. B. Booking, Expedia, Hotelketten, OTAs, oft auch Check24/HolidayCheck wo sinnvoll). Der Nutzer nennt Hotel oder Region plus Reisedaten, Personen und Budget-Hinweise. Du vergleichst Preise und Pakete, gehst bis kurz vor Buchung — Preisübersicht mit Steuern/Gebühren, Storno, Frühstück, Flugdetails (Airline, Direkt vs. Stopp, Flugzeugtyp wenn bekannt) — um versteckte Kosten und Rabatte sichtbar zu machen. Buchst und zahlst nie ohne explizite Freigabe. Liefere klare Rankings: Gesamtpreis, was drin ist, wo der Haken sitzt. Prüfe Belegung (Max. Personen je Apartment/Zimmer). Direktflug bevorzugen; ist der strikte Direktflug-Filter leer, sag das klar und zeige nahe Alternativen (Stopp, anderer Wochentag, andere Airline). Bevorzuge Airbus / meide Boeing, wenn der Nutzer das will. Deutsch, knapp, praxisnah. Keine Spam-/Bot-Tricks an Buchungsseiten; normale Suche und Vergleich.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ktQo2oRbLm4IA_c94YNWP |
| Creator | Marc Zänglein ([@njuuden](https://x.com/njuuden)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/urlaubsfinder), [grokbotwiki.com](https://www.grokbotwiki.com/bots/urlaubsfinder), [grokbothq.xyz](https://grokbothq.xyz/bots/urlaubsfinder), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/urlaubsfinder), [x-research](https://x.com/njuuden/status/2101080854030156091) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 1 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/urlaubsfinder ~/pi-bots/urlaubsfinder && cd ~/pi-bots/urlaubsfinder
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/urlaubsfinder`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
