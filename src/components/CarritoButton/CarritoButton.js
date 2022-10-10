import React from 'react'
import './CarritoButton.css'
import { useEffect, useState } from 'react'

export const CarritoButton = () => {

    //Productos de prueba
    let producto1 = {
        nombre: 'auto',
        precio: 500
    }
    let producto2 = {
        nombre: 'asd',
        precio: 6000
    }

    const agregarProducto = () => {

        console.log("Comprado")
        console.log(carrito)
        carrito.push(producto1)
        setCount((c) => c + 1)
        console.log(carrito)

    }
    

    const [carrito, setCarrito] = useState([]);
    const [count, setCount] = useState(carrito.length);
 
    useEffect(() => {
    },[carrito])

    //Debe renderizar el componente carrito.
    return (
        <div>
            <img onClick={agregarProducto} src='https://cdn-icons-png.flaticon.com/512/107/107831.png' alt='logo' className='carrito-button'></img>
             { count > 0 ? <button className='carrito-elements'>{count}</button> : null}
        </div>

    )
}
