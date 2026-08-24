import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Specialists', href: '#specialists' },
    { name: 'Services', href: '#services' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-bg-light/95 backdrop-blur-md shadow-sm py-4' : 'bg-bg-light/70 backdrop-blur-sm py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 z-50 relative">
          <img 
            src="/logo1.png" 
            alt="Aurelis Health" 
            className="w-10 h-10 object-contain"
            onError={(e) => {
              // Hide image if it hasn't been uploaded yet to prevent broken image icon
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <div className="flex flex-col">
            <span className={`text-xl font-bold tracking-wider leading-none text-primary-900`}>
              AURELIS
            </span>
            <span className={`text-sm tracking-[0.2em] leading-none mt-1 text-primary-800`}>
              HEALTH
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-medical-600 ${
                isScrolled ? 'text-primary-800' : 'text-primary-800'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary-900 hover:bg-medical-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105"
          >
            Book Appointment
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-50 relative p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-primary-900" />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-primary-900' : 'text-primary-900'}`} />
          )}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-8 lg:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-medium text-primary-900 hover:text-medical-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary-900 text-white px-8 py-3 rounded-full text-lg font-medium mt-4"
              >
                Book Appointment
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
