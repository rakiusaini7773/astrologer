import React, { useState } from 'react';
import { PiCompassRoseThin } from "react-icons/pi";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-lg lg:text-xl font-semibold text-red-700 flex justify-between items-center py-4 px-6 hover:bg-yellow-100 transition-colors duration-300"
      >
        <span className='flex items-center space-x-2'>
          <PiCompassRoseThin className="text-lg lg:text-xl"/>
          <span>{question}</span>
        </span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-yellow-50 text-gray-700">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQSection = ({ faqs }) => {
  return (
    <div className="max-w-7xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl lg:text-3xl font-bold text-red-800 mb-6">
        FAQs
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
