import React from "react"

const Type2 = ({
  partnerImage,
  partnerTestimonial,
  partnerName,
  partnerPosition,
  children,
}) => (
  <div className="blockWrapper">
    <div className="testimonialWrapper">
      <p
        className="testimonialContent"
        dangerouslySetInnerHTML={{ __html: partnerTestimonial }}
      />
      <div className="testimonialAuthor">
        <div className="testimonialAuthor_img">
          <figure>
            <img src={partnerImage} className="avartar-img" alt="" />
          </figure>
        </div>
        <div className="testimonialAuthor_details">
          <h6 className="testimonialAuthor_name">{partnerName}</h6>
          <p
            className="testimonialAuthor_position"
            dangerouslySetInnerHTML={{ __html: partnerPosition }}
          />
        </div>
      </div>
    </div>
    <div className="testimonial_wrapperCard">{children}</div>
  </div>
)

export default Type2
