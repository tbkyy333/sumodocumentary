'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'NEWS', href: '#news' },
  { label: 'STORY', href: '#story' },
  { label: 'HISTORY', href: '#history' },
  { label: 'MEMBERS', href: '#members' },
  { label: 'STAFF', href: '#staff' },
];

export default function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (y) => {
      setScrolled(y > 60);
    });
  }, [scrollY]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(0,0,0,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,169,110,0.15)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex flex-col leading-none"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <span className="text-white font-bold text-lg tracking-widest" style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}>
              高砂部屋
            </span>
            <span className="text-[#c9a96e] text-[0.6rem] tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
              Documentary Film · 2026
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-400 hover:text-[#c9a96e] transition-colors duration-300 text-xs tracking-[0.2em] uppercase cursor-pointer"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => handleNavClick(link.href)}
                className="text-white text-2xl tracking-[0.3em] uppercase hover:text-[#c9a96e] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
