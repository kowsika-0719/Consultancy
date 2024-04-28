import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-scroll';
import './Prod1.css';

function Prod6() {
  return (
    <div className='total'>
      {/* <p><span style={{ color:' rgb(7, 154, 246)'}}>SOLUTIONS</span></p> */}
      
      <h1>WILD MESH FENCING</h1>
      <div className='pr1'>
        <div className='con1'>
          {/* Image */}
          <div className='square-box'></div>
          <img className="image" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRv9h-v_sh2ZnWEQoeX14WOy99F0InDqmxaYBmQYDiVZehXOtuq" alt="Wild Mesh Fencing" />
        </div>
        <div className='con2'>
          <p>Wild mesh fencing is commonly used for fencing large areas of land to prevent wild animals such as deer, rabbits, and foxes from entering. It is made of high-tensile steel wire mesh with small openings to effectively contain animals while providing visibility and airflow.<br></br>Wild mesh fencing is durable, weather-resistant, and easy to install, making it suitable for various outdoor applications, including agricultural fields, forests, and nature reserves. It helps to protect crops, plants, and property from damage caused by wildlife.</p>
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
              <td>WILD MESH FENCING</td>
              <td>2 inches</td>
              <td>12 Gauge</td>
              <td>72 inches</td>
              <td>100 feet</td>
              <td>Galvanized</td>
              <td>$250 - $400</td>
            </tr>
            <tr>
              <td>WILD MESH FENCING</td>
              <td>4 inches</td>
              <td>10 Gauge</td>
              <td>48 inches</td>
              <td>50 feet</td>
              <td>Galvanized</td>
              <td>$150 - $250</td>
            </tr>
            <tr>
              <td>WILD MESH FENCING</td>
              <td>3 inches</td>
              <td>11 Gauge</td>
              <td>60 inches</td>
              <td>150 feet</td>
              <td>Galvanized</td>
              <td>$300 - $500</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      <div id='footer'><Footer /></div>
    </div>
  );
}

export default Prod6;
