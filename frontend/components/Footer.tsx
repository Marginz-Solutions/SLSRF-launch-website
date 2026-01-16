
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Thank you for contacting us!'
        });
        setFormData({ name: '', phone: '', email: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-black pt-16 sm:pt-20 md:pt-24 lg:pt-32 overflow-hidden">
      {/* Massive Contact Heading */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mb-10 sm:mb-12 md:mb-16 reveal">
        <h2 className="text-white text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[9rem] font-black uppercase tracking-tighter leading-none">
          GET IN TOUCH.
        </h2>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 relative border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 lg:gap-24 items-start">
          {/* Office Info */}
          <div className="reveal">
            <h4 className="text-[#f2921d] text-lg sm:text-xl md:text-2xl font-black uppercase tracking-[0.2em] mb-8 sm:mb-10 md:mb-12 border-l-4 border-[#f2921d] pl-4 sm:pl-6">Our Office</h4>
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              <div className="flex gap-4 sm:gap-6 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center text-[#f2921d] group-hover:bg-[#f2921d] group-hover:text-black transition-all shrink-0">
                    <i className="fas fa-map-marker-alt text-sm sm:text-base"></i>
                </div>
                <div className="flex flex-col">
                    <span className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-40 mb-2">Address</span>
                    <p className="text-gray-300 font-medium text-base sm:text-lg leading-snug">
                    <br />
                    Chennai
                    </p>
                </div>
              </div>
              <div className="flex gap-4 sm:gap-6 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center text-[#f2921d] group-hover:bg-[#f2921d] group-hover:text-black transition-all shrink-0">
                    <i className="fas fa-phone-alt text-sm sm:text-base"></i>
                </div>
                <div className="flex flex-col">
                    <span className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-40 mb-2">Phone</span>
                    <p className="text-gray-300 font-bold text-xl sm:text-2xl tracking-tight leading-none">+91 91767 60863</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="reveal">
            <h4 className="text-[#f2921d] text-lg sm:text-xl md:text-2xl font-black uppercase tracking-[0.2em] mb-8 sm:mb-10 md:mb-12">Send us a message</h4>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="flex flex-col gap-2 sm:gap-3">
                <label className="text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest opacity-60">Full Name *</label>
                <div className="relative">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name" 
                    required
                    className="w-full bg-transparent border border-white/20 p-4 sm:p-5 text-white text-sm sm:text-base focus:border-[#f2921d] outline-none transition-all pr-10 sm:pr-12 rounded-sm" 
                  />
                  <i className="far fa-user absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 text-gray-600 text-sm"></i>
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:gap-3">
                <label className="text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest opacity-60">Phone Number *</label>
                <div className="relative">
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone" 
                    required
                    className="w-full bg-transparent border border-white/20 p-4 sm:p-5 text-white text-sm sm:text-base focus:border-[#f2921d] outline-none transition-all pr-10 sm:pr-12 rounded-sm" 
                  />
                  <i className="fas fa-phone-alt absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 text-gray-600 text-sm"></i>
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:gap-3 md:col-span-2">
                <label className="text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest opacity-60">Email Address *</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email" 
                  required
                  className="w-full bg-transparent border border-white/20 p-4 sm:p-5 text-white text-sm sm:text-base focus:border-[#f2921d] outline-none transition-all rounded-sm" 
                />
              </div>
              
              {/* Status Message */}
              {submitStatus.type && (
                <div className={`md:col-span-2 p-3 sm:p-4 rounded-sm text-sm ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-gbc-gradient text-black px-8 sm:px-10 md:px-12 py-4 sm:py-5 text-sm sm:text-base font-black uppercase tracking-widest w-full md:w-fit mt-4 rounded-sm hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          </div>
        </div>

        {/* Legal/Copyright Bottom */}
        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 pt-10 sm:pt-12 md:pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 opacity-30 hover:opacity-100 transition-opacity">
          <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-center md:text-left">© 2026 SLSRF. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-center">
            <a href="#" className="hover:text-[#f2921d]">Privacy Policy</a>
            <a href="#" className="hover:text-[#f2921d]">Terms of Service</a>
            <a href="#" className="hover:text-[#f2921d]">Refunds & Cancellations</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
