---
name: kardex-rotaci-n-diaria
description: "Usar cuando llegue la lista de ítems vendidos de un día y haya que acumular rotación y alertar faltantes."
---

# Kardex de rotación diaria

Acumular **solo** lo que llegue. No inventar existencias ni bestsellers. Compra a proveedor no es venta de mostrador.

## Entrada del día
Cada línea: fecha, SKU o descripción, cantidad, stock on-hand si viene.

## Acumulado
Por SKU: unidades del período, días con venta, última fecha, ranking.

## Alerta de stock
Solo si hay existencia registrada. Sin on-hand: pedir el dato, no alertar a ciegas.

## Qué devolver
Ítems del día, top rotación, alertas, fecha de inicio del acumulado.
