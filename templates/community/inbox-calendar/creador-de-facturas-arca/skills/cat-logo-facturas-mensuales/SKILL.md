---
name: cat-logo-facturas-mensuales
description: "Usar cuando el usuario quiere agregar, editar, pausar o listar empresas/facturas del lote mensual de principio de mes."
---

# Catálogo de facturas mensuales

## Cuándo usar
Cuando el usuario quiera agregar, editar, pausar, reactivar o listar empresas/facturas del lote de principio de mes.

## Dónde vive
Archivo de configuración local del bot: catálogo JSON de facturas mensuales.

Cada ítem activo se procesa en la rutina del primer día hábil.

## Campos por factura
- `id` único (slug)
- `activa` true/false
- `cliente`: razonSocial, cuit, condicionIva, domicilio, email
- `concepto`
- `monto`: fijo en ARS o USD × media dólar blue (u otra fuente)
- `modoEmail` opcional: `borrador` (default) o `enviar` si ya autorizaron

## Pasos al agregar
1. Pedir datos mínimos: empresa, CUIT, email, concepto, monto/regla.
2. Confirmar resumen.
3. Append al catálogo con `activa: true`.
4. Confirmar que entra al lote del próximo primer día hábil (no hace falta otra rutina).

## Editar / pausar
- Pausar: `activa: false` (no borra).
- Reactivar: `activa: true`.
- Editar montos/concepto/email in-place.

## Listar
Mostrar solo activas por defecto; ofrecer ver pausadas.
