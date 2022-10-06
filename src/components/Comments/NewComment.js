import { useState } from "react"
import { useDispatch } from "react-redux"
import { addComment } from "../../features/slices/commentsSlice"
import "./Comments.css"


export default function NewComment() {

    const [commentary, setCommentary] = useState({
        comment: ""
    })

    const dispatch = useDispatch()

    const handleChange = e => {
        setCommentary({
            ...commentary,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(commentary)
        dispatch(addComment({
            ...commentary,
            _id: Math.floor(Math.random() * 200),
            user: {
                name: "Comprador",
                mail: "comprador@gmail.com",
                photo: "https://pbs.twimg.com/profile_images/1468801620821483521/hStJB4ET_400x400.jpg"
            }
        }))
        e.target.reset()
    }

    return (
        <form className="NuevoComentarioContainer" onSubmit={handleSubmit}>
            <div className="NuevoComentario">
                <textarea className="ComentarioTextarea" onChange={handleChange} name="comment" placeholder="Haz tu pregunta aqui.." />
                <button className="ComentarioButton">Enviar</button>
            </div>
        </form>
    )
}