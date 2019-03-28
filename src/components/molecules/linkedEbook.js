import React from "react"

import { Link } from "gatsby"
import ContentHoverActionImage from "../images/svgComponents/contentHoverActionImage"

const LinkedEbook = ({ to, thumbnail }) => (
  <Link to={to} className="ebook_anchor">
    <div className="overlay_content">
      <div className="content-overlay" />
      <figure>
        <img src={thumbnail} className="img_fluid" alt="" />
      </figure>
      <div className="content-details">
        <ContentHoverActionImage />
      </div>
    </div>
  </Link>
)

export default LinkedEbook
