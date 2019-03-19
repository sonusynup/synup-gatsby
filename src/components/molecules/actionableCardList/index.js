import React from 'react'
import ActionableCard from './actionableCard';

const ActionableCardList = ({
  listItems
}) => listItems.map((item, index) => (
  <ActionableCard
    key={index}
    index={index}
    wrapperClass={item.wrapperClass}
    subListItems={item.subListItems}
    actionType={item.actionType}
    actionText={item.actionText}
    to={item.to}
    title={item.title}
    subTitle={item.subTitle}
  />
))

export default ActionableCardList