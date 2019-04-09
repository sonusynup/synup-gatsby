import React from "react"

const BusinessButton = ({ image, title, subTitle, onClick }) => (
  <div className="businessCard" onClick={onClick}>
    <figure>
      <img src={image} alt="" />
    </figure>
    <h5>{title}</h5>
    <p>{subTitle}</p>
  </div>
)

export default BusinessButton
