import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"



export default function Layout (props){
return (
    <>
    <Header className="container"/>
       {props.children}
    <Footer/>
    </>
)}