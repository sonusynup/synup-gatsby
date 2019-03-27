import React from 'react'

import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Button from '../../../atoms/button';

// Renders Hero Component
const HeroDefault = ({
  heroTitle,
  heroButtonText,
  heroButtonLink,
  heroBackground,
  heroDescription,
}) => (
  <section className="section_homepage" style={{ backgroundImage: `url(${heroBackground.file.url})` }}>
    <div className="container">
      <div className="heroblock">
        <h2>{heroTitle}</h2>
        <p dangerouslySetInnerHTML={{ __html: heroDescription.childContentfulRichText.html }}/>
        <Link to={heroButtonLink}>
          <Button type="primary" text={heroButtonText}/>
        </Link>
      </div>
    </div>
  </section>
)

HeroDefault.propTypes = {
  heroTitle: PropTypes.string,
  heroButtonText: PropTypes.string,
  heroButtonLink: PropTypes.string,
  heroBackground: PropTypes.string,
}

export default HeroDefault