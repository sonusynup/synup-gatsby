import React from 'react';
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import Button from '../../../atoms/button';

// Hero component of the home page
const Hero = ({
  heroTitle,
  heroButtonText,
  heroButtonLink,
  heroBackground,
}) => (
  <section className="section_homepage" style={{ backgroundImage: `url(${heroBackground.file.url})` }}>
    <div className="container">
      <div className="heroblock">
        <h2>{heroTitle}</h2>
        <p dangerouslySetInnerHTML={{ __html: heroTitle }}/>
        <Link to={heroButtonLink}>
          <Button type="primary" text={heroButtonText}/>
        </Link>
      </div>
    </div>
  </section>
)

Hero.propTypes = {
  heroTitle: PropTypes.string,
  heroButtonText: PropTypes.string,
  heroButtonLink: PropTypes.string,
  heroBackground: PropTypes.string,
}

export default Hero