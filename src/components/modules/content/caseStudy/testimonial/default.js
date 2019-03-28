import React from "react"

const Type1 = ({
  partnerPhoto,
  partnerTestimonial,
  partnerName,
  partnerDescription,
  children,
}) => (
  <div className="blockWrapper">
    <div className="testimonialWrapper-customer">
      <div className="testimonialAuthorShadeimg">
        <div className="overlay_content">
          <div className="testimonial_overlay green-overlay" />
          <figure>
            <img src={partnerPhoto.file.url} className="img_fluid" alt="" />
          </figure>
        </div>
      </div>
      <div
        className="testimonialContentOutline"
        dangerouslySetInnerHTML={{ __html: partnerTestimonial.childContentfulRichText.html }}
      />
      <div className="testimonialAuthor">
        <div className="testimonialAuthor_details">
          <h6 className="testimonialAuthor_name">{partnerName}</h6>
          <p
            className="testimonialAuthor_position"
            dangerouslySetInnerHTML={{ __html: partnerDescription.childContentfulRichText.html }}
          />
        </div>
      </div>
    </div>
    {children}
  </div>
)

export default Type1
