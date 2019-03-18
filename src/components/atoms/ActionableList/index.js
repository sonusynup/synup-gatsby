import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Button from '../Buttons';

const ActionableList = ({
  wrapperClass,
  listItems,
  actionType,
  actionText,
  to,
  title,
  subTitle,
}) => (
  <div className={wrapperClass}>
    <h3 className="block_contentWrap">{title}</h3>
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