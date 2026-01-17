import React from 'react';

const Location: React.FC = () => {
  const venueAddress = "Trident, Chennai, 1, 24, Grand Southern Trunk Rd, Kannan Colony, Meenambakkam, Chennai, Tamil Nadu 600016";
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0574!2d80.1627!3d12.9915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d07f919d7cd%3A0x944b42c18d9eb7d4!2sTriden%20Chennai%2C%20Grand%20Southern%20Trunk%20Rd%2C%20Meenambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600016!5e0!3m2!1sen!2sin!4v1642000000000!5m2!1sen!2sin";

  return (
    <section id="location" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-black border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24 reveal">
          <h2 className="responsive-title font-black text-white uppercase tracking-tighter leading-none mb-4">
            VEN<span className="text-[#f2921d]">UE</span>
          </h2>
          <p className="text-gray-500 uppercase tracking-[0.3em] sm:tracking-[0.5em] font-bold text-xs">Find us at the heart of Chennai</p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-start">
          
          {/* Venue Information */}
          <div className="reveal-left">
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              
              {/* Venue Name */}
              <div>
                <h3 className="text-[#f2921d] text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
                  Trident (The Oberoi Group of Hotels)
                </h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  A venue perfectly positioned for our transformative launch event, offering world-class facilities and accessibility.
                </p>
              </div>

              {/* Address Details */}
              <div className="space-y-6">
                <div className="flex gap-4 sm:gap-6 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/10 flex items-center justify-center text-[#f2921d] group-hover:bg-[#f2921d] group-hover:text-black transition-all shrink-0">
                    <i className="fas fa-map-marker-alt text-lg sm:text-xl"></i>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-xs font-bold uppercase tracking-widest opacity-60 mb-2">Full Address</span>
                    <p className="text-gray-300 font-medium text-base sm:text-lg leading-relaxed">
                      {venueAddress}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-6 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/10 flex items-center justify-center text-[#f2921d] group-hover:bg-[#f2921d] group-hover:text-black transition-all shrink-0">
                    <i className="fas fa-calendar-alt text-lg sm:text-xl"></i>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-xs font-bold uppercase tracking-widest opacity-60 mb-2">Event Date</span>
                    <p className="text-white font-bold text-xl sm:text-2xl tracking-tight">
                      January 25, 2026
                    </p>
                    <p className="text-gray-400 text-sm font-medium">
                      The Divine Launch
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 sm:pt-8">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gbc-gradient text-black px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-black uppercase tracking-widest rounded-sm hover:scale-105 transition-transform text-center"
                >
                  <i className="fas fa-directions mr-2"></i>
                  Get Directions
                </a>
                <a 
                  href="#contact"
                  className="border border-[#f2921d] text-[#f2921d] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-black uppercase tracking-widest rounded-sm hover:bg-[#f2921d] hover:text-black transition-all text-center"
                >
                  <i className="fas fa-envelope mr-2"></i>
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="reveal-right">
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden border-2 border-white/10 shadow-2xl">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Trident Chennai Location"
                  className="w-full h-full"
                ></iframe>
              </div>
              
              {/* Map Overlay Info */}
              <div className="absolute top-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#f2921d] rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-white font-bold text-sm">Event Venue</p>
                    <p className="text-gray-300 text-xs">Trident Chennai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;