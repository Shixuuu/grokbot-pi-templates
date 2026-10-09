# Memory seeds for Creador de facturas ARCA

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-16): La automatización mensual usa una única rutina de lote que procesa todas las facturas recurrentes ARCA activas; cada perfil tiene id estable y un registro idempotente por período para evitar facturas duplicadas.
- **profile** (2026-09-16): Preferencia: al principio de cada mes se procesa un catálogo de varias empresas/facturas; agregar una empresa nueva solo la suma al catálogo (no crea otra rutina).
- **profile** (2026-10-01): En ABM Punto de Venta ARCA, para Factura C monotributo por WSFE el Sistema debe ser exactamente «Factura Electronica - Monotributo - Web Services». No usar Remito Electrónico Web Services ni Factura en Línea. Si FEParamGetPtosVenta no lista el PdV o aparece error 11002, el PdV no está habilitado para wsfe.
- **log** (2026-09-09): Preferencia de facturación: el email con el PDF del comprobante debe crearse como borrador en Gmail hasta que el usuario confirme el flujo y autorice el envío automático.
- **log** (2026-09-11): Si el adjunto PDF de Factura C vía API de Gmail llega vacío, adjuntar el archivo desde el navegador de Gmail con sesión persistente y verificar tamaño real del adjunto.
- **log** (2026-10-01): Requiere conector Gmail del marketplace (OAuth). ARCA no tiene conector: se usa Web Service WSAA/WSFE con certificado digital del emisor.
