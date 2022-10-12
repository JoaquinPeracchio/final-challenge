import React, { useState } from "react"
import User from "../../assets/icons/user.png"
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import ModalFooter from "react-bootstrap/ModalFooter";
import { usePostUserMutation } from '../../features/actions/userApi'
import { usePostUserSingInMutation } from '../../features/actions/userApi'
import "./SignInModal.css"

export default function SignInModal() {

    const [modalState, setModalState] = useState("close");

    const handleShowModalSignIn = () => {
        setModalState("modalSignIn")
    }

    const handleShowModalSignUp = () => {
        setModalState("modalSignUp")
    }

    const handleClose = () => {
        setModalState("close")
    }

    const [newUser] = usePostUserMutation()
    const [form, setForm] = useState({
        name: "",
        lastName: "",
        photo: "",
        mail: "",
        password: "",
        adress: "",
        phone: "",
        popularaty: 0,
        role: 'user',
        from: 'form'
    })

    const [userLogin] = usePostUserSingInMutation()

    const captureData = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }


    const saveData = (event) => {
        event.preventDefault()

        const userData = {
            name: form.name,
            lastName: form.lastName,
            photo: form.photo,
            mail: form.mail,
            password: form.password,
            adress: form.adress,
            phone: form.phone,
            popularaty: 0,
            role: 'user',
            from: 'form'
        }

        newUser(userData)
        event.target.reset()
    }


    const [userLS, setUserLS] = useState(0)

    const saveDataSignIn = (event) => {
        event.preventDefault()

        const userData = {
            mail: form.mail,
            password: form.password
        }
        userLogin(userData)
            .then(Response => {
                if (Response.data.success === true) {
                    setUserLS(localStorage.setItem('useriInfo', JSON.stringify(Response.data.response.user)))
                    window.location.replace('/')
                }
            })

        event.target.reset()
    }



    return (
        <>
            <img onClick={handleShowModalSignIn} className='HeaderIcon HeaderIconButton' src={User} />

            <Modal show={modalState === "modalSignIn"} onHide={handleClose}>
                <Modal.Header closeButton id="ModalHeader">
                    <Modal.Title id="ModalHeaderTitle">SignIn</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="ModalBodyContainer">
                        <form onSubmit={saveDataSignIn} className='ModalForm'>
                            <input onChange={captureData} name='mail' className='ModalFormInput' placeholder='Email' type='text' required />
                            <input onChange={captureData} name='password' className='ModalFormInput' placeholder='Password' type='password' required />
                            <button className='ModalFormButton'>Sing In</button>
                        </form>
                        <div className="ModalBodyExtraContainer">
                            <p className="ModalBodyExtraButton" onClick={handleShowModalSignUp}>No account? Create one here</p>
                            <p className="ModalBodyExtraButton">Forgot Password?</p>
                        </div>
                    </div>
                </Modal.Body>
                <ModalFooter>
                    <div className="UserModalFooterContainer">
                        <h3 className="UserModalFooterTitle">Connect with Social Networks</h3>
                        <div className="UserModalFooterNetworksContainer">
                            <p className="UserModalFooterNetworksButtons">F</p>
                            <p className="UserModalFooterNetworksButtons">G</p>
                            <p className="UserModalFooterNetworksButtons">T</p>
                        </div>
                    </div>
                </ModalFooter>
            </Modal>

            <Modal show={modalState === "modalSignUp"} onHide={handleClose}>
                <Modal.Header closeButton id="ModalHeader">
                    <Modal.Title id="ModalHeaderTitle">SignUp</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="ModalBodyContainer">
                        <form className='ModalForm' onSubmit={saveData}>
                            <input onChange={captureData} className='ModalFormInput' name="name" type='text' placeholder="Name" required />
                            <input onChange={captureData} className='ModalFormInput' name="lastName" type='text' placeholder="LastName" required />
                            <input onChange={captureData} className='ModalFormInput' name="photo" type='text' placeholder="Photo URL" required />
                            <input onChange={captureData} className='ModalFormInput' name="mail" type='text' placeholder="Mail" required />
                            <input onChange={captureData} className='ModalFormInput' name="password" type='password' placeholder="Password" required />
                            <input onChange={captureData} className='ModalFormInput' name="adress" type='text' placeholder="Adress" required />
                            <input onChange={captureData} className='ModalFormInput' name="phone" type='text' placeholder="Phone" required />
                            <button className='ModalFormButton'>Sign Up</button>
                        </form>
                        <div className="ModalBodyExtraContainer">
                            <p className="ModalBodyExtraText">Already have an account?</p>
                            <p className="ModalBodyExtraButton" onClick={handleShowModalSignIn}>SignIn Here</p>
                        </div>
                    </div>
                </Modal.Body>
                <ModalFooter>
                    <div className="UserModalFooterContainer">
                        <h3 className="UserModalFooterTitle">Connect with Social Networks</h3>
                        <div className="UserModalFooterNetworksContainer">
                            <p className="UserModalFooterNetworksButtons">F</p>
                            <p className="UserModalFooterNetworksButtons">G</p>
                            <p className="UserModalFooterNetworksButtons">T</p>
                        </div>
                    </div>
                </ModalFooter>
            </Modal>

        </>
    );
}