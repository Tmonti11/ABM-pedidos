package com.utn.sprint3.DTOS;

import com.utn.sprint3.Enumeraciones.EstadoPago;
import com.utn.sprint3.Enumeraciones.EstadoPedido;

public class UpdateEstadoDTO {
    public EstadoPedido estadoPedido;

    public EstadoPago estadoPago;

    public UpdateEstadoDTO(EstadoPedido estadoPedido) {
        this.estadoPedido = estadoPedido;
    }

    public UpdateEstadoDTO(EstadoPago estadoPago) {
        this.estadoPago = estadoPago;
    }

    public EstadoPedido getEstadoPedidoDTO() {
        return estadoPedido;
    }

    public void setEstadoPedido(EstadoPedido estadoPedido) {
        this.estadoPedido = estadoPedido;
    }

    public EstadoPago getEstadoPagoDTO() {
        return estadoPago;
    }

    public void setEstadoPago(EstadoPago estadoPago) {
        this.estadoPago = estadoPago;
    }
}
