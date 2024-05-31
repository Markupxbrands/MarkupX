import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Logo from '../../assets/1x/Asset_21.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleJoinNow = () => {
    window.location.href = 'mailto:Founder@markupxbrands.com'; // Open default email client with specified email
  };

  return (
    <nav className={`w-full fixed top-0 z-10 bg-transparent text-white ${isScrolled ? 'hidden' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-16 w-auto" src={Logo} alt="Logo" />
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/under_construction" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">How it works</Link>
            <Link to="/under_construction" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">For Creators</Link>
            <Link to="/under_construction" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Resources</Link>
            <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200" onClick={handleJoinNow}>
              Join Now
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/under_construction" className="hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">How it works</Link>
            <Link to="/under_construction" className="hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">For Creators</Link>
            <Link to="/under_construction" className="hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Resources</Link>
          </div>
          <div className="px-2 pt-2 pb-3 sm:px-3">
            <button className="w-full bg-white text-black px-4 py-2 rounded-full text-base font-medium hover:bg-gray-200" onClick={handleJoinNow}>
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
