import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Details from '../Details/Details';
import { useDispatch } from 'react-redux';
import { AddCarrito } from '../../features/slices/carritoSlice';
import { useGetAllProductsQuery } from '../../features/actions/ApiMethod';
import './Productos.css'

const Star = <img className='estrellita' src='https://img.icons8.com/color/344/christmas-star.png'/>
const EmptyStar = <img className='estrellita' src='https://img.icons8.com/color/344/star--v1.png'/>
const ceroEstrellas = <div>{EmptyStar}{EmptyStar}{EmptyStar}{EmptyStar}{EmptyStar}</div>
const unaEstrella = <div>{Star}{EmptyStar}{EmptyStar}{EmptyStar}{EmptyStar}</div>
const dosEstrellas = <div>{Star}{Star}{EmptyStar}{EmptyStar}{EmptyStar}</div>
const tresEstrellas = <div>{Star}{Star}{Star}{EmptyStar}{EmptyStar}</div>
const cuatroEstrellas = <div>{Star}{Star}{Star}{Star}{EmptyStar}</div>
const cincoEstrellas = <div>{Star}{Star}{Star}{Star}{Star}</div>

export const Productos = () => {
    const [state, setState] = useState(false)
    const [product, setProduct] = useState({})
    const [search, setSearch] = useState('')
    const [nuevo, setNew] = useState()

    const sendInfo = useDispatch()

    const {
        data: elem,

        refetch: comeback
    } = useGetAllProductsQuery(search)

    useEffect(() => {
        comeback()

    }, [])

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

    
    function estrellas(popularidad){
       let galaxia = []
       if(popularidad == 0){
        galaxia = ceroEstrellas
       } else if(popularidad == 1){
        galaxia = unaEstrella
       } else if(popularidad == 2){
        galaxia = dosEstrellas
       } else if(popularidad == 3){
        galaxia = tresEstrellas
       } else if(popularidad == 4){
        galaxia = cuatroEstrellas
       } else if(popularidad >= 5){
        galaxia = cincoEstrellas
       };

       return galaxia;
    }

    const cardBootstrap = (items) =>
        <div key={items.alt} className="card-product" style={{ width: '18rem' }}>

            <button className='btn-details' style={{ border: 'none', cursor: 'pointer' }} onClick={() => showDetails({ id: items._id, image: items.photo, name: items.name, variety: items.variety, quantitymin: items.quantitymin, price: items.price, type: items.type, description: items.description, currentState: items.currentState, quantity: 1 })}>
                <div className='img-container-product'>
                    <Card.Img className="imgCarousel" src={items.photo} />
                </div>
            </button>
            <div className='body-card-container'>
                <div className='name-product'>{items.name}</div>
                <div>{items.variety}</div>
                <div className='user-name'>Producer: {items.user.name}</div>
                <div>{estrellas(items.user.popularity)}</div>
                <div className='card-body'> ${items.price}.00</div>
                <button className='add-carrito-btn' onClick={() => setCarrito({ id: items._id, image: items.photo, name: items.name, variety: items.variety, quantitymin: items.quantitymin, price: items.price, type: items.type, description: items.description, currentState: items.currentState, quantity: 1 })} style={{ border: 'none', cursor: 'pointer' }}>Add to cart</button>
            </div>
        </div>


    return (
        <div>
            <input className="product-filter" type="text" onChange={e => setSearch(e.target.value)} placeholder="Search product"></input>
            {!state && !search && elem ? <div className='ProductUser'><h2 className='ProductH1'>Product of the most popular users</h2></div> : ''}
            <div className="producs-container">

                {!state && !search && elem ? elem.filter(item => item.user.popularity > 2).map(cardBootstrap) : ''}
                {!state && search && elem ? elem.map(cardBootstrap) : ''}
                {state ? <Details props={product} onclose={handleClose} /> : ''}

            </div>
        </div>
    )
}
