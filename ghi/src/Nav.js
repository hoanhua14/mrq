// import { NavLink } from 'react-router-dom';

// function Nav() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-success">
//             <div className="container-fluid">
//                 <NavLink className="navbar-brand" to="/">MRQ</NavLink>
//                 <NavLink className="navbar-brand" to="/aboutus">About Us</NavLink>
//                 <NavLink className="navbar-brand" to="/features">Features</NavLink>
//                 <NavLink className="navbar-brand" to="/resources">Resources</NavLink>
//                 <NavLink className="navbar-brand" to="/water/new">Water</NavLink>
//                 <NavLink className="navbar-brand" to="/sleep/new">Sleep</NavLink>

//             </div>
//         </nav>
//     )
// }
// export default Nav;

import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="bg-yellow-300 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <div className="text-black font-bold text-lg">Logo</div>
        <div className="flex justify-center flex-grow">
            <div className="flex space-x-6">
                <NavLink
                to="/"
                exact
                className="text-black hover:scale-110 hover:text-gray-500 transition-all duration-300 ease-in-out font-bold uppercase"
                activeClassName="text-gray-700"
                >
                MRQ
                </NavLink>
                <NavLink
                to="/aboutus"
                exact
                className="text-black hover:scale-110 hover:text-gray-500 transition-all duration-300 ease-in-out font-bold uppercase"
                activeClassName="text-gray-700"
                >
                About Us
                </NavLink>
                <NavLink
                to="/features"
                className="text-black hover:scale-110 hover:text-gray-500 transition-all duration-300 ease-in-out font-bold uppercase"
                activeClassName="text-gray-700"
                >
                Features
                </NavLink>
                <NavLink
                to="/resources"
                className="text-black hover:scale-110 hover:text-gray-500 transition-all duration-300 ease-in-out font-bold uppercase"
                activeClassName="text-gray-700"
                >
                Resources
                </NavLink>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
