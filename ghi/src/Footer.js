import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="px-4 divide-y dark:text-gray-100" style={{ backgroundColor: '#c5f2e6' }}>
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <Link to="/" rel="noopener noreferrer" className="flex justify-center space-x-3 lg:justify-start">
            <img src="https://i.imgur.com/Qfkb7jJ.png" alt="Logo" style={{ width: '2cm', height: '2cm' }} />
            <span className="self-center text-2xl text-black font-semibold">Move. Rest. Quench.</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracki uppercase text-black font-semibold">Product</h3>
            <ul className="space-y-1 text-slate-500">
              <li>
                <Link to="/features" rel="noopener noreferrer">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/resources" rel="noopener noreferrer">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracki uppercase text-black font-semibold">Company</h3>
            <ul className="space-y-1 text-slate-500">
              <li>
                  Privacy
              </li>
              <li>
                  Terms of Service
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase text-black font-semibold">Developers</h3>
            <ul className="space-y-1 text-slate-500">
              <li>
                <Link to="/aboutus" rel="noopener noreferrer">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-slate-500" style={{ borderTopColor: '#9c9c9c' }}>© 2023 Move. Rest. Quench. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
