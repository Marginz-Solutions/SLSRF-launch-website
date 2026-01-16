import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
      {/* High-end Conclave Background with specific overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/95 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" 
          alt="Life Science Research Foundation Launch Event" 
          className="w-full h-full object-cover opacity-50 animate-kenburns"
        />
      </div>

      <div className="relative z-20 w-full max-w-[1400px] px-10">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Main Headline - Matching "The NEXT Frontier" Layout */}
          <div className="relative flex flex-wrap items-start justify-center gap-2 md:gap-4 mb-8">
            
            {/* "The" with Date/Location */}
            <div className="relative flex flex-col items-start">
              <h1 className="text-white text-[8vw] md:text-[6rem] lg:text-[8rem] font-bold leading-none tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                The
              </h1>
              {/* Date and Location positioned below "The" - aligned to start */}
              <div className="mt-2 md:mt-3 text-left w-full pl-4 md:pl-8">
                <p className="text-[#f2921d] text-xs md:text-sm font-bold tracking-wide" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>25.01.2026</p>
                <p className="text-white text-[11px] md:text-xs font-medium tracking-wide" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Trident, Chennai</p>
              </div>
            </div>

            {/* "DIVINE" with "Launch" below - Large Orange Text */}
            <div className="relative flex flex-col items-end">
              <h1 className="text-[#f2921d] text-[15vw] md:text-[10rem] lg:text-[13rem] font-black leading-none tracking-tighter" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                DIVINE
              </h1>
              {/* "Launch" positioned below "DIVINE" and right-aligned */}
              <h2 className="text-white text-[8vw] md:text-[6rem] lg:text-[8rem] font-bold leading-none tracking-tight mt-[-0.5rem]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Launch
              </h2>
            </div>

          </div>

          {/* Tagline / Description */}
          <div className="max-w-4xl mx-auto reveal active delay-1000 border-t border-white/10 pt-16 mt-8">
            <p className="text-white/80 text-xl md:text-3xl font-light leading-relaxed tracking-wide italic">
              Semporutkalai Life Science Research Foundation presents a <br className="hidden md:block" />
              <span className="text-[#f2921d] font-black not-italic px-2">transformative initiative</span> for knowledge preservation, <br className="hidden md:block" />
              human empowerment, and environmental stewardship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
