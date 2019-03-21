import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

// Component Handling partner section
const Partner = ({
  partnerList,
  partnerSectionTitle
}) => (
  <section className="section_banner">
    <div className="container">
      <div className="banner_wrapper">
        <h4>{partnerSectionTitle}</h4>
        <div className="banner_logoWrapper">
          {
            // Loop all banner videos
            partnerList.map((partner) => (
              <Link to={''} className="banner_logo">
                <img
                  src={partner.partnerLogo.file.url}
                  className="img_fluid"
                  alt="VideoBanner"
                  style={{ maxWidth: '100px' }}
                />
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  </section>
)

Partner.propTypes = {
  partnerList: PropTypes.array.isRequired,
  partnerSectionTitle: PropTypes.string.isRequired
}

export default Partner