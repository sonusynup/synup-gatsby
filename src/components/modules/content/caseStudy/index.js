import React from "react"

import Testimonial from "./testimonial"
import PartnerGrowth from "./partnerGrowth"


// Case Study section
// Testimonial can have multiple types.
const CaseStudy = ({
  caseSectionPartner: {
    partnerPhoto,
    partnerName,
    partnerTestimonial,
    partnerDescription,
    partnerSuccess,
    partnerLogo,
  },
  caseSectionType,
  caseSectionUrl,
  metricImage1,
  metricImage2,
  metricValue1,
  metricValue2,
}) => (
  <section class="section_testimonial">
    <div class="container">
      <Testimonial
        type={caseSectionType}
        
        caseSectionType={caseSectionType}
        partnerPhoto={partnerPhoto}
        partnerName={partnerName}
        partnerDescription={partnerDescription}
        partnerLogo={partnerLogo}
        partnerSuccess={partnerSuccess}
        partnerTestimonial={partnerTestimonial}
      
  
        details={[
          { metricValue: metricValue1, metricImage: metricImage1 },
          { metricValue: metricValue2, metricImage: metricImage2 },
        ]}
      >
        <PartnerGrowth
          details={[
            { metricValue: metricValue1, metricImage: metricImage1 },
            { metricValue: metricValue2, metricImage: metricImage2 },
          ]}
        />
      </Testimonial>
    </div>
  </section>
)

export default CaseStudy
