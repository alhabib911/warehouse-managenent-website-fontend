import React from 'react';

const Myitems = (props) => {
    const { _id, photo, name, details, price, quantity, supplier } = props.product
    console.log(props);
    return (
            <div className='inventory-details'>
                <img src={photo} alt="" />
                <h5>{name}</h5>
                <p className='details'><span>Description:</span> {details}</p>
                <p><span>Price:</span> {price}<small>BDT</small></p>
                <p><span>Quantity:</span> {quantity}<small>Pcs</small> </p>
                <p><span>Supplier Name:</span> {supplier}</p>
            </div>
    );
};

export default Myitems;