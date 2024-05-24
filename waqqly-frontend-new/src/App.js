import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import RegisterPet from './pages/RegisterPet';
import RegisterWalker from './pages/RegisterWalker';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register-pet" element={<RegisterPet />} />
          <Route path="/register-walker" element={<RegisterWalker />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
