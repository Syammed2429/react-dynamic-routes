import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
    const productId = useParams()
    const Id = productId.id;

    const [product, setProduct] = React.useState([]);

    React.useEffect(() => {
        getProduct()
    }, [productId]);

    const getProduct = async () => {
        const { data } = await axios.get("http://localhost:3001/data", {
            params: {
                id: Id
            }
        })
        setProduct(data)
    }


    return Id > 10 ? "Product does not exist" : (
        <div>
            <h1>Product Details</h1>
            <div>
                {product.map((e) => (
                    <div
                        className=" card text-secondary shadow border-warning   m-4 p-4"
                        key={e.id}
                    >
                        <p>Name : {e.name}</p>
                        <p>Price : {e.price}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}

export { ProductDetails }
