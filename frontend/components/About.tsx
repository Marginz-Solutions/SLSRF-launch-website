
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-black">
      {/* Orange & Partner Banner Row */}
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="lg:col-span-3 bg-[#f2921d] p-6 sm:p-10 md:p-16 lg:p-20 flex flex-col justify-center reveal-left">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase leading-[0.9] tracking-tighter mb-4 sm:mb-6 title-underline">
            Semporutkalai 2047 <br /> For sustenance
          </h2>
          <p className="text-white/95 text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-3xl leading-relaxed mt-3 sm:mt-4">
            SLSRF 2026 brings together researchers, policymakers, conservationists, and thought leaders to advance conscious science, preserve traditional knowledge, and build sustainable solutions for India's biodiversity and environmental challenges.
          </p>
        </div>
        <div className="bg-[#050505] p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center border-l border-white/5 relative overflow-hidden reveal-right">
          <div className="mb-6 sm:mb-8">
            <p className="text-[#f2921d] text-xs sm:text-sm font-black uppercase tracking-[0.2em] mb-3 sm:mb-4">ANCHOR INITIATIVE →</p>
            <p className="text-gray-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] mb-2">National Launch — Chennai</p>
            <p className="text-white font-black text-2xl sm:text-3xl tracking-widest mb-6 sm:mb-8">25 January 2026</p>
          </div>
          <div className="mt-auto pt-6 sm:pt-8 border-t border-white/10">
            <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-black uppercase leading-tight tracking-tight mb-2">
              Digital Knowledge Bank on
            </h3>
            <p className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-tight">
              Indian Medicinal Flora<br />& Aromatic Plants
            </p>
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
                <p className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl uppercase tracking-tighter leading-tight">Breaking Boundaries Building a Brand with Indian Roots</p>
             </div>
          </div>
        </div>
        
        <div className="bg-[#080808] p-6 sm:p-10 md:p-16 lg:p-24 xl:p-32 flex flex-col justify-center reveal-right">
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter mb-8 sm:mb-10 md:mb-12 leading-none title-underline">ABOUT SLSRF</h2>
          <div className="space-y-6 sm:space-y-8 md:space-y-10 max-w-2xl mt-6 sm:mt-8">
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
              <span className="text-[#f2921d] font-bold text-lg sm:text-xl md:text-2xl">Semporutkalai Life Science Research Foundation (SLSRF)</span> is a Section 8, not-for-profit organization established to build a nation's legacy through knowledge preservation, human empowerment, and environmental stewardship.
            </p>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
              Anchored in the philosophy of <em className="italic text-white">Semporul — for sustenance</em> — SLSRF works at the intersection of life sciences, traditional knowledge, technology, and sustainability. The foundation is committed to two national-interest domains: <span className="font-bold text-[#f2921d]">Social Development</span> and <span className="font-bold text-[#f2921d]">Environmental Conservation</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
