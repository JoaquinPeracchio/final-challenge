import React from 'react'
import Card from 'react-bootstrap/Card';
import './Productos.css'

export const Productos = () => {

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

    const cardBootstrap = (items) =>
        <Card key={items.alt} className="card-product" style={{ width: '18rem' }}>
            <Card.Img className="imgCarousel" src={items.img} />
            <Card.Body>
                <Card.Title>{items.title}</Card.Title>
                <Card.Text>
                    {items.description}
                </Card.Text>
            </Card.Body>
        </Card>

    return (
        <div>
            <input className="product-filter" type="text" placeholder="Search product"></input>
            <div className="producs-container">
                {productos.map(cardBootstrap)}
            </div>
        </div>
    )
}
