import React from 'react';
import useProduct from '../hook/useProduct';
import Product from '../Product/Product';

const Products = () => {
    const [product] = useProduct()
    return (
        <div className="product-container">
            {
                product.map(product=> <Product
                    product={product}
                ></Product>)
            }
        </div>
    );
};

export default Products;

















































/* import React, { useEffect, useState } from 'react';
import './Products.css'

const Products = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div className='procuct-container'>
            <div className='product-details'>
                <h2>{product.length}</h2>
                <ul className='product'>
                    {
                        product.map(product => <>
                            <div className='product-details'> 
                                <img src={product.photo} alt="" /> <br />
                                <span>Product Name:</span> {product.name} <br />
                                <span>Discription:</span> {product.details} <br />
                                <span>Price</span> {product.price} <small>BDT</small> <br />
                                <span>Quantity:</span> {product.quantity} <small>pcs</small> <br />
                                <span>Supplier:</span> {product.supplier}
                            </div>
                        </>)
                    }
                </ul>
            </div>

        </div>
    );
};

export default Products; */