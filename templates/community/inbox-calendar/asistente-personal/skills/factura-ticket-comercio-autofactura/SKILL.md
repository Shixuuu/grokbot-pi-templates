---
name: factura-ticket-comercio-autofactura
description: "Usar al facturar un ticket de compra en comercio (tienda física): buscar primero autofactura en ticket/QR/sitio del emisor antes de WhatsApp o correo."
---

# Factura ticket de comercio (autofactura primero)

## Orden obligatorio
1. **Leer el ticket completo** (foto/PDF): folio, fecha, total, sucursal, RFC emisor, y sobre todo **URL o QR** de facturación / autofactura / Mi Factura.
2. **Decodificar todo QR** del ticket (zbar u OCR). Seguir solo ligas de facturación; ignorar devoluciones, marketing, puntos.
3. **Buscar portal self-service** del emisor: `facturacion.*`, `factura.*`, `mifactura`, CONTPAQi, Factura Digital, o página «Facturación» del sitio. Probar candidatos razonables del dominio del comercio.
4. **Si hay portal**: capturar datos del ticket + fiscales del receptor (CSF vigente: RFC, razón social, CP, régimen, Uso CFDI, correo destino). Generar CFDI, descargar PDF+XML, confirmar correo.
5. **Solo si no hay autofactura**: usar el canal que indique el sitio (WhatsApp, formulario, email) con ticket + CSF + datos fiscales.

## No hacer
- No empezar por WhatsApp/email si el ticket o el sitio ofrecen autofactura.
- No inventar portales de terceros genéricos (guías no oficiales).
- No emitir ni modificar nada en el sistema contable salvo pedido explícito.

## Entregar
URL usada, folio facturado, correo de envío, y si PDF/XML ya llegaron o hay que esperar.
