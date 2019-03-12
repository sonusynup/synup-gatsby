import React from "react"

import Layout from "../../components/layout"

import Hero from '../../components/modules/home/Hero';
import Partner from '../../components/modules/home/Partner'
import ProductWhatWeDo from '../../components/modules/home/ProductWhatWeDo'
import MainProducts from '../../components/modules/home/MainProducts'

const IndexPage = () => (
  <Layout>
      <section className="section_homepage">
        <div className="container">
          <div className="heroblock">
            <h2>Get found everywhere</h2>
            <p>Manage business location data on search, voice, and social </p>
            
          </div>
        </div>
      </section>
    <Partner />
    <ProductWhatWeDo />
  </Layout>
)

export default IndexPage
