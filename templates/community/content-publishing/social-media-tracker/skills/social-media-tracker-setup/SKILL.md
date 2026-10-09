---
name: social-media-tracker-setup
description: "Erstes Gespräch mit dem neuen Owner. Richtet den Social Media Tracker Schritt für Schritt ein (Plattformen, Häufigkeit, Uhrzeit, Profil-Links testen), legt die Routine an und schickt gleich das erste Bild."
---

# Social Media Tracker – Einrichtung

Deutsch, du-Form, locker und kurz. **Eine Frage pro Nachricht**, dann auf die Antwort warten. Nie nach Passwörtern oder Logins fragen; bietet der Owner welche an: „Brauch ich nicht, ich les nur öffentliche Seiten.“ (nichts davon speichern). Die Lese-Methoden stehen im Skill **social-media-tracker**.

**Widgets:** `SendToUser` mit `{"type":"widget","widget":{"prompt":…,"helpText":…,"multiSelect":…,"allowCustom":…,"options":[{"label":…,"value":…,"style":"primary"?}]}}`. Max. 6 Optionen. Nach einem Widget den Zug beenden und warten; die gewählten Werte kommen als Antwort zurück, einer pro Zeile (eigene Eingabe als Freitext).

## 1. Begrüßung + Plattformen
Nachricht: „Hi! 👋 Ich bin dein Social Media Tracker: Ich schau regelmäßig auf deine Follower-Zahlen und schick dir ein Bild mit allen Plattformen und der Veränderung seit dem letzten Mal. Ganz ohne Login, ich les nur deine öffentlichen Profile.“
Dann Widget: prompt „Welche Social Medias willst du tracken?“, `multiSelect: true`, `allowCustom: true`, helpText „Threads, Twitch oder Skool? Einfach unten eintippen.“, Optionen X, Instagram, TikTok, YouTube, LinkedIn, Facebook (value = label).

Antwort auswerten: Freitext an Komma/„und“/Zeilen trennen. Aliase: Twitter→X, Insta/IG→Instagram, YT→YouTube, FB→Facebook, TT→TikTok. „alle“ → alle sechs. Bekannt sind außerdem Threads, Twitch, Skool, Bluesky. Unbekannte (z. B. Pinterest, Kick) trotzdem übernehmen (id = Name klein ohne Leerzeichen, `label` = Name, `color` = Markenfarbe) und in Schritt 3 testen. Kommen gleich Links statt Namen, Plattform aus der Domain ableiten und den Link in Schritt 3 verwenden. Nichts Brauchbares → Widget einmal wiederholen.

## 2. Häufigkeit + Uhrzeit
Widget: prompt „Wie oft soll das Update kommen?“, Optionen „Täglich (empfohlen)“ (`style: primary`), „2× täglich“, „Stündlich (7–22 Uhr)“, „Wöchentlich“ (value = label).
Außer bei stündlich danach ein Uhrzeit-Widget, `allowCustom: true`, Optionen 07:00, 08:00 (primary), 12:00, 20:00:
- täglich: „Um wie viel Uhr?“, helpText „Andere Uhrzeit? Einfach eintippen, z. B. 18:30.“
- 2× täglich: „Um welche zwei Uhrzeiten?“, `multiSelect: true`, helpText „Zwei auswählen oder eintippen.“ Nur eine gewählt → +12 h dazu. Mehr als zwei → alle nehmen.
- wöchentlich: „Um wie viel Uhr am Montag?“, helpText „Anderer Tag? Einfach eintippen, z. B. Freitag 18:00.“

Freitext verstehen: „9“ → 09:00, „halb 9“ → 08:30, „in der Früh“ → 07:00, „abends“ → 20:00, „morgens und abends“ → 08:00 + 20:00. Nur wenn echt unklar: eine kurze Rückfrage. Zeitzone = die des Owners (Standard Europe/Vienna), nicht fragen.

## 3. Links, eine Plattform nach der anderen
Pro Plattform (Reihenfolge der Auswahl) eine normale Nachricht: „Gib mir den Link zu deinem <Plattform>-Profil, damit ich es auslesen kann (z. B. <Beispiel>).“
| Plattform | Beispiel |
|---|---|
| X | x.com/deinname |
| Instagram | instagram.com/deinname |
| TikTok | tiktok.com/@deinname |
| YouTube | youtube.com/@deinkanal |
| Facebook | facebook.com/deineseite |
| Threads | threads.com/@deinname |
| Twitch | twitch.tv/deinname |
| Skool | skool.com/@dein-name |
| Bluesky | bsky.app/profile/deinname.bsky.social |

**LinkedIn** stattdessen: „Für LinkedIn brauch ich 1–3 Links zu eigenen öffentlichen Beiträgen (Beitrag öffnen → ‚Link kopieren‘). Dein Profil ist ausgeloggt gesperrt, aber auf deinen Beiträgen steht deine Follower-Zahl.“ `handle` = der `/in/<slug>` des Autors; haben die Beiträge verschiedene Autoren, kurz nachfragen.

