// import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import MainPage from "./MainPage.js";
import AboutUs from "./InfoPages/AboutUs";
import Features from "./InfoPages/Features";
import Resources from "./InfoPages/Resources";
import WaterForm from "./WaterForm";
import SleepForm from "./Sleep/SleepForm";
import SleepList from "./Sleep/SleepList";

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
          <Routes path="/sleep">
            <Route path="/new" element={<SleepForm />}/>
            <Route path="/all" element={<SleepList />}/>
          </Routes>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App;
