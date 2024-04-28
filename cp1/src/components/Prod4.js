import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-scroll';
import './Prod1.css';

function Prod4() {
  return (
    <div className='total'>
      {/* <p><span style={{ color:' rgb(7, 154, 246)'}}>SOLUTIONS</span></p> */}
     
      <h1>CHICKEN MESH</h1>
      <div className='pr1'>
        <div className='con1'>
          {/* Image */}
          <div className='square-box'></div>
          <img className="image" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRqZhKnABll1cO6o8VPQYqBVBjuARKKMxieb3zb0_xDEmx4UAF3" alt="Chicken Mesh" />
        </div>
        <div className='con2'>
          <p>Chicken wire mesh, or poultry netting, is a mesh of wire commonly used to fence poultry livestock. It is made of thin, flexible, galvanized steel wire, with hexagonal gaps. Available in various gauges and mesh sizes, chicken mesh provides a secure and flexible enclosure for chickens and other small animals.<br></br>Chicken wire mesh is also used in gardening and agriculture for plant protection, compost bins, and trellises. Its versatility and affordability make it a popular choice for a wide range of applications.</p>
          <Link to='footer'><button>Get Quote</button></Link>
        </div>
      </div>
      {/* Table-like structure */}
      <div className="table-like-structure">
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Wire Gauge</th>
              <th>Mesh Size</th>
              <th>Width</th>
              <th>Length</th>
              <th>Coating</th>
              <th>Price Range (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CHICKEN MESH</td>
              <td>20 Gauge</td>
              <td>1 inch</td>
              <td>36 inches</td>
              <td>25 feet</td>
              <td>Galvanized</td>
              <td>$20 - $50</td>
            </tr>
            <tr>
              <td>CHICKEN MESH</td>
              <td>22 Gauge</td>
              <td>2 inch</td>
              <td>48 inches</td>
              <td>50 feet</td>
              <td>Galvanized</td>
              <td>$40 - $80</td>
            </tr>
            <tr>
              <td>CHICKEN MESH</td>
              <td>24 Gauge</td>
              <td>1 inch</td>
              <td>24 inches</td>
              <td>100 feet</td>
              <td>Galvanized</td>
              <td>$60 - $120</td>
            </tr>
            <tr>
              <td>CHICKEN MESH</td>
              <td>26 Gauge</td>
              <td>2 inch</td>
              <td>60 inches</td>
              <td>150 feet</td>
              <td>Galvanized</td>
              <td>$80 - $150</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      <div id='footer'><Footer /></div>
    </div>
  );
}

export default Prod4;
