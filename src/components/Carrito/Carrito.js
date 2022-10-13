import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { DeleteProduct , UpdateCarrito  } from '../../features/slices/carritoSlice'

export default function Carrito({onclose}) {


const [price,setPrice]=useState(0)



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
    //mutationsell(stock)
    //mutationbuy(stock)

  }else{
    alert('your carrito its empty')
  }

}
const removeElem =(e)=>{
  console.log(e)
  sendInfo(DeleteProduct(e))
}


let priceArr=[]
console.log(priceArr)
let showCarrito =(item)=>(

  
  <div onLoad={()=>clearElement(item.price)}>
  <button value={item.id}  onClick={(e)=>removeElem(e.target.value)}>X</button>
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
    image:item.image,
    quantity:item.quantity,
    price: item.price * item.quantity
  })}</p>
</div>


  
)


  return (
    <div>
      <button onClick={onclose}>X</button>
      {currentCarrito.map( showCarrito )}
      <h3>Total de Compra: {priceArr.map(item => item.price).reduce((prev, curr) => prev + curr, 0)}</h3>
      {/* <button onClick={saveElement}>save</button>
      <button onClick={clearElement}>Clear</button> */}
      <button onClick={handleSubmit}>Finalizar Compra</button>
    </div>
  )
}
