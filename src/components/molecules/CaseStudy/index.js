import React from 'react'

import Testimonial from './Testimonial'
import Advantages from './Advantages';
import BusinessDetails from './BusinessDetails'

/* 
 * Case Study Molecule
 * Renders a testimonial component
 * Renders the advantage or business details of the case study
 */
const CaseStudy = ({
  isImageContained,
  isAdvantage,
  partnerImage,
  partnerTestimonial,
  partnerName,
  partnerPosition,
  advantageImage,
  advantageIndustry,
  advantageGoal,
}) => (
  <>
    <Testimonial
      isImageContained={isImageContained}
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
          <BusinessDetails />
        )
      }
    </Testimonial>
  </>
)

export default CaseStudy