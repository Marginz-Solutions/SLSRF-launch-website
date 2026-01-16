
import React, { useRef } from 'react';

const WhatSetsApart: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      title: 'PURPOSE-DRIVEN COLLABORATION',
      desc: 'Engage in meaningful collaborations with research institutions, policymakers, industry leaders, academicians, and grassroots stakeholders, fostering partnerships that translate knowledge into scalable social and environmental impact.'
    },
    {
      title: 'NATIONAL KNOWLEDGE ANCHORING',
      desc: 'Anchoring the Digital Knowledge Bank on Indian Medicinal Flora and Aromatic Plants, SLSRF establishes a structured, living repository that safeguards India’s biodiversity intelligence for research, education, and policy-making.'
    },
    {
      title: 'TRADITION MEETS TECHNOLOGY',
      desc: 'By integrating traditional wisdom, life sciences, AI, and digital platforms, SLSRF creates future-ready frameworks that respect heritage while advancing scientific innovation.'
    },
    {
      title: 'SOCIAL & ENVIRONMENTAL IMPACT',
      desc: 'Aligned with SDG-2 (Zero Hunger) and SDG-13 (Climate Action), SLSRF’s initiatives deliver measurable outcomes in community resilience, sustainability, and ecological preservation.'
    },
    {
      title: 'CONSCIOUS SCIENCE ECOSYSTEM',
      desc: 'More than a program or event, #SLSRF2026 establishes a long-term ecosystem where knowledge, ethics, and responsibility guide national development.'
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const cardWidth = clientWidth / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
      const scrollTo = direction === 'left' ? scrollLeft - cardWidth : scrollLeft + cardWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Header - Redesigned to match screenshot exactly */}
        <div className="text-center mb-16 md:mb-24 reveal-skew">
          <p className="text-gray-700 text-[10px] md:text-xs font-black uppercase tracking-[0.8em] mb-4">DISTINCTION</p>
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9]">
            WHAT SETS <br />
            <span className="text-[#f2921d]">#SLSRF2026</span> APART
          </h2>
        </div>

        {/* Sliding Carousel Container */}
        <div className="relative group">
          <div 
            ref={scrollRef} 
            className="carousel-container flex gap-6 pb-12 cursor-grab active:cursor-grabbing overflow-x-auto"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cards.map((card, index) => (
              <div 
                key={index} 
                className="carousel-item w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-1rem)] shrink-0 h-full"
              >
                <div className="h-[500px] bg-[#0c0c0c] border border-white/5 p-10 md:p-14 flex flex-col justify-between hover:border-[#f2921d]/30 transition-all duration-500 relative overflow-hidden group/card">
                  
                  {/* Large background number - Faded like screenshot */}
                  <div className="absolute top-4 right-4 text-[10rem] font-black text-white/[0.03] leading-none select-none group-hover/card:text-[#f2921d]/[0.05] transition-colors duration-700 pointer-events-none">
                    {index + 1}
                  </div>

                  <div className="relative z-10">
                    {/* Small orange bar top left */}
                    <div className="w-10 h-1.5 bg-[#f2921d] mb-12 group-hover/card:w-20 transition-all duration-700"></div>
                    
                    <h4 className="text-white text-2xl font-black uppercase tracking-tight mb-8 leading-tight max-w-[90%]">
                      {card.title}
                    </h4>
                    
                    <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium">
                      {card.desc}
                    </p>
                  </div>

                  {/* Footer - SLSRF 2026 and Arrow */}
                  <div className="relative z-10 pt-8 border-t border-white/5 flex justify-between items-center group-hover/card:border-[#f2921d]/10 transition-colors">
                    <span className="text-[11px] text-gray-600 font-black uppercase tracking-[0.3em]">SLSRF 2026</span>
                    <div className="flex items-center gap-2 text-[#f2921d] group-hover/card:gap-4 transition-all duration-300">
                      <i className="fas fa-arrow-right text-xs"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Navigation Controls */}
          <div className="flex justify-center md:justify-end gap-4 mt-8">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border border-white/10 text-white flex items-center justify-center hover:bg-[#f2921d] hover:text-black hover:border-[#f2921d] transition-all"
              aria-label="Previous card"
            >
              <i className="fas fa-chevron-left text-sm"></i>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full border border-white/10 text-white flex items-center justify-center hover:bg-[#f2921d] hover:text-black hover:border-[#f2921d] transition-all"
              aria-label="Next card"
            >
              <i className="fas fa-chevron-right text-sm"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Background visual element */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#f2921d]/5 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
};

export default WhatSetsApart;
