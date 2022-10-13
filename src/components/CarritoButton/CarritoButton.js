import React from 'react'
import './CarritoButton.css'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Carrito from '../Carrito/Carrito'
export const CarritoButton = () => {

    
    const [state,setState]=useState(false)
    
    const data = useSelector(state=>state.carrito)
    console.log(data)
    //Productos de prueba
    
    const handleClose =()=>{
        if(state){
            setState(false)
         }
         if(!state){
            setState(true)
         }
    }
    


    //Debe renderizar el componente carrito.
    return (
        <div>
            
            <div>
                <img onClick={handleClose} src='https://cdn-icons-png.flaticon.com/512/107/107831.png' alt='logo' className='carrito-button'></img>
                <button className='carrito-elements'>{data.length}</button>
            </div>
           
            {state?<Carrito ></Carrito>:''}
        
        </div>

    )
}
