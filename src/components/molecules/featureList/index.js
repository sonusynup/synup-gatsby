import React from 'react'
import Feature from './feature';

const Features = ({
  listItems
}) => listItems.map((item, index) => (
  <Feature
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

export default Features