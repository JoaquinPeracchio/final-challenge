// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
// import { DeleteProduct } from '../../features/slices/carritoSlice'
// export default function Carrito({onclose}) {


// const [price,setPrice]=useState(0)



// const currentCarrito = useSelector(state => state.carrito)
// const sendInfo = useDispatch()



// const saveElement =()=>{
//   localStorage.setItem('carrito',JSON.stringify(currentCarrito))
// }

// const clearElement = ()=>{

// }



// const handleSubmit = (e)=>{
//   e.preventDefault()

//   if(currentCarrito.length != null){
//     //mutationsell(stock)
//     //mutationbuy(stock)

//   }else{
//     alert('your carrito its empty')
//   }

// }
// const removeElem =(e)=>{
//   sendInfo(DeleteProduct(e))
// }
// /*data del modelo product{
//   foto
//   product
//   type
//   cantidad seteada por kg
//   la cantidad de esa cantaidad que va a llevar 
//   stock
//   state (bueno muy bueno malo muy malo)
//   */


// let showCarrito =(item)=>(
//   setPrice(price + item.price),
//   item.variant=== fruit?
//     <div>
//       <img src={item.image}></img>
//       <h1>Product:{item.title}</h1>
//       <p>Variant: {item.description}</p>
//       {/* price : item.price */}
//       {/* cantidad id=item.id onclick(()=>handleCantidad({cantidad :e.target.value,id:e.target.id})) : item.price */}
//     <button value={item.id}  onClick={e=>removeElem(e.target.value)}>X</button>
//     </div>
//   :
//   <div>
//   <img src={item.photo}></img>
//   <h1>Product:{item.product}</h1>
//   <p>Variant: {item.variant}</p>
//   <p>Current State: {item.state}</p>
//   <button value={item.id}  onClick={e=>removeElem(e.target.value)}>X</button>
// </div>

  
// )

  
//   return (
//     <div>
//       <button onClick={onclose}></button>
//       {show?currentCarrito?currentCarrito.map(e => showCarrito(e) ):'':''}
//       <h3>Total de Compra: {price}</h3>
//       <button onClick={saveElement}>save</button>
//       <button onClick={clearElement}>Clear</button>
//       <button onClick={handleSubmit}>Finalizar Compra</button>
//     </div>
//   )
// }
