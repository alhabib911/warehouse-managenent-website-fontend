import React from 'react';
import './FirstSection.css'
import One from '../../Image/One.png'
import Two from '../../Image/Two.png'
import Three from '../../Image/Three.png'
import Four from '../../Image/Four.png'
import Five from '../../Image/Five.png'

const FirstSection = () => {
    return (
        <div className='first-container'>
            <div className="title-container">
                <h2>CLEAN & HALAL PRODUCTS <br />
                    TO MAKE BEAUTY & SKINCARE EFFORTLESS.</h2>
            </div>
            <div className='image-section'>
                <div className='one'>
                    <img src={One} alt="" />
                    <p>100% VEGAN</p>
                </div>
                <div className='two'>
                    <img src={Two} alt="" />
                    <p>CRUELTY FREE</p>
                </div>
                <div className='three'>
                    <img src={Three} alt="" />
                    <p>HALAL CERTIFIED</p>
                </div>
                <div className='four'>
                    <img src={Four} alt="" />
                    <p>DERMATOLOGICALLY <br /> TESTED</p>
                </div>
                <div className='five'>
                    <img src={Five} alt="" />
                    <p>NO CHEMICAL <br /> NASTIES</p>
                </div>
            </div>
            <div className="first-footer-container">
                <p>Using clean ingredients & brilliant formulas to help you meet <br />
                    the best version of yourself, every day.</p>
            </div>
        </div>
    );
};

export default FirstSection;