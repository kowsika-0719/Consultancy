import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-scroll';
import './Prod1.css';

function Prod7() {
  return (
    <div className='total'>
      {/* <p><span style={{ color:' rgb(7, 154, 246)'}}>SOLUTIONS</span></p> */}
      
      <h1>PLASTIC WIRE MESH FENCING</h1>
      <div className='pr1'>
        <div className='con1'>
          {/* Image */}
          <div className='square-box'></div>
          <img className="image" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSznrHLNuH2VuHdAp0Zwt_D61-TzVSvMWcsmQ1NwD0XGuB41t_b" alt="Plastic Wire Mesh Fencing" />
        </div>
        <div className='con2'>
          <p>Plastic wire mesh fencing is a lightweight and flexible fencing solution made from high-density polyethylene (HDPE). It is commonly used for various applications such as garden fencing, poultry enclosures, and crop protection.<br></br>Plastic wire mesh fencing is resistant to rust, corrosion, and weather conditions, making it suitable for outdoor use. It is available in different mesh sizes and colors to suit different purposes and aesthetic preferences. The plastic material provides durability and longevity, requiring minimal maintenance.</p>
          <Link to='footer'><button>Get Quote</button></Link>
        </div>
      </div>
      {/* Table-like structure */}
      <div className="table-like-structure">
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Mesh Size</th>
              <th>Wire Diameter</th>
              <th>Height</th>
              <th>Length</th>
              <th>Color</th>
              <th>Price Range (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PLASTIC WIRE MESH FENCING</td>
              <td>1 inch</td>
              <td>1.5 mm</td>
              <td>36 inches</td>
              <td>50 feet</td>
              <td>Green</td>
              <td>$50 - $100</td>
            </tr>
            <tr>
              <td>PLASTIC WIRE MESH FENCING</td>
              <td>2 inches</td>
              <td>2 mm</td>
              <td>48 inches</td>
              <td>100 feet</td>
              <td>Black</td>
              <td>$80 - $150</td>
            </tr>
            <tr>
              <td>PLASTIC WIRE MESH FENCING</td>
              <td>3 inches</td>
              <td>2.5 mm</td>
              <td>60 inches</td>
              <td>150 feet</td>
              <td>White</td>
              <td>$120 - $200</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      <div id='footer'><Footer /></div>
    </div>
  );
}

export default Prod7;
