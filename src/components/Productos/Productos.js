import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Details from '../Details/Details';
import './Productos.css'
import {Link as LinkRouter} from 'react-router-dom'

export const Productos = () => {
    const [state,setState]=useState(false)
    const [product , setProduct]=useState({})

    const productos = [
        {
            img: 'https://www.zilliondesigns.com/blog/wp-content/uploads/Cat-logos.png',
            title: 'titulo1',
            description: 'description1',
            alt: 'producto1'
        },
        {
            img: 'https://static.vecteezy.com/system/resources/previews/006/862/726/original/icon-of-a-cat-animal-logo-with-an-adorable-pose-free-vector.jpg',
            title: 'titulo2',
            description: 'description2',
            alt: 'producto2'
        },
        {
            img: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1631/posts/38685/image-upload/CatLogoDesign003.jpg',
            title: 'titulo3',
            description: 'description3',
            alt: 'producto3'
        }, {
            img: 'https://www.zilliondesigns.com/blog/wp-content/uploads/Cat-logos.png',
            title: 'titulo1',
            description: 'description1',
            alt: 'producto4'
        },
        {
            img: 'https://static.vecteezy.com/system/resources/previews/006/862/726/original/icon-of-a-cat-animal-logo-with-an-adorable-pose-free-vector.jpg',
            title: 'titulo2',
            description: 'description2',
            alt: 'producto5'
        },
        {
            img: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1631/posts/38685/image-upload/CatLogoDesign003.jpg',
            title: 'titulo3',
            description: 'description3',
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

    const cardBootstrap = (items) =>
        <Card key={items.alt} className="card-product" style={{ width: '18rem' }}>
            <button style={{border:'none' , cursor:'pointer'}} onClick={()=>showDetails({image:items.img,title:items.title,description:items.description})}>
            <Card.Img className="imgCarousel" src={items.img} />
             </button>
            <Card.Body>
                <Card.Title>{items.title}</Card.Title>
                <div>
                    <button className='button-card'>Details</button>
                    <button className='button-card'>Add to cart</button>
                </div>
            </Card.Body>
            <button style={{border:'none', cursor:'pointer'}}>Add carrito</button>
        </Card>

    return (
        <div>
            <input className="product-filter" type="text" placeholder="Search product"></input>
            <div className="producs-container">
                {!state?productos.map(cardBootstrap):<Details props={product} onclose={handleClose}/>}
            </div>
            <div className='button-back'>
            <LinkRouter to="/" ><button type="" className='button-backhome'>GO HOME</button></LinkRouter>
            </div>
        </div>
    )
}
