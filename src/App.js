import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'font-awesome/css/font-awesome.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
// import ServicesPage from './pages/ServicesPage';
import Whychoose from './pages/Whychoose';
import Contact from './pages/Contact';
// import Services from './pages/Services';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/services" element={<ServicesPage />} /> */}
        <Route path="/whychoose" element={<Whychoose />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
