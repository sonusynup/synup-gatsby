import React from 'react'

import Testimonial from './testimonial'
import Advantages from './advantages';
import BusinessDetails from './businessDetails'

/* 
 * Case Study Molecule
 * Renders a testimonial component
 */
const CaseStudy = ({
  caseSectionType,
  partnerImage,
  partnerLogo,
  partnerTestimonial,
  partnerName,
  partnerPosition,
  partnerSuccess,
  details
}) => (
  <>
    <Testimonial
      type={caseSectionType}
      caseSectionType={caseSectionType}
      partnerImage={partnerImage}
      partnerTestimonial={partnerTestimonial}
      partnerName={partnerName}
      partnerPosition={partnerPosition}
      partnerLogo={partnerLogo}
      partnerSuccess={partnerSuccess}
    >
      <BusinessDetails
        details={details}
      />
    </Testimonial>
  </>
)

export default CaseStudy