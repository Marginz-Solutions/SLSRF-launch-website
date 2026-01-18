import React from 'react';

const Partners: React.FC = () => {
  const mainPartners = [
    { name: 'BRiX Network', type: 'Enablement partner', logo: '/BRIX NEW.png', hasLogo: true },
    { name: 'Q DoTZ', type: 'Environment Hearing partner', logo: '/Quantum-dotz-logo.png', hasLogo: true },
    { name: 'SNA', type: 'Industry Academic Partner', logo: '/Brand-Logo.jpg', hasLogo: true },
    { name: 'Marginz', type: 'Technology Partner', logo: '/marginz logo.jpg', hasLogo: true }
  ];

  return (
    <section id="partners" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-black border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-20 md:mb-24 reveal-zoom">
            <h2 className="partners-title font-black text-white uppercase tracking-tighter leading-none mb-3 sm:mb-4">
                OUR <span className="text-[#f2921d]">CONGLOMERATES</span>
            </h2>
            <p className="text-gray-500 uppercase tracking-[0.3em] sm:tracking-[0.5em] font-bold text-xs">Collaborating for a sustainable future</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-md md:max-w-6xl mx-auto">
          {mainPartners.map((partner, index) => (
            <div 
              key={index} 
              className="partner-card bg-white aspect-square flex flex-col items-center justify-between hover:shadow-2xl hover:scale-[1.05] transition-all group rounded-sm reveal-zoom p-4 md:p-8"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
                {/* Logo container with fixed height for consistency */}
                <div className="w-full flex items-center justify-center flex-1">
                  <div className={`flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-700 ${
                    partner.name === 'SNA' ? 'h-12 md:h-24' : 
                    partner.name === 'BRiX Network' ? 'h-10 md:h-20' : 
                    'h-8 md:h-16'
                  }`}>
                      {partner.hasLogo ? (
                        <img 
                          src={partner.logo!} 
                          alt={partner.name} 
                          className="max-w-full max-h-full object-contain"
                        />
                      ) : (
                        <span className="text-black font-black text-sm md:text-xl tracking-tighter uppercase text-center leading-none">{partner.name}</span>
                      )}
                  </div>
                </div>
                
                {/* Fixed bottom section for consistent alignment */}
                <div className="w-full flex flex-col items-center">
                  <div className="w-full h-px bg-gray-100 mb-3"></div>
                  <p className="partner-type text-gray-400 uppercase font-bold tracking-widest text-center text-[10px] md:text-sm leading-tight">{partner.type}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;