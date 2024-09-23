
import React from "react";

const MahadevSection = () => {
  const phoneNumber = "+91-98154-18307";
  
  return (
    <div className="relative bg-black text-white flex flex-col md:flex-row items-center justify-between md:px-10 p-6">
      {/* Left Side Text and Image */}
      <div className="relative w-full md:w-2/3 text-left">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMgfB6Rj6pz9WHlRz2Q1HKGvrqTWhiviFuTw&s"
            alt="Mahadev protection"
            className="w-full h-full object-cover opacity-75"
          />
        </div>
        
        {/* Text */}
        <div className="relative z-10 p-6 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-400 leading-tight">
            Mahadev is <br /> Enough to <br /> Protect Me
          </h1>
          <div className="flex flex-col justify-center items-center bg-gray-400 bg-opacity-80 w-10/12 h-auto m-auto p-4 rounded-lg">
            <p className="text-center text-sm md:text-lg">
              <span className="text-red-500">Genuine, Pure, and Certified</span> ~ 'Rudraksha'
            </p>
            <p className="mt-4 text-orange-400 font-bold text-xl md:text-2xl">
              {phoneNumber}
            </p>
          </div>
        </div>
      </div>

      {/* Right Side Contact Card */}
      <div className="w-full md:w-1/3 flex flex-col items-center justify-center bg-gray-900 p-6 md:p-10 rounded-lg">
        <h2 className="text-xl md:text-2xl text-white">
          Buy Genuine Certified Rudraksha
        </h2>
        <p className="text-green-500 mt-4 text-lg md:text-xl">
          Call/WhatsApp: {phoneNumber}
        </p>
        <div className="mt-6">
          <img src="path-to-image-placeholder.png" alt="Rudraksha" className="w-32 h-32" />
        </div>
      </div>
    </div>
  );
};

export default MahadevSection;
