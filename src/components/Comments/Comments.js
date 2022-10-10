import "./Comments.css"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addResponse } from "../../features/slices/commentsSlice"

export default function Comments(props) {
    const [respuesta, setRespuesta] = useState({
        response: ""
    })
    const comentario = props.data
    const stateRol = props.rol
    const id = comentario._id
    const dispatch = useDispatch()
    // console.log(comentario)

    const handleChange = e => {
        setRespuesta({
            ...respuesta,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(addResponse({
            ...respuesta,
            _id: id,
            user: comentario.user,
            comment: comentario.comment,
            date: comentario.date,
            seller: {
                name: "Vendedor",
                mail: "vendedor@gmail.com",
                photo: "https://pbs.twimg.com/profile_images/1468801620821483521/hStJB4ET_400x400.jpg"
            }
        }))
    }


    const rolPrint = () => {
        if (stateRol === "Vendedor") {
            if (!comentario.response) {
                return (
                    <form className="CajaRespuesta" onSubmit={handleSubmit}>
                        <textarea className="ComentarioTextarea" onChange={handleChange} name="response" placeholder="Responde a la pregunta aqui.." />
                        <button className="ComentarioButton">Enviar</button>
                    </form>
                )

            }
            else {
                return (
                    <div className="CajaRespuesta">
                        <p>{comentario.response}</p>
                    </div>
                )
            }
        }
        else {
            if (comentario.response) {
                return (
                    <div className="CajaRespuesta">
                        <p>{comentario.response}</p>
                    </div>
                )
            }
        }
    }


    return (
        <div className="CajaComentarios">
            <div className="CajaPregunta">
                <p>{comentario.comment}</p>
                {/* <p>{comentario.user.name}</p> */}
            </div>
            {rolPrint()}
        </div>
    )

}