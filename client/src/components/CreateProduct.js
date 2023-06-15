import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateProduct = (props) => {
    const { productList, setProductList } = props;
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
                setProductList([...productList, res.data]);
                setName("");
                setPrice("");
                setDesc("");
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='form'>
            <div className='form-head'>
                <h1> Product Manager </h1>
            </div>

            <div className='form-body'>
                <form onSubmit ={ onSubmitHandler }>
                    <div className='row mb-3'>
                        <label className='col-sm-2 col-form-label'> Name </label><br />
                        <div className='col-sm-10'>
                            <input type="text" className="form-control" name='name' placeholder="Louis Vuitton handbag" onChange = {(e) => setName(e.target.value)}/>
                        </div>
                    </div>

                    <div className='row mb-3'>
                        <label className='col-sm-2 col-form-label'> Price </label><br />
                        <div className='col-sm-10'>
                            <input type="number" className="form-control" name='price' placeholder="1500" onChange = {(e) => setPrice(e.target.value)}/>
                        </div>
                    </div>

                    <div className='row mb-3'>
                        <label className='col-sm-4 col-form-label'> Description </label><br />
                        <div className='form-floating col-sm-8'>
                            <textarea className="form-control" id="floatingTextarea" placeholder="Describe your product!" onChange = {(e) => setDesc(e.target.value)}/>
                        </div>
                    </div>

                    <input type="submit" className="btn btn-outline-success"/>
                </form>
            </div>
        </div>
    )
}

export default CreateProduct;