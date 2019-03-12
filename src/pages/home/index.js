import React from "react"

import Layout from "../../components/layout"

import Hero from '../../components/modules/home/Hero';
import Partner from '../../components/modules/home/Partner'
import ProductWhatWeDo from '../../components/modules/home/ProductWhatWeDo'
import MainProducts from '../../components/modules/home/MainProducts'

const IndexPage = () => (
  <Layout>
    <Hero />
    <Partner />
    <ProductWhatWeDo />
    <MainProducts />
  </Layout>
)

export default IndexPage
