import React from 'react'
import Card from '../../../atoms/Card'

const Product = () => (
  <section>
    <div className="container">
      <div className="card_block">
        <h3>What we do</h3>
        <p>Select your business type to get started</p>
      </div>
      <div className="card_deck">
        <Card
          title="WIDGETS"
          description="Having trouble managing location data and reviews at scale?"
        />
        <Card
          title="PROMOTIONAL POSTS"
          description="Having trouble managing location data and reviews at scale?"
        />
        <Card
          title="NOTIFICATIONS"
          description="Having trouble managing location data and reviews at scale?"
        />
      </div>
    </div>
  </section>
)

export default Product