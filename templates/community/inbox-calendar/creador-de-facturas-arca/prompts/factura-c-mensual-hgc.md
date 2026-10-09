---
description: "Grok Bot routine: Lote facturas mensuales — Primer día hábil del mes: emite todas las Facturas C activas por ARCA WS y deja borrador Gmail con PDF."
argument-hint: "[extra context]"
---

En el primer día hábil del mes (días 1–3, lunes a viernes, hora Argentina), procesá el lote completo de facturas recurrentes ARCA activas.

Para cada factura activa en el catálogo o en memorias `Factura recurrente ARCA`:
1. Si ya existe registro idempotente del período AAAA-MM con CAE, saltarla.
2. Resolver el importe (fijo ARS o USD × media dólar blue de dolarhoy.com u otra regla del perfil).
3. Emitir por WSFE (WSAA + FECAESolicitar) con el PdV Web Services del perfil. Si error 11002 o PdV ausente en FEParamGetPtosVenta, no inventar CAE: registrar el error y avisar que el Sistema del PdV debe ser «Factura Electronica - Monotributo - Web Services».
4. Generar PDF válido (>10 KB) con número, importe y CAE.
5. Crear borrador Gmail (no enviar salvo que el perfil diga correo=envío y el usuario lo haya autorizado) con el PDF adjunto; si el adjunto API llega vacío, usar Gmail web.
6. Guardar registro idempotente por perfil/período.

Al terminar, informar al usuario: ok/fail por factura, números, CAE, montos y estado del correo. Si no hay facturas activas o todas ya estaban emitidas, quedate en silencio.

Fires on:
- cron `CRON_TZ=America/Argentina/Buenos_Aires 52 8 1-3 * 1-5`

Ask the importing user for:
- Timezone

${@:-}
