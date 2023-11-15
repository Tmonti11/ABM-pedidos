package com.utn.sprint3.controllers;

import com.utn.sprint3.DTOS.UpdateEstadoDTO;
import com.utn.sprint3.Enumeraciones.EstadoPedido;
import com.utn.sprint3.entidades.ArticuloInsumo;
import com.utn.sprint3.entidades.Pedido;
import com.utn.sprint3.services.ArticuloInsumoServiceImpl;
import com.utn.sprint3.services.PedidoServiceImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/v1/pedidos")
public class PedidoController extends BaseControllerImpl<Pedido, PedidoServiceImpl>{

    @GetMapping("/searchJPQLnombrado")
    public ResponseEntity<?> searchNativo(@RequestParam Double minTotal, @RequestParam Double maxTotal){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(servicio.searchJPQLnombrado(minTotal, maxTotal));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"Error\":\"Error, por favor intente mas tarde\"}");
        }
    }

    @GetMapping("/searchJPQLnombradoPaged")
    public ResponseEntity<?> searchNativo(@RequestParam Double minTotal, @RequestParam Double maxTotal, Pageable pageable){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(servicio.searchJPQLnombrado(minTotal, maxTotal));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"Error\":\"Error, por favor intente mas tarde\"}");
        }
    }

    @GetMapping("/calcularTotalPedido")
    public ResponseEntity<?> calcularTotalPedido(@RequestParam Long filtro){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(servicio.calcularTotalPorPedido(filtro));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"Error\":\"Error, por favor intente mas tarde\"}");
        }
    }

    @GetMapping("/buscarPorIdCliente")
    public ResponseEntity<?> buscarPorIdCliente(@RequestParam Long filtro){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(servicio.buscarPedidos(filtro));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"Error\":\"Error, por favor intente mas tarde\"}");
        }
    }
    @GetMapping("/searchbyEstado")
    public ResponseEntity<?> searchbyEstado (@RequestParam EstadoPedido estado){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(servicio.buscarPorEstado(estado));
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"Error\":\"Error, por favor intente mas tarde\"}");
        }
    }
    @PostMapping("/updateEstadoPedido")
    public ResponseEntity<?> updateEstadoPedido (@RequestBody UpdateEstadoDTO updateEstadoDTO){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(servicio.updateEstadoPedido(updateEstadoDTO));
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(("{\"error\":\""+e.getMessage()+"\"}"));
        }
    }
    @PostMapping("/updateEstadoPago")
    public ResponseEntity<?> updateEstadoPago (@RequestBody UpdateEstadoDTO updateEstadoDTO){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(servicio.updateEstadoPago(updateEstadoDTO));
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(("{\"error\":\""+e.getMessage()+"\"}"));
        }
    }
}
