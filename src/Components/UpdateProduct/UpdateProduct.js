import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UpdateProduct.css'

const UpdateProduct = () => {
    const { id } = useParams()
    // console.log(id);
    const [product, setProduct] = useState({})

    useEffect(() => {
        const url = `https://thawing-wildwood-54865.herokuapp.com/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])



    const handelUpdateProduct = event => {
        event.preventDefault()
        const quantity = event.target.quantity.value
        console.log(quantity);
        const updateProduct = { quantity }
        // console.log(updateProduct)
        const currentProduct = product.quantity
        console.log(currentProduct);
        const updateAdd = currentProduct + quantity
        console.log(updateAdd);


        const url = `https://thawing-wildwood-54865.herokuapp.com/product/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Product Uploaded');
                event.target.reset()
            })
    }
    return (
        <div className="update-container">
            <div className='update-area'>
                <div className="product-detail">
                    <h5>Product Name: {product.name}</h5>
                    <p>Quantity: {product.quantity}<small>Pcs</small> </p>
                </div>
                <div className='update-form'>
                    <form onSubmit={handelUpdateProduct}>
                        <label htmlFor="quantity">Add Stock</label> <br />
                        <input className='qty-field' type="number" name="quantity" id="" placeholder='Add Quantity' required /> <br /> <br />
                        <input className='update-btn' type="submit" value="Update" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;