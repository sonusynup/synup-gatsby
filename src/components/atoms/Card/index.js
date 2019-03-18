import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Button from '../Buttons'

const Card = ({
  title,
  description,
  bgClass,
  to,
  actionText,
}) => (
  <div className={`card ${bgClass}`}>
    <Link to={to}>
      <div className="card_body">
        <h5 className="card_title">{title}</h5>
        <p className="card_text">{description}</p>
      </div>
      <div className="card_footer">
        <Button
          type="borderless"
          text={actionText}
        />
      </div>
    </Link>
  </div>
);

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  bgClass: PropTypes.string,
  to: PropTypes.string,
  actionText: PropTypes.string,
};

export default Card;
