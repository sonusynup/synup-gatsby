import React from 'react'

import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Button from '../../../atoms/button';
import isNull from '../../../../helpers/isNull';

// Renders Hero Component
const HeroContinuousBlock = ({
  heroIcon,
  heroTitle,
  heroButtonText,
  heroDescription,
  heroButtonLink,
  heroBackground,
  metricValue,
  metricText,
}) => (
  <div className="hero-continuous-block">
    <section class="section_hero paddingControl">
      <div class="container">
        <div class="heroblock">
          <img class="heroblock_icon" src={heroIcon.file.url} alt="" />
          <h2>{heroTitle}</h2>
          <p dangerouslySetInnerHTML={{ __html: heroDescription.childContentfulRichText.html }} />
          <Link to={''}>
            <Button 
              type="primary"
              text={heroButtonText}    
            />
          </Link>
        </div>
        <div class="heroblockImg">
          <figure><img src={heroBackground.file.url} class="img_fluid" alt="" /></figure>
        </div>
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
  heroBackground: PropTypes.string,
}

export default HeroContinuousBlock