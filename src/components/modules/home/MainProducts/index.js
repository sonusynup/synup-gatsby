import React from 'react'

import ProductCard from './ProductCard'
import CardGroup from '../../../images/png/cardgroup.png'

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
          <ProductCard
            title="ANALYTICS"
            description="Understand your customers better with profile, ranking, and review insights."
            action="SEE ALL FEATURES"
          />
          <ProductCard
            title="ANALYTICS"
            description="Understand your customers better with profile, ranking, and review insights."
            action="SEE ALL FEATURES"
          />
        </div>
      </div>
      <div className="product_wrapper">
        <div className="product_description">
          <figure className="floatingCard_img">
            <img src={CardGroup} className="img_fluid" alt="" />
          </figure>
        </div>  
        <div className="popCard_wrapper">
          <ProductCard
            title="ANALYTICS"
            description="Understand your customers better with profile, ranking, and review insights."
            action="SEE ALL FEATURES"
          />
          <ProductCard
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