
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
      name: 'Dr. Kamlesh Joshipura',
      role: 'Chief Guest Address',
      company: 'Former Vice Chancellor, Sourashtra University, Rajkhot. Founder Vice Chancellor IITE, Chairperson, Legal Research Foundation',
      speechTitle: '',
      img: '/Kamlesh_Joshipura.jpg'
    },
    {
      name: 'K R M Kishore Kumar, IPS (Retd. DGP)',
      role: '',
      company: 'Director (Finance & Projects) Director, Aayush Hospitals',
      speechTitle: 'Preparing Leaders through a Value-Driven DNA Culture (Like - Mindedness, Sense of Belonging , Willingness to Share, Accountability, Integrity, Inclusiveness)',
      img: '/K R M Kishore Kumar, IPS (Retd. DGP).jpeg'
    },
    {
      name: 'Thiru. R Srinivasan',
      role: '',
      company: 'Chairman, KSR Educational Institutions',
      speechTitle: 'Academia as a Pillar in Nation-Building for Sustenance',
      img: '/Thiru. R Srinivasan.jpeg?v=2'
    },
    {
      name: 'Dr. S R Shriraam Shekher',
      role: '',
      company: 'President - International Mediation Organisation',
      speechTitle: 'The Need for S.T.E.M Innovations Addressing National Priorities',
      img: '/Dr. S R Shriraam Shekher.jpeg'
    },
    {
      name: 'Dr. Kotur P B',
      role: '',
      company: 'Global Goodwill Ambassador',
      speechTitle: 'Human Capital Doctrine',
      img: '/Dr. Kotur P B.jpeg'
    },
    {
      name: 'Dr. Venkateshwaran',
      role: '',
      company: 'CEO, proofile.in',
      speechTitle: 'Collaborative Intelligence: Industry–Academia Convergence for a Modern Nation',
      img: '/Mr. S V Venkatesh, CEO - Proofile.in.jpeg'
    },
    {
      name: 'Dr. Yogita Shukla',
      role: '',
      company: 'CEO, AddGEO Foundation',
      speechTitle: '',
      img: '/Dr. Yogita Shukla.jpg'
    },
    {
      name: 'Dr. R Murugeswaran',
      role: '',
      company: 'Deputy Advisor (Medicinal Plant\'s) National Medicine Plants Board',
      speechTitle: '',
      img: '/Dr. R Murugeswaran.jpeg'
    },
    {
      name: 'Dr. Vincent',
      role: '',
      company: 'Secretary - Tamil Nadu Council for Science and Technology',
      speechTitle: '',
      img: '/Dr. Vincent.jpeg'
    }
  ];

  const panelSpeakers = [
    { name: 'Dr. Selvamurthy W', role: 'President, ASTIF', img: '/Dr_W_Selvamurthy.jpg' },
    { name: 'Dr. Shankar G V', role: 'President & CEO, Global Connect Inc', img: '/Shankar_GV.jpg' },
    { name: 'Dr. Sadamate V V', role: 'Former Adviser Agriculture, Planning Commission', img: '/VV_Sadamate.jpg' },
    { name: 'Dr. Vijay Mishra', role: 'Director - S.T.E.M, Q DoTZ S.T.E.M India Pvt Ltd', img: '/Dr. Vijay Mishra.jpeg' },
    { name: 'Dr. Sudharsan Suryawanshi', role: 'COO – Axiom India', img: '/Dr. Sudharsan Suryawanshi.jpeg' }
  ];

  return (
    <section id="speakers" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-black px-4 sm:px-6">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24 reveal-zoom">
          <h2 className="speakers-title text-[#f2921d] font-black uppercase tracking-tighter leading-none mb-4">
            KEY SPEAKERS
          </h2>
          <p className="text-gray-500 uppercase tracking-[0.3em] sm:tracking-[0.5em] font-bold text-[10px] sm:text-xs">Leader Voices - Making Bharath a global frontier for technology and innovation</p>
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
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 filter grayscale-[0.3] group-hover:grayscale-0"
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
                  <h4 className="speaker-name text-white font-black uppercase tracking-tight mb-1 leading-tight">
                    {speaker.name}
                  </h4>
                  {speaker.role && (
                    <p className="speaker-role text-[#f2921d] font-bold uppercase tracking-widest mb-2 text-[10px]">
                      {speaker.role}
                    </p>
                  )}
                  <p className="text-gray-500 text-[9px] uppercase font-bold tracking-wide leading-tight mb-2">
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
          <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 sm:mb-6 text-center">
            PANEL <span className="text-[#f2921d]">DISCUSSION</span>
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
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 filter grayscale-[0.3] group-hover:grayscale-0"
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
                  <h4 className="text-white text-xs sm:text-sm font-black uppercase tracking-tight mb-1 leading-tight">
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
