import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import './App.css';
import AboutMe from './components/About';
import Contact from './components/Contact';
import MainNav from './components/Navbar';
import Skills from './components/Skills';
import Works from './components/Works';
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
              <Route path="/skills" element={<Skills />} />
              <Route path="/works" element={<Works />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Col>
      </div>
      <Footer />
    </div>
  );
}
