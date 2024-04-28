import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-scroll';
import './Prod1.css';

function Prod5() {
  return (
    <div className='total'>
      {/* <p><span style={{ color:' rgb(7, 154, 246)'}}> SOLUTIONS</span></p> */}
      
      <h1>POULTRY SIDE MESH FENCING</h1>
      <div className='pr1'>
        <div className='con1'>
          {/* Image */}
          <div className='square-box'></div>
          <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3q9mIJtC6Zf_mvgCFQHcrkrT-gTM0eM-TZb9llyBShYMr7iZx" alt="Poultry Side Mesh Fencing" />
        </div>
        <div className='con2'>
          <p>Poultry side mesh fencing is specifically designed for poultry farms to create secure enclosures for chickens, ducks, and other birds. It is made of high-quality galvanized steel wire with small mesh size to prevent predators from entering while allowing adequate ventilation and sunlight.<br></br>Poultry side mesh fencing helps to protect poultry from predators such as foxes, raccoons, and birds of prey. It also helps to prevent birds from escaping the enclosure, keeping them safe and secure.</p>
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
              <th>Coating</th>
              <th>Price Range (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>POULTRY SIDE MESH FENCING</td>
              <td>1 inch</td>
              <td>16 Gauge</td>
              <td>48 inches</td>
              <td>100 feet</td>
              <td>Galvanized</td>
              <td>$100 - $200</td>
            </tr>
            <tr>
              <td>POULTRY SIDE MESH FENCING</td>
              <td>1/2 inch</td>
              <td>14 Gauge</td>
              <td>36 inches</td>
              <td>50 feet</td>
              <td>Galvanized</td>
              <td>$80 - $150</td>
            </tr>
            <tr>
              <td>POULTRY SIDE MESH FENCING</td>
              <td>1 inch</td>
              <td>14 Gauge</td>
              <td>60 inches</td>
              <td>150 feet</td>
              <td>Galvanized</td>
              <td>$180 - $300</td>
            </tr>
            <tr>
              <td>POULTRY SIDE MESH FENCING</td>
              <td>3/4 inch</td>
              <td>16 Gauge</td>
              <td>48 inches</td>
              <td>100 feet</td>
              <td>Galvanized</td>
              <td>$120 - $220</td>
            </tr>
            <tr>
              <td>POULTRY SIDE MESH FENCING</td>
              <td>1/2 inch</td>
              <td>16 Gauge</td>
              <td>24 inches</td>
              <td>50 feet</td>
              <td>Galvanized</td>
              <td>$60 - $100</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      <div id='footer'><Footer /></div>
    </div>
  );
}

export default Prod5;
