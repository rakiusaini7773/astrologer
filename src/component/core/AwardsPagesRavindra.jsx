import React from 'react'

const AwardsPagesRavindra = () => {
    const awards = [
        {
          title: "Astrologer Ankit Sharma Receives Prestigious 'Champion of Change' Award 2023",
          date: "January 30, 2024",
          description:
            "On the evening of January 30, 2024, in Mumbai, the prestigious Champions of Change Awards unfolded. In this distinguished event, Astrologer Ankit Sharma was honored with the esteemed 'Champion of Change' Award 2023 for his outstanding proficiency in astrology and significant contributions to community service.",
          imgSrc: "path_to_image_1", // replace with your actual image source
        },
        {
          title: 'National Glory Award 2022 for the "Best Astrologer in India"',
          date: "October 1, 2022",
          description:
            "On 1st October 2022, Astrologer Ankit Sharma Ji was honored with the National Glory Award 2022 for the best astrologer in India by Bhagat Singh Koshyari Ji (Governor of Maharashtra) at Sahara Hotel, Mumbai.",
          imgSrc: "path_to_image_2", // replace with your actual image source
        },
        {
          title: 'Golden Glory Award 2022 for the "Most Trusted Astrologer of India"',
          date: "2021",
          description:
            "Astrologer Ankit Sharma Ji wins another award i.e. Golden Glory Award 2021 for Most Trusted Astrologer of India who has made numerous paramount predictions on different stages and phases of life.",
          imgSrc: "path_to_image_3", // replace with your actual image source
        },
      ];

      
  return (
    <div className="max-w-7xl mx-auto p-4">
    <h1 className="text-3xl font-bold text-center my-8">Awards & Achievements</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* <div className='flex flex-col gap-8'> */}
      {awards.map((award, index) => (
        <div
          key={index}
          className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={award.imgSrc}
            alt={award.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-red-600 mb-2">
              {award.title}
            </h2>
            <p className="text-gray-500 text-sm mb-2">{award.date}</p>
            <p className="text-gray-700">{award.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default AwardsPagesRavindra
