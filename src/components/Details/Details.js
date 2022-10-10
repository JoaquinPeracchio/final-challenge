import React, { useState } from 'react'
import ShowComments from '../Comments/ShowComments'

export default function Details({props,onclose}) {
const [populater , setPopulate]=useState([])
const [popularity , setPopularity]=useState()
const {
    data:elem,
    refetch : comeback,
}=useReadUserQuery(props.product.user._id)

if(elem){
    elem.popularity.map(e => setPopulate(e + populater))
    setPopularity(  populater / elem.popularity.length )

}
   
    


  return (
    <div>
        {elem? 
         <div>
        <button onClick={onclose}>X</button>
        <div>
        <h2>{props.name}</h2>
        <h3>provider : {props.user.name}</h3>
        <h4>Popularity User{popularity}</h4>
        <h6>Type: {props.type}</h6>
        <p>{props.description}</p>
        </div>
        <div>
            <img src={props.img}></img>
        </div>
        </div>
    :''}
    </div>

  )
}
