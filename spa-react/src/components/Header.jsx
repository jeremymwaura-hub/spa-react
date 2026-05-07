import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-brand">
          <span className="header-logo" aria-hidden="true">✦</span>
          <span className="header-wordmark">FOLIO</span>
        </div>
        <nav className="header-nav" aria-label="Site navigation">
          <span className="header-nav-item">Work</span>
          <span className="header-nav-item">About</span>
          <span className="header-nav-item header-nav-cta">Contact</span>
        </nav>
      </div>
    </header>
  );
}

export default Header;
