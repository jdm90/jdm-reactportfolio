import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import './App.css';
import MainNav from './components/Navbar';
import AboutMe from './components/About';
import Toolbox from './components/Skills';
import Experiences from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
      <MainNav />
      <div className="main-content">
        <Col xs={10} md={8} className="mx-auto">
          <div className="main-container">
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/toolbox" element={<Toolbox />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Col>
      </div>
      <Footer />
    </div>
  );
}
