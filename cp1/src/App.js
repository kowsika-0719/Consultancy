// App.js
import './App.css';
import Home from './components/Home';
import About from './components/About'; // Import other components
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Prod1 from './components/Prod1';
import Prod2 from './components/Prod2';
import Prod3 from './components/Prod3';
import Prod4 from './components/Prod4';
import Prod5 from './components/Prod5';
import Prod6 from './components/Prod6';
import Prod7 from './components/Prod7';
import Prod8 from './components/Prod8';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/prod' element={<Products />} />
          <Route path='/test' element={<Testimonials />} />
          <Route path='/contact-container' element={<Contact/>} />
          <Route path='/foot' element={<Footer />} />
          <Route path='/prod1' element={<Prod1 />} />
          <Route path='/prod2' element={<Prod2 />} />
          <Route path='/prod3' element={<Prod3 />} />
          <Route path='/prod4' element={<Prod4 />} />
          <Route path='/prod5' element={<Prod5 />} />
          <Route path='/prod6' element={<Prod6 />} />
          <Route path='/prod7' element={<Prod7/>} />
          <Route path='/prod8' element={<Prod8/>} />
           
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
