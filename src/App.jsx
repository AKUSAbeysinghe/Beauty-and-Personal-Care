import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import SalonsSpas from "./pages/Saloon&Spas.jsx"; // Create or import this component
import BeautyRetail from "./pages/Beautyretail"; // Already exists
import BarberGrooming from "./pages/Grooming&Barbaring.jsx"; // Create or import this component
import Gallery from "./pages/Gallery.jsx";
import About from "./components/OurStory.jsx";

// Admin Pages
import Login from "./Admin/Login.jsx";
import SignUp from "./Admin/SignUp.jsx";
import AdminPanel from "./Admin/AdminPanel.jsx";
import LookbookAdmin from "./Admin/LookbookAdmin.jsx";

function Layout({ children }) {
  const location = useLocation();
  const hideLayout = ["/login", "/signup", "/admin", "/admin-lookbook"].includes(location.pathname);

  return (
    <div className="bg-white text-black font-sans">
      <ScrollToTop />
      {!hideLayout && <Navbar key={location.pathname} />}
      <div className="min-h-screen">{children}</div>
      {!hideLayout && (
        <>
          <Footer />
          <FloatingWhatsApp />
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/salons-spas" element={<SalonsSpas />} />
          <Route path="/cosmetics-retail" element={<BeautyRetail />} />
          <Route path="/barber-grooming" element={<BarberGrooming />} />
          <Route path="/About" element={<About />} />
          {/* Admin Pages */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/admin-lookbook" element={<LookbookAdmin />} />
          <Route path="/gallery" element={<Gallery/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;