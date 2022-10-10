import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { useCreateItineraryMutation } from '../../features/citiesAPI';
export default function ModalCreate({ children, onClose }) {

  const [createItinerary] = useCreateItineraryMutation()
  const userSession = JSON.parse(localStorage.getItem('user'))
  const [photo, setPhoto] = useState()
  const [price, setPrice] = useState()
  const [tags, setTags] = useState()
  const [name, setName] = useState()
  const [edit, setEdit] = useState()

  const [stock, setStock] = useState(0)
  const [quantity,setQuantity]=useState()
  const [variety,setVariety]=useState()

  const current = new Date()
  const dayMonth = `${current.getDate()}/${current.getMonth()}/${current.getFullYear}`


  const handlePhoto = (e) => {
    setPhoto(e.target.value)
  }

  const handleDuration = (e) => {
    setDuration(e.target.value)

  }
  const handleTags = (e) => {
    setTags(e.target.value)
  }

  const handleName = (e) => {
    setName(e.target.value)

  }
  const handlePrice = (e) => {
    setPrice(e.target.value)

  }



  useEffect(() => {
    let objCreate = {
      user: children.idUser,
      name: name,

      variety : variety,
      stock: stock,
      price: price,
      type: type,
      quantity :quantity,
      date: dayMonth



    }

    setEdit(objCreate)

  }, [photo, price, tags, name, duration])






  const handleSubmit = (e) => {
    e.preventDefault()
    //mandarlo al controlador create

    if (edit.name.length <= 1) {
      Swal.fire({
        title: 'Name Failed',
        text: 'please verify that the name has more than 2 letters and does not include numbers'
      })
    } else {
      createItinerary(edit)
        .unwrap()
        .then(() => { })
        .then((error) => {
          console.log(error)
        })
      Swal.fire({
        icon: 'success',
        title: 'Registred with success',
        text: 'please look and read or create yours itineraries',
        confirmButtonText: 'Do It'
      })


    }

  }



  return (
    <div className='createItiner'>

      <h3 className="createH3">Create your New Product </h3>
      <p >Name Of Publication </p>

      <input type='text' onChange={handleName}></input>
      <p >Name Of Product </p>
      <input type='text' onChange={e =>setVariety(e.target.value)}></input>


      <h4 className="createH4">User :   {userSession.name} </h4>


      <p >City   {children.city} </p>

      <p >Image  </p>
      <input type='text' onChange={handlePhoto}></input>
      <p >Price </p>
      <input type='Number' onChange={handlePrice}></input>


      <p >stock  </p>
      <input type='Number' onChange={e => setStock(e.target.value)} ></input>
      <p >quantity for kg  </p>
      <input type='Number' onChange={e => setQuantity(e.target.value)} ></input>
      <p >Type</p>
      <select onChange={setType(option.target.value)}>
        <option value='Fruit'>Fruit</option>
        <option value='Vegetable'>Vegetable</option>
        <option value='Other'>Other</option>
      </select>
      <p>Date : {dayMonth}</p>

      <div className='createButtons'>

        <button onClick={handleSubmit} className='save'>Save</button>
        <button onClick={onClose} className='close'>Close</button>
      </div>
    </div>
  )
}
