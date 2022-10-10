import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Carrito({props,onclose}) {

let elementos = [props] 
const [price,setPrice]=useState()
const [remover,setRemove]=useState()
const [show,setShow]=useState(false)
const [counter , setCounter]=useState({})
const idUser = useSelector(state => state.auth.id)
/* las props deben llegar con { quantity = 0 */

 useEffect(()=>{
  if(!remover){
    ''
  }else{

    let  removeElem = elementos.filter(e => e.id === remover)
     elementos.pop(removeElem)

     let  removeArr = arr.filter(e => e.id === remover)
     arr.pop(removeArr)
     
     remover = ''
  }


 },[remover])

 useEffect(()=>{
  if(counter){
    let  counterElem = arr.filter(e => e.product._id === counter.id)
     counterElem.quantity === counter.quantity
      counterElem.price === counterElem.price * quantity
   

  }else{
    ''
  }
 
  },[counter])


const saveElement =()=>{
  localStorage.setItem('carrito',JSON.stringify(arr))
}

const clearElement = ()=>{
  setShow(false)
  
  arr === null
}



const handleSubmit = (e)=>{
  e.preventDefault()
  if(arr!=null){
    //mutationsell(stock)
    //mutationbuy(stock)

  }else{
    alert('your carrito its empty')
  }

}
let arr = []

let showCarrito =(item)=>(

  setPrice(item.price + price),
  item.type=== fruit?

    <div>
      <img src={item.photo}></img>
      <h1>Product:{item.product}</h1>
      <p>type: {item.type}</p>
      <p>Current State: {item.state}</p>
      <p>Current stock: {item.stock}</p>
      <input type='Number' minLength={1} maxLength={item.stock} onChange={()=>setCounter({id : item.product._id, counter :target.value})}></input>
      <p>Price : {item.price *= item.quantity}</p>
    <button value={item.id}  onClick={()=>{setRemove(item.id)}}>X</button>
    {arr.push({
     idBuy : idUser,
     idSell : item.product.user._id,
     idProduct :item.product._id,
     price : item.price,
     quantity:item.quantity,
     type:item.type,
    })}
    </div>
  :
  <div>
  <img src={item.photo}></img>
  <h1>Product:{item.product}</h1>
  <p>type: {item.type}</p>
  <p>Current State: {item.state}</p>
  <p>Current stock: {item.stock}</p>
  <input type='Number' minLength={1} maxLength={item.stock} onChange={()=>setCounter({id : item.product._id, counter :target.value}) }></input>
  <p>Price : {item.price *= item.quantity}</p>
  <button value={item.id}  onClick={()=>{setRemove(item.id)}}>X</button>
  {arr.push({
    idBuy : idUser,
    idSell : item.product.user._id,
    idProduct :item.product._id,
    price : item.price,
    quantity:item.quantity,
    type:item.type,
   })}
</div>

  
)

  
  return (
    <div>
      <button onClick={onclose}></button>
      {show?elementos?elementos.map(e => showCarrito(e) ):'':''}
      <h3>Total de Compra: {price}</h3>
      <button onClick={saveElement}>save</button>
      <button onClick={clearElement}>Clear</button>
      <button onClick={handleSubmit}>Finalizar Compra</button>
    </div>
  )
}
