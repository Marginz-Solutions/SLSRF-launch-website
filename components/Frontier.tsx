
import React from 'react';

const Frontier: React.FC = () => {
  const items = [
    "Building on India’s civilizational wisdom, SLSRF advances a new scientific paradigm that integrates traditional knowledge with modern life sciences.",
    "Focused on social and environmental impact, the foundation drives national initiatives aligned with SDG-2 (Zero Hunger) and SDG-13 (Climate Action).",
    "Enabling cross-sector collaboration among academia, industry, government, and grassroots communities to preserve India’s biodiversity intelligence.",
    "Setting the foundation for a conscious future, where science, sustainability, and society evolve together for the well-being of mankind."
  ];

  return (
    <section className="py-24 md:py-32 bg-black px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="mb-20 reveal">
          <p className="text-[#f2921d] text-3xl md:text-4xl font-black uppercase tracking-tighter mb-1">
            #SLSRF2026
          </p>
          <div className="relative inline-block">
            <h2 className="text-white text-5xl md:text-8xl lg:text-[7.5rem] font-black uppercase tracking-tighter leading-tight">
              THE <span className="text-[#f2921d]">CONSCIOUS</span> FRONTIER
            </h2>
            <div className="h-1.5 md:h-2 bg-[#f2921d] w-1/4 mt-4 md:mt-6"></div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left: Humanity Image Section */}
          <div className="relative reveal-left">
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm group shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <img 
                src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop" 
                alt="Traditional Medicinal Plants and Biodiversity" 
                className="w-full h-full object-cover grayscale brightness-50 contrast-125 transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Dark overlay for better text contrast */}
              <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
              {/* Massive HUMANITY text overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full px-4 sm:px-8 flex justify-center">
                  <h3
                    className="text-white text-[11vw] sm:text-[9vw] md:text-[7vw] lg:text-[6vw] xl:text-[5.5vw] font-black uppercase tracking-tighter leading-none select-none"
                    style={{
                      textShadow:
                        '0 0 20px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.7), 0 0 60px rgba(0,0,0,0.5), 2px 2px 4px rgba(0,0,0,0.9), -2px -2px 4px rgba(0,0,0,0.9), 2px -2px 4px rgba(0,0,0,0.9), -2px 2px 4px rgba(0,0,0,0.9)',
                      WebkitTextStroke: '1px rgba(0,0,0,0.3)'
                    }}
                  >
                    HUMANITY
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Feature List */}
          <div className="flex flex-col space-y-16 py-8">
            {items.map((item, i) => (
              <div 
                key={i} 
                className="flex items-start gap-4 group reveal-right" 
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="mt-2 shrink-0">
                   {/* Custom Arrow Icon pointing down-right as per screenshot */}
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#f2921d] transform transition-transform group-hover:scale-125">
                      <path d="M7 7L17 17M17 17V8M17 17H8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                </div>
                <p className="text-white text-lg md:text-xl lg:text-2xl font-medium leading-snug tracking-tight text-gray-100 opacity-90 group-hover:opacity-100 transition-opacity">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frontier;
