import React, { useRef, useEffect, useState } from 'react';

const Pillars: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

  const pillars = [
    {
      title: 'LIFE SCIENCE RESEARCH & TRANSLATION',
      desc: 'Bridging laboratory discoveries with real-world applications for societal benefit and national development. Our research translates scientific breakthroughs into practical solutions that address India\'s most pressing challenges.'
    },
    {
      title: 'NOETIC SCIENCE & HUMAN CONSCIOUSNESS RESEARCH',
      desc: 'Exploring the intersection of consciousness and scientific inquiry to understand human potential and awareness. We investigate the deeper aspects of human experience and their role in scientific discovery.'
    },
    {
      title: 'ENVIRONMENTAL & ECOLOGICAL SUSTAINABILITY',
      desc: 'Developing sustainable solutions for environmental challenges and ecological preservation initiatives. Our work focuses on creating harmony between human development and environmental conservation.'
    },
    {
      title: 'KNOWLEDGE INFRASTRUCTURE & DIGITAL REPOSITORIES',
      desc: 'Building comprehensive digital knowledge systems for research, education, and policy-making. We create accessible platforms that preserve and disseminate India\'s scientific and traditional knowledge.'
    },
    {
      title: 'ACADEMIA–INDUSTRY–GOVERNMENT INTEGRATION',
      desc: 'Fostering collaboration across sectors for translating research into actionable national solutions. We bridge the gap between academic research, industrial application, and government policy implementation.'
    }
  ];

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      
      // Update current index based on scroll position
      const cardWidth = clientWidth / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
      const newIndex = Math.round(scrollLeft / (cardWidth + 24));
      setCurrentIndex(newIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const cardWidth = clientWidth / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
      const scrollAmount = (cardWidth + 24) * index;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const autoScroll = () => {
    if (!isAutoScrolling) return;
    
    const maxIndex = pillars.length - (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    let nextIndex = currentIndex + 1;
    
    // Reset to beginning when reaching the end
    if (nextIndex > maxIndex) {
      nextIndex = 0;
    }
    
    scrollToIndex(nextIndex);
  };

  const startAutoScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
    }
    autoScrollInterval.current = setInterval(autoScroll, 4000); // Auto-scroll every 4 seconds
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', updateScrollButtons);
      updateScrollButtons(); // Initial check
      
      // Handle window resize
      const handleResize = () => updateScrollButtons();
      window.addEventListener('resize', handleResize);
      
      // Start auto-scroll
      if (isAutoScrolling) {
        startAutoScroll();
      }
      
      return () => {
        scrollContainer.removeEventListener('scroll', updateScrollButtons);
        window.removeEventListener('resize', handleResize);
        stopAutoScroll();
      };
    }
  }, [currentIndex, isAutoScrolling]);

  const scroll = (direction: 'left' | 'right') => {
    // Stop auto-scroll when user manually navigates
    setIsAutoScrolling(false);
    stopAutoScroll();
    
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const cardWidth = clientWidth / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
      const scrollAmount = cardWidth + 24; // Include gap
      const scrollTo = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount 
        : scrollRef.current.scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
    
    // Resume auto-scroll after 10 seconds of inactivity
    setTimeout(() => {
      setIsAutoScrolling(true);
    }, 10000);
  };

  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
    stopAutoScroll();
  };

  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
  };

  return (
    <section id="pillars" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-black relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        
        {/* Header - Matching Highlights design exactly */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 reveal-skew">
          <p className="text-gray-700 text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-[0.6em] sm:tracking-[0.8em] mb-3 sm:mb-4">FOUNDATION</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9]">
            OUR FIVE <br />
            <span className="text-[#f2921d]">PILLARS</span>
          </h2>
        </div>

        {/* Enhanced Sliding Carousel Container */}
        <div className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Carousel Container with improved scrolling */}
          <div 
            ref={scrollRef} 
            className="carousel-container flex gap-6 pb-12 cursor-grab active:cursor-grabbing overflow-x-auto scroll-smooth"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              scrollSnapType: 'x mandatory'
            }}
            onMouseDown={(e) => {
              // Stop auto-scroll when user interacts
              setIsAutoScrolling(false);
              stopAutoScroll();
              
              const startX = e.pageX - (scrollRef.current?.offsetLeft || 0);
              const scrollLeft = scrollRef.current?.scrollLeft || 0;
              
              const handleMouseMove = (e: MouseEvent) => {
                if (scrollRef.current) {
                  const x = e.pageX - (scrollRef.current.offsetLeft || 0);
                  const walk = (x - startX) * 2;
                  scrollRef.current.scrollLeft = scrollLeft - walk;
                }
              };
              
              const handleMouseUp = () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
                
                // Resume auto-scroll after 10 seconds
                setTimeout(() => {
                  setIsAutoScrolling(true);
                }, 10000);
              };
              
              document.addEventListener('mousemove', handleMouseMove);
              document.addEventListener('mouseup', handleMouseUp);
            }}
          >
            {pillars.map((pillar, index) => (
              <div 
                key={index} 
                className="carousel-item w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-1rem)] shrink-0 h-full"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="h-[450px] sm:h-[480px] md:h-[500px] bg-[#0c0c0c] border border-white/5 p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col justify-between hover:border-[#f2921d]/30 transition-all duration-500 relative overflow-hidden group/card">
                  
                  {/* Large background number - More visible */}
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 text-[8rem] sm:text-[9rem] md:text-[10rem] font-black text-white/[0.08] leading-none select-none group-hover/card:text-[#f2921d]/[0.12] transition-colors duration-700 pointer-events-none">
                    {index + 1}
                  </div>

                  <div className="relative z-10">
                    {/* Small orange bar top left */}
                    <div className="w-8 sm:w-10 h-1 sm:h-1.5 bg-[#f2921d] mb-8 sm:mb-10 md:mb-12 group-hover/card:w-16 sm:group-hover/card:w-20 transition-all duration-700"></div>
                    
                    <h4 className="text-white text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight mb-6 sm:mb-7 md:mb-8 leading-tight max-w-[90%]">
                      {pillar.title}
                    </h4>
                    
                    <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Footer - SLSRF 2026 and Arrow */}
                  <div className="relative z-10 pt-6 sm:pt-8 border-t border-white/5 flex justify-between items-center group-hover/card:border-[#f2921d]/10 transition-colors">
                    <span className="text-[10px] sm:text-[11px] text-gray-600 font-black uppercase tracking-[0.25em] sm:tracking-[0.3em]">SLSRF 2026</span>
                    <div className="flex items-center gap-2 text-[#f2921d] group-hover/card:gap-3 sm:group-hover/card:gap-4 transition-all duration-300">
                      <i className="fas fa-arrow-right text-xs"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Slider Navigation Controls */}
          <div className="flex justify-center md:justify-end gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border flex items-center justify-center transition-all ${
                canScrollLeft 
                  ? 'border-white/10 text-white hover:bg-[#f2921d] hover:text-black hover:border-[#f2921d]' 
                  : 'border-white/5 text-white/30 cursor-not-allowed'
              }`}
              aria-label="Previous pillar"
            >
              <i className="fas fa-chevron-left text-xs sm:text-sm"></i>
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border flex items-center justify-center transition-all ${
                canScrollRight 
                  ? 'border-white/10 text-white hover:bg-[#f2921d] hover:text-black hover:border-[#f2921d]' 
                  : 'border-white/5 text-white/30 cursor-not-allowed'
              }`}
              aria-label="Next pillar"
            >
              <i className="fas fa-chevron-right text-xs sm:text-sm"></i>
            </button>
            
            {/* Auto-scroll toggle button */}
            <button 
              onClick={() => {
                setIsAutoScrolling(!isAutoScrolling);
                if (!isAutoScrolling) {
                  startAutoScroll();
                } else {
                  stopAutoScroll();
                }
              }}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/10 text-white flex items-center justify-center hover:bg-[#f2921d] hover:text-black hover:border-[#f2921d] transition-all"
              aria-label={isAutoScrolling ? "Pause auto-scroll" : "Resume auto-scroll"}
            >
              <i className={`fas ${isAutoScrolling ? 'fa-pause' : 'fa-play'} text-xs sm:text-sm`}></i>
            </button>
          </div>

          {/* Scroll Progress Indicator */}
          <div className="flex justify-center mt-4 gap-2">
            {pillars.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoScrolling(false);
                  stopAutoScroll();
                  scrollToIndex(index);
                  setTimeout(() => setIsAutoScrolling(true), 10000);
                }}
                className="w-2 h-2 rounded-full transition-all duration-300 hover:scale-125"
                style={{
                  backgroundColor: index === currentIndex ? '#f2921d' : 'rgba(255,255,255,0.2)'
                }}
                aria-label={`Go to pillar ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Background visual element */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#f2921d]/5 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
};

export default Pillars;