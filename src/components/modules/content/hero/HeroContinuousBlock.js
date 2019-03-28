import React from 'react'

import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Button from '../../../atoms/button';
import isNull from '../../../../helpers/isNull';
import getButtonClass from '../../../../helpers/getButtonClass';

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
    <section class="section_hero paddingControl">
      <div class="container">
        <div class="heroblock">
          {!isNull(heroIcon) ? <img class="heroblock_icon" src={heroIcon.file.url} alt="hero-block" /> : null}
          {!isNull(heroTitle) ? <h2>{heroTitle}</h2> : null}
          {!isNull(heroDescription) ? <p dangerouslySetInnerHTML={{ __html: heroDescription.childContentfulRichText.html }} /> : null}
          {
            (!isNull(heroButtonLink) && !isNull(heroButtonType) && !isNull(heroButtonText)) ? (
              <Link to={heroButtonLink}>
                <Button 
                  type={getButtonClass(heroButtonType)}
                  text={heroButtonText}    
                />
              </Link>
            ) : null
          }
        </div>
        {
          !isNull(heroBackground) ? (
            <div class="heroblockImg">
              <figure><img src={heroBackground.file.url} class="img_fluid" alt="" /></figure>
            </div>
          ) : null
        }
      </div>
    </section>
    {
      (!isNull(metricValue) && !isNull(metricText)) && (
        <div class="container">
          <div class="labelBlock bgBlue">
            <h3 class="labelTitle">{metricValue}</h3>
            <p class="labelDescription">{metricText}</p>
          </div>
        </div>
      )
    }
  </div>
)

HeroContinuousBlock.propTypes = {
  heroTitle: PropTypes.string,
  heroButtonText: PropTypes.string,
  heroButtonLink: PropTypes.string,
  heroBackground: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string,
    })
  }),
  heroButtonType: PropTypes.string,
  heroDescription: PropTypes.shape({
    childContentfulRichText: PropTypes.shape({
      html: PropTypes.string,
    })
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
      url: '',
    }
  },
  heroButtonType: null,
  heroDescription: {
    childContentfulRichText: {
      html: ''
    }
  },
  metricValue: null,
  metricText: null,
}

export default HeroContinuousBlock