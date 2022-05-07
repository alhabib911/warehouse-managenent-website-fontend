import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import FirstSection from '../FirstSection/FirstSection';
import useProduct from '../hook/useProduct';
import Product from '../Product/Product';
import SecoundSection from '../SecoundSection/SecoundSection';
import './Home.css'


const Home = () => {
    const [product] = useProduct()
    return (
        <div className='home-container'>
            <div className="banner">
                <Banner></Banner>
            </div>
            <div className="first-section">
                <FirstSection></FirstSection>
            </div>
            <div className='special-text'>
                <h2>SPECIAL ITEM</h2>

            </div>
            <div className="product-container">
                {
                    product.slice(0, 6).map(product => <Product
                        product={product}
                    ></Product>)
                }
            </div>
            <div className='button-container' >
                <Link className='al-product-button' to='/manage'> See All Products</Link>
            </div>
            <div>
                <SecoundSection></SecoundSection>
            </div>

        </div>
    );
};

export default Home;