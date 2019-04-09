import React from "react"

import Button from "../../atoms/button"

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
          <Button type="secondary" text="LEARN MORE" />
        </div>
      )
    default:
      return null
  }
}

export default Meta
