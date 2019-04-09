import React from 'react'

const BusinessButton = ({
  image,
  title,
  subTitle,
  onClick,
}) => (
  <a className="businessCard" onClick={onClick}>
    <figure>
      <img src={image} alt="" />
    </figure>
    <h5>{title}</h5>
    <p>{subTitle}</p>
  </a>
)

export default BusinessButton