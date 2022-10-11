import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { AddCarrito } from '../../features/slices/carritoSlice'
import './Details.css'

export default function Details({props,onclose}) {
  console.log(props)
  console.log(onclose)
const dispatch = useDispatch()
const select = useSelector(state=>state.carrito)
const [populater , setPopulate]=useState([])
const [popularity , setPopularity]=useState()

// const {
//     data:elem,
//     refetch : comeback,
// }=useReadUserQuery(props.product.user._id)

// if(elem){
//     elem.popularity.map(e => setPopulate(e + populater))
//     setPopularity(  populater / elem.popularity.length )

// }
  const handleContext = (e)=>{
    console.log(e)
    let obj = {
      title: props.title,
      image : props.image,
      description : props.description
    }
    dispatch(AddCarrito(obj))
    console.log(select)
    alert('successfully')
    onclose()
  }
    


  return (
    <div className='Container'>
        {/* {elem?  */}
        <div className='ContainerBody'>

            <div className='ContainerImg'>
                <img  className='Foto' src={props.image}></img>
            </div>
            <div className='information'>
            <h2>{props.title}</h2>
            {/* <h3>provider : {props.user.name}</h3>
            <h4>Popularity User{popularity}</h4> 
          <h6>Type: {props.type}</h6>*/}
            <p>{props.description}</p>
            <button className='CarritoButton' onClick={handleContext}>Send Carrito</button>
            </div>
          <div className='CloseButton'>
          <button onClick={onclose} style={{border:'none',background:'#ffffff00',fontSize:'22px' ,margin:'5px'}}>X</button>
          </div>
        </div>
    
    </div>

  )
}
