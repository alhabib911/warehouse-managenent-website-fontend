import React from 'react';
import './AddProduct.css'

const AddProduct = () => {
    const handelAddProduct =event => {
        event.preventDefault()
        const photo =event.target.photo.value
        const name =event.target.name.value
        const details =event.target.details.value
        const price =event.target.price.value
        const quantity =event.target.quantity.value
        const supplier =event.target.supplier.value

        const product = {photo, name, details, price, quantity, supplier}

        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('Product Uploaded');
            event.target.reset()
        })
    }
    return (
        <div>
            <h2>Add your Product</h2>
            <form onSubmit={handelAddProduct} className='add-field'> 
                <input type="text" name="photo" placeholder='Photo URL'required />
                <input type="text" name="name" placeholder='Product Name' required/>
                <input type="text" name="details" placeholder='Product Details' required/>
                <input type="number" name="price" placeholder='Product Price' required/>
                <input type="number" name="quantity" placeholder='Product Quantity' required/>
                <input type="text" name="supplier" placeholder='Supplier Name' required/>
                <input className='submit-btn'  type="submit" value="Add Product" required/>
            </form>
        </div>
    );
};

export default AddProduct;