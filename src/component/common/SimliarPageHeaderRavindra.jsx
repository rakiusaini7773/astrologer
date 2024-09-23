

import React from 'react'
import { FaAngleDoubleRight } from "react-icons/fa";

const SimliarPageHeaderRavindra = ({ linkText, linkHref, description, descriptionPart }) => {
  return (
    <div className="bg-gradient-to-t from-gray-200 via-white to-gray-100 py-4 px-2 sm:px-8 lg:px-12 pt-6 pb-3">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center text-center sm:text-left">
        
        {/* Link Text */}
        <a
          href={linkHref}
          className="text-red-700 font-semibold text-lg sm:text-xl hover:underline mb-2 sm:mb-0 flex items-center"
        >
          {linkText}
          <FaAngleDoubleRight className='ml-2' />
        </a>

        {/* Description */}
        <span className="text-gray-700 font-medium text-base sm:text-lg sm:ml-10 flex items-center ">
          {description}
          <FaAngleDoubleRight className='ml-2 hidden sm:inline-block' />
        </span>

        {/* Description Part */}
        <span className="text-gray-700 font-medium text-base sm:text-lg sm:ml-7 mt-2 sm:mt-0">
          {descriptionPart}
        </span>
      </div>
    </div>
  )
}

export default SimliarPageHeaderRavindra;
