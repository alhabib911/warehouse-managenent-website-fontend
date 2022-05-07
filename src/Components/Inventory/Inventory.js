import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useProduct from '../hook/useProduct';
import { FiEdit } from 'react-icons/fi'
import './Inventory.css'

const Inventory = () => {

    const { inventoryId } = useParams()
    console.log(inventoryId);
    const [product, SetProduct] = useProduct()
    const singleProduct = product.find((product) => product._id == inventoryId)

    
    return (
        <div className='inventory-container'>
            <div className='inventory-product'>
                {/* <p>{singleProduct?._id}</p> */}
                <img src={singleProduct?.photo} alt="" />
                <h4>{singleProduct?.name}</h4>
                <p>{singleProduct?.details}</p>
                <div className='inventory-count'>
                    <h5>Price: {singleProduct?.price}<small>BDT</small> </h5>
                    <h5>Quantity: {singleProduct?.quantity}</h5>
                    <h5>Supplier Name: {singleProduct?.supplier}</h5>
                </div>
                <button className='delivered-btn' type="submit">Delivered</button>
                <Link className='edit-btn' to={`/update/${inventoryId}`}> <FiEdit></FiEdit> EDIT</Link>
            </div>
        </div>
    );
};

export default Inventory;