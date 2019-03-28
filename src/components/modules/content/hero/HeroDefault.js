import React from 'react'

import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Button from '../../../atoms/button';
import isNull from '../../../../helpers/isNull';

// Renders de
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
        {heroTitle ? <h2>{heroTitle}</h2> : null}
        {
          heroDescription ? (
            <p dangerouslySetInnerHTML={{ __html: heroDescription.childContentfulRichText.html }} />
          ) : null
        }
        {
          (!isNull(heroButtonText) && !isNull(heroButtonLink)) ? (
            <Link to={heroButtonLink}>
              <Button type="primary" text={heroButtonText}/>
            </Link>
          ) : null
        }
      </div>
    </div>
  </section>
)

HeroDefault.propTypes = {
  heroTitle: PropTypes.string,
  heroButtonText: PropTypes.string,
  heroButtonLink: PropTypes.string,
  heroBackground: PropTypes.string,
  heroBackground: PropTypes.string,
}

HeroDefault.defaultProps = {
  heroTitle: null,
  heroButtonText: null,
  heroButtonLink: null,
  heroBackground: null,
  heroBackground: null,
}

export default HeroDefault