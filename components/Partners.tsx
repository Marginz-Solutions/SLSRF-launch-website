
import React from 'react';

const Partners: React.FC = () => {
  const mainPartners = [
    { name: 'BRiX Network', type: 'Strategic Partner', logo: '/BRIX NEW.png', hasLogo: true },
    { name: 'Q DoTZ', type: 'Innovation Partner', logo: '/Quantum-dotz-logo.png', hasLogo: true },
    { name: 'SNA', type: 'Associate Partner', logo: '/Brand-Logo.jpg', hasLogo: true },
    { name: 'Marginz', type: 'Growth Partner', logo: '/marginz logo.jpg', hasLogo: true }
  ];

  return (
    <section id="partners" className="py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 reveal-zoom">
            <h2 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-4">
                PART<span className="text-[#f2921d]">NERS</span>
            </h2>
            <p className="text-gray-500 uppercase tracking-[0.5em] font-bold text-xs">Collaborating for a sustainable future</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {mainPartners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white p-10 flex flex-col items-center justify-center hover:shadow-2xl hover:scale-[1.05] transition-all group rounded-sm reveal-zoom"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
                <div className={`w-full flex items-center justify-center mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 ${partner.name === 'SNA' ? 'h-32' : 'h-20'}`}>
                    {partner.hasLogo ? (
                      <img 
                        src={partner.logo!} 
                        alt={partner.name} 
                        className={`max-w-full object-contain ${partner.name === 'SNA' ? 'max-h-32' : 'max-h-full'}`}
                      />
                    ) : (
                      <span className="text-black font-black text-2xl md:text-3xl tracking-tighter uppercase text-center leading-none">{partner.name}</span>
                    )}
                </div>
                <div className="w-full h-px bg-gray-100 mb-6"></div>
                <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest text-center">{partner.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
