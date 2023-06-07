
import React from 'react';
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import useToken from "@galvanize-inc/jwtdown-for-react";
import useUser from "./useUser";
import StyledButton from './ReactComponents/button';


const Nav = () => {
    const { token, logout } = useToken();
    const { user } = useUser(token);
    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(0);

    const handleLogout = () => {
        logout();
        navigate('/');
        window.location.reload();
    };

    useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallScreen = windowWidth < 1250;


  return (
    <nav className="py-4" style={{ backgroundColor: '#c5f2e6' }}>
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <div className='absolute left-4 animate-bounce'>
          <img
          src="https://i.imgur.com/Qfkb7jJ.png"
          alt="Logo"
          style={{ width: '2cm', height: '2cm' }}
           />
        </div>
        <div className={`flex flex-grow ${isSmallScreen ? "ml-20" : "justify-center"}`}>
            <div className="flex justify-between w-1/2">
                <NavLink
                to="/"
                className="text-black hover:scale-110 hover:text-gray-500 transition-all duration-300 ease-in-out font-bold uppercase"
                >
                MRQ
                </NavLink>
                <NavLink
                to="/aboutus"
                className="text-black hover:scale-110 hover:text-gray-500 transition-all duration-300 ease-in-out font-bold uppercase"
                >
                About Us
                </NavLink>
                <NavLink
                to="/features"
                className="text-black hover:scale-110 hover:text-gray-500 transition-all duration-300 ease-in-out font-bold uppercase"
                >
                Features
                </NavLink>
                <NavLink
                to="/resources"
                className="text-black hover:scale-110 hover:text-gray-500 transition-all duration-300 ease-in-out font-bold uppercase"
                >
                Resources
                </NavLink>
                <div >
                  {user ? (
                      <div className="font-bold absolute top-0 right-0">

                        <span className="text-blue-500 text-2xl" style={{marginRight: '0.7rem'}}>Hello, {user.first}</span>
                        {/* <span style={{ lineHeight: '0.1', marginRight: '0.5rem' }}>Good to see you!</span> */}
                          <StyledButton text="Sign Out" onClick={handleLogout}>Sign out?</StyledButton>
                          <NavLink
                          className="group relative inline-block focus:outline-none focus:ring"
                            to="/dashboard">
                            <span
                              className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
                            ></span>
                            <span
                              className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
                            >Goals
                            </span>
                          </NavLink>
                      </div>
                  ) : (
                      <div className="absolute top-0 right-5">
                          <NavLink
                            className="group relative inline-block focus:outline-none focus:ring"
                            to="/login"
                            style={{ marginRight: '10px' }}
                          >
                            <span
                              className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
                            ></span>

                            <span
                              className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
                            >
                              Log In
                            </span>
                          </NavLink>
                          <NavLink
                            className="group relative inline-block focus:outline-none focus:ring"
                            to="/signup"
                          >
                            <span
                              className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
                            ></span>

                            <span
                              className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
                            >
                              Sign Up
                            </span>
                          </NavLink>
                      </div>
                  )}
                </div>
            </div>
        </div>
      </div>
    </nav>
  )
};

export default Nav;
