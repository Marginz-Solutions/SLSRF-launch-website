
import React, { useRef } from 'react';

const MarqueeSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const images = [
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop", // Scientific conference/seminar
    "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop", // Medicinal plants and traditional herbs
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2070&auto=format&fit=crop", // Environmental conservation and nature
    "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?q=80&w=2070&auto=format&fit=crop", // Research collaboration
    "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2070&auto=format&fit=crop"  // Laboratory and life sciences
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="marquee" className="py-24 bg-black overflow-hidden">
      <div className="text-center mb-16 reveal">
        <p className="text-white text-lg md:text-2xl font-bold uppercase tracking-[0.3em] mt-6 opacity-70">
          Conscious Science • National Knowledge • Sustainable Futures
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 group">
        <div ref={scrollRef} className="carousel-container gap-6 py-10">
          {images.map((img, i) => (
            <div key={i} className="carousel-item w-full md:w-2/3 shrink-0">
              <img 
                src={img} 
                alt={`Event Highlight ${i}`} 
                className="w-full aspect-video object-cover rounded-lg border-2 border-white/10 shadow-2xl" 
              />
            </div>
          ))}
        </div>

        <button 
          onClick={() => scroll('left')}
          className="absolute left-10 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-[#f2921d] text-[#f2921d] flex items-center justify-center hover:bg-[#f2921d] hover:text-black transition-all z-10"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button 
          onClick={() => scroll('right')}
          className="absolute right-10 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-[#f2921d] text-[#f2921d] flex items-center justify-center hover:bg-[#f2921d] hover:text-black transition-all z-10"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      <div className="flex justify-center gap-3 mt-8">
        {images.map((_, i) => (
          <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === 2 ? 'w-10 bg-[#f2921d]' : 'w-3 bg-white/20'}`}></div>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
