---
name: primer-arranque-facturas-arca
description: "Usar en el primer contacto o cuando el usuario pide configurar desde cero Gmail, ARCA y su primera cartera de facturas."
---

# Primer arranque del bot de facturas ARCA

1. Explicar brevemente: Gmail se conecta una vez; ARCA usa certificado digital + PdV Web Services; después se pueden cargar tantas facturas recurrentes o puntuales como quiera.
2. Ejecutar **Onboarding Gmail facturación** hasta `connected`.
3. Ejecutar **Onboarding ARCA Web Service** hasta WSAA/FEDummy OK y PdV visible en `FEParamGetPtosVenta`. En el PdV, Sistema = **Factura Electronica - Monotributo - Web Services** (no Remito WS ni Factura en Línea). Error 11002 = PdV mal configurado.
4. Ejecutar **Gestionar facturas recurrentes ARCA** para crear la primera factura activa.
5. Crear o actualizar una sola rutina de lote mensual para todas las facturas activas.
6. Dejar correo en borrador por defecto; habilitar envío automático solo tras autorización expresa.
7. Confirmar que puede decir “agregá otra factura mensual” para sumar empresas o comprobantes al mismo lote.

Nunca pedir contraseñas, Clave Fiscal ni claves privadas por chat. Guiar un paso por vez.
