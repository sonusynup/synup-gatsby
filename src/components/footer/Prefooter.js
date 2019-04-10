import React from "react"

import Button from "../atoms/button"
import TargetLink from "../atoms/targetLink"
import isNull from "../../helpers/isNull"

const Prefooter = ({
  prefooterTitle,
  prefooterDescription,
  prefooterButtonText,
  prefooterLink,
}) => {
  return (!isNull(prefooterTitle) &&
    !isNull(prefooterDescription) &&
    !isNull(prefooterDescription) && 
    !isNull(prefooterLink)) ? (
    <section className="section_grandient">
      <div className="container">
        <div className="grandientWrapper">
          <h3 className="whiteTitle">{prefooterTitle}</h3>
          <p>{prefooterDescription}</p>
          <TargetLink to={prefooterLink}>
            <Button type="invert-primary" text={prefooterButtonText} />
          </TargetLink>
        </div>
      </div>
    </section>
  ) : null
}

export default Prefooter
