import React from 'react'
import AstrologyBanner from '../component/core/AstrologyBannerRavindra'
import AstrologyCounseling from '../component/core/AstrologyCounselingRavindra'
import MarriageCounseling from '../component/core/MarriageCounselingRavindra'
import AstrologyServices from '../component/core/AstrologyServicesRavindra'
import AwardsSection from '../component/core/AwardsSection'
import ContactPage from '../component/common/ContactForm1'
const Counseling = () => {
  return (
    <div>
      <AstrologyBanner 
        linkText="Pt. Ankit Sharma World Famous Astrologer"
        linkHref="https://example.com/ankit-sharma"
        description="Astrology Counseling for your Life's Problems by Ankit Sharma Ji"
      />
     <AstrologyCounseling
        title="Astrology Counseling for your Life's Problems by Ankit Sharma Ji"
        description="For providing the wisest and best possible astrology counseling and suggestions for solving various problems of life, veteran and benevolent astrologer Ankit Sharma is certainly one of the best astrologers in India and the whole world at present..."
      />
      <MarriageCounseling/>
      <AstrologyServices/>
      <AwardsSection title="AWARD AND ACHIEVEMENTS" />
      <ContactPage/>
    </div>
  )
}

export default Counseling
