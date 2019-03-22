import React from 'react'

import Testimonial from './testimonial'
import Advantages from './advantages';
import BusinessDetails from './businessDetails'

/* 
 * Case Study Molecule
 * Renders a testimonial component
 * Renders the advantage or business details of the case study
 */
const CaseStudy = ({
  caseSectionType,
  isAdvantage,
  partnerImage,
  partnerTestimonial,
  partnerName,
  partnerPosition,
  advantageImage,
  advantageIndustry,
  advantageGoal,
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
      {
        isAdvantage ? (
          <Advantages
            image={advantageImage}
            industry={advantageIndustry}
            goal={advantageGoal}
          />
        ) : (
          <BusinessDetails
            details={details}
          />
        )
      }
    </Testimonial>
  </>
)

export default CaseStudy