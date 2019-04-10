import React from "react"

import Button from "../../atoms/button"
import TargetLink from "../../atoms/targetLink"

const Meta = ({ meta }) => {
  if (meta === null) return null
  switch (meta.type) {
    case "tip":
      return (
        <div className="secoundaryColor_block">
          <h6>{meta.title}</h6>
          <p
            dangerouslySetInnerHTML={{
              __html: meta.description.childContentfulRichText.html,
            }}
          />
        </div>
      )
    case "alert":
      return (
        <div className="primaryColor_block">
          <h6>{meta.title}</h6>
          <p
            dangerouslySetInnerHTML={{
              __html: meta.description.childContentfulRichText.html,
            }}
          />
          <TargetLink to={meta.buttonLink}>
            <Button type="secondary" text={meta.buttonText} />
          </TargetLink>
        </div>
      )
    default:
      return null
  }
}

export default Meta
