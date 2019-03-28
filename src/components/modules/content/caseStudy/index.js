import React from "react"

import Testimonial from "./testimonial"
import PartnerGrowth from "./partnerGrowth"

// Case Study section
// Testimonial can have multiple types.
const CaseStudy = ({
  caseSectionPartner: {
    ...partnerProps
  },
  ...props,
}) => (
  <section class="section_testimonial">
    <div class="container">
      <Testimonial
        {...props}
        {...partnerProps}
      >
        <PartnerGrowth
          {...props}
        />
      </Testimonial>
    </div>
  </section>
)

export default CaseStudy
