
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
    }
  ];

  return (
    <section id="speakers" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-black px-4 sm:px-6">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-[#f2921d] text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter mb-10 sm:mb-12 md:mb-16 reveal-left">
          SPEAKERS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {speakers.map((s, i) => (
            <div 
              key={i} 
              className="group bg-[#0a0a0a] border border-white/5 rounded-xl overflow-hidden hover:border-[#f2921d]/50 transition-all reveal-zoom" 
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-[#f2921d] group-hover:text-black transition-all duration-500">
                    <i className="fas fa-arrow-right text-sm -rotate-45 group-hover:rotate-0 transition-transform"></i>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-white text-lg font-black uppercase tracking-tight mb-1">{s.name}</h4>
                <p className="text-[#f2921d] text-xs font-bold uppercase tracking-widest mb-1">{s.role}</p>
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">{s.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
