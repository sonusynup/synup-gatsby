import React from "react"

import Card from "../atoms/card"

const CardList = ({ listItems }) => (
  <div className="card_deck">
    {listItems.map((list, index) => (
      <Card
        key={index}
        title={list.title}
        description={list.description}
        bgImage={list.bgImage}
        bgHoverImage={list.bgHoverImage}
        featureIcon={list.featureIcon}
        bgClass={list.bgClass}
        actionText={list.actionText}
        isHtml={list.isHtml}
      />
    ))}
  </div>
)

export default CardList
