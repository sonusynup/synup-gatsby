import React from 'react'

const Type2 = ({
  partnerImage,
  partnerTestimonial,
  partnerName,
  partnerPosition,
  children
}) => (
  <div className="blockWrapper">
    <div class="testimonialWrapper">
      <p class="testimonialContent" dangerouslySetInnerHTML={{ __html: partnerTestimonial }} />
      <div class="testimonialAuthor">
        <div class="testimonialAuthor_img">
          <figure>
            <img src={partnerImage} class="avartar-img" alt="" />
          </figure>
        </div>
        <div class="testimonialAuthor_details">
          <h6 class="testimonialAuthor_name">{partnerName}</h6>
          <p class="testimonialAuthor_position" dangerouslySetInnerHTML={{ __html: partnerPosition }} />
        </div>
      </div>
    </div>
    <div className="testimonial_wrapperCard">
      {children}
    </div>
  </div>
)

export default Type2