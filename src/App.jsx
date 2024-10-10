import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import LabResearch from "./pages/LabResearch";
import Life from "./pages/Life";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/aboutus" element={<About />}></Route>
        <Route path="/labresearch" element={<LabResearch />}></Route>
        <Route path="/lifeindled" element={<Life />}></Route>
        <Route path="/contactus" element={<Contact/>}></Route>
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
