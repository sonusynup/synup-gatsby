import React from 'react'

const Type1 = ({
  partnerImage,
  partnerTestimonial,
  partnerName,
  partnerPosition,
  children
}) => (
  <div className="blockWrapper">
    <div className="testimonialWrapper-customer">
      <div className="testimonialAuthorShadeimg">
        <div className="overlay_content">
          <div className="testimonial_overlay green-overlay"></div>
          <figure>
            <img
              src={partnerImage}
              className="img_fluid"
              alt=""
            />
          </figure>
        </div>
      </div>
      <div className="testimonialContentOutline" dangerouslySetInnerHTML={{ __html: partnerTestimonial }} />
      <div className="testimonialAuthor">
        <div className="testimonialAuthor_details">
          <h6 className="testimonialAuthor_name">{partnerName}</h6>
          <p className="testimonialAuthor_position" dangerouslySetInnerHTML={{ __html: partnerPosition }} />
        </div>
      </div>
    </div>
    {children}
  </div>
)

export default Type1