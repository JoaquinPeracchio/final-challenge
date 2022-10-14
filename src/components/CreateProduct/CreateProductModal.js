import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2'
import { useCreateProductMutation } from '../../features/actions/ApiMethod'
import './Create.css'

export default function CreateProductModal() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [createProduct] = useCreateProductMutation()

    const [photo, setPhoto] = useState()
    const [price, setPrice] = useState(1)
    const [name, setName] = useState()
    const [edit, setEdit] = useState()
    const [type, setType] = useState('Fruit')
    const [stock, setStock] = useState(1)
    const [quantity, setQuantity] = useState(1)
    const [variety, setVariety] = useState()

    const current = new Date()
    const dayMonth = `${current.getDate()}/${current.getMonth()}/${current.getFullYear()}`


    const handlePhoto = (e) => {
        setPhoto(e.target.value)
    }


    const handleName = (e) => {
        setName(e.target.value)

    }
    const handlePrice = (e) => {
        setPrice(e.target.value)

    }
    const handleStock = (e) => {
        setStock(e.target.value)

    }
    const handleQuantity = (e) => {
        setQuantity(e.target.value)

    }

    useEffect(() => {
        let objCreate = {
            name: name,
            user: '6345fbd9bb7e879c60015fe8',
            type: type,
            variety: variety,
            quantitymin: quantity,
            stock: stock,
            price: price,
            photo: photo,



        }

        setEdit(objCreate)

    }, [photo, price, type, name,])






    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(edit)
        //mandarlo al controlador create

        if (edit.name.length < 3) {
            Swal.fire({
                title: 'Name Failed',
                text: 'please verify that the name has more than 2 letters and does not include numbers'
            })
        } else {
            createProduct(edit)
                .unwrap()
                .then(() => { console.log('entro') })
                .then((error) => {
                    console.log(error)
                })
            Swal.fire({
                icon: 'success',
                title: 'Created Product with success',
                text: 'Great , you can see the product in the product section',
                confirmButtonText: 'Ok'
            })


        }

    }

    return (
        <>

            <button className='ProfileUserButton' onClick={handleShow}>New Product</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='createItiner'>

                        <h5 className="createH3">Create your New Product </h5>
                        <p >Name Of Publication </p>

                        <input type='text' onChange={handleName}></input>
                        <p >Variety </p>
                        <input type='text' onChange={e => setVariety(e.target.value)}></input>

                        <h6 className="createH4">User : Aguh   </h6>
                        <p >Image  </p>
                        <input type='text' onChange={handlePhoto}></input>
                        <p >Price </p>
                        <input type='number' onChange={handlePrice}></input>


                        <p >stock  </p>
                        <input type='number' onChange={handleStock} ></input>
                        <p >quantity min for kg  </p>
                        <input type='number' onChange={handleQuantity} ></input>
                        <p >Type</p>
                        <select onChange={(e) => setType(e.target.value)}>
                            <option value='Fruit'>Fruit</option>
                            <option value='Vegetable'>Vegetable</option>
                        </select>
                        <p>Date : {dayMonth}</p>

                        
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}