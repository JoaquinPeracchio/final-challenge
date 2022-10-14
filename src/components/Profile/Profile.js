import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import EventProduct from '../EditProduct/EditProduct'
import ModalCreate from '../CreateProduct/ModalCreate'
import MessagesModal from '../Comments/MessagesModal'
import EditUserModal from '../User/EditUserModal'
import CreateProductModal from '../CreateProduct/CreateProductModal'
import SignOutModal from '../User/SignOutModal'
import DeleteUserModal from '../User/DeleteUserModal'
import ProductsProfile from './ProductsProfile';
import { useGetProductsUserQuery } from '../../features/actions/ApiMethod';
import "./Profile.css"

export default function Profile() {
    const [edit, setEdit] = useState(false)
    const [create, setCreate] = useState(false)
    let User = JSON.parse(localStorage.getItem("useriInfo"))
    const userID = User._id

    const { data: products } = useGetProductsUserQuery(userID)

    console.log(products)
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
                    <img className='ProfileUserPhoto' src={User.photo} />
                    <h4 className='ProfileUserName'>{User.name} {User.lastName}</h4>
                    <p className='ProfileUserText'>Send to: {User.adress}</p>
                    <p className='ProfileUserText'>Mail: {User.mail}</p>
                    <p className='ProfileUserText'>Phone: {User.phone}</p>
                </div>
                <div className='ProfileUserButtonSection'>
                    <MessagesModal />
                    <EditUserModal />
                    <CreateProductModal />
                    <SignOutModal />
                    <DeleteUserModal />
                </div>
            </div>
            <div className='ProfileContainer'>
                <h4>rating</h4>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Ventas</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Compras</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Productos</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                {products?.map(products => <ProductsProfile data={products} />)}
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

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