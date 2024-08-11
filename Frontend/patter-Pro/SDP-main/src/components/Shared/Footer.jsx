import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';

const Footer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    // Define search navigation based on query
    if (searchQuery.toLowerCase().includes('faq')) {
      navigate('/faq'); // Redirect to FAQ page
    } else if (searchQuery.toLowerCase().includes('admin')) {
      navigate('/admin'); // Redirect to Admin page
    } else {
      // Handle other search cases or a default behavior
      console.log('Search query:', searchQuery);
      // You might navigate to a general search results page or show a message
    }
  };

  return (
    <footer className="bg-gray-500 py-4 bottom-0">
      <div className="container mx-auto text-center">
        <form onSubmit={handleSearch} className="mb-4">
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for product overviews, FAQs, and more..." 
            className="p-2 border border-gray-300 rounded-lg w-1/2"
          />
          <button 
            type="submit" 
            className="p-2 border border-gray-300 rounded-lg bg-white ml-2"
          >
            <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} className="text-black" /></a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} className="text-blue-600" /></a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube size={30} className="text-red-600" /></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} className="text-blue-700" /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} className="text-pink-600" /></a>
      </div>
      <div className="flex justify-center space-x-4 text-gray-600 mb-4">
        <a href="#">INV Home</a>
        <span>|</span>
        <NavLink to="/contact">Contact Us</NavLink>
        <span>|</span>
        <a href="#">Security</a>
        <span>|</span>
        <a href="#">Compliance</a>
        <span>|</span>
        <a href="#">Anti-spam Policy</a>
        <span>|</span>
        <a href="#">Terms of Service</a>
        <span>|</span>
        <a href="#">Privacy Policy</a>
        <span>|</span>
        <a href="#">Cookie Policy</a>
        <span>|</span>
        <a href="#">Abuse Policy</a>
      </div>
      <div className="flex justify-center text-gray-600">
        © 2024, INV_Toby Corporation Pvt. Ltd. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
