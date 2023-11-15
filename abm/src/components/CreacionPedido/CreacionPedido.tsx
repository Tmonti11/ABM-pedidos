import React, { useState } from "react"
import { Pedido } from "../../types/Pedido";
import { Form, Button, Container } from 'react-bootstrap';


const CreacionPedido: React.FC = () => {
    const [pedido, setPedido] = useState<Pedido>({
        id:0,
        fechaPedido:0,
        horaEstimadaFinalizacion:'',
        total:0,
        totalCosto:0,
        estadoPedido:'PENDIENTE_PAGO',
        tipoEnvio: 'TAKEAWAY',
        formaPago: 'EFECTIVO'
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setPedido((prevPedido) => ({ ...prevPedido, [name]: value }));
      };
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Pedido registrado:', pedido);
    };

  return (
    <Container>
      <h1>Crear Pedido</h1>
      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="fecha del pedido">
          <Form.Label>Fecha Pedido</Form.Label>
          <Form.Control type="text" name="fecha del pedido" value={pedido.fechaPedido}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="total">
          <Form.Label>Total</Form.Label>
          <Form.Control type="text" name="total" value={pedido.total}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="hora estimada">
          <Form.Label>Hora de finalizacion</Form.Label>
          <Form.Control type="text" name="hora estimada" value={pedido.horaEstimadaFinalizacion}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="costo total">
          <Form.Label>Total costo</Form.Label>
          <Form.Control type="text" name="costo total" value={pedido.totalCosto}/>
        </Form.Group>


        <Form.Group className="mb-3" controlId="estado del pedido">
          <Form.Label>Estado del pedido</Form.Label>
          <Form.Select name="estado del pedido" value={pedido.estadoPedido} onChange={handleChange}>
            <option value="PENDIENTE_PAGO">Pendiente de pago</option>
            <option value="PAGADO">Pagado</option>
            <option value="PREPARACION">En preparacion</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="forma de pago">
          <Form.Label>Forma de pago</Form.Label>
          <Form.Select name="forma de pago" value={pedido.formaPago} onChange={handleChange}>
            <option value="EFECTIVO">Efectivo</option>
            <option value="MERCADO_PAGO">Mercado pago</option>

          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="tipo de envio">
          <Form.Label>Tipo de envio</Form.Label>
          <Form.Select name="tipo de envio" value={pedido.tipoEnvio} onChange={handleChange}>
            <option value="DELIVERY">Delivery</option>
            <option value="TAKEAWAY">Takeaway</option>


          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Confirmar
        </Button>
        <Button variant="secondary" type="button">
          Volver
        </Button>
      </Form>
    </Container>
  );
}

export default CreacionPedido