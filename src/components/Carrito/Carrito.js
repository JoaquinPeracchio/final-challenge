import React, { useEffect, useState } from 'react'

export default function Carrito({props,onclose}) {
let elementos = [props]
const [price,setPrice]=useState()
const [remove,setRemove]=useState()
const [stock,setStock]=useState([])


useEffect(()=>{
 let  removeElem = elementos.filter(e => e.id === remove)
 elementos.pop(removeElem)


},[remove])


const saveElement =()=>{
  localStorage.setItem('carrito',JSON.stringify(elementos))
}

const clearElement = ()=>{
  elementos===null
}

useEffect(()=>{/// esta es la logica que me hace ruido , habria que modificar
  
  let buy ={
    id : elementos.user._id,
    product:elementos.product

  

  }
 
  let sell ={
    id: elementos.user._id,
    product:elementos.product._id,
    stock :elementos.stock -1
  }
  let notification = {
    idSell: elementos.user._id,
    //idBuy obtener del localStorage o Slice redux
    name : elementos.user.name,
    product : elementos.product._id,
    productName : elementos.product.name
  }
})

const handleSubmit = ()=>{

}


let showCarrito =(item)=>(
  setPrice(item.price + price),
  item.variant=== fruit?
    <div>
      <img src={item.photo}></img>
      <h1>Product:{item.product}</h1>
      <p>Variant: {item.variant}</p>
      <p>Current State: {item.state}</p>
      <p>Current stock: {item.stock}</p>
    <button value={item.id}  onClick={()=>{setRemove(item.id)}}>X</button>
    </div>
  :
  <div>
  <img src={item.photo}></img>
  <h1>Product:{item.product}</h1>
  <p>Variant: {item.variant}</p>
  <p>Current State: {item.state}</p>
  <button value={item.id}  onClick={()=>{setRemove(item.id)}}>X</button>
</div>
  
)



  return (
    <div>
      <button onClick={onclose}></button>
      {elementos?elementos.map(showCarrito):''}
      <h3>Total de Compra: {price}</h3>
      <button onClick={saveElement}>save</button>
      <button onClick={clearElement}>Clear</button>
      <button onClick={handleSubmit}>Finalizar Compra</button>
    </div>
  )
}
