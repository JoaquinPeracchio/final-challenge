import UserIcon from '../../assets/icons/user.png'
import SignInModal from '../Sign-In/SignInModal'
import { usePostUserSingOutMutation } from "../../features/actions/userApi";
import { Link as LinkRouter } from "react-router-dom";
import "./ResponsiveHeaderNav.css"


export default function ResponsiveHeaderNav() {

    const [singOut] = usePostUserSingOutMutation()
    let User = JSON.parse(localStorage.getItem("useriInfo"));

    const clearlocal = () => {
        singOut(User.mail)
        localStorage.clear();
        window.location.reload(true)
    };

    const userlogged = () => {
        if (!User) {
            return (
                <ul className='HeaderNavLinksContainer'>
                    <li className="HeaderNavLinkUser">

                        <div className="HeaderNavResponsiveContainer">
                            <div className="HeaderNavResponsiveUserContainer">
                                <img className='HeaderNavResponsiveUserIcon' src={UserIcon} />
                                <h4 className='HeaderNavResponsiveUserName'>Welcome</h4>
                            </div>
                            <p className='HeaderNavResponsiveText'>Create your account or log in to start shopping</p>
                        </div>

                        <div className="HeaderNavResponsiveButtonContainer">
                            <SignInModal />
                        </div>
                    </li>
                </ul>
            )
        }
        else {
            return (
                <ul className='HeaderNavLinksContainer'>
                    <li className="HeaderNavLinkUser">

                        <div className="HeaderNavResponsiveContainer">
                            <div className="HeaderNavResponsiveUserContainer">
                                <img className='HeaderNavResponsiveUserIcon' src={User.photo} />
                                <h4 className='HeaderNavResponsiveUserName'>Hello {User.name}</h4>
                            </div>
                            <p className='HeaderNavResponsiveText'>You can start shopping</p>
                        </div>

                        <div className="HeaderNavResponsiveButtonContainer">
                            <button className="HeaderNavResponsiveButton">
                                <LinkRouter className="HeaderNavResponsiveButtonLink" to="/user">Profile</LinkRouter>
                            </button>
                            <button className="HeaderNavResponsiveButton" onClick={clearlocal}>SignOut</button>
                        </div>
                    </li>
                </ul>
            )
        }
    }


    return (userlogged())
}