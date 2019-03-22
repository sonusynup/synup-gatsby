import React from 'react'

import CaseStudyMolecule from '../../../molecules/caseStudy'

// Testimonial Section
const CaseStudy = ({
  caseSectionPartner: {
    partnerPhoto,
    partnerName,
    partnerTestimonial,
    partnerDescription
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
      <CaseStudyMolecule
        partnerImage={partnerPhoto.file.url}
        caseSectionType={caseSectionType}
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

export default CaseStudy