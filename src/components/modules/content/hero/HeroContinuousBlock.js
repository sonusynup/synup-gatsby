import React from "react"

import PropTypes from "prop-types"

import Button from "../../../atoms/button"
import TargetLink from "../../../atoms/targetLink"
import isNull from "../../../../helpers/isNull"
import getButtonClass from "../../../../helpers/getButtonClass"

// Renders Hero Continuos block Component
const HeroContinuousBlock = ({
  heroIcon,
  heroTitle,
  heroButtonText,
  heroDescription,
  heroButtonLink,
  heroBackground,
  heroButtonType,
  metricValue,
  metricText,
}) => (
  <div className="hero-continuous-block">
    <section className="section_hero paddingControl">
      <div className="container">
        <div className="heroblock">
          {!isNull(heroIcon) ? (
            <img
              className="heroblock_icon"
              src={heroIcon.file.url}
              alt="hero-block"
            />
          ) : null}
          {!isNull(heroTitle) ? <h2>{heroTitle}</h2> : null}
          {!isNull(heroDescription) ? (
            <p
              dangerouslySetInnerHTML={{
                __html: heroDescription.childContentfulRichText.html,
              }}
            />
          ) : null}
          {!isNull(heroButtonLink) &&
          !isNull(heroButtonType) &&
          !isNull(heroButtonText) ? (
            <TargetLink to={heroButtonLink}>
              <Button
                type={getButtonClass(heroButtonType)}
                text={heroButtonText}
              />
            </TargetLink>
          ) : null}
        </div>
        {!isNull(heroBackground) ? (
          <div className="heroblockImg">
            <figure>
              <img src={heroBackground.file.url} className="img_fluid" alt="" />
            </figure>
          </div>
        ) : null}
      </div>
    </section>
    {!isNull(metricValue) && !isNull(metricText) && (
      <div className="container">
        <div className="labelBlock bgBlue">
          <h3 className="labelTitle">{metricValue}</h3>
          <p className="labelDescription">{metricText}</p>
        </div>
      </div>
    )}
  </div>
)

HeroContinuousBlock.propTypes = {
  heroTitle: PropTypes.string,
  heroButtonText: PropTypes.string,
  heroButtonLink: PropTypes.string,
  heroBackground: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
  heroButtonType: PropTypes.string,
  heroDescription: PropTypes.shape({
    childContentfulRichText: PropTypes.shape({
      html: PropTypes.string,
    }),
  }),
  metricValue: PropTypes.string,
  metricText: PropTypes.string,
}

HeroContinuousBlock.defaultProps = {
  heroTitle: null,
  heroButtonText: null,
  heroButtonLink: null,
  heroBackground: {
    file: {
      url: "",
    },
  },
  heroButtonType: null,
  heroDescription: {
    childContentfulRichText: {
      html: "",
    },
  },
  metricValue: null,
  metricText: null,
}

export default HeroContinuousBlock
