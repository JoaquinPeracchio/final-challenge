import React from 'react'
import './CarritoButton.css'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Carrito from '../Carrito/Carrito'
import Cart from '../../assets/icons/cart.png'

export const CarritoButton = () => {

    
    const [state,setState]=useState(false)
    
    const data = useSelector(state=>state.carrito)
    console.log(data)
    //Productos de prueba
    
    const handleClose =()=>{
        setState(false)
    }
    


    //Debe renderizar el componente carrito.
    return (
        <div className='detail-container'>
            
            <div>
                <img onClick={()=>setState(true)} src={Cart} alt='logo' className='HeaderIcon'></img>
                {data.length > 0 ? <button className='carrito-elements'><p className='numero'>{data.length}</p></button> : null }
            </div>
        
        </div>

    )
}
