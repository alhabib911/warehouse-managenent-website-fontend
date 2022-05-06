import React, { useState } from 'react';
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
        </div>
    );
};

export default ManageInventorys;