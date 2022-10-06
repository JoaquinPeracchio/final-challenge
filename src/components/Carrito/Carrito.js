import React, { useEffect, useState } from 'react'

export default function Carrito({props,onclose}) {
let elementos = [props]
const [price,setPrice]=useState()
const [remover,setRemove]=useState()
const [stock,setStock]=useState([])
const [show,setShow]=useState(false)


 useEffect(()=>{
 let  removeElem = elementos.filter(e => e.id === remover)
  elementos.pop(removeElem)


 },[remover])


const saveElement =()=>{
  localStorage.setItem('carrito',JSON.stringify(elementos))
}

const clearElement = ()=>{
  setShow(false)
  
  stock === null
}

// useEffect(()=>{
//   /*debo crear dos arrays de objetos, con el mismo objeto por duplicado , cada uno tendra su propio controllador llamado buy y sell estos controladores van a recorrer el array con for y van a buscar coincidencias con el respectivo id que queramos llenar (uno del que vende y otro del que compra cuando encuentra el id llena los campos necesarios de venta , quantity para restar al stock y demas campos necesarios)*/


// arr.push(buy)

// createObject()

// },[elem])

const handleSubmit = (e)=>{
  e.preventDefault()
  createObject([elementos])
  if(stock!=null){
    //mutationsell(stock)
    //mutationbuy(stock)

  }else{
    alert('your carrito its empty')
  }

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
const createObject = (e,remove)=>{
  let arr =[]
if(e === Array){
  e.map((e)=>{
    let obj ={
      idcomprador:e.id,
      idvendedor:'',
      idproducto:'',
      price:'',
      stock:'',
    }
    arr.push(obj)
  })


}else{
  let obj ={
    idcomprador:e.id,
    idvendedor:'',
    idproducto:'',
    price:'',
    stock:'',
  }
  arr.push(obj)

  }
    setStock(arr)
  }
  
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
