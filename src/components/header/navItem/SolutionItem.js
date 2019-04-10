import React from "react"

import SolutionBgImage from "../../images/svgComponents/solutionBgImage"

import TargetLink from "../../atoms/targetLink"

const SolutionNavItem = ({ title, description, webpageName }) => (
  <TargetLink to={webpageName} className="flex-submenu">
    <figure>
      <SolutionBgImage />
    </figure>
    <h5>{title}</h5>
    {/* <div
      dangerouslySetInnerHTML={{
        __html: description.childContentfulRichText.html,
      }}
    /> */}
  </TargetLink>
)

export default SolutionNavItem
