import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    const {_id, photo, name, details, price, quantity, supplier } = props.product
    const navigate = useNavigate()
    const navigateToProductDetails = id => {
        navigate(`/inventory/${id}`)
    }



    return (
            <div className="product-details">
                <img src={photo} alt="" />
                <p><span>Product Name:</span> {name}</p>
                <p><span>Description:</span> {details}</p>
                <p><span>Price:</span> {price}<small>BDT</small></p>
                <p><span>Quantity:</span> {quantity}<small>Pcs</small> </p>
                <p><span>Supplier Name:</span> {supplier}</p>
                <button onClick={ ()=> navigateToProductDetails (_id)} type="submit">Update</button>
            </div>
    );
};

export default Product;