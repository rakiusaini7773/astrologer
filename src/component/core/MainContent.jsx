import React from "react";
import Button from "../common/Button"; // Importing the reusable Button component

const MainContent = () => {
  // Define actions for each button
  const handleDestinyClick = () => {
    alert("Can Astrology Change My Destiny?");
  };

  const handleAnkitSharmaClick = () => {
    alert("Why Astrologer Ankit Sharma Ji!");
  };

  const handleVashikaranClick = () => {
    alert("Astrology & Vashikaran Services");
  };

  const handleBlogClick = () => {
    alert("Blog: Astrologer Ankit Sharma");
  };

  const handleUKServicesClick = () => {
    alert("Astrology Services in UK");
  };

  const handleMediaClick = () => {
    alert("Astrologer Ankit Ji in Media");
  };

  return (
    <div className="mt-5 px-4 sm:px-6 lg:px-16 flex flex-col items-center">
      <div className="text-center w-full max-w-4xl">
        <div className="grid grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-2">
          <Button
            label="CAN ASTROLOGY CHANGE MY DESTINY?"
            color="bg-red-700"
            onClick={handleDestinyClick}
          />
          <Button
            label="WHY ASTROLOGER ANKIT SHARMA JI!"
            color="bg-blue-600"
            onClick={handleAnkitSharmaClick}
          />
          <Button
            label="ASTROLOGY & VASHIKARAN SERVICES"
            color="bg-red-700"
            onClick={handleVashikaranClick}
          />
          <Button
            label="BLOG: ASTROLOGER ANKIT SHARMA"
            color="bg-blue-600"
            onClick={handleBlogClick}
          />
          <Button
            label="ASTROLOGY SERVICES IN UK"
            color="bg-red-700"
            onClick={handleUKServicesClick}
          />
          <Button
            label="ASTROLOGER ANKIT JI IN MEDIA"
            color="bg-blue-600"
            onClick={handleMediaClick}
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
