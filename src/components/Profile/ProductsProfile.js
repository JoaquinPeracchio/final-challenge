import "./ProductsProfile.css"

export default function ProductsProfile(props) {

    const product = props.data

    console.log(props.data)

    return (
        <li>
            <img className="asd" src={product.photo} />
            <p>{product.variety}</p>
            <p>{product.name}</p>
            <p>{product.type}</p>
            <p>${product.price} xKG</p>
            <p>{product.stock}</p>
            <button>delete product</button>
        </li>
    );
}