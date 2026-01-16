
import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MarqueeSection from './components/MarqueeSection';
// import Frontier from './components/Frontier';
// import WhoBelongs from './components/WhoBelongs';
// import Transforms from './components/Transforms';
// import WhatSetsApart from './components/WhatSetsApart';
import Speakers from './components/Speakers';
import Partners from './components/Partners';
import Footer from './components/Footer';

const App: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Use Intersection Observer for better performance
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Optionally unobserve after animation
            // observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observe all reveal elements
    const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-skew, .reveal-fade';
    const elements = document.querySelectorAll(selectors);
    
    elements.forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black selection:bg-[#f2921d] selection:text-black overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MarqueeSection />
        {/* <Frontier /> */}
        {/* <WhoBelongs /> */}
        {/* <Transforms /> */}
        {/* <WhatSetsApart /> */}
        <Speakers />
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default App;
