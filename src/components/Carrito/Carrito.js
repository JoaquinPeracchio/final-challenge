import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'


import Swal from 'sweetalert2'
import './Carrito.css'

import { DeleteProduct,ClearCarrito } from '../../features/slices/carritoSlice'

export default function Carrito() {

  const [price, setPrice] = useState(0)
  const dispatch = useDispatch()

  let priceArr = []


  // const saveElement =()=>{
  //   localStorage.setItem('carrito',JSON.stringify(currentCarrito))
  // }


  const currentCarrito = useSelector(state => state.carrito)
  // console.log(currentCarrito)
  const sendInfo = useDispatch()



  // const saveElement =()=>{
  //   localStorage.setItem('carrito',JSON.stringify(currentCarrito))
  // }

  const clearElement = (e) => {
    setPrice(price + e)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
  

    if (currentCarrito.length > 0) {
      // console.log('entro aca')

      dispatch(ClearCarrito(  ))

      sendInfo(ClearCarrito())

      Swal.fire({
        icon: 'success',
        title: 'successful purchase',
        text: 'we will send an email with the details of your purchase',
        confirmButtonText: 'ok'
      })
    } else {
       Swal.fire({
        icon: 'error',
        title: 'failed purchase',
        text: 'Your cart is empty',
        confirmButtonText: 'ok'
      })
    }
    

  }
  const removeElem = (e) => {
    // console.log(e)
    dispatch(DeleteProduct(e))
  }

  let showCarrito = (item) => (
    <div className='maxContainer' onLoad={() => clearElement(item.price)}>
      <hr></hr>
      <div className='card-cart'>
        <p className='peso-letra hash'>#
          {priceArr.push({
            idProd: item.id,
            name: item.name,
            image: item.image,
            quantity: item.quantity,
            price: item.price * item.quantity
          })}</p> <h6 className='peso-letra product-title'>Product:{item.name} <div className='cart-var'>{item.variety}</div></h6>
        <div className='image-cart-container'>
          <img className="cart-image" src={item.image}></img>
        </div>
        <div className='cart-details'>
          <p className='peso-letra fondo'>Price: ${item.price * item.quantity}</p>
          <p className='peso-letra fondo'> KG: {item.quantity}</p>
          <p className='peso-letra fondo'>min quantity x KG:1</p>
          <button className='botons x' value={item.id} onClick={(e) => removeElem(e.target.value)}>X</button>
        </div>
      </div> 
      <hr></hr>
    </div>
  )

  return (
    <div className='cart-page'>
      <div className='cart-container'>
        {currentCarrito.map(showCarrito)}
        <h5 className='total-compra'>Total: {priceArr.map(item => item.price).reduce((prev, curr) => prev + curr, 0)}</h5>
        {/* <button onClick={saveElement}>save</button>
      <button onClick={clearElement}>Clear</button> */}
        <button className='botons finalizar-compra' onClick={handleSubmit}>Finalize Purchase</button>
      </div>
    </div>
  )
}
