import React from 'react'
import ActionableCard from './ActionableCard';

const ActionableCardList = ({
  listItems
}) => listItems.map((item, index) => (
  <ActionableCard
    key={index}
    index={index}
    wrapperClass={item.wrapperClass}
    listItems={item.listItems}
    actionType={item.actionType}
    actionText={item.actionText}
    to={item.to}
    title={item.title}
    subTitle={item.subTitle}
  />
))

export default ActionableCardList