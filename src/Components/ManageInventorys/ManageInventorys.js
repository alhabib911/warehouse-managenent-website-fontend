import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import './ManageInventorys.css'

const ManageInventorys = (props) => {
    const { _id, photo, name, details, price, quantity, supplier } = props.product
    const handleProductItemDelete = id => {
        const proceed = window.confirm('Do you want to delete this item?')
        if(proceed){
            console.log('delete', id);
            const url = `http://localhost:5000/product/${id}`
            fetch (url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data=> {
                if(data.deletedCount > 0){
                    console.log('deleted');
                }
            })
            .then(() => {
                toast('This Product is Deleted Reload this page');
            })
        }
    }

    return (
        <div>
            <div className='inventory-container'>
                <div className='inventory-details'>
                    <img src={photo} alt="" />
                    <h5>{name}</h5>
                    <p className='details'><span>Description:</span> {details}</p>
                    <p><span>Price:</span> {price}<small>BDT</small></p>
                    <p><span>Quantity:</span> {quantity}<small>Pcs</small> </p>
                    <p><span>Supplier Name:</span> {supplier}</p>
                    <button onClick={()=> handleProductItemDelete(_id)}>Delete</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ManageInventorys;