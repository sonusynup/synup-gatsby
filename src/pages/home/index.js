import React from "react"

import Layout from "../../components/layout"

import Hero from '../../components/modules/home/Hero'
import Partner from '../../components/modules/home/Partner'
import ProductWhatWeDo from '../../components/modules/home/ProductWhatWeDo'
import MainProducts from '../../components/modules/home/MainProducts'
import Features from '../../components/modules/home/Features'
import CaseStudy from "../../components/modules/home/CaseStudy";

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
