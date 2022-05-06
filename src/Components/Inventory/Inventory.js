import React from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../hook/useProduct';
import './Inventory.css'

const Inventory = () => {
    const { inventoryId } = useParams()
    // console.log(inventoryId);
    const [product, SetProduct] = useProduct()
    const singleProduct = product.find((product) => product._id == inventoryId)
    console.log(singleProduct);
    return (
        <div>
            <div className='inventory-product'>
                <img src={singleProduct?.photo} alt="" />
                <h4>{singleProduct?.name}</h4>
                <p>{singleProduct?.details}</p>
                <div className='inventory-count'>
                    <h5>Price: {singleProduct?.price}<small>BDT</small> </h5>
                    <h5>Quantity: {singleProduct?.quantity}</h5>
                    <h5>Supplier Name: {singleProduct?.supplier}</h5>
                </div>
                <button className='delivered-btn' type="submit">Delivered</button>
            </div>
            <div className='update-field'>
                <form> 
                    <label htmlFor="quantity">Add Stock</label> <br />
                    <input type="number" name="quantity" id="" placeholder='Add Quantity' /> <br /> <br />
                    <input className='submit-btn' type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default Inventory;