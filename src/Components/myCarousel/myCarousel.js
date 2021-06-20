import React from 'react';


import {Carousel} from 'react-bootstrap';
import image1 from '../../images/hobby-1.jpg';
import image2 from '../../images/hobby-2..jpeg';
import image3 from '../../images/hobby-3.jpg';

function CarouselContainer() {
    return (
        <div className="carousel_container"> 
            <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100 myImg"
                src={image2}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Create Hobby</h3>
                <p>Give time to your own hobby according to time.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100 myImg"
                src={image1}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Edit Hobby</h3>
                <p>You can edit your own hobby with just a click</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 myImg"
                src={image3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Delete Hobby</h3>
                <p>If the hobby doesn't suit you, you can delete the hobby</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselContainer;
