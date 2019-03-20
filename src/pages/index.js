import React from "react"

import Layout from "../components/layout"

import Hero from '../components/modules/home/hero'
import Partner from '../components/modules/home/partner'
import ProductWhatWeDo from '../components/modules/home/productWhatWeDo'
import MainProducts from '../components/modules/home/mainProducts'
import FeatureList from '../components/modules/home/featureList'
import CaseStudy from "../components/modules/home/caseStudy";

// Renders the home page of the app
const IndexPage = () => (
  <Layout>
    <Hero />
    <Partner />
    <ProductWhatWeDo />
    <MainProducts />
    <Features />
    <CaseStudy />
  </Layout>
)

export default IndexPage