import React from 'react';
import { NavLink } from 'react-router-dom';
import { ModeToggle } from '../mode-toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignInAlt, faUserPlus, faTruck, faSearch, faPhone } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      path: "/",
      icon: faHome  // Home icon
    },
    // {
    //   title: "About",
    //   path: "/",
    //   icon: faHome  // Home icon
    // },
    {
      title: "Contact",
      path: "/contact",
      icon: faPhone  // Home icon
    },
    {
      title: "Login",
      path: "/login",
      icon: faSignInAlt  // Login icon
    },
    {
      title: "Register",
      path: "/register",
      icon: faUserPlus  // Register icon
    }
  ];

  // Inline styles
  const searchStyles = {
    container: {
      position: 'relative',
      width: '150%',
      maxWidth: '500px',
      margin: '0 auto',
    },
    input: {
      width: '100%',
      padding: '8px 40px 8px 40px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    button: {
      position: 'absolute',
      right: '01px',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'red',
      color: 'black',
      border: 'none',
      borderRadius: '2px',
      padding: '8px 16px',
      cursor: 'pointer',
    },
    clear: {
      position: 'absolute',
      right: '100px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'red',
      cursor: 'pointer',
    },
    icon: {
      position: 'absolute',
      left: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'gray',
    },
  };

  return (
    <div className="w-full h-[8vh] z-50 flex flex-row justify-between items-center absolute top-1 shadow-sm shadow-primary/100 px-4">
      <div className="flex items-center justify-start text-lg text-primary font-bold">
        <FontAwesomeIcon icon={faTruck} className="mr-2" /> INV_TOBY
      </div>
      <div style={searchStyles.container} className="flex items-center flex-grow mx-7">
        {/* <div style={{ position: 'relative', width: '100%' }}>
          <FontAwesomeIcon icon={faSearch} style={searchStyles.icon} />
          <input 
            className="zgh-search-field"
            placeholder="Search for product overviews, FAQs, and more..."
            type="text"
            style={searchStyles.input}
          />
          <input 
            className="zgh-search-btn" 
            type="button" 
            value="Search"
            style={searchStyles.button}
          />
          <span 
            className="zgh-search-clear"
            style={searchStyles.clear}
          >×</span>
        </div> */}
      </div>
      <div className="flex flex-row justify-end items-center gap-8 font-bold">
        {NavLinks.map((link, index) => (
          <li key={index} className="list-none">
            <NavLink to={link.path} className="flex items-center gap-2 text-primary hover:text-secondary">
              {link.icon && <FontAwesomeIcon icon={link.icon} />}
              {link.title}
            </NavLink>
          </li>
        ))}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
