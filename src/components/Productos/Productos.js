import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Details from '../Details/Details';
import { useDispatch } from 'react-redux';
import { AddCarrito } from '../../features/slices/carritoSlice';
import { useGetAllProductsQuery } from '../../features/actions/ApiMethod';
import './Productos.css'


export const Productos = () => {
    const [state,setState]=useState(false)
    const [product , setProduct]=useState({})
    const sendInfo = useDispatch()



    const {
        data: elem,
        refetch:comeback

    } = useGetAllProductsQuery()
console.log(elem)
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
        <Card  className="card-product" style={{ width: '18rem' }}>
            <button style={{border:'none' , cursor:'pointer'}} onClick={()=>showDetails({id:items._id,image:items.photo,name:items.name,variety:items.variety,quantitymin:items.quantitymin,price:items.price,type:items.type,description:items.description,currentState : items.currentState,quantity:1})}>
            <Card.Img className="imgCarousel" src={items.photo} />
             </button>
            <Card.Body>
            <button onClick={()=>setCarrito({id:items._id,image:items.photo,name:items.name,variety:items.variety,quantitymin:items.quantitymin,price:items.price,type:items.type,description:items.description,currentState : items.currentState,quantity:1})} style={{border:'none', cursor:'pointer'}}>Add carrito</button>
                <Card.Title>{items.name}</Card.Title>
                <Card.Text>
                    {items.variety}
                    <p>

                    {items.type}
                    </p>
                    <p>
                    {items.price}
                        
                    </p>
                </Card.Text>
            </Card.Body>
        </Card>

    return (
        <div>
                {!state && elem?elem.map(cardBootstrap):''}
            <input className="product-filter" type="text" placeholder="Search product"></input>
            <div className="producs-container">
                 {state ?<Details props={product} onclose={handleClose}/>:''} 
            </div>
        </div>
    )
}
