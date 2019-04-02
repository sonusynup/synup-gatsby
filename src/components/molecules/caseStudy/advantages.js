import React from "react"

const Advantages = ({ image, industry, goal }) => (
  <div className="testimonial_wrapperCard">
    <div className="va_list">
      <div className="business-card">
        <img className="business-card-logo" src={image} alt="" />
        <p className="business-card_title">
          {" "}
          <b>Industry:</b> {industry}
        </p>
        <p className="business-card-description">
          <b>Business Goal:</b>
          {goal}
        </p>
      </div>
    </div>
  </div>
)

export default Advantages
