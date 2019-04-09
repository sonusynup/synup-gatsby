import React from "react"
import PropTypes from "prop-types"

import isNull from "../../../../helpers/isNull"
import TargetLink from "../../../atoms/targetLink"

// Renders partner section
// TODO: Add link to each partner
// TODO: Partner image size
const Partner = ({ partnerList, partnerSectionTitle }) => (
  <section className="section_banner">
    <div className="container">
      <div className="banner_wrapper">
        {!isNull(partnerSectionTitle) ? <h4>{partnerSectionTitle}</h4> : null}
        <div className="banner_logoWrapper">
          {!isNull(partnerList)
            ? partnerList.map((partner, index) => (
                <TargetLink to={partner.partnerUrl} className="banner_logo" key={index}>
                  {!isNull(partner.partnerLogo) ? (
                    <img
                      src={partner.partnerLogo.file.url}
                      className="img_fluid"
                      alt="VideoBanner"
                    />
                  ) : null}
                </TargetLink>
              ))
            : null}
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
