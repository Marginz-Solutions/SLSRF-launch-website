
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-black">
      {/* Orange & Partner Banner Row */}
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="lg:col-span-3 bg-[#f2921d] p-12 md:p-20 flex flex-col justify-center reveal-left">
          <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tighter mb-6 title-underline">
            Semporutkalai 2047 <br /> For sustenance
          </h2>
          <p className="text-white/95 text-base md:text-lg lg:text-xl font-medium max-w-3xl leading-relaxed mt-4">
            SLSRF 2026 brings together researchers, policymakers, conservationists, and thought leaders to advance conscious science, preserve traditional knowledge, and build sustainable solutions for India's biodiversity and environmental challenges.
          </p>
        </div>
        <div className="bg-[#050505] p-12 md:p-16 flex flex-col justify-center border-l border-white/5 relative overflow-hidden reveal-right">
          <div className="mb-8">
            <p className="text-[#f2921d] text-sm font-black uppercase tracking-[0.2em] mb-4">ANCHOR INITIATIVE →</p>
            <h3 className="text-white text-2xl md:text-3xl font-black uppercase leading-tight tracking-tight mb-2">
              Digital Knowledge Bank on
            </h3>
            <p className="text-white text-xl md:text-2xl font-bold leading-tight">
              Indian Medicinal Flora<br />& Aromatic Plants
            </p>
          </div>
          <div className="mt-auto pt-8 border-t border-white/10">
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em]">National Launch — Chennai</p>
            <p className="text-white font-black text-3xl mt-1 tracking-widest">25 January 2026</p>
          </div>
        </div>
      </div>

      {/* Main Content Grid: Image + About Us text */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-2 gap-2">
        <div className="relative aspect-video lg:aspect-auto min-h-[600px] reveal-zoom overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop" 
            alt="Scientific Conference and Knowledge Exchange" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute bottom-16 left-16 text-white max-w-lg">
             <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6">Visionary Exchange</h3>
             <div className="space-y-2">
                <p className="text-[#f2921d] font-bold uppercase tracking-widest text-sm">Topic:</p>
                <p className="text-white font-bold text-2xl md:text-3xl uppercase tracking-tighter leading-none">Breaking Boundaries Building a Brand with Indian Roots</p>
             </div>
          </div>
        </div>
        
        <div className="bg-[#080808] p-12 md:p-24 lg:p-32 flex flex-col justify-center reveal-right">
          <h2 className="text-white text-7xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-none title-underline">ABOUT SLSRF</h2>
          <div className="space-y-10 max-w-2xl mt-8">
            <p className="text-gray-300 text-xl leading-relaxed">
              <span className="text-[#f2921d] font-bold text-2xl">Semporutkalai Life Science Research Foundation (SLSRF)</span> is a Section 8, not-for-profit organization established to build a nation’s legacy through knowledge preservation, human empowerment, and environmental stewardship.
            </p>
            <p className="text-gray-300 text-xl leading-relaxed">
              Anchored in the philosophy of <em className="italic text-white">Semporul — for sustenance</em> — SLSRF works at the intersection of life sciences, traditional knowledge, technology, and sustainability. The foundation is committed to two national-interest domains: <span className="font-bold text-[#f2921d]">Social Development</span> and <span className="font-bold text-[#f2921d]">Environmental Conservation</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
