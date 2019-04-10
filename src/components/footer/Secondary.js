import React from "react"

import TargetLink from "../atoms/targetLink"

const SecondaryFooter = () => (
  <div className="footer_secondary">
    <div className="container">
      <ul className="footer_secondaryLinks">
        <li>
          <TargetLink to="/support" className="footer_link">
            Support
          </TargetLink>
        </li>
        <li>
          <TargetLink to="/privacy" className="footer_link">
            Privacy
          </TargetLink>
        </li>
        <li>
          <TargetLink to="/terms" className="footer_link">
            Terms and Conditions
          </TargetLink>
        </li>
        <li>
          <TargetLink to="/cookies" className="footer_link">
            Cookies
          </TargetLink>
        </li>
      </ul>
    </div>
  </div>
)

export default SecondaryFooter
