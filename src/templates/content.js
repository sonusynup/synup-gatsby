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
    <Layout
      {...props.pageContext.announcement}
      {...props.pageContext.navbar}
      {...props.pageContext.prefooter}
      meta={props.pageContext.meta}
    >
      {sections.map((section, index) => {
        switch (section.__typename) {
          case "ContentfulHeroSection":
            return <Hero {...section} key={index} />
          case "ContentfulFeaturesSection":
            return <Feature {...section} key={index} />
          case "ContentfulProductSection":
            return <Product {...section} key={index} />
          case "ContentfulCaseStudySection":
            return <CaseStudy {...section} key={index} />
          case "ContentfulPartnerSection":
            return <Partner {...section} key={index} />
          default:
            return null
        }
      })}
    </Layout>
  )
}

export default Content
