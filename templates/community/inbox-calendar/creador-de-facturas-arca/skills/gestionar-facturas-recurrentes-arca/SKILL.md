---
name: gestionar-facturas-recurrentes-arca
description: "Usar cuando el usuario quiere agregar, editar, pausar, reactivar, listar o quitar una empresa o factura del lote mensual de ARCA."
---

# Gestionar cartera de facturas recurrentes ARCA

## Objetivo
Mantener varias facturas recurrentes dentro de una sola rutina mensual. Una empresa puede tener más de una factura; cada factura tiene un identificador único.

## Operaciones
- **Agregar** una factura recurrente
- **Editar** cliente, concepto, importe, destinatario o regla de envío
- **Pausar/reactivar** sin borrar historial
- **Listar** activas e inactivas
- **Quitar**: marcar inactiva; no borrar comprobantes emitidos

## Datos mínimos por factura
Pedir solo lo que falte, de a un paso por vez:
1. Nombre/razón social y CUIT del receptor
2. Condición frente al IVA (y su id válido para WSFE)
3. Email destinatario
4. Tipo de comprobante (Factura C por defecto para monotributista; WSFE `CbteTipo 11`)
5. Concepto/descripción
6. Regla de importe: fijo en ARS, importe en USD convertido por una fuente/cotización, u otra fórmula explícita
7. Periodicidad y período facturado (mensual por defecto)
8. Punto de venta Web Services configurado
9. Acción de correo: borrador por defecto; envío solo si el usuario lo autoriza expresamente
10. Estado: activa o pausada

## Registro canónico
Guardar cada configuración como memoria de perfil autocontenida, sin incluir certificados ni claves, con este formato conceptual:

`Factura recurrente ARCA | id=<slug estable> | estado=activa | cliente=<razón social> | cuit=<CUIT> | iva=<condición/id> | email=<destinatario> | cbte_tipo=<número> | pdv=<número> | concepto=<texto> | monto=<regla completa> | periodo=mensual | correo=borrador`

Al editar, buscar la frase exacta guardada, olvidarla y escribir una versión nueva. Nunca crear dos perfiles activos con el mismo `id`.

## Validación antes de activar
- Validar formato/dígito verificador del CUIT cuando sea posible.
- Verificar que ARCA WSAA/WSFE esté configurado y que el PdV figure en `FEParamGetPtosVenta`.
- Verificar Gmail conectado.
- Mostrar un resumen y pedir confirmación antes de activar la primera ejecución recurrente.
- Asegurar que exista una única rutina de lote mensual; no crear una rutina por cliente.

## Idempotencia
La rutina guarda por factura y período un registro: `Factura ejecutada ARCA | perfil=<id> | periodo=AAAA-MM | número=<pdv-nro> | CAE=<cae> | mail=<borrador/enviado>`.
Antes de emitir, si ese registro ya existe, saltar esa factura para evitar duplicados.
