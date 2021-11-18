import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './products.css'


const Products = () => {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const { data } = await axios.get("http://localhost:3001/data");
        // console.log('data:', data)
        setProducts(data);

    }

    return (
        <div>
            <h1 className="text-success text-uppercase ">Products</h1>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                <div>
                    {products.map((e) => (
                        <div key={e.id}>
                            <Link to={`/product/${e.id}`}>  <div>

                                <tr>

                                    <td>
                                        <p className="text-white "> {e.name}</p>
                                    </td>
                                    <td className="right">

                                        <p className="text-white "> {e.price}</p>

                                    </td>
                                </tr>
                            </div>
                            </Link>



                        </div>
                    ))}
                </div>
            </table>


        </div>
    )
}

export { Products }
