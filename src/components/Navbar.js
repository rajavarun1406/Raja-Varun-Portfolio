import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderNavbar.css';

export default function Navbar() {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Resume', path: '/resume' },
    { label: 'Github', path: 'https://github.com/rajavarun1406', external: true },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="navbar-main">
      <ul className="navbar-list">
        {navItems.map((item, idx) => (
          <React.Fragment key={item.label}>
            <li>
              {item.external ? (
                <a
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navbar-link"
                >
                  {item.label}
                </a>
              ) : (
                <Link to={item.path} className="navbar-link">
                  {item.label}
                </Link>
              )}
            </li>
            {idx < navItems.length - 1 && (
              <span className="navbar-divider">|</span>
            )}
          </React.Fragment>
        ))}
      </ul>
      <div className="navbar-email">
        <a href="mailto:rajavarun.kurapati@gmail.com">
          rajavarun.kurapati@gmail.com
        </a>
      </div>
    </nav>
  );
}
