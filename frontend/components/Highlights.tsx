import React from 'react';

const Highlights: React.FC = () => {
  const highlights = [
    "Foundation Vision Address - Presenting #thesemporutkalaivision - A zeal for sustenance",
    "Academic & Institutional Partnership Announcements - Strategic collaborations with leading institutions and organizations",
    "On-boarding the Eminent Advisory Board Members - Welcoming distinguished leaders and visionaries to guide our mission",
    "Stakeholder Interaction Session - Interactive engagement with researchers, policymakers, industry leaders, and community representatives"
  ];

  return (
    <section id="highlights" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-black px-4 sm:px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="mb-12 sm:mb-16 md:mb-20 reveal">
          <p className="text-[#f2921d] text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter mb-1">
            #SLSRF2026
          </p>
          <div className="relative inline-block">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[7.5rem] font-black uppercase tracking-tighter leading-tight">
              DIVINE LAUNCH <span className="text-[#f2921d]">HIGHLIGHTS</span>
            </h2>
            <div className="h-1 sm:h-1.5 md:h-2 bg-[#f2921d] w-1/4 mt-3 sm:mt-4 md:mt-6"></div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-24 items-start">
          
          {/* Left: Event Image Section */}
          <div className="relative reveal-left">
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm group shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <img 
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop" 
                alt="Foundation Launch Event - Vision Presentation and Stakeholder Collaboration" 
                className="w-full h-full object-cover grayscale brightness-50 contrast-125 transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Dark overlay for better text contrast */}
              <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
              {/* Massive DIVINE LAUNCH text overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full px-4 sm:px-8 flex justify-center">
                  <h3
                    className="text-white text-[14vw] sm:text-[11vw] md:text-[9vw] lg:text-[7vw] xl:text-[5.5vw] font-black uppercase tracking-tighter leading-none select-none text-center"
                    style={{
                      textShadow:
                        '0 0 20px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.7), 0 0 60px rgba(0,0,0,0.5), 2px 2px 4px rgba(0,0,0,0.9), -2px -2px 4px rgba(0,0,0,0.9), 2px -2px 4px rgba(0,0,0,0.9), -2px 2px 4px rgba(0,0,0,0.9)',
                      WebkitTextStroke: '1px rgba(0,0,0,0.3)'
                    }}
                  >
                    DIVINE<br />LAUNCH
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Highlights List */}
          <div className="flex flex-col space-y-10 sm:space-y-12 md:space-y-16 py-4 sm:py-6 md:py-8">
            {highlights.map((highlight, i) => (
              <div 
                key={i} 
                className="flex items-start gap-3 sm:gap-4 group reveal-right" 
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="mt-1 sm:mt-2 shrink-0">
                   {/* Custom Arrow Icon pointing down-right as per Frontier design */}
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6 text-[#f2921d] transform transition-transform group-hover:scale-125">
                      <path d="M7 7L17 17M17 17V8M17 17H8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                </div>
                <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-snug tracking-tight text-gray-100 opacity-90 group-hover:opacity-100 transition-opacity">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;