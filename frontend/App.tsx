
import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Highlights from './components/Highlights';
import Pillars from './components/Pillars';
import MarqueeSection from './components/MarqueeSection';
// import Frontier from './components/Frontier';
// import WhoBelongs from './components/WhoBelongs';
// import Transforms from './components/Transforms';
// import WhatSetsApart from './components/WhatSetsApart';
import Speakers from './components/Speakers';
import RollOfHonour from './components/RollOfHonour';
import Partners from './components/Partners';
import Location from './components/Location';
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
        <Highlights />
        <Pillars />
        <MarqueeSection />
        {/* <Frontier /> */}
        {/* <WhoBelongs /> */}
        {/* <Transforms /> */}
        {/* <WhatSetsApart /> */}
        <Speakers />
        <RollOfHonour />
        <Partners />
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default App;
