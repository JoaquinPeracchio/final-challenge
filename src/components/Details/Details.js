import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { AddCarrito, UpdateCarrito } from '../../features/slices/carritoSlice'
import './Details.css'

export default function Details({ props, onclose }) {
  console.log(props)
  console.log(onclose)
  const dispatch = useDispatch()
  const select = useSelector(state => state.carrito)
  const [populater, setPopulate] = useState(1)
  const [popularity, setPopularity] = useState()
  console.log(populater)


  const handleContext = (e) => {
    console.log(e)
    let obj = {
      id: props.id,
      image: props.image,
      name: props.name,
      variety: props.variety,
      quantitymin: props.quantitymin,
      quantity: populater,
      price: props.price,
      type: props.type,
      description: props.description,
      currentState: props.currentState

    }
    dispatch(AddCarrito(obj))
    onclose()
  }





  return (
    <div className='Container'>

      <div className='ContainerBody'>

        <div className='ContainerImg'>
          <img className='Foto' src={props.image}></img>
        </div>
        <div className='information'>
          <h4 className='item-title'>{props.name}</h4>

          <h6>Description :{props.description}</h6>
          
          <h6>Type: {props.type}</h6>
          <h6>Variety: {props.variety}</h6>
          <h6>quantity: </h6>
          <input className='input-detail' type='number' id={props.id} max={10} min={1} onChange={(e) => setPopulate(e.target.value)} ></input>
          <button className='CarritoButton' onClick={handleContext}>Send Carrito</button>
        </div>
        <div className='CloseButton'>
          <button className='x-detail' onClick={onclose} style={{ border: 'none', background: '#ffffff00', fontSize: '22px', margin: '5px' }}>X</button>
        </div>
      </div>

    </div>

  )
}
