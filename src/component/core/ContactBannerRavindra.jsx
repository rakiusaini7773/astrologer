import React from 'react';

const ContactBanner = () => {
  return (
    <div className="bg-orange-500 p-6 text-center text-white">
      <div className="container mx-auto">
        {/* Main Heading */}
        <h2 className="text-xl md:text-2xl font-semibold tracking-wider uppercase">
          Swift and Effective Solution Through <span className="font-bold">Healing & Meditation</span> By Astrologer Ankit Sharma
        </h2>

        {/* Contact Info */}
        <div className="mt-4 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6">
          {/* Phone Number */}
          <a href="tel:+919815418307" className="text-yellow-300 text-lg md:text-xl font-bold underline">
            +91-98154-18307
          </a>

          {/* Email */}
          <a href="mailto:info@AstrologerAnkitSharma.com" className="text-white bg-red-700 py-2 px-4 rounded-md shadow-md hover:bg-red-800 transition-colors">
            info@AstrologerAnkitSharma.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
