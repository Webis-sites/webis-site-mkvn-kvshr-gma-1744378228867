'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'דף הבית', href: '/' },
    { name: 'אודות', href: '/about' },
    { name: 'שירותים', href: '/services' },
    { name: 'מסלולי מנוי', href: '/membership' },
    { name: 'מאמנים', href: '/trainers' },
    { name: 'לוח זמנים', href: '/schedule' },
    { name: 'צור קשר', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      id="navbar"
      dir="rtl"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg'
          : 'bg-white/60 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-12 w-12 mr-3">
                <Image
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
                  alt="לוגו מכון כושר גמא"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <span className="text-xl font-bold text-gray-800 hover:text-[#45B7D1] transition-colors duration-300">
                מכון כושר גמא
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2 mx-1 text-gray-700 rounded-lg hover:bg-[#45B7D1]/10 hover:text-[#45B7D1] transition-all duration-300 text-right"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Book Now Button - Desktop */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-[#45B7D1] text-white rounded-lg font-medium shadow-[4px_4px_10px_rgba(69,183,209,0.3),-4px_-4px_10px_rgba(255,255,255,0.8)] hover:shadow-[2px_2px_5px_rgba(69,183,209,0.4),-2px_-2px_5px_rgba(255,255,255,0.9)] transition-all duration-300"
              aria-label="הזמן עכשיו"
            >
              הזמן עכשיו
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="p-2 rounded-full bg-[#FFEEAD]/30 text-gray-700 hover:bg-[#FFEEAD]/50 transition-colors duration-300 focus:outline-none"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-md shadow-lg"
          >
            <div className="px-4 pt-2 pb-4 space-y-1 text-right">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-gray-700 rounded-lg hover:bg-[#45B7D1]/10 hover:text-[#45B7D1] transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 pb-1">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-[#45B7D1] text-white rounded-lg font-medium shadow-[4px_4px_10px_rgba(69,183,209,0.3),-4px_-4px_10px_rgba(255,255,255,0.8)] hover:shadow-[2px_2px_5px_rgba(69,183,209,0.4),-2px_-2px_5px_rgba(255,255,255,0.9)] transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                  aria-label="הזמן עכשיו"
                >
                  הזמן עכשיו
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;