import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage.js';
import Navbar from './components/Navbar.js';
import AboutPage from './pages/AboutPage.js';
import Whychoose from './pages/Whychoose.js';
import Contact from './pages/Contact.js';
import Footer from './components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// Remove unused FontAwesomeIcon import
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/whychoose" element={<Whychoose />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
