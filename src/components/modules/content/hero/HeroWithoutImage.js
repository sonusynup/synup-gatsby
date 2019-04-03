import React from "react"
import PropTypes from "prop-types"
import isNull from "../../../../helpers/isNull"

const HeroWithoutImage = ({
  heroIcon,
  heroCaption,
  heroDescription,
  heroTitle,
}) => (
  <section className="section_featureshero">
    <div className="container">
      <div className="heroblock_features">
        <div className="heroblock_innerFeatures">
          {!isNull(heroIcon) ? (
            <img className="heroblock_icon" src={heroIcon.file.url} alt="" />
          ) : null}
          {!isNull(heroCaption) ? (
            <h5 className="card_title">{heroCaption}</h5>
          ) : null}
        </div>
        {!isNull(heroTitle) ? <h2>{heroTitle}</h2> : null}
        {!isNull(heroDescription) ? (
          <p
            dangerouslySetInnerHTML={{
              __html: heroDescription.childContentfulRichText.html,
            }}
          />
        ) : null}
      </div>
    </div>
  </section>
)

HeroWithoutImage.propTypes = {
  heroTitle: PropTypes.string,
  heroIcon: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
  heroCaption: PropTypes.string,
  heroDescription: PropTypes.shape({
    childContentfulRichText: PropTypes.shape({
      html: PropTypes.string,
    }),
  }),
}

HeroWithoutImage.defaultProps = {
  heroTitle: PropTypes.string,
  heroIcon: {
    file: {
      url: "",
    },
  },
  heroCaption: PropTypes.string,
  heroDescription: {
    childContentfulRichText: {
      html: "",
    },
  },
}

export default HeroWithoutImage
