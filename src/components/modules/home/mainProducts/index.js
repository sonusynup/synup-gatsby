import React from 'react'

import TransparentCard from '../../../atoms/cardTransparent'

// Main products section of the home page
const MainProducts = ({
  productSectionDescription,
  productFeatures,

}) => (
  <section className="section_product">
    <div className="container">
      <div className="product_wrapper">
        <div
          className="product_description"
          dangerouslySetInnerHTML={{ __html: productSectionDescription.childContentfulRichText.html }}
        />
        <div className="popCard_wrapper">
          {
            productFeatures.map(feature => (
              <TransparentCard
                title={feature.featureTitle}
                description={feature.featureDescription}
                image={feature.featureIcon.file.url}
                isDescriptionRichText
                action="SEE ALL FEATURES"
              />
            ))
          }
        </div>
      </div>
    </div>
  </section>
)

export default MainProducts