import React from 'react'

const Testimonial = ({
  isImageContained,
  partnerImage,
  partnerTestimonial,
  partnerName,
  partnerPosition,
  children
}) => !isImageContained ? (
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
      <p className="testimonialContentOutline">{partnerTestimonial}</p>
      <div className="testimonialAuthor">
        <div className="testimonialAuthor_details">
          <h6 className="testimonialAuthor_name">{partnerName}</h6>
          <p className="testimonialAuthor_position">{partnerPosition}</p>
        </div>
      </div>
    </div>
    {children}
  </div>
  ) : (
    <div class="testimonialWrapper">
      <p class="testimonialContent">{partnerTestimonial}</p>
      <div class="testimonialAuthor">
        <div class="testimonialAuthor_img">
          <figure>
            <img src={partnerImage} class="avartar-img" alt="" />
          </figure>
        </div>
        <div class="testimonialAuthor_details">
          <h6 class="testimonialAuthor_name">{partnerName}</h6>
          <p class="testimonialAuthor_position">{partnerPosition}</p>
        </div>
      </div>
    </div>
)

export default Testimonial