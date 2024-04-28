import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-scroll';
import './Prod1.css';

function Prod2() {
  return (
    <div className='total'>
      
      {/* <p><span style={{ color:' rgb(7, 154, 246)'}}>SOLUTIONS</span></p> */}
      
      <h1>TWISTED FENCE</h1>
      <div className='pr1'>
        <div className='con1'>
          {/* Image */}
          <div className='square-box'></div>
          <img className="image" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQktlWBQIfyvhff29BbgV9iueuUTrr7xNWzGR9u3gcfVXeGjOZZ" alt="Chain Link Fence" />
        </div>
        <div className='con2'>
          <p>Twist or barb edge is obtained by twisting adjacent pairs of wire ends together in a close helix of 1-1/2 machine turns, which is equivalent to 3 full twists, and cutting the wire ends at an angle. The wire ends beyond the twist shall be at least 1/4 in. long. This type of selvage is not used on fabric with a mesh size of less than 2 in.</p>
          <Link to='footer'><button>get quote</button></Link>
        </div>
      </div>
      {/* Table-like structure */}
      <div className="table-like-structure">
        <table>
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product Name</td>
              <td>Twisted Fence</td>
            </tr>
            <tr>
              <td>Material</td>
              <td>Steel</td>
            </tr>
            <tr>
              <td>Finish</td>
              <td>Galvanized</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>Varies</td>
            </tr>
            <tr>
              <td>Length</td>
              <td>Varies</td>
            </tr>
            <tr>
              <td>Coating</td>
              <td>Not Applicable</td>
            </tr>
            <tr>
              <td>Type</td>
              <td>Twisted</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <div id='footer'><Footer /></div>
    </div>
  );
}

export default Prod2;
