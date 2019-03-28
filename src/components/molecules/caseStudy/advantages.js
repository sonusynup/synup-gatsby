import React from "react"

const Advantages = ({ image, industry, goal }) => (
  <div class="testimonial_wrapperCard">
    <div class="va_list">
      <div class="business-card">
        <img className="business-card-logo" src={image} alt="" />
        <p class="business-card_title">
          {" "}
          <b>Industry:</b> {industry}
        </p>
        <p class="business-card-description">
          <b>Business Goal:</b>
          {goal}
        </p>
      </div>
    </div>
  </div>
)

export default Advantages