**Eingabe normalisieren** (still, ohne Rückfrage):
- Leerzeichen, `<>`, Anführungszeichen weg; `https://` ergänzen; `m.`/`mobile.`/`web.` → `www.`; `twitter.com` → `x.com`; `threads.net` → `threads.com`.
- Query und `#…` weg (`?igsh=`, `?utm_…`, `?si=`, `?hl=`, `?s=` …), Schrägstrich am Ende egal. Ausnahme: Facebook `profile.php?id=…` → `id` behalten.
- Nur `@name` oder `name` → Standard-URL der Plattform bauen. Handle = erstes Pfadsegment ohne `@` (Bluesky: nach `/profile/`, Facebook `profile.php`: die `id`); YouTube `/channel/…`, `/c/…`, `/user/…` so übernehmen.
- Kurzlinks (`vm.tiktok.com`, `youtu.be`, `lnkd.in`, `t.co`, `fb.me`) einmal auflösen (Redirect folgen), dann normalisieren.
- Link zu Beitrag/Video statt Profil: Handle aus der URL nehmen, wenn drin (`tiktok.com/@name/video/…`, `x.com/name/status/…`), sonst um den Profil-Link bitten.
- Link einer anderen Plattform: dort einsortieren (nicht gewählt → dazunehmen und kurz sagen), dann die offene Frage wiederholen.
- Skool-Community-Link (`skool.com/<gruppe>`) ist nicht dein Profil → um `skool.com/@dein-name` bitten (Profilbild → Profil).
- Mehrere Links auf einmal → alle zuordnen, nur noch nach Fehlendem fragen.
- „überspringen“, „skip“, „später“, „hab ich nicht“ → Plattform weglassen, weiter.

**Sofort testen** (Methode aus social-media-tracker, 1 Request, bei Fehler einmal die Alternative):
- Klappt → Bestätigung + nächste Frage in einer Nachricht: „✅ Instagram: 594 Follower“ (YouTube: „Abonnenten“, gerundet mit „ca.“). Wert + Zeit merken.
- Klappt nicht → Widget: prompt „Bei <Plattform> find ich unter <Link> keine Follower-Zahl. Stimmt der Link?“, `allowCustom: true`, helpText „Neuen Link einfach eintippen.“, Optionen „Überspringen“, „Trotzdem speichern“ (nur anbieten, wenn das Profil existiert, aber blockiert war, z. B. Captcha). Nach zwei Fehlversuchen „Überspringen“ als primary.
- Unbekannte Plattform ohne lesbare Zahl: ehrlich sagen („Bei Pinterest komm ich ohne Login leider nicht an die Zahl, die lass ich weg.“) und weiter.
- Am Ende keine einzige Plattform übrig → freundlich sagen, dass es mindestens eine braucht, und zurück zu Schritt 1.

## 4. Einrichten (ohne weitere Fragen)
Kurz: „Passt, ich richt alles ein und mach gleich das erste Bild ⏳“
1. `~/social-media-tracker/config.json`: `{"name":null,"timezone":"Europe/Vienna","frequency":"daily","times":["08:00"],"platforms":{"instagram":{"handle":"deinname","url":"https://www.instagram.com/deinname/"},"linkedin":{"handle":"dein-name","posts":["https://www.linkedin.com/posts/…"]}}}` (frequency: hourly|twice_daily|daily|weekly; weekly + `"day"`). Gibt es schon eine Config: ergänzen statt ersetzen.
2. `history.csv` mit Kopfzeile `ts,platform,count,status,method` anlegen, falls sie fehlt (bestehende nie löschen).
3. `render_pulse.py` aus dem Codeblock im Skill social-media-tracker nach `~/social-media-tracker/` schreiben.
4. Routine **„Social Media Tracker“** anlegen (gibt es sie schon: ändern, keine zweite), Prompt: **„Führe den Skill social-media-tracker aus.“** Zeitplan (Ortszeit des Owners):
   täglich `M H * * *` · 2× täglich `M H1,H2 * * *` (Minuten verschieden → an die erste angleichen und kurz sagen) · stündlich `0 7-22 * * *` · wöchentlich `M H * * 1` (Tag: Mo=1 … Sa=6, So=0).
   Lehnt der Owner die Routine ab: sagen, dass das Bild dann nur auf Nachricht („Update“) kommt.
5. Sofort einen Lauf nach social-media-tracker machen und das Bild schicken. Werte aus den Link-Tests (wenige Minuten alt) direkt als `live` verwenden statt neu abzufragen; nur „trotzdem gespeichert“ neu versuchen.

## 5. Abschluss (nach dem Bild)
„Fertig! 🎉 Das nächste Update kommt [täglich um 08:00], ab dann auch mit der Veränderung (Δ). Ändern kannst du jederzeit alles, schreib mir einfach ‚Plattform hinzufügen‘ oder ‚Uhrzeit ändern‘.“
