import React, { useEffect, useState } from 'react'
import { useUpdateProductMutation } from '../../../features/actions/ApiMethod'
import Swal from 'sweetalert2'
export default function ModalEdit({onclose,elemento}) {

  const [editProduct]=useUpdateProductMutation()


 const [price,setPrice]=useState()
 const [stock,setStock]=useState()
 const [type,setType]=useState()
 const [name,setName]=useState()
 const [quantity,setQuantity]=useState()
 const [variety,setVariety]=useState()
const [edit,setEdit]=useState()

  useEffect(()=>{
    let editItiner ={
      id:elemento.id,
      name:name,
      user:elemento.userId,
      price:price,
      stock:stock,
      type:type,
      quantityMin:quantity,
      variety:variety
    }
    setEdit(editItiner)

  },[elemento.id,elemento.userId,price,stock,type])

  console.log(edit)



    const handlePrice = (e) =>{
      setPrice(e.target.value)
    }


    const handleStock = (e) =>{
      setStock(e.target.value)
    }


    const handleName =(e)=>{
      setName(e.target.value)
    }


    const handleSubmit = (e)=>{
        e.preventDefault()

        if(edit.name.length < 5 ){
          Swal.fire({
              title:'Name Failed',
              text:'please verify that the name has more than 5 letters'
          })
        }else if(edit.stock < 0){
          Swal.fire({
            title:'Stock Failed',
            text:'the number should be greater than 0'
        })

        }else{

          //mandarlo al controlador update
          editProduct(edit)
          .unwrap()
          .then(() => {  console.log('updated')    })
          .then((error) => {
            console.log(error)
          })
          Swal.fire({
            icon:'success',
            title:'Edited with success',
            text:'if you will edit again there product, can do it , if finished please press close for the come back at the previus page',
            confirmButtonText:'ok'
          })
        }

    }



  return (
    <form onSubmit={handleSubmit} className='editIt'>
          <h3  className="citiItiner">edit your Product </h3>
            <p >Name </p>
            <input type='text' onChange={handleName}></input>
            
            <h4  className="userItiner">User : {elemento.user}</h4>
            
           
            <p >Price: </p>
            <input type='number' onChange={handlePrice} ></input>
            <p >Type:  </p>
            <select onChange={(e)=>setType(e.target.value)}>
            <option value='Fruit'>Fruit</option>
            <option value='Vegetable'>Vegetable</option>
          </select>
            <p >Stock:</p>
            <input type='number' onChange={handleStock} ></input>
            <p >Variety:</p>
            <input type='text' onChange={(e)=>setVariety(e.target.value)} ></input>
            <p >Quantity Min x KG:</p>
            <input type='number' onChange={(e)=>setQuantity(e.target.value)} ></input>
            <div className='butonEdit'>
            <button onSubmit={handleSubmit} className='save'>Save</button>
            <button onClick={onclose} className='close'>Close</button>

            </div>
    </form>
  )
}
