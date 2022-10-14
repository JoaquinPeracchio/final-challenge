import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Comments from "./Comments"
import NewComment from "./NewComment"
import { useDispatch } from "react-redux"
import { fetchComments } from "../../features/slices/commentsSlice"
import { useGetCommentByIdQuery } from "../../features/actions/commentsApi"


export default function ShowComments() {

    // const comment = useSelector(state => state.comments)
    const [vendedor, setVendedor] = useState(false)
    const [rol, setRol] = useState("Comprador")
    const dispatch = useDispatch

    // dispatch(fetchComments())
    // useEffect(() => {
    // }, [])
    const { data: comment } = useGetCommentByIdQuery("633c5cf9bfdb13bdc89c4c44")

    // console.log(comment)
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
            {/* {comment?.map(comment => <Comments key={comment._id} name={comment._id} data={comment} rol={rol} />)} */}
            {rolResponse()}
        </div>
    )
}