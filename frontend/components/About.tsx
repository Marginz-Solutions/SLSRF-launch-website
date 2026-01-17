
import React from 'react';

const About: React.FC = () => {
  const scrollToLocation = () => {
    const locationSection = document.getElementById('location');
    if (locationSection) {
      locationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="bg-black">
      {/* Orange & Partner Banner Row */}
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="lg:col-span-3 bg-[#f2921d] about-orange-section flex flex-col justify-center reveal-left">
          <h2 className="text-white about-orange-title font-black uppercase leading-[0.9] tracking-tighter mb-4 sm:mb-6 title-underline" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            #thesemporutkalaivision <br /> A zeal for sustenance
          </h2>
          <div className="mt-4 sm:mt-6">
            <p className="text-white text-xs sm:text-sm font-black uppercase tracking-[0.2em] cursor-pointer hover:text-black transition-colors" onClick={scrollToLocation}>Trident (The Oberoi Group of Hotels) →</p>
          </div>
        </div>
        <div className="bg-[#050505] about-dark-section flex flex-col justify-center border-l border-white/5 relative overflow-hidden reveal-right">
          <div className="flex flex-col justify-center h-full text-center">
            <p className="text-[#f2921d] text-xs sm:text-sm font-black uppercase tracking-[0.2em] mb-2">Foundation Vision Address</p>
            <p className="text-white font-black about-dark-date tracking-widest text-2xl sm:text-3xl md:text-4xl">25 January 2026</p>
          </div>
        </div>
      </div>

      {/* Main Content Grid: Image + About Us text */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-2 gap-2">
        <div className="relative aspect-video lg:aspect-auto min-h-[400px] sm:min-h-[500px] md:min-h-[600px] reveal-zoom overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop" 
            alt="Scientific Conference and Knowledge Exchange" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 lg:bottom-16 left-4 sm:left-6 md:left-10 lg:left-16 right-4 sm:right-6 md:right-10 lg:right-16 text-white">
             <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tighter mb-3 sm:mb-4 md:mb-6">Visionary Exchange</h3>
             <div className="space-y-1 sm:space-y-2">
                <p className="text-[#f2921d] font-bold uppercase tracking-widest text-[10px] sm:text-xs md:text-sm">Topic:</p>
                <p className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl uppercase tracking-tighter leading-tight">Building a Legacy with Indian Roots</p>
             </div>
          </div>
        </div>
        
        <div className="bg-[#080808] p-6 sm:p-10 md:p-16 lg:p-24 xl:p-32 flex flex-col justify-center reveal-right">
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter mb-8 sm:mb-10 md:mb-12 leading-none title-underline">ABOUT SLSRF</h2>
          <div className="space-y-6 sm:space-y-8 md:space-y-10 max-w-2xl mt-6 sm:mt-8">
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
              <span className="text-[#f2921d] font-bold text-lg sm:text-xl md:text-2xl">Semporutkalai Life Science Research Foundation (SLSRF)</span> is a non-profit foundation that operates at the convergence of science, society, and public policy, ensuring that research translates into actionable knowledge, institutional frameworks, and measurable real-world outcomes.
            </p>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
              Our work moves science beyond hypothesis and academic journals into systems and solutions that shape the nation's future. We are committed to building India's sustainable vision through research-driven responsibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
