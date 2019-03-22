import React from 'react'

import CaseStudyMolecule from '../../../molecules/caseStudy'

// Testimonial Section
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
      <CaseStudyMolecule
        partnerImage={partnerPhoto ? partnerPhoto.file.url : null}
        caseSectionType={caseSectionType}
        partnerTestimonial={partnerTestimonial.childContentfulRichText.html}
        partnerName={partnerName}
        partnerSuccess={partnerSuccess}
        partnerLogo={partnerLogo}
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