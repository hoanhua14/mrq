// import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import MainPage from "./MainPage.js";
import AboutUs from "./AboutUs";
import Features from "./Features";
import Resources from "./Resources";
import WaterForm from "./WaterForm";
import SleepForm from "./SleepForm";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/aboutus" element={<AboutUs />}/>
          <Route path="/features" element={<Features />}/>
          <Route path="/resources" element={<Resources />}/>
          <Route path="/water/new" element={<WaterForm />}/>
          <Route path="/sleep/new" element={<SleepForm />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
