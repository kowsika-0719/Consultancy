
           import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-scroll';
import './Prod1.css';

function Prod1() {
  return (
    <div className='total'>
      {/* <p><span style={{ color: 'rgb(7, 154, 246)' }}>SOLUTIONS</span></p> */}
      <h1>CHAINLINK FENCING</h1>
      <div className='pr1'>
        <div className='con1'>
          {/* Image */}
          <div className='square-box'></div>
          <img className="image" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSwEkQ_0HJBnJlggR-mroIFBoEjByGMr3f2JPS2y5Oc6wpo0xdh" alt="Chain Link Fence" />
        </div>
        <div className='con2'>
          <p>Chain Link Fence Manufacturers in Coimbatore is ideally designed to meet applications like fencing of farms, animal’s enclosures, roof support in long wall mining, factories, houses, flying area, etc. These are available in standard as well as customised specifications as per the requirement of the application area. It also complies with international standards when it comes to high durability, tensile strength and resistance to corrosion.<br></br>These are also considered ideal for indoor and outdoor protection. Offered fence is manufactured using supreme quality material and highly developed techniques. The offered fence is provided in several specifications at most reasonable price range to the customers.</p>
          {/* Link to scroll to the footer section */}
          <Link to='footer' smooth={true} duration={500}><button>get quote</button></Link>
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CHAIN LINK FENCING</td>
              <td>25 mm to 150 mm</td>
              <td>S.S / G.I</td>
              <td>2.5 to 4.00</td>
              <td>0.5 mtr to 5 mtr</td>
              <td>10 to 30 Mtr</td>
              <td>260 GSM</td>
              <td>Knuckled</td>
            </tr>
            <tr>
              <td>CHAIN LINK FENCE</td>
              <td>50 mm x 50 mm</td>
              <td>Galvalume</td>
              <td>2.5 to 4.00</td>
              <td>0.5 mtr to 3 mtr</td>
              <td>10 to 30 Mtr</td>
              <td>150 GSM</td>
              <td>Twisted</td>
            </tr>
            <tr>
              <td>CHAIN LINK FABRIC FENCE</td>
              <td>40 mm x 40 mm</td>
              <td>Galvanised</td>
              <td>2.5 to 4.00</td>
              <td>1.0 mtr to 5 mtr</td>
              <td>10 to 30 Mtr</td>
              <td>260 GSM</td>
              <td>Knuckled</td>
            </tr>
            <tr>
              <td>CHAIN LINK MESH</td>
              <td>100 mm x 100 mm</td>
              <td>Galvalume</td>
              <td>2.5 to 4.00</td>
              <td>2.0 mtr to 5 mtr</td>
              <td>10 to 30 Mtr</td>
              <td>150 GSM</td>
              <td>Twisted</td>
            </tr>
            <tr>
              <td>CHAIN LINK FENCE NETTING</td>
              <td>75 mm x 75 mm</td>
              <td>S.S / G.I</td>
              <td>2.5 to 4.00</td>
              <td>0.6 mtr to 5 mtr</td>
              <td>10 to 30 Mtr</td>
              <td>260 GSM</td>
              <td>Twisted</td>
            </tr>
            <tr>
              <td>GALVANIZED CHAIN LINK FENCING</td>
              <td>25 mm to 25 mm</td>
              <td>Galvanised</td>
              <td>2.5 to 4.00</td>
              <td>1.0 mtr to 5 mtr</td>
              <td>10 to 30 Mtr</td>
              <td>260 GSM</td>
              <td>Knuckled</td>
            </tr>
            <tr>
              <td>GI CHAIN LINK FENCING</td>
              <td>50 mm to 50 mm</td>
              <td>Galvanised</td>
              <td>2.5 to 4.00</td>
              <td>1.5 mtr to 5 mtr</td>
              <td>10 to 30 Mtr</td>
              <td>260 GSM</td>
              <td>Knuckled</td>
            </tr>
            <tr>
              <td>CHAIN LINK</td>
              <td>125 mm to 125 mm</td>
              <td>Galvalume</td>
              <td>2.5 to 4.00</td>
              <td>2.4 mtr to 5 mtr</td>
              <td>10 to 30 Mtr</td>
              <td>150 GSM</td>
              <td>Twisted</td>
            </tr>
            <tr>
              <td>TATA CHAIN LINK FENCING</td>
              <td>50 mm to 50 mm</td>
              <td>Galvanised</td>
              <td>2.5 to 4.00</td>
              <td>2.1 mtr to 5 mtr</td>
              <td>10 to 30 Mtr</td>
              <td>260 GSM</td>
              <td>Knuckled</td>
            </tr>
            <tr>
              <td>GI CHAIN LINK FABRIC FENCING</td>
              <td>75 mm to 75 mm</td>
              <td>Galvanised</td>
              <td>2.5 to 4.00</td>
              <td>1.2 mtr to 5 mtr</td>
              <td>10 to 30 Mtr</td>
              <td>260 GSM</td>
           </tr>
           </tbody>
           </table>
           </div>
           <br></br>
      <div id='footer'><Footer /></div>
    </div>
  );
}

export default Prod1;
