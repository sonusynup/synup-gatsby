import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Button from '../Buttons';

// TODO: Make the buttons generic
const ActionableList = ({
  wrapperClass,
  listItems,
  actionType,
  actionText,
  to,
  title,
  subTitle,
  inverted
}) => !inverted ? (
  <div className={wrapperClass}>
    <h3>{title}</h3>
    <p className="block_contentText">{subTitle}</p>
    <ul className="list_unstyled">
      {
        listItems.map((listItem) => (
          <li key={listItem}>{listItem}</li>
        ))
      }
    </ul>
    <Link to={to}>
      <Button
        type={actionType}
        text={actionText}
      />
    </Link>
  </div>
) : (
  <div class="leftBlock">
    <h3 class="whiteTitle">{subTitle}</h3>
    <ul className="list_enterprise">
      {
        listItems.map((listItem) => (
          <li className="whiteTitle" key={listItem}>{listItem}</li>
        ))
      }
    </ul>
    <Button type="invert-primary" text="GET STARTED" />
    <span class="space"></span>
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

ActionableList.defaultProps = {

}

export default ActionableList