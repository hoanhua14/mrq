import { useEffect, useState } from "react";
import "./App.css";
import MainPage from "./MainPage.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
