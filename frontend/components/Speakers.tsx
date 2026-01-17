
import React from 'react';

const Speakers: React.FC = () => {
  const speakers = [
    {
      name: 'Thiru. Jeyachandran Srinivasan',
      role: 'Founder & Chairman',
      company: 'Social Entrepreneur & Thought Leader',
      img: '/jc.png'
    },
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Chief Scientist',
      company: 'National Institute of Life Sciences',
      img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Director of Research',
      company: 'Indian Biodiversity Conservation Institute',
      img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2070&auto=format&fit=crop'
    },
    {
      name: 'Prof. Anand Krishnan',
      role: 'Professor of Ethnobotany',
      company: 'Traditional Knowledge Research Center',
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop'
    },
    // Add more speakers as needed - the layout will automatically accommodate them
    {
      name: 'Dr. Meera Patel',
      role: 'Research Director',
      company: 'Environmental Sciences Institute',
      img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop'
    },
    {
      name: 'Prof. Arjun Nair',
      role: 'Head of Biotechnology',
      company: 'Advanced Life Sciences Center',
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <section id="speakers" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-black px-4 sm:px-6">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24 reveal-zoom">
          <h2 className="speakers-title text-[#f2921d] font-black uppercase tracking-tighter leading-none mb-4">
            SPEAKERS
          </h2>
          <p className="text-gray-500 uppercase tracking-[0.3em] sm:tracking-[0.5em] font-bold text-[10px] sm:text-xs">Leading voices in conscious science</p>
        </div>

        {/* Speakers Grid - Optimized for many speakers */}
        <div className="speakers-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-5 md:gap-6">
          {speakers.map((speaker, index) => (
            <div 
              key={index} 
              className="speaker-card group bg-[#0a0a0a] border border-white/5 rounded-lg overflow-hidden hover:border-[#f2921d]/50 transition-all duration-500 reveal-zoom" 
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Speaker Image */}
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={speaker.img} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                
                {/* Hover Icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-[#f2921d] flex items-center justify-center">
                    <i className="fas fa-arrow-right text-black text-xs transform -rotate-45 group-hover:rotate-0 transition-transform"></i>
                  </div>
                </div>
              </div>
              
              {/* Speaker Info */}
              <div className="speaker-card">
                <h4 className="speaker-name text-white font-black uppercase tracking-tight mb-1 leading-tight line-clamp-2">
                  {speaker.name}
                </h4>
                <p className="speaker-role text-[#f2921d] font-bold uppercase tracking-widest mb-1">
                  {speaker.role}
                </p>
                <p className="text-gray-500 text-[9px] uppercase font-bold tracking-wide leading-tight line-clamp-2">
                  {speaker.company}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Speakers;
