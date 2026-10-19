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
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="GD Dream Career Institute" 
                className="h-12 w-auto object-contain"
              />
              <div className="hidden sm:block">
                <span className="text-[#011F4B] font-extrabold text-base block leading-tight">GD Dream Career</span>
                <span className="text-[11px] text-gray-500 font-medium tracking-wide">Agra Road, Jaipur</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="text-sm font-semibold text-gray-700 hover:text-[#011F4B] transition duration-150 whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Action Button (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:9982216542" 
              className="text-xs font-bold text-[#011F4B] bg-sky-50 px-3 py-2 rounded-lg border border-sky-100 hover:bg-sky-100 transition"
            >
              📞 9982216542
            </a>
            <Link 
              href="/contact" 
              className="bg-[#011F4B] hover:bg-black text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md transition"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#011F4B] hover:text-sky-600 focus:outline-none p-2 rounded-lg bg-gray-50"
              aria-label="Toggle navigation"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-6 space-y-2 shadow-xl">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="block py-2.5 px-3 text-sm font-semibold text-gray-800 hover:bg-sky-50 hover:text-[#011F4B] rounded-xl transition"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 mt-2 border-t border-gray-100 flex flex-col gap-2">
            <a 
              href="tel:9982216542" 
              className="w-full text-center py-2.5 bg-sky-50 text-[#011F4B] rounded-xl text-xs font-bold border border-sky-100"
            >
              📞 Call CEO Dev Sharma: 9982216542
            </a>
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-[#011F4B] hover:bg-black text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md transition"
            >
              Enroll Now / Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}