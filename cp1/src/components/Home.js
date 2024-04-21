import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from './Navbar';
import './Home.css';

import About from './About';
import Products from './Products';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        "https://happyvalentinesday2020.online/pics/www.walcoom.com/img/pro/farm-barbed-wire-fence.jpg",
        "https://www.maimoonrazorwire.com/img/Property%20Fencing.jpg",
    ];

    const captions = [
        "Keeping your assets safe for over one decades",
        "Premium quality fencing at affordable pricing"
    ];

    const nextSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 3000); // Change image every 3 seconds (adjust as needed)

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    const handleDotClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <>
            <Navbar />
            <div className='home'>
                <div className="slideshow-container">
                    <img src={images[currentImageIndex]} alt="" />
                    <div className="caption">{captions[currentImageIndex]}</div>
                    {/* <Link to='prod' className="button-over-caption"><button>Explore Our Products</button></Link> */}
                    <button><Link to='prod' className="button-over-caption">Explore Our Solutions</Link></button>
                </div>
                <div className="dot-container">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                        ></span>
                    ))}
                </div>
            </div>

            <About />
            <Products />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;
