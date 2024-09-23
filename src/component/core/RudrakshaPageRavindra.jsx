import React from 'react';
import FAQAccordion from './FAQAccordionRavindra';

const RudrakshaPage = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Left Scrollable Content */}
      <div className="flex-1 h-screen overflow-y-auto p-8">
        {/* Rudraksha - What is Rudraksha? Section */}
        <section className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">
            Rudraksha - What is Rudraksha?
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            The rudraksha is a seed which is produced by evergreen broad-leaved trees of the genus elaeocarpus. It is majorly found in the temperate and sub-alpine zone. It is considered as a symbol of Shiva and regarded highly in the Hindu Dharma. The term <strong>rudraksha</strong> is made from two words: "rudra," which is another name of Lord Shiva, and "aksha," which is defined as a teardrop. Hence, the rudraksha is termed as the tear of Lord Shiva. The rudraksha holds immense value and is divided into many types. It is believed to contain immense medicinal and mystical powers.
          </p>
        </section>

        {/* Different Types of Rudraksha Beads Section */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Different Types of Rudraksha Beads
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            There are a total of 24 <strong>types of rudrakshas</strong> which have different values. The rudraksha is differentiated based on various types of shapes, colors, sizes, and the number of cuts in the beads. Get all 24 Rudraksha Names:
          </p>

          {/* Rudraksha Types Grid */}
          <div className="grid grid-cols-3 gap-4 text-center mt-12">
            {/* First Row with Orange Text */}
            <div className="border border-blue-300 p-4 text-orange-600 font-bold">1 Mukhi Rudraksha</div>
            <div className="border border-blue-300 p-4 text-orange-600 font-bold">2 Mukhi Rudraksha</div>
            <div className="border border-blue-300 p-4 text-orange-600 font-bold">3 Mukhi Rudraksha</div>

            {/* Other Rows */}
            <div className="border border-blue-300 p-4">4 Mukhi Rudraksha</div>
            <div className="border border-blue-300 p-4">5 Mukhi Rudraksha</div>
            <div className="border border-blue-300 p-4">6 Mukhi Rudraksha</div>
            <div className="border border-blue-300 p-4">7 Mukhi Rudraksha</div>
            <div className="border border-blue-300 p-4">8 Mukhi Rudraksha</div>
            <div className="border border-blue-300 p-4">9 Mukhi Rudraksha</div>
            <div className="border border-blue-300 p-4">10 Mukhi Rudraksha</div>
            <div className="border border-blue-300 p-4">11 Mukhi Rudraksha</div>
            <div className="border border-blue-300 p-4">12 Mukhi Rudraksha</div>
            <div className="border border-blue-300 p-4">13 Mukhi Rudraksha</div>
            <div className="border border-blue-300 p-4">14 Mukhi Rudraksha</div>
            <div className="border border-blue-300 p-4">15 Mukhi Rudraksha</div>
            <div className="border border-blue-300 p-4">16 Mukhi Rudraksha</div>
            <div className="border border-blue-300 p-4">17 Mukhi Rudraksha</div>
            <div className="border border-blue-300 p-4">18 Mukhi Rudraksha</div>
            <div className="border border-blue-300 p-4">19 Mukhi Rudraksha</div>
            <div className="border border-blue-300 p-4">20 Mukhi Rudraksha</div>
            <div className="border border-blue-300 p-4">21 Mukhi Rudraksha</div>
            <div className="border border-blue-300 p-4">Ganesh Rudraksha</div>
            <div className="border border-blue-300 p-4">Garbh Gauri Rudraksha</div>
            <div className="border border-blue-300 p-4">Gauri Shankar Rudraksha</div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto p-6 md:p-8">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
        What are the Benefits of Wearing Rudraksha?
      </h1>
      
      {/* Introduction Paragraph */}
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
        The benefits of wearing rudraksha are numerous. It can be used for treating ailments as well as removing other problems in personal life. Wearing the rudraksha beads activates the chakras in the human body which leads to resolving numerous complex issues. Some benefits of the pure beads are mentioned below:
      </p>
      
      {/* Benefits List */}
      <ul className="space-y-4 text-lg text-gray-800">
        <li className="flex items-start space-x-2">
          <span className="text-orange-600">▸</span>
          <p>The Rudraksha bead acts like a protective guard that safeguards the wearer from negative energies.</p>
        </li>
        <li className="flex items-start space-x-2">
          <span className="text-orange-600">▸</span>
          <p>It provides stability and support with its protective covering.</p>
        </li>
        <li className="flex items-start space-x-2">
          <span className="text-orange-600">▸</span>
          <p>It makes the wearer more active and agile.</p>
        </li>
        <li className="flex items-start space-x-2">
          <span className="text-orange-600">▸</span>
          <p>It increases attention span and focus of children.</p>
        </li>
        <li className="flex items-start space-x-2">
          <span className="text-orange-600">▸</span>
          <p>It brings purity and spirituality in life.</p>
        </li>
      </ul>
    </div>

    <FAQAccordion/>
      </div>

      {/* Fixed Sidebar for Latest Articles */}
      <aside className="w-full md:w-1/3 h-screen sticky top-0 bg-gray-50 p-6 border-l">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Latest Articles</h2>
        <ul>
          {/* Latest Article Item */}
          <li className="mb-6">
            <img src="path-to-image-1.jpg" alt="Vashikaran Article" className="w-full h-20 object-cover rounded" />
            <a href="#" className="text-orange-600 font-semibold hover:underline mt-2 block">
              Vashikaran is Not a Black Magic. It is Astrological Science
            </a>
          </li>
          <li className="mb-6">
            <img src="path-to-image-2.jpg" alt="Why Only Me?" className="w-full h-20 object-cover rounded" />
            <a href="#" className="text-orange-600 font-semibold hover:underline mt-2 block">
              Why Only Me Always?
            </a>
          </li>
          <li className="mb-6">
            <img src="path-to-image-3.jpg" alt="Role of Astrologer" className="w-full h-20 object-cover rounded" />
            <a href="#" className="text-orange-600 font-semibold hover:underline mt-2 block">
              Role of Astrologer in Love Marriage Problem Solution
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default RudrakshaPage;
