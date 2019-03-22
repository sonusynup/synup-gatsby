import React from 'react'
import CardList from '../../../molecules/cardList';

import generateCardItem from '../../../../helpers/generateCardItem'

// Component handling what we do section
const ProductSectionWithTitle = ({
  productFeatures,
}) => (
  <section>
    <div className="container">
      <div className="card_block">
        <h3>What we do</h3>
        <p>Select your business type to get started</p>
      </div>
      <CardList
        listItems={productFeatures.map(feature => generateCardItem(
            feature.featureTitle, 
            feature.featureDescription.childContentfulRichText.html,
            'LEARN MORE',
            true,
            feature.featureBackgroundImage,
            feature.featureBackgroundHoverImage,
            feature.featureIcon,
            'card_iconBg'
          ))}
      />
    </div>
  </section>
)

export default ProductSectionWithTitle