import React from "react"

import PrimaryFooter from "./Primary"
import SecondaryFooter from "./Secondary"
import Prefooter from "./Prefooter"

// TODO: Refactor this, replace gatsby link
const Footer = ({ 
  data,
  resourceList,
  companyList,
  prefooterTitle,
  prefooterDescription,
  prefooterButtonText,
}) => (
  <>
    <Prefooter
      prefooterTitle={prefooterTitle}
      prefooterDescription={prefooterDescription}
      prefooterButtonText={prefooterButtonText}
    />
    <footer>
      <section className="footer">
        <PrimaryFooter
          data={data}
          resourceList={resourceList}
          companyList={companyList}
        />
        <SecondaryFooter />
      </section>
    </footer>
  </>
)

export default Footer
