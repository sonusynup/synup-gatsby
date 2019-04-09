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
      announcementMessage={props.pageContext.announcementMessage}
      announcementUrl={props.pageContext.announcementUrl}
      prefooterTitle={props.pageContext.prefooterTitle}
      prefooterDescription={props.pageContext.prefooterDescription}
      prefooterButtonText={props.pageContext.prefooterButtonText}
    >
      {sections.map((section, index) => {
        switch (section.__typename) {
          case "ContentfulHeroSection":
            return <Hero {...section} key={index} />
            break
          case "ContentfulFeaturesSection":
            return <Feature {...section} key={index} />
            break
          case "ContentfulProductSection":
            return <Product {...section} key={index} />
            break
          case "ContentfulCaseStudySection":
            return <CaseStudy {...section} key={index} />
            break
          case "ContentfulPartnerSection":
            return <Partner {...section} key={index} />
            break
        }
      })}
    </Layout>
  )
}

export default Content
