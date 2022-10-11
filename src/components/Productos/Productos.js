import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Details from '../Details/Details';
import { useDispatch } from 'react-redux';
import { AddCarrito } from '../../features/slices/carritoSlice';
import './Productos.css'

export const Productos = () => {
    const [state,setState]=useState(false)
    const [product , setProduct]=useState({})
    const sendInfo = useDispatch()

    const productos = [
        {
            img: 'https://www.zilliondesigns.com/blog/wp-content/uploads/Cat-logos.png',
            title: 'titulo1',
            description: 'description1',
            quantity:1,
            alt: 'producto1'
        },
        {
            img: 'https://static.vecteezy.com/system/resources/previews/006/862/726/original/icon-of-a-cat-animal-logo-with-an-adorable-pose-free-vector.jpg',
            title: 'titulo2',
            description: 'description2',
            quantity:1,
            alt: 'producto2'
        },
        {
            img: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1631/posts/38685/image-upload/CatLogoDesign003.jpg',
            title: 'titulo3',
            description: 'description3',
            quantity:1,
            alt: 'producto3'
        }, {
            img: 'https://www.zilliondesigns.com/blog/wp-content/uploads/Cat-logos.png',
            title: 'titulo1',
            description: 'description1',
            quantity:1,
            alt: 'producto4'
        },
        {
            img: 'https://static.vecteezy.com/system/resources/previews/006/862/726/original/icon-of-a-cat-animal-logo-with-an-adorable-pose-free-vector.jpg',
            title: 'titulo2',
            description: 'description2',
            quantity:1,
            alt: 'producto5'
        },
        {
            img: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1631/posts/38685/image-upload/CatLogoDesign003.jpg',
            title: 'titulo3',
            description: 'description3',
            quantity:1,
            alt: 'producto6'
        },
    ]

    const handleClose =()=>{
        setState(false)
    }

    const showDetails =(e)=>{
        setProduct(e)
        setState(true)
    }

    const setCarrito = (e)=>{
        sendInfo(AddCarrito(e))

    }

    const cardBootstrap = (items) =>
        <Card key={items.alt} className="card-product" style={{ width: '18rem' }}>
            <button style={{border:'none' , cursor:'pointer'}} onClick={()=>showDetails({image:items.img,title:items.title,description:items.description})}>
            <Card.Img className="imgCarousel" src={items.img} />
             </button>
            <Card.Body>
                <Card.Title>{items.title}</Card.Title>
                <Card.Text>
                    {items.description}
                </Card.Text>
            </Card.Body>
            <button onClick={()=>setCarrito({image:items.img,title:items.title,description:items.description})} style={{border:'none', cursor:'pointer'}}>Add carrito</button>
        </Card>

    return (
        <div>
            <input className="product-filter" type="text" placeholder="Search product"></input>
            <div className="producs-container">
                {!state?productos.map(cardBootstrap):<Details props={product} onclose={handleClose}/>}
            </div>
        </div>
    )
}
