import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Update = (props) => {
    const {id} = useParams();
    const [ name, setName ] = useState();
    const [ price, setPrice ] = useState();
    const [ desc, setDesc ] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
        .then(res => {
            setName(res.data.name);
            setPrice(res.data.price);
            setDesc(res.data.desc);
        })
        .catch(err => console.log(err))
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/products/' + id, {
            name,
            price,
            desc
        })
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='form'>
            <div className='form-head'>
                <h2>Update a Product</h2>
            </div>

            <div className='form-body'>
                <form onSubmit = {updateProduct}>
                    <div className='row mb-3'>
                        <label className='col-sm-2 col-form-label'> Name </label><br />
                        <div className='col-sm-10'>
                            <input type="text" className='form-control' name='name' value={name} onChange = {(e) => { setName(e.target.value) }}/>
                        </div>
                    </div>

                    <div className='row mb-3'>
                        <label className='col-sm-2 col-form-label'> Price </label><br />
                        <div className='col-sm-10'>
                            <input type="number" className='form-control' name='price' value={price} onChange = {(e) => { setPrice(e.target.value) }}/>
                        </div>
                    </div>

                    <div className='row mb-3'>
                        <label className='col-sm-4 col-form-label'> Description </label><br />
                        <div className='form-floating col-sm-8'>
                            <textarea className='form-control' id='floatingTextarea' value={desc} onChange = {(e) => { setDesc(e.target.value) }}/>
                        </div>
                    </div>

                    <input type="submit" className='btn btn-outline-info'/>
                </form>
            </div>
        </div>
    )

}

export default Update;