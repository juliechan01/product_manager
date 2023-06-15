import React, { useState } from 'react';
import CreateProduct from '../components/CreateProduct';
import AllProducts from '../components/AllProducts';

const Main = (props) => {
    const [ productList, setProductList ] = useState([]);

    const removeFromDom = (id) => {
        setProductList(productList.filter(product => product._id != id));
    }

    return (
        <div>
            <CreateProduct productList={productList} setProductList={setProductList} />
            <hr />
            <AllProducts productList={productList} setProductList={setProductList} removeFromDom={removeFromDom}/>
        </div>
    )
}

export default Main;