import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import Swal from 'sweetalert2'
import './Carrito.css'
import { useSellProductMutation , useBuyProductMutation} from '../../features/actions/ApiMethod'

import { DeleteProduct ,  } from '../../features/slices/carritoSlice'

export default function Carrito() {
  
  const [SellMut]=useSellProductMutation()
  const [BuyMut]=useBuyProductMutation()
  const [price,setPrice]=useState(0)
  
  let priceArr=[]


  // const saveElement =()=>{
  //   localStorage.setItem('carrito',JSON.stringify(currentCarrito))
  // }


const currentCarrito = useSelector(state => state.carrito)
console.log(currentCarrito)
const sendInfo = useDispatch()



// const saveElement =()=>{
//   localStorage.setItem('carrito',JSON.stringify(currentCarrito))
// }

 const clearElement = (e)=>{
  setPrice(price+e)
}


const handleSubmit = (e)=>{
  e.preventDefault()

  if(currentCarrito.length != null){
    console.log('entro aca')
    SellMut(priceArr)
    .unwrap()
    .then(() => {  console.log('seller')    })
    .then((error) => {
      console.log(error)
    })
    BuyMut(priceArr)
    .unwrap()
    .then(() => {  console.log('buyer')    })
    .then((error) => {
      console.log(error)
    })

    Swal.fire({
      icon:'success',
      title:'successful purchase',
      text:'we will send an email with the details of your purchase',
      confirmButtonText:'ok'
    })
  }else{
    alert('your carrito its empty')
  }

}
const removeElem =(e)=>{
  console.log(e)
  sendInfo(DeleteProduct(e))
}


console.log(priceArr)
let showCarrito =(item)=>(

  
  <div onLoad={()=>clearElement(item.price)}>
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

  
  <p className='peso-letra'>#
  {priceArr.push({
    idProd : item.id,
    name:item.name,
    seller:'6345fbd9bb7e879c60015fe8',
    buyer:'634587e3603a5c944f4e41b9',
    photo:item.image,
    quantitymin:item.quantity,
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
