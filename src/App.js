
import React from "react";
import Navbar from "./Components/Navbar";

import Footer from "./Components/Footer";

import NewsletterSection from "./Components/NewsletterSection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./CSS/Footer.css";
import "./CSS/Navbar.css";
import SnowPage from "./Components/SnowPage";
import RainPage from "./Components/RainPage";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <div>
      <Navbar />
    
      <Router>
      <Routes>
      <Route path="" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      
      <Routes>
        <Route path="/rain" element={<RainPage />} />
      </Routes>
      <Routes>
       
        <Route path="/snow" element={<SnowPage />} />
      </Routes>
      <NewsletterSection />
      <Footer />
    </Router>
    </div>
  );
}

export default App;
