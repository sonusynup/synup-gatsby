import React from 'react'
import Card from '../../../atoms/Card'
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

// Component handling what we do section
const Product = () => (
  <section>
    <div className="container">
      <div className="card_block">
        <h3>What we do</h3>
        <p>Select your business type to get started</p>
      </div>
      <CardList
        listItems={listItems}
      />
    </div>
  </section>
)

export default Product