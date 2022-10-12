import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Details from '../Details/Details';
import { useDispatch } from 'react-redux';
import { AddCarrito } from '../../features/slices/carritoSlice';
import { useGetAllProductsQuery } from '../../features/actions/ApiMethod';
import './Productos.css'


export const Productos = () => {
    const [state, setState] = useState(false)
    const [product, setProduct] = useState({})
    const sendInfo = useDispatch()



    const {
        data: elem,
        refetch: comeback

    } = useGetAllProductsQuery()
    console.log(elem)
    const handleClose = () => {
        setState(false)
    }

    const showDetails = (e) => {
        setProduct(e)
        setState(true)
    }

    const setCarrito = (e) => {
        sendInfo(AddCarrito(e))

    }

    const cardBootstrap = (items) =>
        <div key={items.alt} className="card-product" style={{ width: '18rem' }}>
            <button className='btn-details' style={{ border: 'none', cursor: 'pointer' }} onClick={() => showDetails({ image: items.photo, title: items.title, description: items.description })}>
                <Card.Img className="imgCarousel" src={items.photo} />
            </button>
            <div className='body-card-container'>
                <div className='name-product'>{items.name}</div>
                <div className='card-body'> ${items.price}.00</div>
                <button className='add-carrito-btn' onClick={() => setCarrito({ image: items.photo, title: items.title, description: items.description, quantity: items.quantity })} style={{ border: 'none', cursor: 'pointer' }}>Add to cart</button>
            </div>
        </div>

    return (
        <div>
            <input className="product-filter" type="text" placeholder="Search product"></input>
            <div className='producs-container'>
                {!state && elem ? elem.map(cardBootstrap) : ''}
                {state ? <Details props={product} onclose={handleClose} /> : ''}
            </div>
        </div>
    )
}
