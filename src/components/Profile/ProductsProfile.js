

export default function ProductsProfile(props) {

    const product = props.data

    console.log(props.data)

    return (
        <>
            <li>{product.name}</li>
        </>
    );
}