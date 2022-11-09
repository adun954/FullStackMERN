import React, { useState } from  'react';
import axios from 'axios';
    
    
const Productmanager = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    
    const onSubmitHandler = e => {

        e.preventDefault();
        // make a post request to create a new product
        axios.post('http://localhost:8000/api/products/new', {
            title,
            price,
            description
    })
    
        .then(res=>console.log(res))
        .catch(err=>console.log(err))

    };
    
    return(
        <form onSubmit={ onSubmitHandler }>
            <div>
                <label>Title: </label> 
                <input type="text" onChange={ (e) => setTitle(e.target.value) } /> 
            </div>
            <div>
                <label>Price: </label> 
                <input type="number" class="currency" onChange={ (e) => setPrice(e.target.value) } />
            </div>
            <div>
                <label>Description: </label> 
                <input type="text" onChange={ (e) => setDescription(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default Productmanager;