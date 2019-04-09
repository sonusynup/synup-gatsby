import React from "react"

import Button from "../../../atoms/button"

const Centered = ({
  partnerImage,
  partnerLogo,
  partnerSuccess,
  partnerTestimonial,
  partnerName,
  partnerPosition,
}) => (
  <div className="testimonialWrapper_comma">
    <img
      src={partnerLogo.file.url}
      className="img_fluid"
      alt=""
      style={{ width: "100px" }}
    />
    <h3 className="testimonialTitle">{partnerSuccess}</h3>
    <p
      className="testimonialContent"
      dangerouslySetInnerHTML={{ __html: partnerTestimonial }}
    />
    <div className="testimonialAuthor_single">
      <figure>
        <img src="images/svg/comma.svg" className="" alt="" />
      </figure>
      <div className="testimonialAuthor_details">
        <h6 className="testimonialAuthor_name">{partnerName}</h6>
        <p
          className="testimonialAuthor_position"
          dangerouslySetInnerHTML={{ __html: partnerPosition }}
        />
      </div>
    </div>
    <Button type="secondary" text="SEE CASE STUDY" />
  </div>
)

export default Centered
