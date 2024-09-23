import React from 'react'

const VashikaranSectionRavindraPartRavindra= ({ heading, title, description, listItems, image }) => {
    return (
      <div className="max-w-7xl mx-auto p-6 bg-white flex flex-col lg:flex-row">
        {/* Left Section (Text Content) */}
        <div className="lg:w-2/3 pr-6">
          {/* Heading */}
          <h2 className="text-2xl font-bold text-orange-600 text-center lg:text-left mb-6">{heading}</h2>
  
          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
  
          {/* Description with Highlight */}
          <p className="text-gray-600 mb-6">
            {description.map((item, index) => (
              <span key={index} className={item.highlight ? 'bg-yellow-200 font-semibold' : ''}>
                {item.text}
              </span>
            ))}
          </p>
  
          {/* List Items with Highlight */}
          <ul className="list-disc pl-5 space-y-3">
            {listItems.map((listItem, index) => (
              <li key={index} className="text-gray-700">
                {listItem.map((item, idx) => (
                  <span key={idx} className={item.highlight ? 'bg-yellow-200 font-semibold' : ''}>
                    {item.text}
                  </span>
                ))}
              </li>
            ))}
          </ul>
        </div>
  
        {/* Right Section (Image Content) */}
        <div className="lg:w-1/3 mt-6 lg:mt-0">
          <img src={image} alt="Vashikaran Specialist" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    );
  };

export default VashikaranSectionRavindraPartRavindra
