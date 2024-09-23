import React from 'react'
import AstrologyBanner from '../component/core/AstrologyBannerRavindra'
import YtQuery from '../component/common/YtQueryRavindra'
import ClientTestimonials from '../component/core/ClientTestimonialsRavindra'

const TestiomonailRavindra = () => {
  return (
    <div>
      <AstrologyBanner 
        linkText="Pt. Ankit Sharma World Famous Astrologer"
        linkHref="https://example.com/ankit-sharma"
        description="Testimonials"
      />
      <YtQuery/>
      <ClientTestimonials/>
    </div>
  )
}

export default TestiomonailRavindra
