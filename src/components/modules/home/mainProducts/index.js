import React from 'react'

import TransparentCard from '../../../atoms/CardTransparent'

// Main products section of the home page
const MainProducts = () => (
  <section className="section_product">
    <div className="container">
      <div className="product_wrapper">
        <div className="product_description">
          <h4>
            Gain complete control over your business’ local marketing.
            Manage your online profiles, interactions, insights, and posts. 
            <span className="primary_text">
              All from one dashboard.
            </span>
          </h4>
        </div>  
        <div className="popCard_wrapper">
            <TransparentCard
              title="ANALYTICS"
              description="Understand your customers better with profile, ranking, and review insights."
              action="SEE ALL FEATURES"
            />
            <TransparentCard
              title="ANALYTICS"
              description="Understand your customers better with profile, ranking, and review insights."
              action="SEE ALL FEATURES"
            />
            <TransparentCard
              title="ANALYTICS"
              description="Understand your customers better with profile, ranking, and review insights."
              action="SEE ALL FEATURES"
            />
            <TransparentCard
              title="ANALYTICS"
              description="Understand your customers better with profile, ranking, and review insights."
              action="SEE ALL FEATURES"
            />
        </div>
      </div>
    </div>
  </section>
)

export default MainProducts