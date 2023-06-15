import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OneProduct = (props) => {
    const { id } = useParams();
    const [oneProduct, setOneProduct] = useState({});

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
        <div className="oneProduct-component">
            <h2 className='head'>{oneProduct.name}</h2>
            <p>Price: ${oneProduct.price}</p>
            <p>Description: {oneProduct.desc}</p>
        </div>
    );
};

export default OneProduct;