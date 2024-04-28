import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-scroll';
import './Prod1.css';

function Prod8() {
  return (
    <div className='total'>
      {/* <p><span style={{ color:' rgb(7, 154, 246)'}}>SOLUTIONS</span></p> */}
      
      <h1>WIRE MESH (GI + PVC)</h1>
      <div className='pr1'>
        <div className='con1'>
          {/* Image */}
          <div className='square-box'></div>
          <img className="image" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQqpq_i1amkyAo-L858G0_uFxEXpDm8v6uhRxnrtArl2FNloMAN" alt="Wire Mesh (GI + PVC)" />
        </div>
        <div className='con2'>
          <p>Wire mesh with GI (Galvanized Iron) and PVC coating offers a durable and corrosion-resistant fencing solution suitable for various applications, including perimeter fencing, security enclosures, and animal cages.<br></br>The galvanized iron wire provides excellent rust and corrosion resistance, while the PVC coating adds further protection and enhances the appearance of the fence. This combination ensures longevity and low maintenance requirements for the fencing.<br></br>Wire mesh with GI and PVC coating is available in different mesh sizes, wire diameters, and colors to meet different requirements and aesthetic preferences.</p>
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
              <td>WIRE MESH (GI + PVC)</td>
              <td>1 inch</td>
              <td>2.0 mm</td>
              <td>48 inches</td>
              <td>50 feet</td>
              <td>Green</td>
              <td>$100 - $200</td>
            </tr>
            <tr>
              <td>WIRE MESH (GI + PVC)</td>
              <td>2 inches</td>
              <td>2.5 mm</td>
              <td>60 inches</td>
              <td>100 feet</td>
              <td>Black</td>
              <td>$150 - $300</td>
            </tr>
            <tr>
              <td>WIRE MESH (GI + PVC)</td>
              <td>3 inches</td>
              <td>3.0 mm</td>
              <td>72 inches</td>
              <td>150 feet</td>
              <td>White</td>
              <td>$200 - $400</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      <div id='footer'><Footer /></div>
    </div>
  );
}

export default Prod8;
