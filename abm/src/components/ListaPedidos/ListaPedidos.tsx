import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { ModalType } from '../../types/ModalType';
import Loader from "../Loader/Loader";
import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import { Pedido } from '../../types/Pedido';
import { PedidoService } from '../../services/PedidoService'
import PedidoModal from '../PedidoModal/PedidoModal';

const ListaPedidos = () => {
    const initializableNewPedido = (): Pedido => {
        return {
            id: 0,
            fechaPedido: 0,
            horaEstimadaFinalizacion: '',
            total: 0,
            totalCosto: 0,
            estadoPedido: 'PENDIENTE_PAGO',
            tipoEnvio: 'TAKEAWAY',
            formaPago:  'EFECTIVO',
        };
    };
    const [pedido, setPedido] = useState<Pedido>(initializableNewPedido);

    const [showModal, setShowModal] = useState(false);
    
    const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
    
    const [title, setTitle] = useState("");
    
    const handleClick = (newTitle: string, ped: Pedido, modal: ModalType) => {
        setTitle(newTitle);
        setModalType(modal);
        setPedido(ped);
        setShowModal(true);
    };
  
    
  
    const [pedidos, setPedidos] = useState<Pedido[]>([]);
  
    const [istloading, setLoading] = useState(true);
  
    const [refreshData, setRefreshData] = useState(false);
  
    useEffect(() => {
        const fetchProducts = async () =>{
            const pedidos = await PedidoService.getPedidos();
            setPedidos(pedidos);
            setLoading(false);
        };
  
        fetchProducts();
    }, [refreshData]);
  
    console.log(JSON.stringify(pedidos, null, 2));
    
    return(
      <>
        <Button onClick={() => handleClick("Nuevo pedido", initializableNewPedido(),
        ModalType.CREATE)}>Nuevo Pedido</Button>
  
        {istloading? <Loader/>: (
            <Table hover>
                <thead>
                    <tr>
                        <th> Id </th>
                        <th> Total </th>
                        <th> Fecha del pedido </th>
                        <th> Hora de finalizacion </th>
                        <th> Estado  </th>
                        <th> Forma de pago </th>
                        <th> Tipo de envio </th>
                        <th> Costo </th>
                    </tr>
                </thead>
                <tbody>
                    {pedidos.map( pedido => (
                        <tr key={pedido.id}>
                            <td>{pedido.id}</td>
                            <td>{pedido.total}</td>
                            <td>{pedido.fechaPedido}</td>
                            <td>{pedido.horaEstimadaFinalizacion}</td>
                            <td>{pedido.estadoPedido}</td>
                            <td>{pedido.formaPago}</td>
                            <td>{pedido.tipoEnvio}</td>
                            <td>{pedido.totalCosto}</td>
                            <td><EditButton onClick={() => handleClick("Editar Pedido", pedido, ModalType.UPDATE)}/></td>
                            <td><DeleteButton onClick={() => handleClick("Borrar Pedido", pedido, ModalType.DELETE)}/></td>
                        </tr>
                    ))}
                </tbody>
                
            </Table>
        )}
  
          {showModal && (
                  <PedidoModal
                  show={showModal}
                  onHide={() => setShowModal(false)}
                  title={title}
                  modalType={modalType}
                  ped={pedido}
                  refreshData={setRefreshData}
                  />
              )}  
  
      </>
  )
}

export default ListaPedidos