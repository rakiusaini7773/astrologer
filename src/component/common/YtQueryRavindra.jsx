import React from "react";

const YtQuery = () => {
  return (
    <div className="mt-0 ">
      <div className="relative pb-[56.25%] h-0 overflow-hidden w-[90vw] m-auto">
        <iframe
          src="https://www.youtube.com/embed/qa_Zb0SKiV8?rel=0"
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          className="absolute top-0 left-0 w-full h-full"
          allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default YtQuery;