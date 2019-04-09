import React from "react"
import PropTypes from "prop-types"

import Button from "../button"
import TargetLink from "../targetLink"
import isNull from "../../../helpers/isNull"

class Card extends React.Component {
  state = {
    isHovered: false,
  }

  onMouseEnterCard = () => {
    this.setState({
      isHovered: true,
    })
  }

  onMouseLeaveCard = () => {
    this.setState({
      isHovered: false,
    })
  }

  render() {
    const {
      title,
      description,
      bgClass,
      to,
      actionText,
      isHtml,
      bgImage,
      bgHoverImage,
      featureIcon,
    } = this.props
    const image = !this.state.isHovered
      ? bgImage && bgImage.file.url
      : bgHoverImage && bgHoverImage.file.url
    return (
      <div
        className={`card ${bgClass}`}
        onMouseEnter={this.onMouseEnterCard}
        onMouseLeave={this.onMouseLeaveCard}
        style={{ backgroundImage: `url(${image})` }}
      >
        <TargetLink to={to}>
          <div className="card_body">
            {!isNull(featureIcon) && (
              <img className="card_imgTop" src={featureIcon.file.url} alt="" />
            )}
            <h5 className="card_title">{title}</h5>
            {isHtml ? (
              <div
                className="card_text"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            ) : (
              <div className="card_text">{description}</div>
            )}
          </div>
          <div className="card_footer">
            <Button type="borderless" text={actionText} />
          </div>
        </TargetLink>
      </div>
    )
  }
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  bgClass: PropTypes.string,
  to: PropTypes.string,
  actionText: PropTypes.string,
}

export default Card
