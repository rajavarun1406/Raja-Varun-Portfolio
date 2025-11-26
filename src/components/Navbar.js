import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './HeaderNavbar.css';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Resume', path: '/resume' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Contact', path: '/contact' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar-main" style={{ background: 'var(--surface-color)', boxShadow: 'var(--shadow-sm)', padding: '1rem 2rem', position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="navbar-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>

        {/* Mobile Toggle Button */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} color="var(--primary-color)" /> : <FaBars size={24} color="var(--primary-color)" />}
        </div>

        {/* Desktop Menu */}
        <ul className={`navbar-list ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.label} style={{ position: 'relative' }}>
                <Link
                  to={item.path}
                  className="navbar-link"
                  onClick={() => setIsOpen(false)} // Close menu on click
                  style={{
                    color: isActive ? 'var(--primary-color)' : 'var(--text-secondary)',
                    fontWeight: isActive ? 600 : 500,
                    fontSize: '1.1rem',
                    padding: '0.5rem 0',
                    display: 'block'
                  }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="nav-underline"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: 'var(--primary-color)',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className={`navbar-email ${isOpen ? 'active' : ''}`}>
          <a href="mailto:rajavarun.kurapati@gmail.com" style={{ color: 'var(--primary-color)', fontWeight: 'bold', textDecoration: 'none' }}>
            rajavarun.kurapati@gmail.com
          </a>
        </div>
      </div>
    </nav>
  );
}
