import React from 'react'
import CardList from '../../../molecules/cardList';

const listItems = [
  {
    title: "WIDGETS",
    description: "Having trouble managing location data and reviews at scale?",
    bgClass: "card_iconBg",
    actionText: "LEARN MORE",
  },
  {
    title: "PROMOTIONAL POSTS",
    description: "Having trouble managing location data and reviews at scale?",
    bgClass: "card_iconBg",
    actionText: "LEARN MORE",
  },
  {
    title: "NOTIFICATIONS",
    description: "Having trouble managing location data and reviews at scale?",
    bgClass: "card_iconBg",
    actionText: "LEARN MORE",
  }
]
const generateCardItemFromDescription = (title, description, actionText, isHtml = false, bgClass) => ({
  title,
  description,
  actionText,
  isHtml,
  bgClass,
})

// Component handling what we do section
const Product = ({
  productFeatures,
}) => (
  <section>
    <div className="container">
      <div className="card_block">
        <h3>What we do</h3>
        <p>Select your business type to get started</p>
      </div>
      <CardList
        listItems={productFeatures.map(feature => generateCardItemFromDescription(
            feature.featureTitle, 
            feature.featureDescription.childContentfulRichText.html,
            'LEARN MORE',
            true,
            'card_iconBg'
          ))}
      />
    </div>
  </section>
)

export default Product