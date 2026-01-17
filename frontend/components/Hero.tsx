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
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden mb-2 sm:mb-3 md:mb-4 lg:mb-5">
      {/* Video Background - extends to navbar area */}
      <div className="absolute z-0 overflow-hidden" style={{ top: '-80px', left: 0, right: 0, height: 'calc(100vh + 80px)', width: '100%' }}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'scale(1.25)',
            transformOrigin: 'center center',
            filter: 'brightness(0.8)'
          }}
        >
          <source src="https://res.cloudinary.com/detnivsqb/video/upload/v1768642753/video_for_header_q6bvj8.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability - darker and more prominent */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      <div className="relative z-20 hero-container">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Main Headline - Mobile-first responsive layout */}
          <div className="relative w-full mb-6 md:mb-8">
            
            {/* Mobile Layout (< 768px) - Stack everything vertically */}
            <div className="block md:hidden">
              {/* Date and Location - Top */}
              <div className="mb-4 text-center">
                <p className="hero-date text-[#f2921d] font-bold tracking-wide animate-slide-up delay-300" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>25.01.2026</p>
                <p className="hero-location text-white font-medium tracking-wide animate-slide-up delay-500" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Trident, Chennai</p>
              </div>
              
              {/* Main Title - Center */}
              <div className="text-center mb-4">
                <h1 className="text-white text-4xl sm:text-5xl font-bold leading-none tracking-tight animate-tracking-in mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  The
                </h1>
                <h1 className="text-[#f2921d] text-6xl sm:text-7xl font-black leading-none tracking-tighter animate-tracking-in delay-200" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  DIVINE
                </h1>
                <h2 className="text-white text-4xl sm:text-5xl font-bold leading-none tracking-tight animate-slide-up delay-700" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Launch
                </h2>
              </div>
            </div>

            {/* Desktop Layout (768px+) - Original side-by-side layout */}
            <div className="hidden md:flex flex-wrap items-start justify-center gap-2 sm:gap-3 md:gap-4">
              
              {/* "The" with Date/Location */}
              <div className="relative flex flex-col items-start">
                <h1 className="hero-the text-white font-bold leading-none tracking-tight animate-tracking-in" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  The
                </h1>
                {/* Date and Location positioned below "The" - aligned to start */}
                <div className="mt-1 sm:mt-2 md:mt-3 text-left w-full pl-2 sm:pl-4 md:pl-6 lg:pl-8">
                  <p className="hero-date text-[#f2921d] font-bold tracking-wide animate-slide-up delay-300" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>25.01.2026</p>
                  <p className="hero-location text-white font-medium tracking-wide animate-slide-up delay-500" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Trident, Chennai</p>
                </div>
              </div>

              {/* "DIVINE" with "Launch" below - Large Orange Text */}
              <div className="relative flex flex-col items-end">
                <h1 className="hero-divine text-[#f2921d] font-black leading-none tracking-tighter animate-tracking-in delay-200" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  DIVINE
                </h1>
                {/* "Launch" positioned below "DIVINE" and right-aligned */}
                <h2 className="hero-launch text-white font-bold leading-none tracking-tight mt-[-0.3rem] sm:mt-[-0.4rem] md:mt-[-0.5rem] animate-slide-up delay-700" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Launch
                </h2>
              </div>

            </div>

          </div>

          {/* Tagline / Description */}
          <div className="max-w-4xl mx-auto border-t border-white/10 pt-8 sm:pt-10 md:pt-12 lg:pt-16 mt-6 md:mt-8 px-4 animate-slide-up delay-500">
            <p className="text-white/90 font-light leading-relaxed tracking-wide italic mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
              The Divine Launch of <span className="text-[#f2921d] font-black not-italic px-1 sm:px-2">Semporutkalai Life Science Research Foundation</span>
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
