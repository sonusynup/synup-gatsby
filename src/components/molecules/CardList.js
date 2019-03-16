import React from 'react'

import Card from '../atoms/Card'

const CardList = ({
  listItems
}) => (
  <div className="card_deck">
    {
      listItems.map(list => (
        <Card
          title={list.title}
          description={list.description}
          bgClass={list.bgClass}
          actionText={list.actionText}
        />
      ))
    }
  </div>
)

export default CardList