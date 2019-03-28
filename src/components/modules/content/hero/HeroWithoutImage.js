import React from 'react'
import PropTypes from 'prop-types'
import isNull from '../../../../helpers/isNull';

const HeroWithoutImage = ({
  heroIcon,
  heroCaption,
  heroDescription,
  heroTitle
}) => (
  <section class="section_featureshero">
    <div class="container">
      <div class="heroblock_features">
        <div class="heroblock_innerFeatures">
          {
            !isNull(heroIcon) ? (
              <img class="heroblock_icon" src={heroIcon.file.url} alt="" />
            ) : null
          }
          {!isNull(heroCaption) ? <h5 class="card_title">{heroCaption}</h5> : null}
        </div>
        {!isNull(heroTitle) ? <h2>{heroTitle}</h2> : null}
        {!isNull(heroDescription) ? <p dangerouslySetInnerHTML={{ __html: heroDescription.childContentfulRichText.html }}/> : null}
      </div>
    </div>
  </section>
)

HeroWithoutImage.propTypes = {
  heroTitle: PropTypes.string,
  heroIcon: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string,
    })
  }),
  heroCaption: PropTypes.string,
  heroDescription: PropTypes.shape({
    childContentfulRichText: PropTypes.shape({
      html: PropTypes.string,
    })
  }),
}

HeroWithoutImage.defaultProps = {
  heroTitle: PropTypes.string,
  heroIcon:{
    file: {
      url: '',
    }
  },
  heroCaption: PropTypes.string,
  heroDescription: {
    childContentfulRichText: {
      html: '',
    }
  }
}


export default HeroWithoutImage