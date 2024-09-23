


import React from 'react';
import { FaCheckSquare } from 'react-icons/fa';

const VashikaranSection = ({ title, intro, description, highlights, listItems, footer, videoUrl, formData }) => {
  return (
    
    <div className="bg-white py-8 px-4 sm:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 m-auto">
      {/* Main Content Section */}
      <div className="md:col-span-2">
        {/* Title Section */}
        <h2 className="text-red-700 font-bold text-xl sm:text-xl mb-4 border-b pb-2">
          {title}
        </h2>

        {/* Intro Section (with highlight support) */}
        <p className="text-gray-700 text-lg sm:text-xl mb-4">
          {intro.map((part, index) => (
            <span key={index} className={part.isHighlighted ? 'text-red-600 font-bold' : ''}>
              {part.text}
            </span>
          ))}
        </p>

        {/* Description Section (with highlight support) */}
        <p className="text-gray-600 text-base sm:text-lg mb-4">
          {description.map((part, index) => (
            <span key={index} className={part.isHighlighted ? 'text-red-600 font-bold' : ''}>
              {part.text}
            </span>
          ))}
        </p>

        {/* Highlights Section */}
        <p className="text-gray-700 text-lg sm:text-xl mb-4">
          {highlights.map((highlight, index) => (
            <span key={index} className={highlight.isImportant ? 'text-red-600 font-bold' : ''}>
              {highlight.text}
            </span>
          ))}
        </p>

        {/* List Items Section */}
        <ul className="space-y-2 mb-4">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-center text-gray-700 text-lg">
              <FaCheckSquare className="text-green-600 mr-2" />
              {item}
            </li>
          ))}
        </ul>

        {/* Footer Section (with highlight support) */}
        <p className="text-gray-700 text-base sm:text-lg">
          {footer.map((part, index) => (
            <span key={index} className={part.isHighlighted ? 'text-red-600 font-bold' : ''}>
              {part.text}
            </span>
          ))}
        </p>
      </div>

      {/* Video and Contact Section */}
      <div className="md:col-span-1">
        {/* YouTube Thumbnail */}
        <div className="mb-8">
          <a href={videoUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={`https://img.youtube.com/vi/${videoUrl.split('v=')[1]}/hqdefault.jpg`}
              alt="YouTube Thumbnail"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </a>
        </div>

        {/* Contact Form */}
        <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
          <h3 className="text-red-700 font-semibold text-xl mb-4">{formData.title}</h3>
          <p className="text-gray-600 mb-4">{formData.subtitle}</p>
          <form>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="E-mail Id"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="query"
                placeholder="Your Query"
                rows="3"
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="text-gray-600">
                2 + 4 = <input type="text" name="captcha" className="ml-2 p-2 border border-gray-300 rounded" />
              </label>
            </div>
            <button type="submit" className="w-full bg-red-700 text-white p-2 rounded hover:bg-red-800">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>

  );
};

export default VashikaranSection;
