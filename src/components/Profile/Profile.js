 import React, { useState } from 'react'
 import EventProduct from '../EditProduct/EditProduct'
 import ModalCreate from '../CreateProduct/ModalCreate'

 export default function Profile() {
     const [edit,setEdit]=useState(false)
     const [create,setCreate]=useState(false)
    const closeEdit = ()=>{
        setEdit(false)
    }

    const closeCreate = ()=>{
        setCreate(false)
    }
   return (
     <div>
         <header>
             
            <div>Foto y nombre</div>
             <button onClick={()=>setEdit(true)} >Edit Product</button>
             <button onClick={()=>setCreate(true)} >Create New Product</button>
             <div>Ganacias</div>
             <div>Num Ventas</div>
             <div>Popularity</div>
         </header>
          {edit?<EventProduct/>:''} 
         {create?<ModalCreate onClose={closeCreate}/>:''} 
     </div>
   )
 }
