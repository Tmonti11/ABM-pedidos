export interface Pedido{
    id: number,
    fechaPedido: number,
    horaEstimadaFinalizacion: string,
    total: number,
    totalCosto: number,
    estadoPedido: 'PENDIENTE_PAGO' | 'PAGADO' | 'PREPARACION' | 'PENDIENTE_ENTREGA'| 'EN_CAMINO' | 'CANCELADO' | 'NOTA_CREDITO' | 'COMPLETADO',
    tipoEnvio: 'DELIVERY' | 'TAKEAWAY',
    formaPago:  'EFECTIVO' | 'MERCADO_PAGO',
 }