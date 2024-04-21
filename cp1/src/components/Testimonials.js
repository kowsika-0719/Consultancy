import React from 'react';
import './Testimonials.css';
import { Link } from 'react-scroll';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import firstre from '../assets/firstre.png';
import secondre from '../assets/secondre.png';
import thirdre from '../assets/thirdre.png';
function Testimonials() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <>
            <div className='test'>
                <p>OUR MISSION</p>
                <h1>To offer superior quality products by</h1>
                <h1>following the best business practices</h1>
                <h1>resulting in <span style={{ color:' rgb(7, 154, 246)'}}> employee and customer</span>  </h1>
                <h1><span style={{ color:' rgb(7, 154, 246)'}}> satisfaction.</span></h1>

               <p>HAPPY CUSTOMERS</p>
               <h1>What our customers has to say</h1>
            </div>

            <Slider {...settings}>
                <div>
                    <img src={firstre} alt="Review 1" />
                </div>
                <div>
                    <img src={secondre} alt="Review 2" />
                </div>
                <div>
                    <img src={thirdre} alt="Review 2" />
                </div>
                {/* Add more review images as needed */}
            </Slider>
        </>
    );
}

export default Testimonials;
