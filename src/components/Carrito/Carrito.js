import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { DeleteProduct, UpdateCarrito } from '../../features/slices/carritoSlice'
import './Carrito.css'

export default function Carrito({ onclose }) {

  const [price, setPrice] = useState(0)

  const currentCarrito = useSelector(state => state.carrito)
  console.log(currentCarrito)
  const sendInfo = useDispatch()

  // const saveElement =()=>{
  //   localStorage.setItem('carrito',JSON.stringify(currentCarrito))
  // }

  const clearElement = (e) => {
    setPrice(price + e)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (currentCarrito.length != null) {
      //mutationsell(stock)
      //mutationbuy(stock)

    } else {
      alert('your carrito its empty')
    }

  }
  const removeElem = (e) => {
    console.log(e)
    sendInfo(DeleteProduct(e))
  }

  let priceArr = []
  console.log(priceArr)
  let showCarrito = (item) => (

    <div onLoad={() => clearElement(item.price)}>
      <button className='quit-item' value={item.id} onClick={(e) => removeElem(e.target.value)}>X</button>
      <div className='card-cart'>
        <div className='image-cart-container'>
          <img className="cart-image" src={item.image}></img>
        </div>
        <div className='cart-details'>
          <h1 className='peso-letra'>Product:{item.name}</h1>
          <p className='peso-letra fondo'>Variety: {item.variety}</p>
          <p className='peso-letra fondo'>{item.description}</p>
          <p className='peso-letra fondo'>Current State: {item.currentState}</p>
          <p className='peso-letra fondo'>Price : ${item.price * item.quantity}</p>
          <p className='peso-letra fondo'> KG: {item.quantitymin}</p>
          <p className='peso-letra fondo'> quantity {item.quantity}</p>
        </div>
      </div>

      <p>#
        {priceArr.push({
          idProd: item.id,
          name: item.name,
          image: item.image,
          quantity: item.quantity,
          price: item.price * item.quantity
        })}</p>
    </div>
  )

  return (
    <div className='cart-page'>
      <div className='cart-container'>
        {currentCarrito.map(showCarrito)}
        <h3>Total de Compra: {priceArr.map(item => item.price).reduce((prev, curr) => prev + curr, 0)}</h3>
        {/* <button onClick={saveElement}>save</button>
      <button onClick={clearElement}>Clear</button> */}
        <button className='finalizar-compra' onClick={handleSubmit}>Finalizar Compra</button>
      </div>
    </div>
  )
}
