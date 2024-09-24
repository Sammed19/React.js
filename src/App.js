import "./App.css";
import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Bookings from "./components/Bookings";


function App() {
  return (
    
    <BrowserRouter>
     <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Testimonial" element={<Testimonial />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Bookings" element={<Bookings />} />
      </Routes>
    </BrowserRouter>
    
  );

}

export default App;
