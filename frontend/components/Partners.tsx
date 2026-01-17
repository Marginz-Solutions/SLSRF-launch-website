
import React from 'react';

const Partners: React.FC = () => {
  const mainPartners = [
    { name: 'BRiX Network', type: 'Strategic Partner', logo: '/BRIX NEW.png', hasLogo: true },
    { name: 'Q DoTZ', type: 'Innovation Partner', logo: '/Quantum-dotz-logo.png', hasLogo: true },
    { name: 'SNA', type: 'Associate Partner', logo: '/Brand-Logo.jpg', hasLogo: true },
    { name: 'Marginz', type: 'Growth Partner', logo: '/marginz logo.jpg', hasLogo: true }
  ];

  return (
    <section id="partners" className="responsive-section bg-black border-t border-white/5">
      <div className="responsive-container">
        <div className="text-center mb-16 sm:mb-20 md:mb-24 reveal-zoom">
            <h2 className="partners-title font-black text-white uppercase tracking-tighter leading-none mb-3 sm:mb-4">
                PART<span className="text-[#f2921d]">NERS</span>
            </h2>
            <p className="text-gray-500 uppercase tracking-[0.3em] sm:tracking-[0.5em] font-bold text-xs">Collaborating for a sustainable future</p>
        </div>

        <div className="partners-grid responsive-grid-4 max-w-4xl mx-auto">
          {mainPartners.map((partner, index) => (
            <div 
              key={index} 
              className="partner-card bg-white aspect-square flex flex-col items-center justify-center hover:shadow-2xl hover:scale-[1.05] transition-all group rounded-sm reveal-zoom"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
                <div className={`w-full flex items-center justify-center mb-2 sm:mb-3 grayscale group-hover:grayscale-0 transition-all duration-700 ${partner.name === 'SNA' ? 'partner-logo-height' : 'h-8 sm:h-10'}`}>
                    {partner.hasLogo ? (
                      <img 
                        src={partner.logo!} 
                        alt={partner.name} 
                        className={`max-w-full object-contain ${partner.name === 'SNA' ? 'max-h-10 sm:max-h-12' : 'max-h-full'}`}
                      />
                    ) : (
                      <span className="text-black font-black text-sm sm:text-base md:text-lg tracking-tighter uppercase text-center leading-none">{partner.name}</span>
                    )}
                </div>
                <div className="w-full h-px bg-gray-100 mb-2"></div>
                <p className="partner-type text-gray-400 uppercase font-bold tracking-widest text-center">{partner.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
