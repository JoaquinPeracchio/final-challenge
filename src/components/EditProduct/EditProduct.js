 import { useState } from "react"
 import { useGetProductsUserQuery } from "../../features/actions/ApiMethod"
 import { useRemoveProductMutation } from "../../features/actions/ApiMethod"
import ModalEdit from "./ModalEdit/ModalEdit"

 export default function EventProduct() {

    const [destroyProduct] = useRemoveProductMutation()
     const [input, setInput] = useState(false)
     const [idel, setIdel] = useState({})
   

 
     const {
         data: elem,
         refetch:comeback

     } = useGetProductsUserQuery('6345fbd9bb7e879c60015fe8')

    //  console.log(elem)

     const handleClose = () => {
         setInput(false)
         comeback()

     }


     const handleDelete = (e) => {
         let remove = e.target.value
          destroyProduct(remove)
              .unwrap()
              .then(() => {console.log('deleted')})
              .then((error) => {
                  console.log(error)
              })
         comeback()
     }
    //  user: '',
    //  image: photo,
    //  name: name,
    //  variety : variety,
    //  stock: stock,
    //  price: price,
    //  type: type,
    //  quantity :quantity,
    //  date: dayMonth

    //  console.log(idel)
     let productShow = (product) => (
         <div className="productUser">
            <hr></hr>
             <button onClick={handleDelete} value={product._id} className='buttonDelete'>x</button>
             <hr></hr>
             <h4 className="userProduct">User : {product.user.name}</h4>
             <hr></hr>
             <h3 className="nameProduct"> {product.name}</h3>
             <br></br>
             <p >Price: $ {product.price}</p>
             <p >Quantity min:   {product.quantitymin}</p>
             <p >Type:  {product.type}</p>
             <p>Stock : {product.stock}</p>
             <p>Variety : {product.variety}</p>

             <button onClick={() => setIdel({
                 id: product._id,
                 user: product.user.name,
                 userId: product.user._id
             }) & setInput(true)} className='buttonEdit'>Edit</button>
         </div>

     )
     return (
         <div>
             <h1 className="titleIti">My Products</h1>
             <div className="container">

             {input ? <ModalEdit elemento={idel} onclose={handleClose} /> : elem ? elem.response.map(productShow) : ''}

             </div>
         </div>


     )

 }