
import React from 'react';

const Speakers: React.FC = () => {
  const keynoteSpeakers = [
    {
      name: 'Thiru. Jeyachandran Srinivasan',
      role: 'Presidential Address',
      company: 'Founder - SLSRF',
      speechTitle: 'SLSRF | Architecting a Scientific and Responsible Civilization',
      img: '/jc.png'
    },
    {
      name: 'Dr. Yogita Shukla',
      role: '',
      company: 'CEO, AddGEO Foundation',
      speechTitle: 'Geospatial Intelligence for Forest and Biodiversity Conservation',
      img: '/Yogitha.png'
    },
    {
      name: 'Dr. S R Shriraam Shekher',
      role: '',
      company: 'President - International Mediation Organisation',
      speechTitle: 'The Need for S.T.E.M Innovations Addressing National Priorities',
      img: '/Dr. S R Shriraam Shekher.jpeg'
    },
    {
      name: 'Dr. Kamlesh Joshipura',
      role: 'Chief Guest Address',
      company: 'Former Vice Chancellor, Sourashtra University, Rajkhot. Founder Vice Chancellor IITE, Chairperson, Legal Research Foundation',
      speechTitle: '',
      img: '/Kamlesh Joshipura.png'
    },
    {
      name: 'Mr. K R M Kishore Kumar',
      role: 'IPS\n(Retd. DGP)',
      company: 'Director (Finance & Projects), Aayush Hospitals',
      speechTitle: 'Shaping Minds with Discipline: Guiding the Next Generation of Think Tankers',
      img: '/Kishorekumar.jpeg'
    },
    {
      name: 'Dr. Kotur P B',
      role: '',
      company: 'Global Goodwill Ambassador',
      speechTitle: 'Human Capital Doctrine',
      img: '/Dr. Kotur P B.jpeg?v=2'
    },
    {
      name: 'Mr. S V Venkatesh',
      role: '',
      company: 'CEO, proofile.in',
      speechTitle: 'Collaborative Intelligence: Industry–Academia Convergence for a Modern Nation',
      img: '/Venkatesh.png'
    },
    {
      name: 'Dr. Murugeswaran',
      role: '',
      company: 'Deputy Adviser, National Medicinal Plants Board',
      speechTitle: 'Medicinal Plants in India: Towards a National Strategy for Sustainable Use and Biodiversity Integration',
      img: '/Murugeswaran.png'
    },
    // {
    //   name: 'Thiru. R Srinivasan',
    //   role: '',
    //   company: 'Chairman, KSR Educational Institutions',
    //   speechTitle: 'Academia as a Pillar in Nation-Building for Sustenance',
    //   img: '/Thiru. R Srinivasan.jpeg?v=2'
    // },
    // {
    //   name: 'Dr. R Murugeswaran',
    //   role: '',
    //   company: 'Deputy Advisor (Medicinal Plant\'s) National Medicine Plants Board',
    //   speechTitle: '',
    //   img: '/Murugeswaran.png'
    // },
    // {
    //   name: 'Dr. Vincent',
    //   role: '',
    //   company: 'Secretary - Tamil Nadu Council for Science and Technology',
    //   speechTitle: '',
    //   img: '/Dr. Vincent.jpeg'
    // }
  ];

  const panelSpeakers = [
    { name: 'Dr. Selvamurthy W', role: 'President, ASTIF', img: '/Selvamurthi.png' },
    { name: 'Dr. Shankar G V', role: 'President & CEO, Global Connect Inc', img: '/GV Shankar.png' },
    { name: 'Dr. Sadamate V V', role: 'Former Adviser Agriculture, Planning Commission', img: '/Dr. Sadamate V V.png' },
    { name: 'Dr. Vijay Mishra', role: 'Director - S.T.E.M, Q DoTZ S.T.E.M India Pvt Ltd', img: '/Mishra.png' },
    { name: 'Dr. Sudharsan Suryawanshi', role: 'COO – Axiom India', img: '/Suryavanshi.png' }
  ];

  return (
    <section id="speakers" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-black px-4 sm:px-6">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24 reveal-zoom">
          <h2 className="speakers-title text-[#f2921d] font-black tracking-tighter leading-none mb-4">
            Key Speakers
          </h2>
          <p className="text-gray-500 tracking-[0.3em] sm:tracking-[0.5em] font-bold text-[10px] sm:text-xs">Leader Voices - Making Bharath a global frontier for technology and innovation</p>
        </div>

        {/* Keynote Speakers Section */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
            {keynoteSpeakers.map((speaker, index) => (
              <div 
                key={index} 
                className="speaker-card group bg-[#0a0a0a] border border-white/5 rounded-lg overflow-hidden hover:border-[#f2921d]/50 transition-all duration-500 reveal-zoom flex flex-col" 
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Speaker Image */}
                <div className="aspect-square relative overflow-hidden">
                  {speaker.img ? (
                    <img 
                      src={speaker.img} 
                      alt={speaker.name} 
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-1000"
                      style={{
                        imageRendering: 'crisp-edges'
                      } as React.CSSProperties}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                      <div className="text-gray-600 text-xs font-medium text-center px-2">
                        Photo Coming Soon
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                </div>
                
                {/* Speaker Info */}
                <div className="speaker-card p-4 flex-1 flex flex-col">
                  <h4 className="speaker-name text-white font-black tracking-tight mb-1 leading-tight">
                    {speaker.name}
                  </h4>
                  {speaker.role && (
                    <p className="speaker-role text-[#f2921d] font-bold tracking-widest mb-2 text-[10px]">
                      {speaker.role}
                    </p>
                  )}
                  <p className="text-gray-500 text-[9px] font-bold tracking-wide leading-tight mb-2">
                    {speaker.company}
                  </p>
                  {speaker.speechTitle && (
                    <div className="border-t border-white/10 pt-2 mt-auto">
                      <p className="text-gray-400 text-[10px] sm:text-xs font-medium leading-tight">
                        <span className="text-[#f2921d] font-bold">Title:</span> {speaker.speechTitle}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Panel Discussion Section */}
        <div>
          <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-4 sm:mb-6 text-center">
            Panel <span className="text-[#f2921d]">Discussion</span>
          </h3>
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-gray-300 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-4xl mx-auto">
              <span className="text-[#f2921d] font-bold">Theme:</span> Designing India's Global Leadership: Science, Consciousness & Sustainable Systems.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
            {panelSpeakers.map((speaker, index) => (
              <div 
                key={index}
                className="group bg-[#0a0a0a] border border-white/5 rounded-lg overflow-hidden hover:border-[#f2921d]/50 transition-all duration-500 reveal-zoom"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Speaker Image - Smaller */}
                <div className="aspect-square relative overflow-hidden">
                  {speaker.img ? (
                    <img 
                      src={speaker.img}
                      alt={speaker.name} 
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-1000"
                      style={{
                        imageRendering: 'crisp-edges'
                      } as React.CSSProperties}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                      <div className="text-gray-600 text-xs font-medium text-center px-2">
                        Photo Coming Soon
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                </div>
                
                {/* Speaker Info - Compact */}
                <div className="p-3">
                  <h4 className="text-white text-xs sm:text-sm font-black tracking-tight mb-1 leading-tight">
                    {speaker.name}
                  </h4>
                  <p className="text-gray-400 text-[10px] sm:text-xs font-medium leading-tight">
                    {speaker.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Speakers;
