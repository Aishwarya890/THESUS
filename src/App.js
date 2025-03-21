
// import React from "react";
// import Navbar from "./Components/Navbar";

// import Footer from "./Components/Footer";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap/dist/js/bootstrap.bundle.min.js";


// import NewsletterSection from "./Components/NewsletterSection";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import "./CSS/Footer.css";
// import "./CSS/Navbar.css";
// import SnowPage from "./Components/SnowPage";
// import RainPage from "./Components/RainPage";
// import HomePage from "./Components/HomePage";
// import ThesusPortal from "./Components/ThesusPortal";
// import Contact from "./Components/ContactPage";
// import GiftCardPage from "./Components/GiftCardPage";
// import AccessoriesPage from "./Components/AccessoriesPage";
// import WinterWeekendBootPage from "./Components/WinterWeekendBootPage";
// import SunPage from "./Components/SunPage";
// import WeekendBoot from "./Components/WeekendBoot";
// import ShopAllPage from "./Components/ShopAllPage";
// import WinterSalePage from "./Components/WinterSalePage";
// import ValuePage from "./Components/ValuePage";
// import SizeGuide from "./Components/SizeGuidePage";
// import RefundPolicyPage from "./Components/RefundPolicyPage";
// import WearCarePage from "./Components/WearCarePage";
// import ShippingPolicyPage from "./Components/ShippingPolicyPage";
// import { GlobalProvider } from "./Components/GlobalProvider";
// function App() {
//   return (
//     <div>
//        <GlobalProvider> <Navbar /></GlobalProvider>
     
    
//       <Router>
//       <Routes>
//       <Route path="" element={<HomePage />} />
//         <Route path="/home" element={<HomePage />} />
//       </Routes>
      
//       <Routes>
//         <Route path="/rain" element={<RainPage />} />
//       </Routes>
//       <Routes>
       
//         <Route path="/snow" element={<SnowPage />} />
//       </Routes>

//       <Routes>
       
//         <Route path="/hub" element={<ThesusPortal/>} />
//       </Routes>
//       <Routes>
       
//         <Route path="/contact" element={<Contact/>} />
//       </Routes>
//       <GlobalProvider>
//       <Routes>
       
//        <Route path="/thesus-gift-card" element={<GiftCardPage/>} />
//      </Routes>
//       </GlobalProvider>
      
//       <Routes>
       
//         <Route path="/accessories" element={<AccessoriesPage/>} />
//       </Routes>

//       <Routes>
//         <Route path="/the-weekend-boto-z" element={<WinterWeekendBootPage/>} />
//       </Routes>

//       <Routes>
//         <Route path="/sun" element={<SunPage/>} />
//       </Routes>
//       <GlobalProvider>
//       <Routes>
//         <Route path="/weekend-boot" element={<WeekendBoot/>} />
//       </Routes>
//       </GlobalProvider>
//       <Routes>
//         <Route path="/all" element={<ShopAllPage/>} />
//       </Routes>
//       <GlobalProvider>
//       <Routes>
//         <Route path="/winter-sale" element={<WinterSalePage/>} />
//       </Routes>
//       </GlobalProvider>
//       <Routes>
//         <Route path="/values" element={<ValuePage/>} />
//       </Routes>
//       <Routes>
//         <Route path="/size-guide" element={<SizeGuide/>} />
//       </Routes>
//       <Routes>
//         <Route path="/refund" element={<RefundPolicyPage/>} />
//       </Routes>

//       <Routes>
//         <Route path="/wear-and-care" element={<WearCarePage/>} />
//       </Routes>

//       <Routes>
//         <Route path="/shipping-policy" element={<ShippingPolicyPage/>} />
//       </Routes>

      

//       <NewsletterSection />
//       <Footer />
//     </Router>
//     </div>
//   );
// }


// export default App;
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
import { GlobalProvider } from "./Components/GlobalProvider";
import ContactInfoPage from "./Components/ContactInfoPage";
import PrivacyPolicyPage from "./Components/PrivacyPolicyPage";
import TermsPage from "./Components/TermsPage";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/rain" element={<RainPage />} />
          <Route path="/snow" element={<SnowPage />} />
          <Route path="/hub" element={<ThesusPortal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thesus-gift-card" element={<GiftCardPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/the-weekend-boto-z" element={<WinterWeekendBootPage />} />
          <Route path="/sun" element={<SunPage />} />
          <Route path="/weekend-boot" element={<WeekendBoot />} />
          <Route path="/all" element={<ShopAllPage />} />
          <Route path="/winter-sale" element={<WinterSalePage />} />
          <Route path="/values" element={<ValuePage />} />
          <Route path="/size-guide" element={<SizeGuide />} />
          <Route path="/refund" element={<RefundPolicyPage />} />
          <Route path="/wear-and-care" element={<WearCarePage />} />
          <Route path="/shipping-policy" element={<ShippingPolicyPage />} />
          <Route path="/contact-info" element={<ContactInfoPage/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage/>} />
          <Route path="/terms" element={<TermsPage/>} />


          
        </Routes>
        <NewsletterSection />
        <Footer />
      </Router>
    </GlobalProvider>
  );
}

export default App;
