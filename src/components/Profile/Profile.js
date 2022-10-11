import React, { useState } from 'react'
import EventProduct from '../EditProduct/EditProduct'
import ModalCreate from '../CreateProduct/ModalCreate'

export default function Profile() {
    const [edit,setEdit]=useState(false)
    const [create,setCreate]=useState(false)
  return (
    <div>
        <header>
            <img src=""></img>
            <button onClick={()=>setEdit(true)} >Edit Product</button>
            <button onClick={()=>setCreate(true)} >Create New Product</button>
        </header>
        {edit?<EventProduct/>:''}
        {create?<ModalCreate/>:''}
    </div>
  )
}
