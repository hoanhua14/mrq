// import { useEffect, useState } from "react";
import "./App.css";
import MainPage from "./MainPage.js";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import Nav from './Nav';
import WaterForm from "./WaterForm";

import ExerciseForm from "./ExerciseForm";
import ExerciseList from "./ListExercise";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider baseUrl={process.env.REACT_APP_MRQ_SERVICE}>
        <Nav />
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/water/new" element={<WaterForm />}/>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/exercise/new" element={<ExerciseForm />}/>
          <Route path="/exercise" element={<ExerciseList/>}/>
        </Routes>
        </div>
        </AuthProvider>
    </BrowserRouter>
  )
}
export default App;
