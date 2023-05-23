// import { useEffect, useState } from "react";
import "./App.css";
import MainPage from "./MainPage.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import WaterForm from "./WaterForm";
import SleepForm from "./SleepForm";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/water/new" element={<WaterForm />}/>
          <Route path="sleep" element={<SleepForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
