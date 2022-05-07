import React from 'react';
import './SecoundSection.css'
import Banner from '../../Image/Banner.jpg'

const SecoundSection = () => {
    return (
        <div className='secound-cont'>
            <div className="secound-title">
                <h1>SPOTLIGHT</h1>
            </div>
            <div className="secound-container">
                <div className="left-area">
                    <img src={Banner} alt="" />
                </div>
                <div className="right-area">
                    <h1>BOSS LADY <br /> LIP COLLECTION</h1>
                    <p>BUDGE-ME-NOT LIPSTICKS Choose from the sensational shades of 100% Vegetarian Transfer-Proof Matte Lipsticks that neither smudge nor budge, all day long.</p>
                </div>
            </div>
        </div>
    );
};

export default SecoundSection;