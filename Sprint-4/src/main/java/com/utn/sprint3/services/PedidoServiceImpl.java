package com.utn.sprint3.services;

import com.utn.sprint3.DTOS.UpdateEstadoDTO;
import com.utn.sprint3.Enumeraciones.EstadoPedido;
import com.utn.sprint3.entidades.Pedido;
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
    public List<Pedido> buscarPorEstado(EstadoPedido estado) throws Exception{
        try {
            List<Pedido> pedidos = pedidoRepository.search(estado);
            return  pedidos;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }
    @Override
    public Pedido updateEstadoPedido(UpdateEstadoDTO updateEstadoDTO) throws Exception {
        try{
            List<Pedido> pedido = pedidoRepository.updateEstadoPedido(updateEstadoDTO.getEstadoPedidoDTO());
            Pedido entityUpdate = new Pedido();
            entityUpdate.setEstadoPedido(updateEstadoDTO.getEstadoPedidoDTO());
            pedidoRepository.save(entityUpdate);
            return entityUpdate;
        }
        catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }
    @Override
    public Pedido updateEstadoPago(UpdateEstadoDTO updateEstadoDTO) throws Exception {
        try{
            List<Pedido> pedido = pedidoRepository.updateEstadoPago(updateEstadoDTO.getEstadoPagoDTO());
            Pedido entityUpdate = new Pedido();
            entityUpdate.setEstadoPago(updateEstadoDTO.getEstadoPagoDTO());
            pedidoRepository.save(entityUpdate);
            return entityUpdate;
        }
        catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }
}
