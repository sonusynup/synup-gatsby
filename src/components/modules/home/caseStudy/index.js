import React from 'react'

import CaseStudy from '../../../molecules/caseStudy'

// Testimonial Section
const Testimonials = ({
  caseSectionPartner: {
    partnerPhoto,
    partnerName,
    partnerTestimonial,
    partnerDescription
  },
  caseSectionUrl,
  metricImage1,
  metricImage2,
  metricValue1,
  metricValue2,
}) => (
  <section class="section_testimonial">
    <div class="container">
      <CaseStudy
        partnerImage={partnerPhoto.file.url}
        partnerTestimonial={partnerTestimonial.childContentfulRichText.html}
        partnerName={partnerName}
        partnerPosition={partnerDescription.childContentfulRichText.html}
        details={[
          { metricValue: metricValue1, metricImage: metricImage1 }, 
          { metricValue: metricValue2, metricImage: metricImage2 }
        ]}
      />
    </div>
  </section>
)

export default Testimonials