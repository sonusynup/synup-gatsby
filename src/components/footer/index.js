import React from "react"

import PrimaryFooter from "./Primary"
import SecondaryFooter from "./Secondary"

// TODO: Refactor this, replace gatsby link
const Footer = ({
  data,
  resourceList,
  companyList,
}) => (
  <footer>
    <section class="footer">
      <PrimaryFooter
        data={data}
        resourceList={resourceList}
        companyList={companyList}
      />
      <SecondaryFooter />
    </section>
  </footer>
)

export default Footer
