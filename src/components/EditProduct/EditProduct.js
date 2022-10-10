import { useState } from "react"
import { useGetItinerariesUserQuery, useRemoveItineraryMutation } from "../features/citiesAPI"
import '../styles/ItineraryUser.css'
import ModalEdit from "./Modals/ModalEdit"


export default function EventProduct() {

    const [input, setInput] = useState(false)
    const [idel, setIdel] = useState({})
   

    const [destroyItinerary] = useRemoveItineraryMutation()
    const {
        data: elem,
        refetch:comeback

    } = useGetItinerariesUserQuery(id)


    const handleClose = () => {
        setInput(false)
        comeback()

    }


    const handleDelete = (e) => {
        let remove = e.target.value
        destroyItinerary(remove)
            .unwrap()
            .then(() => {})
            .then((error) => {
                console.log(error)
            })
        comeback()
    }



    let cityShow = (city) => (
        <div className="ItinerariesUser">
            <button onClick={handleDelete} value={city._id} className='buttonDelete'>x</button>
            <h3 className="citiItiner"> {city.name}</h3>
            <br></br>
            <hr></hr>
            <h4 className="userItiner">User : {city.user.name}</h4>
            <hr></hr>
            <br></br>
            <p >City:   {city.city.city}</p>
            <p >Price: $ {city.price}</p>
            <p >Likes:   {city.likes}</p>
            <p >Tags:  {city.tags}</p>
            <p >Duration: {city.duration}</p>

            <button onClick={() => setIdel({
                id: city._id,
                user: city.user.name,
                likes: city.likes,
                cities: city.city.city,
                cityId: city.city._id,
                userId: city.user._id
            }) & setInput(true)} className='buttonEdit'>Edit</button>
        </div>

    )

    return (
        <div>
            <h1 className="titleIti">Itineraries</h1>
            <div className="container">

                {input ? <ModalEdit elemento={idel} onclose={handleClose} /> : elem ? elem.response.map(cityShow) : ''}

            </div>
        </div>


    )

}