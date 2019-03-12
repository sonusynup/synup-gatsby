import React from 'react'
import PropTypes from 'prop-types'
import CardBgTargetImage from '../../images/svgComponents/CardBgTargetImage';

const Card = ({
  title,
  description
}) => (
  <div className="card card_iconBg">
    <a href="#">
      <div className="card_body">
        <h5 className="card_title">{title}</h5>
        <p className="card_text">{description}</p>
      </div>
      <div className="card_footer">
        <span className="btn_arrow linkText linkText_span">
          LEARN MORE
          <CardBgTargetImage />
        </span>
      </div>
    </a>
  </div>
);

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
