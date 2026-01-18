import React from 'react';

const RollOfHonour: React.FC = () => {
  const chiefGuests = [
    {
      name: 'Prof. Kamlesh Joshipura',
      role: 'Chief Guest',
      designation: 'Vice-Chancellor of Saurashtra University, Rajkot'
    },
    {
      name: 'Mrs. Bhavna Joshipura',
      role: 'Guest of Honour',
      designation: 'Distinguished Guest'
    },
    {
      name: 'Mr. Kishore Kumar KRM IPS (Retd)',
      role: 'Guest of Honour',
      designation: 'Director, Ayush Hospitals'
    }
  ];

  const advisoryBoard = [
    { name: 'Thiru. R Srinivasan', role: 'Chairman, KS Rangasamy Educational Institutions' },
    { name: 'Dr. G.V. Shankar', role: 'IAS (Retd), Industrialist' },
    { name: 'Dr. William Selvamurthy', role: 'President, Amity Science, Technology and Innovation Foundation' },
    { name: 'Dr. Vijendra Tiwari', role: 'Chairman - National Biodiversity Authority' },
    { name: 'Dr. Sudharsan Suryawanshi', role: 'COO – Axiom India' },
    { name: 'Dr. V.V. Sadamate', role: 'Former Adviser, Agriculture - Planning Commission' },
    { name: 'Dr. S.P. Thyagarajan', role: 'Former Vice Chancellor - University of Madras' },
    { name: 'Dr. Yogita Shukla', role: 'CEO, AddGEO Foundation' },
    { name: 'Dr. Murugeswaran R', role: 'Deputy Advisor - National Medicinal Plants Board' },
    { name: 'Dr. Chinnaiyah', role: 'Pro- Vice Chancellor, Lingaya University' },
    { name: 'Dr. Vincent S', role: 'Panel Expert' },
    { name: 'Ms. Shoba Menon', role: 'Nizhalgal, NGO' },
    { name: 'Dr. Venkateshwaran', role: 'CEO - Proofile.in' },
    { name: 'Dr. Shriraam Shekher S.R', role: 'President, International Mediation Organization' },
    { name: 'Dr. R Sridharan', role: 'Advisory Board Member' },
    { name: 'Dr. M Kolappapillai', role: 'President, World Siddha Trust' },
    { name: 'Dr. D Narasimhan', role: 'Senior Ethnobotanist' },
    { name: 'Mr. KU Sirinivasan', role: 'MD - M/s Connecting Dots' },
    { name: 'Mr. GVS Suryanarayana', role: 'Advisory Board Member' }
  ];

  const patrons = [
    { name: 'Dr. Kotur P B', role: 'Global Goodwill Ambassador' },
    { name: 'Prof. Abdul Kareem', role: 'Patron' },
    { name: 'Dr. Manikandavelu', role: 'Patron' },
    { name: 'Mr. Rajamurugan', role: 'Patron' }
  ];

  return (
    <section id="roll-of-honour" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-black px-4 sm:px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 reveal-zoom">
          <div className="relative inline-block">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[7.5rem] font-black uppercase tracking-tighter leading-tight">
              ROLL OF <span className="text-[#f2921d]">HONOUR</span>
            </h2>
            <div className="h-1 sm:h-1.5 md:h-2 bg-[#f2921d] w-1/3 mt-3 sm:mt-4 md:mt-6 mx-auto"></div>
          </div>
          <p className="text-gray-400 uppercase tracking-[0.3em] sm:tracking-[0.5em] font-bold text-[10px] sm:text-xs mt-6">
            Our Distinguished Invitees
          </p>
        </div>

        {/* Chief Guests - Premium Layout */}
        <div className="mb-20 sm:mb-24 reveal-left">
          <div className="text-center mb-12">
            <h3 className="text-[#f2921d] text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
              CHIEF GUESTS
            </h3>
            <div className="w-16 h-0.5 bg-[#f2921d] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {chiefGuests.map((guest, index) => (
              <div 
                key={index}
                className="group text-center reveal-zoom"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative bg-gradient-to-br from-[#0a0a0a] to-black border border-[#f2921d]/20 rounded-lg p-8 sm:p-10 hover:border-[#f2921d]/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(249,146,29,0.2)]">
                  {/* Decorative corner elements */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-[#f2921d]/40"></div>
                  <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-[#f2921d]/40"></div>
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-[#f2921d]/40"></div>
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-[#f2921d]/40"></div>
                  
                  <div className="mb-4">
                    <div className="w-12 h-12 mx-auto bg-[#f2921d]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#f2921d]/20 transition-colors">
                      <div className="w-6 h-6 bg-[#f2921d] rounded-full"></div>
                    </div>
                    <h4 className="text-white text-lg sm:text-xl font-black uppercase tracking-tight mb-2 leading-tight">
                      {guest.name}
                    </h4>
                    <p className="text-[#f2921d] text-sm font-bold uppercase tracking-widest mb-3">
                      {guest.role}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm font-medium leading-relaxed">
                      {guest.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advisory Board - Elegant List */}
        <div className="mb-20 sm:mb-24 reveal-right">
          <div className="text-center mb-12">
            <h3 className="text-[#f2921d] text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
              ADVISORY BOARD
            </h3>
            <div className="w-16 h-0.5 bg-[#f2921d] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {advisoryBoard.map((member, index) => (
              <div 
                key={index}
                className="group flex items-center gap-4 bg-[#0a0a0a]/50 border border-white/5 rounded-lg p-4 hover:border-[#f2921d]/30 hover:bg-[#0a0a0a] transition-all duration-300 reveal-zoom"
                style={{ transitionDelay: `${index * 30}ms` }}
              >
                <div className="shrink-0">
                  <div className="w-2 h-2 bg-[#f2921d] rounded-full group-hover:scale-125 transition-transform"></div>
                </div>
                <div className="min-w-0">
                  <h4 className="text-white text-sm sm:text-base font-bold tracking-tight mb-1 leading-tight truncate">
                    {member.name}
                  </h4>
                  <p className="text-gray-400 text-xs font-medium leading-tight line-clamp-2">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Patrons - Minimalist Design */}
        <div className="reveal-zoom">
          <div className="text-center mb-12">
            <h3 className="text-[#f2921d] text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
              PATRONS
            </h3>
            <div className="w-16 h-0.5 bg-[#f2921d] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {patrons.map((patron, index) => (
              <div 
                key={index}
                className="group text-center reveal-zoom"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-b from-[#0a0a0a] to-black border border-white/10 rounded-lg p-6 hover:border-[#f2921d]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,146,29,0.1)]">
                  <div className="w-8 h-8 mx-auto bg-[#f2921d]/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#f2921d]/30 transition-colors">
                    <div className="w-3 h-3 bg-[#f2921d] rounded-full"></div>
                  </div>
                  <h4 className="text-white text-sm sm:text-base font-bold uppercase tracking-tight mb-2 leading-tight">
                    {patron.name}
                  </h4>
                  <p className="text-gray-400 text-xs font-medium">
                    {patron.role}
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

export default RollOfHonour;