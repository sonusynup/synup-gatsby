import React from 'react'

import CaseStudy from '../../../molecules/CaseStudy'

// Testimonial Section
const Testimonials = () => (
  <section class="section_testimonial">
    <div class="container">
      <CaseStudy
        partnerImage=""
        partnerTestimonial="I was using Yext and switched to Synup.
        The services and features offered by Synup are more convenient and easy to use
        and the support team with Synup helped me set up all locations with ease. Their system has
        more features in comparison to other competitors and their cost is much cheaper."
        partnerName="Ziad Rawashdeh"
        partnerPosition="CEO, RAWA Law Group APC & SmartCPA"
        details={[{ increase: '200', image: '' }]}
      />
    </div>
  </section>
)

export default Testimonials