
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
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1600px] mx-auto px-10 flex items-center justify-between">
        {/* Screenshot-Style Mesh Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-10 h-10">
             <div className="absolute inset-0 border border-[#f2921d]/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
             <div className="absolute inset-1 border border-[#f2921d]/60 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
             <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-leaf text-[#f2921d] text-xl"></i>
             </div>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-lg tracking-tighter leading-none">SLSRF</span>
            <span className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase leading-none mt-1">Conclave - 2026</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-10">
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

        {/* Placeholder for menu consistency */}
        <div className="lg:hidden text-white text-xl">
           <i className="fas fa-bars-staggered"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
