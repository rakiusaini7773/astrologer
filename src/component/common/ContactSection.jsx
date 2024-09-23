import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaViber, FaSkype } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="bg-blue-50 py-10 mt-9">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600">
          CONTACT ASTROLOGER ANKIT SHARMA (GURU JI)
        </h2>
        <p className="text-lg md:text-xl font-semibold text-gray-600 mt-4">
          For Astrology and Positive Vashikaran Services
        </p>
      </div>

      {/* Contact Methods */}
      <div className="flex flex-wrap justify-center gap-10">
        {/* Direct Call */}
        <div className="flex flex-col items-center">
          <FaPhoneAlt className="text-5xl md:text-6xl text-black mb-4" />
          <p className="text-center font-semibold">Direct Call at</p>
          <a href="tel:+919815418307" className="text-red-500 font-bold">
            +91-98154-18307
          </a>
        </div>

        {/* WhatsApp Chat */}
        <div className="flex flex-col items-center">
          <FaWhatsapp className="text-5xl md:text-6xl text-green-500 mb-4" />
          <p className="text-center font-semibold">WhatsApp Chat</p>
          <a href="https://wa.me/919815418307" className="text-red-500 font-bold">
            +91-98154-18307
          </a>
        </div>

        {/* Viber Call/Chat */}
        <div className="flex flex-col items-center">
          <FaViber className="text-5xl md:text-6xl text-purple-500 mb-4" />
          <p className="text-center font-semibold">Viber Call / Chat</p>
          <a href="viber://chat?number=%2B919815418307" className="text-red-500 font-bold">
            +91-98154-18307
          </a>
        </div>

        {/* Skype */}
        <div className="flex flex-col items-center">
          <FaSkype className="text-5xl md:text-6xl text-blue-500 mb-4" />
          <p className="text-center font-semibold">Skype On</p>
          <p className="text-red-500 font-bold">Ankit.sharma3291</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
