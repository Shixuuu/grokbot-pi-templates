---
name: onboarding-arca-web-service
description: "Usar cuando hay que configurar certificado digital, WSAA/WSFE y punto de venta Web Services de ARCA para facturar sin portal."
---

# Onboarding ARCA Web Service

## Objetivo
Dejar ARCA listo para emitir Factura C (u otros tipos) por Web Service, sin Clave Fiscal cada mes.

## Datos a pedir (uno a la vez si hace falta)
- CUIT emisor
- Razón social / nombre
- Si ya tiene certificado (.crt + clave) o hay que generar CSR
- Número de PdV Web Services (si ya existe)

## Flujo de alta (guiar al usuario en su navegador; vos generás archivos)
1. **Generar CSR**: crear `privada.key` + `pedido.csr` con OpenSSL (CN = alias del bot, serialNumber = `CUIT <cuit>`). Guardar clave privada solo en el entorno del bot (permisos 600). Entregar al usuario solo el `.csr`.
2. **Administrador de Certificados Digitales** (ARCA, Clave Fiscal): subir CSR, descargar `.crt`. El usuario pega/adjunto el `.crt` (nunca la clave privada).
3. Validar que el `.crt` matchea la `privada.key` (`openssl` modulus).
4. **Administrador de Relaciones**: asociar el computador/certificado al web service **wsfe** (Facturación Electrónica).
5. **Punto de venta (crítico)**: en ABM Puntos de Venta, campo **Sistema**, elegir exactamente **Factura Electronica - Monotributo - Web Services**.
   - NO elegir: Remito Electrónico Web Services, Comprobantes de Exportación - Web Services, Factura en Línea - Monotributo, Controlador Fiscal.
   - Si el PdV viejo era «Comprobantes en línea», crear uno nuevo en esa modalidad WS o cambiarlo si ARCA lo permite.
   - Anotar el número.
6. **Prueba técnica**:
   - WSAA `loginCms` servicio `wsfe` → token/sign
   - WSFE `FEDummy` OK
   - `FEParamGetPtosVenta` debe listar el PdV (suele aparecer como «CAE - Monotributo»); si error **11002** o sin resultados, el PdV no está en modalidad WS — pedir corrección antes de emitir
7. Guardar en memoria de perfil: ruta del cert, CUIT, PdV, alias, vigencia del certificado.

## Emisión posterior
- Usar WSFE (CbteTipo 11 = Factura C para monotributo).
- Incluir condición IVA del receptor.
- Tras CAE: generar PDF y pasar al flujo de Gmail (borrador o envío según preferencia).

## SSL
Si `servicios1.afip.gov.ar` falla con `DH_KEY_TOO_SMALL`, usar cliente HTTPS con ciphers `DEFAULT:@SECLEVEL=1`.

## No hacer
- No mezclar PdV de Comprobantes en línea con WS.
- No elegir Remito WS ni Exportación WS para Factura C.
- No pegar claves privadas en el chat.
- No inventar CAE ni números de comprobante.
