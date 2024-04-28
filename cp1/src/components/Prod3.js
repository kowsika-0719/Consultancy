import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-scroll';
import './Prod1.css';

function Prod3() {
  return (
    <div className='total'>
      {/* <p><span style={{ color:' rgb(7, 154, 246)'}}>SOLUTIONS</span></p> */}
      
      <h1>PVC CHAIN LINK FENCE</h1>
      <div className='pr1'>
        <div className='con1'>
          {/* Image */}
          <div className='square-box'></div>
          <img className="image" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSuC8MuyJekMbcuByKTP9_nmNILsaeI9J2eSNBV1WeJRp59rDb_" alt="Chain Link Fence" />
        </div>
        <div className='con2'>
          <p>PVC coated chain link fence also called vinyl coated or plastic coated chain link mesh is woven accurately with PVC wire in green color. PVC coated chain link provides style to your fence with color coordinated, vinyl coated chain wire fence. The heavy fence coated with fused and bonded vinyl is guaranteed for years of trouble-free use.<br></br>Chain link fence with PVC coated is lightweight and perfectly resists aggressive environmental influences, and it has an attractive appearance. So it is the best choice for gardens, tennis courts, sports fields fencing. And it is also suitable for using in the oil field, sea around and coast of the salt sea. Green or black chain link fencing is also suitable for creating indoor dog pens</p>
          <Link to='footer'><button>Get Quote</button></Link>
        </div>
      </div>
      {/* Table-like structure */}
      <div className="table-like-structure">
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>MESH SIZE</th>
              <th>Surface</th>
              <th>Wire Diameter</th>
              <th>Height</th>
              <th>Length</th>
              <th>Coating</th>
              <th>Type</th>
              <th>Price Range (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CHAIN LINK PVC FENCE</td>
              <td>Varies</td>
              <td>Varies</td>
              <td>2.5 to 4.00</td>
              <td>0.5 mtr to 3 mtr</td>
              <td>10 to 30 Mtr</td>
              <td>260 GSM</td>
              <td>Twisted</td>
              <td>$50 - $200 (0.5 mtr - 2 mtr)</td>
            </tr>
            <tr>
              <td>CHAIN LINK PVC FENCE</td>
              <td>Varies</td>
              <td>Varies</td>
              <td>2.5 to 4.00</td>
              <td>3.1 mtr to 5 mtr</td>
              <td>10 to 30 Mtr</td>
              <td>260 GSM</td>
              <td>Twisted</td>
              <td>$150 - $500 (3.1 mtr - 5 mtr)</td>
            </tr>
            <tr>
              <td>CHAIN LINK PVC FENCE</td>
              <td>Varies</td>
              <td>Varies</td>
              <td>2.5 to 4.00</td>
              <td>5.1 mtr to 7 mtr</td>
              <td>10 to 30 Mtr</td>
              <td>260 GSM</td>
              <td>Twisted</td>
              <td>$250 - $800 (5.1 mtr - 7 mtr)</td>
            </tr>
            <tr>
              <td>CHAIN LINK PVC FENCE</td>
              <td>Varies</td>
              <td>Varies</td>
              <td>2.5 to 4.00</td>
              <td>7.1 mtr to 10 mtr</td>
              <td>10 to 30 Mtr</td>
              <td>260 GSM</td>
              <td>Twisted</td>
              <td>$500 - $1000 (7.1 mtr - 10 mtr)</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      <div id='footer'><Footer /></div>
    </div>
  );
}

export default Prod3;
