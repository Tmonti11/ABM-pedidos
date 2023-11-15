package com.utn.sprint3.services;

import com.utn.sprint3.Auth.AuthResponse;
import com.utn.sprint3.Auth.RegisterRequest;
import com.utn.sprint3.Enumeraciones.EstadoPedido;
import com.utn.sprint3.entidades.ArticuloInsumo;
import com.utn.sprint3.entidades.Factura;
import com.utn.sprint3.entidades.Pedido;
import com.utn.sprint3.entidades.Usuario;
import com.utn.sprint3.repositorios.ArticuloInsumoRepository;
import com.utn.sprint3.repositorios.BaseRepository;
import com.utn.sprint3.repositorios.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PedidoServiceImpl extends BaseServiceImpl<Pedido, Long> implements PedidoService  {

    @Autowired
    private PedidoRepository pedidoRepository;


    public PedidoServiceImpl(BaseRepository<Pedido, Long> baseRepository) {
        super(baseRepository);
    }

    @Override
    public List<Pedido> searchJPQLnombrado(Double minTotal, Double maxTotal) throws Exception {
        try {
            List<Pedido> pedidos = pedidoRepository.search(minTotal, maxTotal);
            return pedidos;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public Page<Pedido> searchJPQLnombrado(Double minTotal, Double maxTotal, Pageable pageable) throws Exception {
        try {
            Page<Pedido> pedidos = pedidoRepository.search(minTotal, maxTotal, pageable);
            return pedidos;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public Double calcularTotalPorPedido(Long filtro) throws Exception {
        try {
            Double total = pedidoRepository.calcularTotalPorPedido(filtro);
            return total;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public List<Pedido> buscarPedidos(Long filtro) throws Exception {
        try {
            List<Pedido> pedidos = pedidoRepository.buscarPedidos(filtro);
            return pedidos;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public List<Pedido> buscarPedidosaPreparar() throws Exception {
        try {
            EstadoPedido estadoPedido = EstadoPedido.PREPARACION;
            List<Pedido> pedidos = pedidoRepository.buscarPedidosaPreparar(estadoPedido);
            return pedidos;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }


}
