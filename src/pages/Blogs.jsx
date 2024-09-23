import React from 'react'
import AstrologyBanner from '../component/core/AstrologyBannerRavindra'
import YtQuery from '../component/common/YtQueryRavindra'
import LoveRelationshipAdvice from '../component/core/LoveRelationshipAdviceRavindra'

const Blogs = () => {
  return (
    <div>
      <AstrologyBanner 
        linkText="Pt. Ankit Sharma World Famous Astrologer"
        linkHref="https://example.com/ankit-sharma"
        description="Blogs"
      />
      <YtQuery/>
      <LoveRelationshipAdvice/>
    </div>
  )
}

export default Blogs
