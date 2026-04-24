'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Beranda', href: '/', icon: '🏠' },
    { name: 'Katalog', href: '/catalogue', icon: '📚' },
    { name: 'Buku', href: '/books', icon: '📖' },      // ← TAMBAHKAN INI
    { name: 'Tentang', href: '/about', icon: 'ℹ️' },
    { name: 'Kontak', href: '/contact', icon: '📞' },
  ];

  return (
    <nav className="navbar-modern">
      <div className="nav-container">
        {/* Logo */}
        <Link href="/" className="nav-logo">
          <span className="logo-icon">📖</span>
          <span className="logo-text">LibrAspire</span>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-menu desktop">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="nav-link">
              <span className="nav-icon">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Right Side - User Actions */}
        <div className="nav-actions">
          <button className="nav-icon-btn" title="Wishlist">
            ❤️ <span className="badge-wishlist">3</span>
          </button>
          <button className="nav-icon-btn" title="Notifikasi">
            🔔
          </button>
          <button className="nav-icon-btn" title="Profile">
            👤
          </button>
          <button className="btn-login">Login</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
          <hr className="mobile-divider" />
          <button className="mobile-login-btn">Login / Register</button>
        </div>
      )}
    </nav>
  );
}