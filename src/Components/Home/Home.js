import React from 'react';
import useProduct from '../hook/useProduct';
import Product from '../Product/Product';


const Home = () => {
    const [product] =useProduct()
    return (
        <div>
            <h2>This is Home</h2>
            <div className="product-container">
            {
                product.slice(0, 6).map(product=> <Product
                    product={product}
                ></Product>)
            }
            </div>
        </div>
    );
};

export default Home;