import React from 'react'

import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Button from '../../../atoms/button';

// Renders Hero Component
const HeroContinuousBlock = ({
  heroIcon,
  heroTitle,
  heroButtonText,
  heroDescription,
  heroButtonLink,
  heroBackground,
}) => (
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
)

HeroContinuousBlock.propTypes = {
  heroTitle: PropTypes.string,
  heroButtonText: PropTypes.string,
  heroButtonLink: PropTypes.string,
  heroBackground: PropTypes.string,
}

export default HeroContinuousBlock