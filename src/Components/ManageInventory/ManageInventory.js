import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import useProduct from '../hook/useProduct';
import ManageInventorys from '../ManageInventorys/ManageInventorys';

const ManageInventory = () => {
    const [product] =useProduct()
    console.log(product);
    return (
        <div>
            <h1>Manage Inventory</h1>
            <div>
                <AddProduct></AddProduct>
            </div>
            {
                product.map(product=><ManageInventorys
                    product={product}
                ></ManageInventorys>)
            }
        </div>
    );
};

export default ManageInventory;