
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'AGENDA', href: '#marquee' },
    { name: 'RSVP', href: '#contact' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navbarHeight = 80; // Approximate navbar height
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md py-3 sm:py-4 border-b border-white/10 shadow-2xl' : 'bg-transparent py-4 sm:py-6 md:py-8'}`}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#top" className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
          <div className="h-8 sm:h-10 md:h-12 w-auto">
            <img
              src="/SLSRP FINAL LOGO.png"
              alt="SLSRF Launch 2026"
              className="h-full w-auto object-contain"
            />
          </div>
          <span className="hidden sm:inline-block text-white font-black text-base sm:text-lg tracking-tight leading-none group-hover:text-[#f2921d] transition-colors">
            SLSRF
          </span>
        </a>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-white text-[11px] font-bold tracking-widest hover:text-[#f2921d] transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#f2921d] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden text-white text-lg sm:text-xl">
           <i className="fas fa-bars-staggered"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
