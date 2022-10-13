import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { useSellProductMutation , useBuyProductMutation} from '../../features/actions/ApiMethod'

import { DeleteProduct ,  } from '../../features/slices/carritoSlice'

export default function Carrito() {
  
  const [SellMut]=useSellProductMutation()
  const [BuyMut]=useBuyProductMutation()
  const [price,setPrice]=useState(0)
  
  let priceArr=[]


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
  <button id={item.id}  onClick={(e)=>removeElem({id:e.target.id})}>X</button>
 <img src={item.image}></img>
  <h1>Product:{item.name}</h1>
  <p>Variety: {item.variety}</p>
  <p>{item.description}</p>
  <p>Current State: {item.currentState}</p>
  <p>Price : ${item.price * item.quantity}</p>
  <p> KG: {item.quantitymin}</p>
  <p> quantity {item.quantity}</p>
  
  <p>#
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
    <div>
     
      {currentCarrito.map( showCarrito )}
      <h3>Total de Compra: {priceArr.map(item => item.price).reduce((prev, curr) => prev + curr, 0)}</h3>
      <button onClick={handleSubmit}>Finalizar Compra</button>
    </div>
  )
}
