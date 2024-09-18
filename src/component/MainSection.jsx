import React from 'react';
import YouTubeThumbnail from './common/YouTubeThumbnail';
import ContactForm from './common/ContactForm';

const MainSection = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col lg:flex-row bg-orange-200">
      {/* Responsive Container for YouTube Thumbnail */}
      <div className="flex-1 flex justify-center items-center bg-yellow-600 p-4 lg:p-8">
        <div className="w-full lg:flex-1 h-[50vh] lg:h-auto">
          <YouTubeThumbnail />
        </div>
      </div>

      {/* ContactForm - visible only on large screens */}
      <div className="hidden lg:flex lg:flex-1 items-center p-4 lg:p-8 bg-gray-800">
        <ContactForm />
      </div>

      {/* Mobile Contact Form - visible only on small screens */}
      <div className="lg:hidden p-4 bg-gray-800">
        <ContactForm />
      </div>
    </div>
  );
};

export default MainSection;
