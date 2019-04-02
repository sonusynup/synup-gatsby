import React from "react"

import PrimaryFooter from "./Primary"
import SecondaryFooter from "./Secondary"
import Prefooter from "./Prefooter";

// TODO: Refactor this, replace gatsby link
const Footer = ({
  data,
  resourceList,
  companyList,
}) => (
  <>
  <Prefooter />
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
  </>
)

export default Footer
