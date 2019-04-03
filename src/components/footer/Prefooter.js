import React from "react"
import { Link } from "gatsby"

import Button from "../atoms/button"
import isNull from "../../helpers/isNull";

const Prefooter = ({
  prefooterTitle,
  prefooterDescription,
  prefooterButtonText,
}) => 
  {
    return (!isNull(prefooterTitle) && !isNull(prefooterDescription) && !isNull(prefooterDescription)) ? (
      <section className="section_grandient">
      <div className="container">
        <div className="grandientWrapper">
          <h3 className="whiteTitle">{prefooterTitle}</h3>
          <p>{prefooterDescription}</p>
          <Link to="/">
            <Button type="invert-primary" text={prefooterButtonText} />
          </Link>
        </div>
      </div>
    </section>
    ) : null
  }

export default Prefooter
