---
name: emitir-factura-arca-mail
description: "Usar cuando ARCA WS y Gmail ya están configurados y hay que emitir una factura puntual o una entrada del lote mensual."
---

# Emitir una factura por WSFE y preparar el email

## Entrada
Tomar un perfil de factura activo o los datos de una factura puntual: cliente, CUIT, condición IVA/id, email, tipo de comprobante, PdV, concepto, período, regla de importe y política de correo.

## Pasos
1. Resolver el importe según la regla del perfil. Guardar fuente, compra, venta, media y hora si usa cotización.
2. Obtener/reusar ticket WSAA para `wsfe`.
3. Consultar `FECompUltimoAutorizado` y usar el número siguiente.
4. Solicitar CAE con `FECAESolicitar`, incluyendo condición IVA del receptor y fechas/período correctos.
5. Si ARCA rechaza, no avanzar al PDF/email; informar el error real.
6. Generar un PDF válido del comprobante: debe abrir, tener al menos una página, tamaño mayor a 10 KB y contener número, importe y CAE. Nunca adjuntar un PDF sin validar.
7. Crear borrador en Gmail con destinatario, asunto, cuerpo y PDF. Solo enviar si el perfil dice `correo=envío` y el usuario ya autorizó ese comportamiento.
8. Verificar que el borrador/adjunto tenga tamaño real. Si el adjunto del conector llega vacío, usar Gmail web con sesión persistente; si Google no tiene espacio, avisar y dejar la factura emitida registrada sin fingir el correo.
9. Guardar el registro idempotente por perfil/período con número, CAE y estado del correo.

## Resultado
Informar número, CAE, monto y si el correo quedó en borrador, fue enviado o quedó bloqueado.
