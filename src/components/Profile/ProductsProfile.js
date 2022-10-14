import DeleteProductModal from "../EditProduct/DeleteProductModal";
import EditProductModal from "../EditProduct/EditProductModal";
import "./ProductsProfile.css"

export default function ProductsProfile(props) {

    const product = props.data

    // console.log(props.data)

    return (
        <div key={product.alt} className="ProductProfile" style={{ width: '18rem' }}>
            <div className='img-container-product'>
                <img className="imgCarousel" src={product.photo} />
            </div>
            <div className='body-card-container'>
                <div className='name-product'>{product.variety}</div>
                <div>{product.name}</div>
                <div className='user-name'>stock: {product.stock} kg</div>
                <div className='card-body'> ${product.price}.00 kg</div>
            </div>
            <div className="ProductButtonContainer">
                <EditProductModal data={product} />
                <DeleteProductModal data={product} />
            </div>
        </div>
    );
}