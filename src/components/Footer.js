import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-label">Location</div>
          <div className="footer-value">Phoenix, AZ</div>
        </div>
        <div className="footer-section">
          <div className="footer-label">Contact</div>
          <div className="footer-value">
            <a href="mailto:rajavarun.kurapati@gmail.com">
              rajavarun.kurapati@gmail.com
            </a>
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-label">Follow</div>
          <div className="footer-social-box">
            {/* Place the SVGs in public folder and point to them */}
            <a href="https://www.instagram.com/raja_varu_n._.01/" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.svg" alt="Instagram" className="footer-social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/raja-varun-kurapati/" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin.svg" alt="LinkedIn" className="footer-social-icon" />
            </a>
            <a href="https://github.com/rajavarun1406" target="_blank" rel="noopener noreferrer">
              <img src="/github.svg" alt="GitHub" className="footer-social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        © {new Date().getFullYear()} By Raja Varun Kurapati
      </div>
    </footer>
  );
}
