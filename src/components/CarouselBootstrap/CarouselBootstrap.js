import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CarouselBootstrap.css'

export default function CarouselBootstrap() {


    const elementos = [
        {
            img: 'https://www.zilliondesigns.com/blog/wp-content/uploads/Cat-logos.png',
            title: 'titulo1',
            description: 'description1'
        },
        {
            img: 'https://static.vecteezy.com/system/resources/previews/006/862/726/original/icon-of-a-cat-animal-logo-with-an-adorable-pose-free-vector.jpg',
            title: 'titulo2',
            description: 'description2'
        },
        {
            img: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1631/posts/38685/image-upload/CatLogoDesign003.jpg',
            title: 'titulo3',
            description: 'description3'
        },
    ]

    const bootstrapCardItem = (items) =>
        <Carousel.Item>
            <Card style={{ width: '18rem' }}>
                <Card.Img className="imgCarousel" src={items.img} />
                <Card.Body>
                    <Card.Title>{items.title}</Card.Title>
                    <Card.Text>
                        {items.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Carousel.Item>


    return (
        <div className="carousel-container">
            <Carousel>
                {elementos.map(bootstrapCardItem)}
            </Carousel>
        </div>
    )
}
