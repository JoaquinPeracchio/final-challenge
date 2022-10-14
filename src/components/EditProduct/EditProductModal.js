import React, { useEffect, useState } from 'react'
import { useUpdateProductMutation } from '../../features/actions/ApiMethod'
import Swal from 'sweetalert2'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export default function EditProductModal(props) {
    const elemento = props.data
    const id = elemento._id

    const [show, setShow] = useState(false);
    const [editProduct] = useUpdateProductMutation(id)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <button className='ProfileUserButton' onClick={handleShow}>Edit Product</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>edit your Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='ModalForm'>
                        <input className='ModalFormInput' name="name" type='text' placeholder={elemento.name} />
                        <input className='ModalFormInput' name="variety" type='text' placeholder={elemento.variety} />
                        <input className='ModalFormInput' name="price" type='number' placeholder={elemento.price} />
                        <input className='ModalFormInput' name="stock" type='number' placeholder={elemento.stock} />
                        <button className='ModalFormButton' onClick={handleClose}>Save Changes</button>
                    </form>
                </Modal.Body>

            </Modal>
        </>
    );
}