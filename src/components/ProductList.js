import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


    
const ProductList = (props) => {
    const { products, removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/delete/' + productId)
            .then(res =>{
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            {products.map((product, idx) =>
                {return <div key={idx}>

                    <Link to ={"/products/"+ product._id}>

                    {product.title}, {product.price}, {product.description}

                    </Link>
                    <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>
                
                </div>}
            )}
        </div>
    )
}
    
export default ProductList;