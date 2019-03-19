import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

// Component Handling partner section
const Partner = ({
  videos,
}) => (
  <section className="section_banner">
    <div className="container">
      <div className="banner_wrapper">
        <h4>
          We power location intelligence for over
            <span className="primary_text"> 150,000 </span>
            businesses
        </h4>
        <div className="banner_logoWrapper">
          {
            // Loop all banner videos
            videos.map((video) => (
              <Link to={''} className="banner_logo">
                <img
                  src="images/svg/v-icon.svg"
                  className="img_fluid"
                  alt="VideoBanner"
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
  videos: PropTypes.array,
}

Partner.defaultProps = {
  videos: ['vimeo', 'vimeo', 'vimeo']
}

export default Partner