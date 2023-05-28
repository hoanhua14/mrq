
import React from 'react';
import { NavLink } from 'react-router-dom';
import useToken from "@galvanize-inc/jwtdown-for-react";
import useUser from "./useUser";

const Nav = () => {
    const { token, logout } = useToken();
    const { user } = useUser(token);

    const handleLogout = () => {
        logout();
        window.location.reload();
    };

  return (
    <nav className="py-4"
    style={{ backgroundColor: '#c5f2e6' }}>
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <div className="text-black font-bold text-lg">Logo</div>
        <div className="flex justify-center flex-grow">
            <div className="flex space-x-6">
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
                {user ? (
                    <>
                        Good to see you, {user.first}
                        <button onClick={handleLogout}>Sign out</button>
                    </>
                ) : (
                    <>
                        <NavLink
                          className="group relative inline-block focus:outline-none focus:ring"
                          to="/login"
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
                    </>
                )}
            </div>
        </div>
      </div>
    </nav>
  )
};

export default Nav;
