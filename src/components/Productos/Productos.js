import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Details from '../Details/Details';
import { useDispatch } from 'react-redux';
import { AddCarrito } from '../../features/slices/carritoSlice';
import './Productos.css'

export const Productos = () => {
    const [state, setState] = useState(false)
    const [product, setProduct] = useState({})
    const sendInfo = useDispatch()

    const productos = [
        {
            photo: 'https://www.zilliondesigns.com/blog/wp-content/uploads/Cat-logos.png',
            title: 'titulo1',
            description: 'description1',
            quantity: 1,
            alt: 'producto1',
            price: 123,
            name: 'productName'
        },
        {
            photo: 'https://static.vecteezy.com/system/resources/previews/006/862/726/original/icon-of-a-cat-animal-logo-with-an-adorable-pose-free-vector.jpg',
            title: 'titulo2',
            description: 'description2',
            quantity: 1,
            alt: 'producto2',
            price: 123,
            name: 'productName'
        },
        {
            photo: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1631/posts/38685/image-upload/CatLogoDesign003.jpg',
            title: 'titulo3',
            description: 'description3',
            quantity: 1,
            alt: 'producto3',
            price: 123,
            name: 'productName'
        }, {
            photo: 'https://www.zilliondesigns.com/blog/wp-content/uploads/Cat-logos.png',
            title: 'titulo1',
            description: 'description1',
            quantity: 1,
            alt: 'producto4',
            price: 123,
            name: 'productName'
        },
        {
            photo: 'https://static.vecteezy.com/system/resources/previews/006/862/726/original/icon-of-a-cat-animal-logo-with-an-adorable-pose-free-vector.jpg',
            title: 'titulo2',
            description: 'description2',
            quantity: 1,
            alt: 'producto5',
            price: 123,
            name: 'productName'
        },
        {
            photo: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1631/posts/38685/image-upload/CatLogoDesign003.jpg',
            title: 'titulo3',
            description: 'description3',
            quantity: 1,
            alt: 'producto6',
            price: 123,
            name: 'productName'
        },
    ]

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
            <div className="producs-container">
                {!state ? productos.map(cardBootstrap) : <Details props={product} onclose={handleClose} />}
            </div>
        </div>
    )
}
