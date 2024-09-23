import React from 'react';

const testimonials = [
  {
    image: 'https://via.placeholder.com/100', // Replace with actual image link
    name: 'Anna Mishra, Boston, USA',
    date: 'April - 2024',
    problemType: 'Love Problem Solution',
    testimony: `My name is Anna Mishra from Boston, USA, and my love life was in constant trouble for 4 years. 
    I could not get any solutions for making it up and was on a verge of breaking up when one of my friends came 
    up with the contact details of Astrologer Pandit Ankit Sharma Ji. I was curious and in need of help, 
    so I read about him and his work in Boston. Many people in Boston had used his services and were benefitted from them. 
    So I decided to opt for his love problem solution services and I was stunned to see my love life get back on track 
    in minimum time. Pandit Ji is a true genius and I am very grateful that I got his guidance.`,
  },
  {
    image: 'https://via.placeholder.com/100', // Replace with actual image link
    name: 'Mrs. Anou, New Delhi',
    date: 'February - 2024',
    problemType: 'Love Problem Solution',
    testimony: `Love problems solution services from astrologer Pandit Ankit Sharma Ji was a turning point in my life 
    that I will be forever thankful for. Astrologer Pandit Ankit Sharma Ji is not just a name, it is a guiding light of 
    so many lives, and me being one of those lives am very obliged to get help for my degrading love life from him. 
    He not only solves the problems of your life but also guides you to do better. I totally recommend his services 
    to all the people who have a tough time in love and I assure them that the results will amaze them, as they did to me. 
    All thanks to Pandit Ji.`,
  },
];

const ClientTestimonials = () => {
  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-3xl font-bold text-red-600 ml-8 mb-8">Client Testimonials</h2>
      <div className="container mx-auto px-4">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="flex flex-col md:flex-row items-start bg-white p-6 rounded-lg shadow-lg mb-6"
          >
            {/* Client Image */}
            <div className="flex-shrink-0">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-md mb-4 md:mb-0"
              />
            </div>

            {/* Testimonial Content */}
            <div className="md:ml-6 flex-grow">
              <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
              <p className="text-sm text-red-500">{testimonial.problemType}</p>
              <p className="text-md text-gray-600 my-2"><strong>[ {testimonial.date} ]</strong></p>
              <p className="text-gray-700">{testimonial.testimony}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientTestimonials;
