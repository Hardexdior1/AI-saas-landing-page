'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePop } from '../context/PopUpCOntext';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [fixedNavbar, setFixedNavbar] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('team'); 
  const { setShowPopUp } = usePop();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setFixedNavbar(true);
      } else if (window.scrollY < 3) {
        setFixedNavbar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: "team", label: "Team" },
    { id: "about", label: "About" },
    { id: "pricing", label: "Pricing" },
    { id: "integration", label: "Integration" },
    { id: "contact", label: "Contact" },
  ];

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setIsMobileMenuOpen(false); 
  };

  return (
    <header
      className={`transition-all duration-300 px-4 md: py-3 flex items-center justify-between rounded-full backdrop-blur-md bg-black/60  border-b-0  shadow-sm z-50 md:border-3 border-white/40 md:border ${
        fixedNavbar
          ? 'fixed border-t-0 mt-0 border-l-0 border-r-0 mx-0 border-b top-0 left-0 right-0 rounded-none md:mx-0'
          : 'relative mx-6 md:mx-16 mt-4'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src="/aicon.jpeg"
          alt="logo"
          className="rounded"
          height={40}
          width={40}
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        {navLinks.map(({ id, label }, index) => (
          <a
            key={index}
            href={`#${id}`}
            onClick={() => handleLinkClick(id)}
            className={`text-sm font-medium transition ${
              activeLink === id
                ? "bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
                : "text-neutral-100 hover:text-blue-400"
            }`}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Desktop CTA */}
      <a
        href="#get-started"
        onClick={() => setShowPopUp(true)}
        className="hidden md:inline-block bg-white hover:bg-blue-700 text-black hover:text-white text-sm font-medium px-4 py-2 rounded-lg transition"
      >
        Join Waitlist
      </a>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden text-white z-50"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/90 p-6 flex flex-col gap-4 md:hidden rounded-b-xl border-t border-white/20">
          {navLinks.map(({ id, label }, index) => (
            <a
              key={index}
              href={`#${id}`}
              onClick={() => handleLinkClick(id)}
              className={`text-white text-sm font-medium transition ${
                activeLink === id ? 'text-blue-400 font-semibold' : 'hover:text-blue-400'
              }`}
            >
              {label}
            </a>
          ))}

          <button
            onClick={() => {
              setShowPopUp(true);
              setIsMobileMenuOpen(false);
            }}
            className="mt-4 bg-white hover:bg-blue-700 text-black hover:text-white text-sm font-medium px-4 py-2 rounded-lg transition"
          >
            Join Waitlist
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
