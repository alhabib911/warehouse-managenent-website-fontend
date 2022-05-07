import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel className='banner'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.zaynmyza.com/media/scandiweb/slider/z/m/zm-1440-x-448-pxl.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.zaynmyza.com/media/scandiweb/slider/b/a/banner-1440x-448-pxl-01.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.zaynmyza.com/media/scandiweb/slider/b/a/banner-1440x-448-pxl-02.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;