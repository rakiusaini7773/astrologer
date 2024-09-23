import React from 'react';

const AstrologerProfile = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-100 to-green-200 p-6 md:p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Profile Section */}
        <div className="lg:col-span-2">
          <h1 className="text-xl md:text-xl font-medium text-red-800 mb-4">Profile - Astrologer Ankit Sharma Ji</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
            Highly erudite, well-seasoned, and veteran astrologer Ankit Sharma is regarded as one of the best and most credible astrologers in the whole world at present. This one of the <strong>top and leading astrologers and vashikaran experts of India</strong> holds the great credit for having helped, served, and prospered the troubled and suffering people of the world over for over two decades.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
            The head office of his prestigious service firm is well-established in Chandigarh (Punjab), while numerous branch and liaison offices of this firm are located in major cities across India and the world. This webpage offers very informative and profitable information about magnificent Astrologer Ankit Sharma Ji, his qualities and specialties, his globally admired services, achievements, awards, reviews from his satisfied clients, and contact details.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
            The father of our grand guru ji, astrologer Ankit Sharma, has also been an august astrologer and vashikaran specialist of international repute. After getting broad and refined knowledge in astrology and vashikaran from his virtuous father, Ankit Sharma studied extensively to build a dedicated and highly creative career in these fields.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
            His astrology, healing, and vashikaran services are described briefly here, including the recognitions and awards won till date by him for his outstanding and generous services in these fields.
          </p>
        </div>

        {/* Right Sidebar - Contact Form */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-red-800 mb-4">GET IMMEDIATE SOLUTION</h2>
          <p className="text-sm text-gray-600 mb-4">Quit Sadness, Catch Happiness!</p>
          <form className="space-y-4">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Name"
              required
            />
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="E-mail Id"
              required
            />
            <input
              type="tel"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Phone Number"
              required
            />
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="City"
              required
            />
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Query"
              rows="4"
              required
            ></textarea>
            <div className="flex items-center space-x-2">
              <span className="text-gray-700">2 + 3 =</span>
              <input
                type="text"
                className="w-20 p-2 border border-gray-300 rounded"
                placeholder="Total"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-700 text-white py-2 rounded font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AstrologerProfile;
