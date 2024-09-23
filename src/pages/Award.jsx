import React from 'react'
import MainSection from '../component/MainSection'
import AstrologyBanner from '../component/core/AstrologyBannerRavindra'
import AwardsPagesRavindra from '../component/core/AwardsPagesRavindra'
const Award = () => {
  return (
    <div>
      <MainSection/>
      <AstrologyBanner 
        linkText="Pt. Ankit Sharma World Famous Astrologer"
        linkHref="https://example.com/ankit-sharma"
        description="Blogs"
      />
      <AwardsPagesRavindra/>
    </div>
  )
}

export default Award
