import React from "react"

import Layout from "../components/layout"

import Hero from "../components/modules/content/hero"
import Feature from "../components/modules/content/feature"
import Product from "../components/modules/content/product"
import CaseStudy from "../components/modules/content/caseStudy"
import Partner from "../components/modules/content/partner"

const Content = props => {
  const sections = props.pageContext.sections

  return (
    <Layout>
      {sections.map(section => {
        switch (section.__typename) {
          case "ContentfulHeroSection":
            return <Hero {...section} />
            break
          case "ContentfulFeaturesSection":
            return <Feature {...section} />
            break
          case "ContentfulProductSection":
            return <Product {...section} />
            break
          case "ContentfulCaseStudySection":
            return <CaseStudy {...section} />
            break
          case "ContentfulPartnerSection":
            return <Partner {...section} />
            break
        }
      })}
    </Layout>
  )
}

export default Content
