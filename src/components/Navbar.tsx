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
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm py-3.5' 
          : 'bg-white/70 backdrop-blur-md py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 z-50 relative group">
          <img 
            src="/logo2.jpg" 
            alt="Aurelis Healthcare" 
            className="w-10 h-10 rounded-xl object-cover shadow-md group-hover:scale-105 transition-transform border border-cyan-500/20"
          />
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-wider leading-none text-slate-900 group-hover:text-cyan-600 transition-colors">
              AURELIS
            </span>
            <span className="text-xs font-semibold tracking-[0.25em] leading-none mt-1 text-cyan-600">
              HEALTHCARE
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-700 hover:text-cyan-600 transition-all relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-cyan-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#appointment"
            className="btn-medical-primary text-sm font-semibold"
          >
            Book Appointment
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-50 relative p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-slate-900" />
          ) : (
            <Menu className="w-6 h-6 text-slate-900" />
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
              className="fixed inset-0 w-full h-screen bg-slate-900/95 backdrop-blur-2xl flex flex-col items-center justify-center space-y-8 lg:hidden z-40"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#appointment"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-medical-primary text-lg px-8 py-3.5 shadow-xl mt-4"
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
