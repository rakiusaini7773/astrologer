import React from 'react'
import AstrologyBanner from '../component/core/AstrologyBannerRavindra'
import AstrologyCounseling from '../component/core/AstrologyCounselingRavindra'
import CapabilitiesSection from '../component/core/CapabilitiesSectionRavindra'
import DeclarationsSection from '../component/core/DeclarationsSectionRavindra'
import AwardsSection from '../component/core/AwardsSection'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Leaflet CSS for the map
const WhoIsAnkit = () => {
    const expertiseItems = [
        "Astrology",
        "Numerology",
        "Vastu Shastra",
        "Psychic Reading",
        "Positive Vashikaran",
        "Meditation and Natural Healing",
        "And, many other positive and effective sciences and therapies"
      ];
    
      const lifeSpheresItems = [
        "Progeny",
        "School and College Education",
        "Businesses in various Economic Fields",
        "Romance and Love Affairs",
        "Marital Life and Domesticity",
        "Business/Professional Ventures and Investments",
        "Removal of Black Magics of Evil Persons or Spirits",
        "Health, Well-being, and Diseases",
        "Career Selection and Progress",
        "Marriages of all Types",
        "Relationships with Near and Remote People",
        "National and Foreign Tours & Travels",
        "Construction of and Corrections in all types of Buildings"
      ];
    
      const contactNumber = "+91-98154-18307";
      const email = "info@AstrologerAnkitSharma.com";
  return (
    <div>
       <AstrologyBanner 
        linkText="Pt. Ankit Sharma World Famous Astrologer"
        linkHref="https://example.com/ankit-sharma"
        description="Blogs"
      />
      <AstrologyCounseling
        title="Who Astrologer Ankit Sharma"
        description="This well-drafted and exclusive web-page offers answers and explanations for why astrologer Ankit Sharma is at present one of the most capable, trustworthy, and hence tried and true, astrologers in India and nations all across the globe. During his highly opulent career crossing two decades, including one decade of global career, he helped myriads of troubled people and entities, and thus, made the lives of them highly successful, happy, and progressive, who now reside happily and peacefully in nations worldwide."
description1="Here, it is relevant to mention also that, today he is regarded as being one of the most famous and top astrologers in india, in the majority of Asian countries, and in countries worldwide. Consequently, the majority of the aggrieved and suffering people of the world, prefer to receive his astrology and other services, to find the most effective, economical, and permanent solutions to their respective problem, irrespective of the field and nature of problems.Our highly talented, erudite, and righteous astrologer guru ji has been well-bred under intelligent and sophisticated guidance of his father, who was one of the eminent astrologer-cum-vashikaran experts in India and abroad in his times. The service practices of astrologer ankit sharma span over two decades, and a rather wide-range of service areas (mentioned below) have been comprehensively covered by his highly refined, fail-safe, and sophisticated services.
			There are certain lavish and elusive qualities of him and his astrology and other services, which are largely and exclusively creditable for making him one of the most talented, veteran, and reliable astrologers in the whole world. The following are such main qualities and specialties of him and his services:
			"
description2="The cherished and ultimate ambition of our righteous and magnanimous guru ji astrologer ankit sharma is to make the best possible uses of his opulent gamut of knowledge and experience in these fields, for making lives of people of the world over better, happier, and optimally prosperous. During last two decades, he soothed and changed the troubled lives of thousands, and propelled and prospered businesses and careers of numerous. Today, his  astrology and vashikaran services  are rather popular and reliable in almost all major cities of India, and in numerous cities of Asia, Europe, Australia, North America, and South Africa. Over 10,000 of his satisfied beneficiaries have become dedicated and permanent clients of him for getting prompt and surefire solutions for their respective problems pertaining to various spheres of life."
      />
      <CapabilitiesSection
        expertiseItems={expertiseItems}
        lifeSpheresItems={lifeSpheresItems}
        contactNumber={contactNumber}
        email={email}
      />
      <DeclarationsSection/>
      <AwardsSection title="AWARD AND ACHIEVEMENT"/>
      <div className='flex justify-evenly items-center'>
      <div className="md:w-[50vw] text-3xl ml-20 p-4 ">
        <h2 className="text-xl font-semibold text-red-700">CONTACT ASTROLOGER ANKIT SHARMA</h2>
        <p className="text-gray-700 italic mt-2">From Any Corner of the World (24*7)</p>

        <ul className="mt-4 space-y-2">
          {/* Contact Options */}
          <li className="flex items-center">
            <img src="https://www.astrologerankitsharma.com/images/telico.png" alt="Call" className="w-6 h-6 mr-2" />
            <a href="tel:+919815418307" className="text-blue-600">Direct Call : +91-98154-18307</a>
          </li>
          <li className="flex items-center">
            <img src="https://www.astrologerankitsharma.com/images/whatsupico.png" alt="WhatsApp" className="w-6 h-6 mr-2" />
            <a href="https://wa.me/919815418307" className="text-blue-600">Whats App : +91-98154-18307</a>
          </li>
          <li className="flex items-center">
            <img src="https://www.astrologerankitsharma.com/images/viberico.png" alt="Viber" className="w-6 h-6 mr-2" />
            <a href="viber://chat?number=919815418307" className="text-blue-600">Viber Chat : +91-98154-18307</a>
          </li>
          <li className="flex items-center">
            <img src="https://www.astrologerankitsharma.com/images/skypeicon.png" alt="Skype" className="w-6 h-6 mr-2" />
            <a href="skype:ankit.sharma3291?chat" className="text-blue-600">Skype Chat : Ankit.sharma3291</a>
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <MapContainer
          center={[28.6139, 77.209]} // Replace with appropriate coordinates
          zoom={13}
          scrollWheelZoom={false}
          className="w-full h-96 rounded-lg shadow-md"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[28.6139, 77.209]}>
            <Popup>
              India 360 Degree <br /> New Delhi.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      </div>
     
    </div>
  )
}

export default WhoIsAnkit
