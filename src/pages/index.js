import React from "react"

import Layout from "../components/layout"
import Button from '../components/atoms/Buttons';
import Card from '../components/atoms/Card'

const IndexPage = () => (
  <Layout>
    <main>
      <section className="section_homepage">
        <div className="container">
          <div className="heroblock">
            <h2>Get found everywhere</h2>
            <p>Manage business location data on search, voice, and social </p>
            <Button type="primary" text="GET STARTED" />
          </div>
        </div>
      </section>
      <section className="section_banner">
        <div className="container">
            <div className="banner_wrapper">
              <h4>
                We power location intelligence for over 
                  <span className="primary_text">150,000</span>
                  businesses
              </h4>
              <div className="banner_logoWrapper">
                <a href="#" className="banner_logo">
                  <img src="images/svg/v-icon.svg" className="img_fluid" alt="" />
                </a>
                <a href="#" className="banner_logo">
                  <img src="images/svg/v-icon.svg" className="img_fluid" alt="" />
                </a>
                <a href="#" className="banner_logo">
                  <img src="images/svg/v-icon.svg" className="img_fluid" alt="" />
                </a>
                <a href="#" className="banner_logo">
                  <img src="images/svg/v-icon.svg" className="img_fluid" alt="" />
                </a>
                <a href="#" className="banner_logo">
                  <img src="images/svg/v-icon.svg" className="img_fluid" alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section_card">
            <div className="container">
                <div className="card_block">
                    <h3>What we do</h3>
                    <p>Select your business type to get started</p>
                </div>
                <div className="card_deck">
                  <Card />
                  <Card />
                  <Card />
                </div>
            </div>
        </section>
    </main>
  </Layout>
)

export default IndexPage
