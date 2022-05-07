import React from 'react';
import { Link } from 'react-router-dom';
// import AddProduct from '../AddProduct/AddProduct';
import useProduct from '../hook/useProduct';
import ManageInventorys from '../ManageInventorys/ManageInventorys';
import './ManageInventory.css'

const ManageInventory = () => {
    const [product] = useProduct()
    console.log(product);
    return (
        <div>
            <h1 className='manage-title'>Manage Inventory</h1>
            <div className='addproduct-button'>
                <Link className='add-product-btn' to='/addproduct'>Add Your Product</Link>
            </div>
            <div>
                {
                    product.map(product => <ManageInventorys
                        product={product}
                    ></ManageInventorys>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;