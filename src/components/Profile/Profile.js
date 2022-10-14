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
import "./Sells.css"

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

    const sells = [
        {
            "user": {
                "name": "Lucas",
                "photo": "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2Njc5NDYzOTQ4NDYxNDA4/michael-jordan.jpg"
            },
            "product": {
                "name": "Lettuce",
                "variety": "Coral Lettuce",
                "photo": "https://urbangrow.today/wp-content/uploads/2021/06/GreenCoralLettuce.png",
                "stock": "20"
            }
        },
        {
            "user": {
                "name": "Lucas",
                "photo": "https://images.heb.com/is/image/HEBGrocery/000583329?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0"
            },
            "product": {
                "name": "Watermelon",
                "variety": "Seedless",
                "photo": "https://urbangrow.today/wp-content/uploads/2021/06/GreenCoralLettuce.png",
                "stock": "10"
            }
        }, {
            "user": {
                "name": "Leonardo",
                "photo": "https://images.heb.com/is/image/HEBGrocery/000583329?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0"
            },
            "product": {
                "name": "Watermelon",
                "variety": "Seedless",
                "photo": "https://urbangrow.today/wp-content/uploads/2021/06/GreenCoralLettuce.png",
                "stock": "40"
            }
        }
    ]




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
                <h4>Actual Rating:</h4>
                <div>{estrellas(User.popularity)}</div>
                <Accordion>
                    <Accordion.Item>
                        <Accordion.Header>Completed sales</Accordion.Header>
                        <Accordion.Body>
                            <div className='Sell'>
                                <div className='comprador'>
                                    <img className='foto' src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2Njc5NDYzOTQ4NDYxNDA4/michael-jordan.jpg" />
                                    <div className='nombre'>Lucas</div>
                                </div>
                                <div className='producto'>
                                    <img className='foto' src="https://urbangrow.today/wp-content/uploads/2021/06/GreenCoralLettuce.png" />
                                    <div className='nombre'>Lettuce</div>
                                    <div className='texto'>Coral Lettuce</div>
                                    <div className='texto'>Quantity: 20kg</div>
                                </div>
                            </div>
                            <div className='Sell'>
                                <div className='comprador'>
                                    <img className='foto' src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2Njc5NDYzOTQ4NDYxNDA4/michael-jordan.jpg" />
                                    <div className='nombre'>Lucas</div>
                                </div>
                                <div>
                                    <img className='foto' src="https://urbangrow.today/wp-content/uploads/2021/06/GreenCoralLettuce.png" />
                                    <div className='nombre'>Watermelon</div>
                                    <div className='texto'>Seedless</div>
                                    <div className='texto'>Quantity: 10kg</div>
                                </div>
                            </div>
                            <div className='Sell'>
                                <div className='comprador'>
                                    <img className='foto' src="https://www.notigatos.es/wp-content/uploads/2017/06/gato-con-la-boca-abierta.jpg" />
                                    <div className='nombre' >Lonardo</div>
                                </div>
                                <div>
                                    <img className='foto' src="https://urbangrow.today/wp-content/uploads/2021/06/GreenCoralLettuce.png" />
                                    <div className='nombre'>Watermelon</div>
                                    <div className='texto'>Seedless</div>
                                    <div className='texto'>Quantity: 40kg</div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion>
                    <Accordion.Item>
                        <Accordion.Header>Completed purchases</Accordion.Header>
                        <Accordion.Body>
                            ninguna compra realizada
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