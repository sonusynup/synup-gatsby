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
  partnerTestimonial,
  partnerName,
  partnerPosition,
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
    >
      <BusinessDetails
        details={details}
      />
    </Testimonial>
  </>
)

export default CaseStudy