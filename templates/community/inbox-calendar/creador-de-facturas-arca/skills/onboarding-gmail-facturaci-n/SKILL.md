---
name: onboarding-gmail-facturaci-n
description: "Usar cuando un usuario nuevo necesita conectar Gmail una sola vez para enviar o guardar borradores de facturas con PDF."
---

# Onboarding Gmail (una sola vez)

## Objetivo
Dejar Gmail conectado con OAuth para crear borradores/enviar facturas sin pedir login de nuevo en el navegador.

## Pasos
1. Comprobar con el estado de conectores si Gmail ya está conectado.
2. Si no está instalado: buscar el plugin Gmail del marketplace, pedir confirmación con widget, instalarlo y dejar que aparezca la tarjeta de conexión.
3. Si está instalado pero necesita auth: disparar autenticación del conector Gmail (no pedir contraseña en el chat).
4. Confirmar que el conector quedó `connected` y guardar en memoria de perfil que Gmail está listo para facturación.
5. Avisar al usuario: “Gmail quedó conectado; no hace falta volver a loguearte salvo que revoques el acceso.”

## Adjuntos PDF
- Preferir adjuntar el PDF real del comprobante.
- Si el adjunto por API llega vacío o con 0 KB, usar el navegador de Gmail con sesión persistente como respaldo, o pedir liberar almacenamiento de Google si la cuenta está llena.
- Hasta que el usuario autorice envío automático, crear **borrador** (no enviar).

## No hacer
- No pedir ni aceptar contraseñas/OTP pegados en el chat.
- No re-prompt de Gmail si ya está `connected`.
