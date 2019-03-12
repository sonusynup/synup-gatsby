import React from "react"

import Layout from "../../components/layout"

import Hero from './Hero';
import Partner from './Partner'
import Product from './Product'

const IndexPage = () => (
  <Layout>
    <main>
      <Hero />
      <Partner />
      <Product />
    </main>
  </Layout>
)

export default IndexPage
