import React, { useState } from 'react';
import '../styles/navbar.css'; 



const Navigations = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden'; 
  };

         return (
            <nav className="navbar">
            <div className="navbar-brand">Virendra Paswan</div>
            <div className="navbar-toggle" onClick={toggleMenu}>
              <span className="navbar-toggle-icon"></span>
              <span className="navbar-toggle-icon"></span>
              <span className="navbar-toggle-icon"></span>
            </div>
            <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
            <span className="navbar-close" onClick={toggleMenu}>&times;</span>
              <a href="#home" onClick={toggleMenu}>Home</a>
              <a href="#about" onClick={toggleMenu}>About</a>
              
              <a href="#projects" onClick={toggleMenu}>Projects</a>
              <a href="#contact" onClick={toggleMenu}>Contact</a>
              </div>
             </nav>
    );
  };
export default Navigations;
  