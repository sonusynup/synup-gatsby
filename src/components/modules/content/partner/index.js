import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import isNull from '../../../../helpers/isNull'

// Renders partner section
// TODO: Add link to each partner
// TODO: Partner image size
const Partner = ({
  partnerList,
  partnerSectionTitle,
}) => (
  <section className="section_banner">
    <div className="container">
      <div className="banner_wrapper">
        {!isNull(partnerSectionTitle) ? <h4>{partnerSectionTitle}</h4> : null}
        <div className="banner_logoWrapper">
          {
            (!isNull(partnerList)) ? (
              partnerList.map(partner => (
                <Link to={partner.partnerUrl} className="banner_logo">
                  {
                    !isNull(partner.partnerLogo) ? (
                      <img
                        src={partner.partnerLogo.file.url}
                        className="img_fluid"
                        alt="VideoBanner"
                      />
                    ) : null
                  }
                </Link>
              ))
            ) : null
          }
        </div>
      </div>
    </div>
  </section>
)

Partner.propTypes = {
  partnerList: PropTypes.array.isRequired,
  partnerSectionTitle: PropTypes.string.isRequired,
}

export default Partner
