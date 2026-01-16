import React, { useState, useRef } from 'react';

const Hero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Video Background - extends to navbar area */}
      <div className="absolute z-0 overflow-hidden" style={{ top: '-80px', left: 0, right: 0, height: 'calc(100vh + 80px)', width: '100%' }}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover opacity-50"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'scale(1.25)',
            transformOrigin: 'center center',
            filter: 'blur(3px) brightness(0.7)'
          }}
        >
          <source src="/shorter video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability - darker and more prominent */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      <div className="relative z-20 w-full max-w-[1400px] px-4 sm:px-6 md:px-10 pt-20 md:pt-24 lg:pt-32">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Main Headline - Matching "The NEXT Frontier" Layout */}
          <div className="relative flex flex-wrap items-start justify-center gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-8">
            
            {/* "The" with Date/Location */}
            <div className="relative flex flex-col items-start">
              <h1 className="hero-the text-white text-[11vw] sm:text-[9vw] md:text-[6rem] lg:text-[7rem] xl:text-[8rem] font-bold leading-none tracking-tight animate-tracking-in" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                The
              </h1>
              {/* Date and Location positioned below "The" - aligned to start */}
              <div className="mt-1 sm:mt-2 md:mt-3 text-left w-full pl-2 sm:pl-4 md:pl-6 lg:pl-8">
                <p className="hero-date text-[#f2921d] text-[10px] sm:text-xs md:text-sm font-bold tracking-wide animate-slide-up delay-300" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>25.01.2026</p>
                <p className="hero-location text-white text-[9px] sm:text-[10px] md:text-xs font-medium tracking-wide animate-slide-up delay-500" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Trident, Chennai</p>
              </div>
            </div>

            {/* "DIVINE" with "Launch" below - Large Orange Text */}
            <div className="relative flex flex-col items-end">
              <h1 className="hero-divine text-[#f2921d] text-[17vw] sm:text-[15vw] md:text-[9rem] lg:text-[11rem] xl:text-[13rem] font-black leading-none tracking-tighter animate-tracking-in delay-200" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                DIVINE
              </h1>
              {/* "Launch" positioned below "DIVINE" and right-aligned */}
              <h2 className="hero-launch text-white text-[11vw] sm:text-[9vw] md:text-[6rem] lg:text-[7rem] xl:text-[8rem] font-bold leading-none tracking-tight mt-[-0.3rem] sm:mt-[-0.4rem] md:mt-[-0.5rem] animate-slide-up delay-700" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Launch
              </h2>
            </div>

          </div>

          {/* Tagline / Description */}
          <div className="max-w-4xl mx-auto border-t border-white/10 pt-8 sm:pt-10 md:pt-12 lg:pt-16 mt-6 md:mt-8 px-4 animate-slide-up delay-500">
            <p className="hero-tagline text-white/80 text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-light leading-relaxed tracking-wide italic">
              Semporutkalai Life Science Research Foundation presents a <span className="text-[#f2921d] font-black not-italic px-1 sm:px-2">transformative initiative</span> <br className="hidden md:block" />
              for knowledge preservation, human empowerment, and environmental stewardship.
            </p>
          </div>
        </div>
      </div>

      {/* Sound Control Button - Bottom Left Corner */}
      <button
        onClick={toggleSound}
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-30 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 hover:border-[#f2921d] flex items-center justify-center transition-all duration-300 hover:bg-black/70 group"
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
      >
        {isMuted ? (
          <i className="fas fa-volume-mute text-white group-hover:text-[#f2921d] transition-colors text-sm sm:text-lg md:text-xl"></i>
        ) : (
          <i className="fas fa-volume-up text-white group-hover:text-[#f2921d] transition-colors text-sm sm:text-lg md:text-xl"></i>
        )}
      </button>
    </section>
  );
};

export default Hero;
