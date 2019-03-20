import React from 'react'

import Card from '../atoms/card'

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
          isHtml={list.isHtml}
        />
      ))
    }
  </div>
)

export default CardList