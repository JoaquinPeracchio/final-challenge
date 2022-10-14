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
    const rating = User.popularity

    const Star = <img className='estrellita' src='https://img.icons8.com/color/344/christmas-star.png' />
    const EmptyStar = <img className='estrellita' src='https://img.icons8.com/color/344/star--v1.png' />
    const ceroEstrellas = <div>{EmptyStar}{EmptyStar}{EmptyStar}{EmptyStar}{EmptyStar}</div>
    const unaEstrella = <div>{Star}{EmptyStar}{EmptyStar}{EmptyStar}{EmptyStar}</div>
    const dosEstrellas = <div>{Star}{Star}{EmptyStar}{EmptyStar}{EmptyStar}</div>
    const tresEstrellas = <div>{Star}{Star}{Star}{EmptyStar}{EmptyStar}</div>
    const cuatroEstrellas = <div>{Star}{Star}{Star}{Star}{EmptyStar}</div>
    const cincoEstrellas = <div>{Star}{Star}{Star}{Star}{Star}</div>

    function estrellas(popularidad) {
        let galaxia = []
        if (popularidad == 0) {
            galaxia = ceroEstrellas
        } else if (popularidad == 1) {
            galaxia = unaEstrella
        } else if (popularidad == 2) {
            galaxia = dosEstrellas
        } else if (popularidad == 3) {
            galaxia = tresEstrellas
        } else if (popularidad == 4) {
            galaxia = cuatroEstrellas
        } else if (popularidad >= 5) {
            galaxia = cincoEstrellas
        };

        return galaxia;
    }

    const { data: products } = useGetProductsUserQuery(userID)

    console.log(rating)
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
                <h4>Actual Rating:</h4>
                <div>{estrellas(User.popularity)}</div>
                <Accordion>
                    <Accordion.Item>
                        <Accordion.Header>Completed sales</Accordion.Header>
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
                </Accordion>
                <Accordion>
                    <Accordion.Item>
                        <Accordion.Header>Completed purchases</Accordion.Header>
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
                </Accordion>
                <Accordion>
                    <Accordion.Item>
                        <Accordion.Header>Products on sale</Accordion.Header>
                        <Accordion.Body>
                            <ul className='ProductProfileContainer'>
                                {products?.map(products => <ProductsProfile data={products} />)}
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </div>
        </div>
    )
}