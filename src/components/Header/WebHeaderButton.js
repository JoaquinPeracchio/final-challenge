import React, { useState } from 'react'
import { Link as LinkRouter } from "react-router-dom";
import SignInModal from '../Sign-In/SignInModal';
import { usePostUserSingOutMutation } from "../../features/actions/userApi";
import "./Header.css";
import Admin from "../../assets/icons/admin.png"
import Fav from "../../assets/icons/fav.png"
import Logout from "../../assets/icons/logout.png"
import Thisuser from "../../assets/icons/thisuser.png"

export default function WebHeaderButton() {
    const [singOut] = usePostUserSingOutMutation()
    let User = JSON.parse(localStorage.getItem("useriInfo"));
    const [open, setOpen] = useState(false);
    const HandleOpen = () => {
        if (open) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    };
    console.log(open)

    const clearlocal = () => {
        singOut(User.mail)
        localStorage.clear();
        window.location.reload(true)
    };

    const userlogged = () => {
        if (!User) {
            return <SignInModal />
        } else {
            return (
                <div>
                    <div className="Header-menu">
                        {open && User.role === 'admin' ? (
                            <ul className="Header-profileMenu">
                                <li className="HeaderMenuLink" onClick={HandleOpen}>
                                    <img className="HeaderIconLink" src={Thisuser} />
                                    <LinkRouter className="HeaderMenuLink" to="/user">
                                        {User.name} {User.lastName}
                                    </LinkRouter>
                                </li>
                                <li className="HeaderMenuLink" onClick={clearlocal}>
                                    <img className="HeaderIconLink" src={Logout} onClick={HandleOpen} />
                                    Sign Out</li>
                                <li className="HeaderMenuLink" onClick={HandleOpen}>
                                    <img className="HeaderIconLink" src={Admin} />
                                    New Admin</li>
                                <li className="HeaderMenuLink" onClick={HandleOpen}>
                                    <img className="HeaderIconLink" src={Fav} />
                                    Favorites</li>
                            </ul>
                        ) : open && User.role === 'user' ? (
                            <ul className="Header-profileMenu">
                                <li className="HeaderMenuLink" onClick={HandleOpen}>
                                    <img className="HeaderIconLink" src={Thisuser} />
                                    <LinkRouter className="HeaderMenuLink" to="/profile">
                                        {User.name} {User.lastName}
                                    </LinkRouter>
                                </li>
                                <li className="HeaderMenuLink" onClick={clearlocal}>
                                    <img className="HeaderIconLink" src={Logout} onClick={HandleOpen} />
                                    Sign Out</li>
                                <li className="HeaderMenuLink" onClick={HandleOpen}>
                                    <img className="HeaderIconLink" src={Fav} />
                                    Favorites</li>
                            </ul>
                        ) : null}
                    </div>
                    <img onClick={HandleOpen} className="HeaderIconButton UserIcon" src={User.photo} alt="acceso" />
                </div>
            );
        }
    };



    return (userlogged())
}
