import React from "react"
import { Link } from "gatsby"

import SolutionBgImage from "../../images/svgComponents/solutionBgImage"

const SolutionNavItem = ({ title, description, webpageName }) => (
  <Link to={webpageName} className="flex-submenu">
    <figure>
      <SolutionBgImage />
    </figure>
    <h5>{title}</h5>
    <div
      dangerouslySetInnerHTML={{
        __html: description.childContentfulRichText.html,
      }}
    />
  </Link>
)

export default SolutionNavItem
