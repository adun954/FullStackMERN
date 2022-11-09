import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {
  const [products, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(false);
  
  useEffect(()=>{
      axios.get('http://localhost:8000/api/products')
          .then(res=>{
              setProduct(res.data);
              setLoaded(true);
          })
          .catch(err => console.error(err));
  },[]);

    return (
        <div>
          <ProductForm/>
          <hr/>
          {/* sends the list of products to show on the jsx */}
          {loaded && <ProductList products={products}/>}
        </div>
    )
}

export default Main;