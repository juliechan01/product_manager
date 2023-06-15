import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const OneProduct = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ oneProduct, setOneProduct ] = useState({});

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                // removeFromDom(id);
                console.log("Deleting...")
                navigate('/'); // REDIRECT TO MAIN VIEW
            })
            .catch(err => console.log(err))
        }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setOneProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div className="block">
            <h2 className='head'>{oneProduct.name}</h2>
            <p>Price: ${oneProduct.price}</p>
            <p>Description: {oneProduct.desc}</p>
            <button onClick={(e) => {deleteProduct(id)}} className='btn btn-outline-danger'>
                Delete
            </button>
        </div>
    );
};

export default OneProduct;