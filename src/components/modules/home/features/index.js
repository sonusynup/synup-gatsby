import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../../atoms/button'

// Component handling the features section
const Features = ({
  featureTitle,
  featureUrl,
  featureDescription,
  featureButton,
  featureImage,
}) => (
  <section className="section_network">
    <div className="container">
      <div className="blockWrapper">
        <div className="network_wrapper">
          <h3>{featureTitle}</h3>
          <p
            className="network_text"
            dangerouslySetInnerHTML={{ __html: featureDescription.childContentfulRichText.html }}
          />
          <Button type="primary" text={featureButton} />
        </div>
        <div className="rightBlock">
          <figure>
            <img
              src={featureImage.file.url}
              className="img_fluid"
              alt=""
            />
          </figure>
        </div>
      </div>
    </div>
  </section>
)

Features.propTypes = {
  featureTitle: PropTypes.string.isRequired,
  featureUrl: PropTypes.string.isRequired,
  featureDescription: PropTypes.string.isRequired,
  featureButton: PropTypes.string.isRequired,
  featureImage: PropTypes.string.isRequired,
}

export default Features