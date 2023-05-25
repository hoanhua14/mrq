// import { useEffect, useState } from "react";
import "./App.css";
import MainPage from "./MainPage.js";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import Nav from './Nav';
import AboutUs from "./InfoPages/AboutUs";
import Features from "./InfoPages/Features";
import Resources from "./InfoPages/Resources";
import WaterForm from "./WaterForm";
import SleepForm from "./Sleep/SleepForm";
import SleepList from "./Sleep/SleepList";
import ExerciseForm from "./ExerciseForm";
import ExerciseList from "./ListExercise";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider baseUrl={process.env.REACT_APP_MRQ_SERVICE}>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/aboutus" element={<AboutUs />}/>
            <Route path="/features" element={<Features />}/>
            <Route path="/resources" element={<Resources />}/>
            <Route path="/water/new" element={<WaterForm />}/>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/exercise/new" element={<ExerciseForm />}/>
            <Route path="/exercise" element={<ExerciseList/>}/>
            <Routes path="/sleep">
              <Route path="/new" element={<SleepForm />}/>
              <Route path="/all" element={<SleepList />}/>
            </Routes>
          </Routes>
        </div>
        </AuthProvider>
    </BrowserRouter>
  )
}
export default App;
