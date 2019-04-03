import React from "react"
import PropTypes from "prop-types"

import TargetLink from '../targetLink'
import Button from "../button"

// TODO: Make the buttons generic
const ActionableList = ({
  wrapperClass,
  listItems,
  actionType,
  actionText,
  to,
  title,
  subTitle,
  inverted,
}) =>
  !inverted ? (
    <div className={wrapperClass}>
      <h3 className="block_contentWrap">{title}</h3>
      <p className="block_contentText">{subTitle}</p>
      <ul className="list_unstyled">
        {listItems.map(listItem => (
          <li key={listItem}>{listItem}</li>
        ))}
      </ul>
      <TargetLink to={to}>
        <Button type={actionType} text={actionText} />
      </TargetLink>
    </div>
  ) : (
    <div className="leftBlock">
      <h3 className="whiteTitle">{subTitle}</h3>
      <ul className="list_enterprise">
        {listItems.map(listItem => (
          <li className="whiteTitle" key={listItem}>
            {listItem}
          </li>
        ))}
      </ul>
      <Button type="invert-primary" text="GET STARTED" />
      <span className="space" />
      <Button type="invert-secondary" text="LEARN MORE" />
    </div>
  )

ActionableList.propTypes = {
  wrapperClass: PropTypes.string,
  listItems: PropTypes.array,
  actionType: PropTypes.string,
  actionText: PropTypes.string,
  to: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
}

ActionableList.defaultProps = {}

export default ActionableList
