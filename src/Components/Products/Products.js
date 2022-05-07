import React from 'react';
import useProduct from '../hook/useProduct';
import Product from '../Product/Product';

const Products = () => {
    const [product] = useProduct()
    return (
        <div className="product-container">
            {
                product.map(product=> <Product
                    product={product}
                ></Product>)
            }
        </div>
    );
};

export default Products;

