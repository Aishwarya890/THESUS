
import React from "react";
import Navbar from "./Components/Navbar";

import Footer from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";


import NewsletterSection from "./Components/NewsletterSection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./CSS/Footer.css";
import "./CSS/Navbar.css";
import SnowPage from "./Components/SnowPage";
import RainPage from "./Components/RainPage";
import HomePage from "./Components/HomePage";
import ThesusPortal from "./Components/ThesusPortal";
import Contact from "./Components/ContactPage";
import GiftCardPage from "./Components/GiftCardPage";
import AccessoriesPage from "./Components/AccessoriesPage";
import WinterWeekendBootPage from "./Components/WinterWeekendBootPage";
import SunPage from "./Components/SunPage";
import WeekendBoot from "./Components/WeekendBoot";
import ShopAllPage from "./Components/ShopAllPage";
import WinterSalePage from "./Components/WinterSalePage";
import ValuePage from "./Components/ValuePage";
import SizeGuide from "./Components/SizeGuidePage";
import RefundPolicyPage from "./Components/RefundPolicyPage";
import WearCarePage from "./Components/WearCarePage";
import ShippingPolicyPage from "./Components/ShippingPolicyPage";

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

      <Routes>
       
        <Route path="/hub" element={<ThesusPortal/>} />
      </Routes>
      <Routes>
       
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Routes>
       
        <Route path="/thesus-gift-card" element={<GiftCardPage/>} />
      </Routes>
      <Routes>
       
        <Route path="/accessories" element={<AccessoriesPage/>} />
      </Routes>

      <Routes>
        <Route path="/the-weekend-boto-z" element={<WinterWeekendBootPage/>} />
      </Routes>

      <Routes>
        <Route path="/sun" element={<SunPage/>} />
      </Routes>
      <Routes>
        <Route path="/weekend-boot" element={<WeekendBoot/>} />
      </Routes>
      <Routes>
        <Route path="/all" element={<ShopAllPage/>} />
      </Routes>
      <Routes>
        <Route path="/winter-sale" element={<WinterSalePage/>} />
      </Routes>
      <Routes>
        <Route path="/values" element={<ValuePage/>} />
      </Routes>
      <Routes>
        <Route path="/size-guide" element={<SizeGuide/>} />
      </Routes>
      <Routes>
        <Route path="/refund" element={<RefundPolicyPage/>} />
      </Routes>

      <Routes>
        <Route path="/wear-and-care" element={<WearCarePage/>} />
      </Routes>

      <Routes>
        <Route path="/shipping-policy" element={<ShippingPolicyPage/>} />
      </Routes>

      

      <NewsletterSection />
      <Footer />
    </Router>
    </div>
  );
}


export default App;
