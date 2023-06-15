import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AllProducts = (props) => {
    const { productList, setProductList, removeFromDom } = props;

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                removeFromDom(id)
                console.log("Deleting...")
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then((res) => {
            console.log(res.data);
            setProductList(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [productList]);

    return (
        <div>
            <h1 className='head'>All Products</h1>
            {productList.length > 0 ? (
                productList.map((product, index) => (
                    <div key={index} className='block'>
                        <div className='product-name'>
                            <Link to={`/products/${product._id}`} className='text-decoration-none'>
                                <h3>{product.name}</h3>
                            </Link>
                        </div>
                        <Link to={`/products/edit/${product._id}`}>
                            Edit
                        </Link>
                        <button onClick={(e) => {deleteProduct(product._id)}} className='btn btn-outline-danger'>
                            Delete
                        </button>
                    </div>))
            ) : (
                <p>No products were found.</p>
            )}
        </div>
    );
};

export default AllProducts;