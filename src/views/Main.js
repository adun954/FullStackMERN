import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

const Main = (props) => {
  const [products, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(false);
  
  useEffect(()=>{
      axios.get('http://localhost:8000/api/products')
          .then(res=>{
            // must pass into the controller in the server file of what you are passing
              setProduct(res.data.Product);
              setLoaded(true);
          })
          .catch(err => console.error(err));
  },[]);

  const removeFromDom = productId => {
    setProduct(products.filter(product => product._id != productId));

  }
  

    return (
        <div>
          <h1>All Products</h1>
          <ProductForm/>
          <hr/>
          {/* sends the list of products to show on the jsx */}
          {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;