
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
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/signup">Sign up</NavLink>
                    </>
                )}
            </div>
        </div>
      </div>
    </nav>
  )
};

export default Nav;
