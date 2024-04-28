import React from 'react';
import './About.css';
import { Link } from 'react-scroll';
import logo from '../assets/logo.jpg'; // Adjust the path according to your project structure

function About() {
    return (
        <>
            <div className='about'>
                <div className="logo-container">
                    <img src={logo} alt="Sathyam Traders Logo" className="logo" /> {/* Inserting the logo */}
                </div>
                <div className="about1">
                    <h1>SATHYAM TRADERS</h1>
                    <h2>Our Vision</h2>
                    <pre></pre>
                    <p>To continually expand and grow to fabricate the highest standards of wire and mesh through </p>
                    <p ><span style={{ color: ' rgb(7, 154, 246)' }}>quality and commitment..</span></p>
                    <Link to='prod'><button>Explore Our Products</button></Link>
                </div>
                <div className='about2'>
                    <div className='abo'>
                        <h1><span style={{ color: '  rgba(7, 154, 246, 0.9)' }}>5+ years </span>of expertise</h1>
                        <br></br>
                        <p>
                            Instituted in the year <span style={{ color: '  rgba(7, 154, 246, 0.9)' }}>of 2018,Sathyam Traders</span> is in the line of work of manufacturing and trading of first-rate products emphasizing on high strength, durability and long-lastingness with high resistance to impact. We are deep-rooted with providing top-notch quality for customer contentment.
                            Our vision is to build a clientele by persistent and steady work on adopting the advancements that enter the industry.
                        </p>
                    </div>
                    <div className='abo1'>
                        <h1>A march towards Safety</h1>
                        <p>Our success and growth is the reflection of unmatched quality that we provide in our range of products. We follow strict quality control measures for each step of the production process, right from top-quality raw material, advanced machinery, skilled and trained professionals to strict quality checks against several parameters.</p>
                        <Link to='prod'><button>Start Your Journey With Us</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
