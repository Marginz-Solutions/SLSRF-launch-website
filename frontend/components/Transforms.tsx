
import React from 'react';

const Transforms: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden py-32 px-6">
      {/* Background Image with Fixed-like effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1540575861501-7ad058a87944?q=80&w=2070&auto=format&fit=crop" 
          alt="Foundation Launch Event and Community Impact" 
          className="w-full h-full object-cover brightness-50 grayscale scale-110"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl reveal-left">
          <h2 className="text-white text-5xl md:text-8xl font-black uppercase leading-tight tracking-tighter mb-16 title-underline">
            HOW <span className="text-[#f2921d]">#SLSRF2026</span> <br />
            TRANSFORMS <br />
            SOCIETY
          </h2>

          <div className="space-y-10 max-w-4xl mt-12">
            <p className="text-[#f2921d] text-2xl font-black tracking-tight leading-tight">
              #SLSRF2026 is thoughtfully designed to address critical gaps in knowledge preservation, environmental sustainability, and human development.
            </p>
            <p className="text-gray-300 text-xl leading-relaxed font-medium">
              Through a structured integration of traditional wisdom, life sciences, digital technologies, and community participation, SLSRF empowers institutions, researchers, and young minds to co-create solutions.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed italic border-l-4 border-[#f2921d] pl-8">
              By fostering knowledge exchange, national capacity building, and biodiversity intelligence conservation, #SLSRF2026 establishes a living ecosystem where conscious science translates into measurable impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transforms;
