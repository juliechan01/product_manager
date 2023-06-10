import React, { useState } from 'react';
import axios from 'axios';
import bootstrap from 'react-bootstrap';

const ProductForm = () => {
    const [ name, setName ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ desc, setDesc ] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            name,
            price,
            desc
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1> Product Manager </h1>
            <form onSubmit ={ onSubmitHandler }>
                <p>
                    <label> Name </label><br />
                    <input type="text" onChange = {(e) => setName(e.target.value)}/>
                </p>

                <p>
                    <label> Price </label><br />
                    <input type="number" onChange = {(e) => setPrice(e.target.value)}/>
                </p>

                <p>
                    <label> Description </label><br />
                    <input type="text" onChange = {(e) => setDesc(e.target.value)}/>
                </p>

                <input type="submit"/>
            </form>
        </div>
    )
}

export default ProductForm;