import React, { useRef, useEffect, useState } from 'react';

const MarqueeSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=2070&auto=format&fit=crop", // Product launch event networking
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=2070&auto=format&fit=crop", // Stage event with lights
    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=2070&auto=format&fit=crop", // Conference room presentation
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=2070&auto=format&fit=crop", // Team celebration launch
    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=2070&auto=format&fit=crop", // Product showcase event
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=2070&auto=format&fit=crop", // Launch event celebration
    "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=2070&auto=format&fit=crop"  // Event audience celebration
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Scroll to current image when index changes
  useEffect(() => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;
      const scrollPosition = (scrollWidth / images.length) * currentIndex;
      
      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, images.length]);

  const scroll = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="marquee" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-black overflow-hidden">
      <div className="text-center mb-16 reveal">
        <p className="text-[#f2921d] text-lg md:text-2xl font-bold uppercase tracking-[0.3em] mt-6">
          Conscious Science • National Knowledge • Sustainable Futures
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 group">
        <div ref={scrollRef} className="carousel-container gap-4 sm:gap-6 py-6 sm:py-10">
          {images.map((img, i) => (
            <div key={i} className="carousel-item w-[85vw] sm:w-full md:w-2/3 shrink-0">
              <img 
                src={img} 
                alt={`Event Highlight ${i + 1}`} 
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1540575861501-7ad058a87944?w=2070&auto=format&fit=crop';
                }}
                className="w-full aspect-video object-cover rounded-lg border-2 border-white/10 shadow-2xl" 
              />
            </div>
          ))}
        </div>

        <button 
          onClick={() => scroll('left')}
          className="hidden sm:flex absolute left-4 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full border border-[#f2921d] text-[#f2921d] items-center justify-center hover:bg-[#f2921d] hover:text-black transition-all z-10 opacity-0 group-hover:opacity-100"
          aria-label="Previous image"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button 
          onClick={() => scroll('right')}
          className="hidden sm:flex absolute right-4 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full border border-[#f2921d] text-[#f2921d] items-center justify-center hover:bg-[#f2921d] hover:text-black transition-all z-10 opacity-0 group-hover:opacity-100"
          aria-label="Next image"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      <div className="flex justify-center gap-3 mt-8">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
              i === currentIndex ? 'w-10 bg-[#f2921d]' : 'w-3 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
