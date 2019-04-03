import React from "react"

import TargetLink from "../../components/atoms/targetLink"
import ContentHoverActionImage from "../images/svgComponents/contentHoverActionImage"

const LinkedEbook = ({ to, thumbnail }) => (
  <TargetLink to={to} className="ebook_anchor">
    <div className="overlay_content">
      <div className="content-overlay" />
      <figure>
        <img src={thumbnail} className="img_fluid" alt="" />
      </figure>
      <div className="content-details">
        <ContentHoverActionImage />
      </div>
    </div>
  </TargetLink>
)

export default LinkedEbook
