import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useProduct from '../hook/useProduct';
import { FiEdit } from 'react-icons/fi'
import './Inventory.css'
import { toast, ToastContainer } from 'react-toastify';

const Inventory = () => {

    const { inventoryId } = useParams()
    console.log(inventoryId);
    const [product, SetProduct] = useProduct()
    const singleProduct = product.find((product) => product._id == inventoryId)

    const handleDeliverd = inventoryId => {
        const proceed = window.confirm('Do you want to delete this item?')
        if(proceed){
            console.log(inventoryId.quantity - 1);
            const url = `https://thawing-wildwood-54865.herokuapp.com/product/${inventoryId}`
            fetch (url, {
                method: "PUT"
            })
            .then(res => res.json())
            .then(data=> {
                if(data.quantity - 1){
                    console.log('');
                }
            })
            .then(() => {
                toast('This Product is Deleted Reload this page');
            })
        }
    }

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
                <button onClick={()=> handleDeliverd(inventoryId)} className='delivered-btn' type="submit">Delivered</button>
                <Link className='edit-btn' to={`/update/${inventoryId}`}> <FiEdit></FiEdit> EDIT</Link>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Inventory;