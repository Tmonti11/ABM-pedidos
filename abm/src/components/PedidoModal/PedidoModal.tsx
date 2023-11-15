import { Button, Form, FormLabel, Modal } from "react-bootstrap";
import { ModalType } from "../../types/ModalType";
import * as Yup from 'yup';
import {useFormik} from "formik";
import {toast} from 'react-toastify';
import { Pedido } from '../../types/Pedido';
import { PedidoService } from "../../services/PedidoService";

type PedidoModalProps = {
    show: boolean;
    onHide: () => void;
    title: string;
    modalType: ModalType;
    ped: Pedido;
    refreshData: React.Dispatch<React.SetStateAction<boolean>>;
}

const PedidoModal = ({show, onHide, title, modalType, ped, refreshData}: PedidoModalProps) => {

   const handleSaveUpdate = async (ped: Pedido) => {
    try{
        const isNew = ped.id === 0;
        if(isNew) {
            await PedidoService.createPedido(ped);
        } else {
            await PedidoService.updatePedido(ped.id, ped);
        }
        toast.success(isNew ? "Pedido Creado" : "Pedido Actualizado", {
            position: "top-center",

        });
        onHide();
        refreshData(prevState => !prevState);
    } catch (error) {
        console.error(error);
        toast.error("ocurrio un error");
    }
   };
   
   const handleDelete =async () => {

        try {
            await PedidoService.deletePedido(ped.id);
            toast.success("Eliminado con exito", {
                position: "top-center",
            });
            onHide();
            refreshData(prevState => !prevState);
        } catch (error) {
            console.error(error);
            toast.error("ocurrio un error");

        }
   }

   
    const validationSchema = () => {
        return Yup.object().shape({
            id: Yup.number().integer().min(0),
            fechaPedido: Yup.number().integer().required(`Fecha requerido`),
            horaEstimadaFinalizacion: Yup.string().required(`Hora estimada requerida`),
            total: Yup.number().integer().required(`Total requerido`),
            totalCosto: Yup.number().integer().required(`Costo total requerido`),
            estadoPedido: Yup.string().required(`Estado requerido`),
            tipoEnvio: Yup.string().required(`Tipo de envio requerido`),
            formaPago: Yup.string().required(`Forma de pago requerida`)  
        });
    };

    const formik = useFormik({
        initialValues: ped,
        validationSchema: validationSchema(),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (obj: Pedido) => handleSaveUpdate(obj),
    });

    return(
        <>
         {modalType === ModalType.DELETE? (
            <>
            <Modal show={show} onHide={onHide} centered backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>
                    {title}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>¿Estás seguro que deseas eliminar el pedido?
                    <br />
                    <strong>{ped.id}</strong>
                </p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Cancelar</Button>
                <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
            </Modal.Footer>
            </Modal>
            
            </>
         ) : (
            <>
            <Modal show={show} onHide={onHide} centered backdrop="static" className="modal-xl">
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>          
                
                <Form onSubmit={formik.handleSubmit}>

                <Form.Group controlId="formFecha">
                            <FormLabel>Fecha del pedido</FormLabel>
                            <Form.Control
                                name="fecha del pedido"
                                type="number"
                                value={formik.values.fechaPedido || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.fechaPedido && formik.touched.fechaPedido)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.fechaPedido}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formHoraEstimada">
                            <FormLabel>Hora estimada de Finalizacion</FormLabel>
                            <Form.Control
                                name="hora estimada"
                                type="text"
                                value={formik.values.horaEstimadaFinalizacion || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.horaEstimadaFinalizacion && formik.touched.horaEstimadaFinalizacion)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.horaEstimadaFinalizacion}
                            </Form.Control.Feedback>
                        </Form.Group>
                   

                        <Form.Group controlId="formEstadoPedido">
                            <FormLabel>Estado del pedido</FormLabel>
                            <Form.Control
                                name="estado del pedido"
                                type="text"
                                value={formik.values.estadoPedido || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.estadoPedido && formik.touched.estadoPedido)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.estadoPedido}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formTotal">
                            <FormLabel>Total</FormLabel>
                            <Form.Control
                                name="total"
                                type="number"
                                value={formik.values.total || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.total && formik.touched.total)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.total}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formTipoEnvio">
                            <FormLabel>Tipo de envio</FormLabel>
                            <Form.Control
                                name="tipo de envio"
                                type="text"
                                value={formik.values.tipoEnvio || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.tipoEnvio && formik.touched.tipoEnvio)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.tipoEnvio}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formFormaPago">
                            <FormLabel>Forma de pago</FormLabel>
                            <Form.Control
                                name="forma de pago"
                                type="text"
                                value={formik.values.formaPago || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.formaPago && formik.touched.formaPago)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.formaPago}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formCostoTotal">
                            <FormLabel>Costo total</FormLabel>
                            <Form.Control
                                name="costo total"
                                type="text"
                                value={formik.values.totalCosto || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.totalCosto && formik.touched.totalCosto)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.totalCosto}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Modal.Footer className="mt-4">
                            <Button variant="secondary" onClick={onHide}>Cancelar</Button>
                            <Button variant="primary" type="submit" disabled={!formik.isValid}>Guardar</Button>
                        </Modal.Footer>

                    </Form>
                </Modal.Body>
            </Modal>
            </>
         )}
        </>
    )

}

export default PedidoModal;