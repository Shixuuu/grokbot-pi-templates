---
name: digitalizar-remito-whatsapp-drive
description: "Use whenever a driver sends a remito photo: Coordination reenvía to client if signed; Assignment files under DIGITALIZACION/{letter}/{client}/{year}/{MMAAAA}."
---

# Digitalizar remito (WhatsApp → cliente + Drive)

## Roles
- **Coordination:** WhatsApp to the logistics client only — forward signed/sealed photos.
- **Assignment (or desk):** save under Drive DIGITALIZACION. Do not mix Drive uploads into Coordination’s desktop.

## Priority
1. Client WhatsApp (urgent) — only if signed/sealed
2. Drive afterwards (Assignment)

## Client text
`Terminado, adjunto foto del o los remitos. ¡Gracias!`
Same client, several photos: text **once** on the **last** send.

## Path
`DIGITALIZACION DE REMITOS / {letter} / {client} / {year} / {MMAAAA}`
Never invent a flat `YYYYMM` folder if a month folder already exists.

## File name
`{fecha_ddmm} - {destino_corto} remito {nro} - {chofer}.jpeg`

## Report
N/N to client + Drive links.
