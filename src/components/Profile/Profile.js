import React, { useState } from 'react'
import EventProduct from '../EditProduct/EditProduct'
import ModalCreate from '../CreateProduct/ModalCreate'
import "./Profile.css"

export default function Profile() {
    const [edit, setEdit] = useState(false)
    const [create, setCreate] = useState(false)
    let User = JSON.parse(localStorage.getItem("useriInfo"));
    const closeEdit = () => {
        setEdit(false)
    }

    const closeCreate = () => {
        setCreate(false)
    }
    return (
        <div className='Profile' >
            <div className='ProfileUser' >
                <div className='ProfileUserSection'>
                    <img src={User.photo} />
                    <h4>{User.name} {User.lastName}</h4>
                    <p>Send to: {User.adress}</p>
                    <p>Mail: {User.mail}</p>
                    <p>Phone: {User.phone}</p>
                </div>
                <div className='ProfileUserButtonSection'>
                    <button className='ProfileUserButton'>button</button>
                    <button className='ProfileUserButton'>button</button>
                    <button className='ProfileUserButton'>button</button>
                    <button className='ProfileUserButton'>button</button>
                    <button className='ProfileUserButton'>button</button>
                    <button className='ProfileUserButton'>button</button>
                    <button className='ProfileUserButton'>button</button>
                </div>
            </div>
            <div className='ProfileContainer'>
                section 2
            </div>
        </div>
    )
}

{/* <header>
<div>Foto y nombre</div>
 <button onClick={()=>setEdit(true)} >Edit Product</button>
 <button onClick={()=>setCreate(true)} >Create New Product</button>
 <div>Ganacias</div>
 <div>Num Ventas</div>
 <div>Popularity</div>
</header>
{edit?<EventProduct/>:''} 
{create?<ModalCreate onClose={closeCreate}/>:''}  */}