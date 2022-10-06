import { useState } from "react"
import { useSelector } from "react-redux"
import Comments from "./Comments"
import NewComment from "./NewComment"


export default function ShowComments() {

    const comment = useSelector(state => state.comments)
    const [vendedor, setVendedor] = useState(false)
    const [rol, setRol] = useState("Comprador")
    console.log(comment)

    const selectRol = () => {
        if (!vendedor) {
            setRol("Vendedor")
        }
        else {
            setRol("Comprador")
        }
    }

    const selectVendedor = () => {
        setVendedor(!vendedor);
        selectRol()
    }

    const rolResponse = () => {
        if (rol === "Comprador") {
            return <NewComment />
        }
    }


    return (
        <div className="ShowComments">
            <h1>comentarios: </h1>
            <button onClick={selectVendedor}>Modo Vendedor</button>
            <h2>el rol actual es: {rol}</h2>
            {comment?.map(comment => <Comments key={comment._id} name={comment._id} data={comment} rol={rol} />)}
            {rolResponse()}
        </div>
    )
}