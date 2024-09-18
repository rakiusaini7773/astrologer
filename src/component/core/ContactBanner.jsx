import React from 'react';

const ContactBanner = () => {
  return (
    <div className="bg-gradient-to-b from-[#f9e7c4] to-[#f3b86a] py-8">
      {/* Text Content */}
      <div className="text-center">
        <p className="text-2xl font-semibold">
        Quick and Efficient Solution Found{' '}
          <span className="font-bold text-black">Therapeutic Practices including Meditation</span> By{' '}
          <span className="font-bold text-red-600">Renowned Stargazer Ankit Sharma</span>
        </p>
      </div>

      {/* Contact Information */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-6">
        {/* Phone Number */}
        <span className="text-blue-600 text-xl font-bold mr-4">
          +91-98154-18307
        </span>

        {/* Email */}
        <a
          href="mailto:info@AstrologerAnkitSharma.com"
          className="text-orange-500 text-xl font-bold underline"
        >
          info@AstrologerAnkitSharma.com
        </a>
      </div>
    </div>
  );
};

export default ContactBanner;
