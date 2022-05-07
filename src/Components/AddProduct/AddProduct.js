import React from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './AddProduct.css'

const AddProduct = () => {
    const handelAddProduct = event => {
        event.preventDefault()
        const photo = event.target.photo.value
        const name = event.target.name.value
        const details = event.target.details.value
        const price = event.target.price.value
        const quantity = event.target.quantity.value
        const supplier = event.target.supplier.value

        const product = { photo, name, details, price, quantity, supplier }

        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(() => {
                toast('Product Added');
                event.target.reset()
            })
    }
    return (
        <div>
            <div>
                <h1 className='add-title'>Add Your Product</h1>
            </div>
            <div className='addproduct-container'>
                <div className='menu'>
                    <h2><Link className='logo-name' to='/home'>Zayn & Myza</Link></h2> <br /> <br />
                    <Link to='/manage'>All Products</Link>
                </div>
                <div>
                    <form onSubmit={handelAddProduct} className='add-field'>
                        <input type="text" name="photo" placeholder='Photo URL' required />

                        <input type="text" name="name" placeholder='Product Name' required />
                        <input type="text" name="details" placeholder='Product Details' required />
                        <input type="number" name="price" placeholder='Product Price' required />
                        <input type="number" name="quantity" placeholder='Product Quantity' required />
                        <input type="text" name="supplier" placeholder='Supplier Name' required />
                        <input className='submit-btn' type="submit" value="Add Product" required />
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddProduct;