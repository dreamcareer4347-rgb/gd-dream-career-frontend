// File path: frontend/src/components/Navbar.jsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Free Computer Education', href: '/computer-education' },
    { name: 'Student Performance', href: '/performance' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src="/logo.png" 
                alt="GD Dream Career Institute Logo" 
                className="h-12 w-auto object-contain"
              />
              <span className="text-[#011F4B] font-bold text-lg hidden sm:block">GD Dream Career</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="text-sm font-medium text-[#011F4B] hover:text-sky-500 transition duration-150 whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Action Button (Desktop) */}
          <div className="hidden lg:flex">
            <Link 
              href="/contact" 
              className="bg-[#011F4B] hover:bg-black text-white px-6 py-2.5 rounded-md font-semibold text-sm shadow-md transition duration-150"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#011F4B] hover:text-sky-500 focus:outline-none"
              aria-label="Toggle navigation"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-50 border-t border-gray-200 px-4 pt-2 pb-6 space-y-3 shadow-inner">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="block py-2.5 px-3 text-base font-medium text-[#011F4B] hover:bg-sky-50 rounded-md transition"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-200">
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-[#011F4B] hover:bg-black text-white px-6 py-3 rounded-md font-semibold text-sm shadow-md transition"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}