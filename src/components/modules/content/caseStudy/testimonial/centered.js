import React from "react"
import PropTypes from 'prop-types'

import isNull from '../../../../../helpers/isNull'
import Button from "../../../../atoms/button"
import commaImg from '../../../../images/svg/comma.svg'
import TargetLink from "../../../../atoms/targetLink"

const CenteredTestimonial = ({
  partnerLogo,
  partnerSuccess,
  partnerTestimonial,
  partnerName,
  partnerDescription,
}) => (
  <div className="testimonialWrapper_comma">
    {
      !isNull(partnerLogo) ? (
        <TargetLink to="">
          <img
            src={partnerLogo.file.url}
            className="img_fluid"
            alt=""
          />
        </TargetLink>
      ) : null
    }
    <h3 className="testimonialTitle">{partnerSuccess}</h3>
      {
        !isNull(partnerTestimonial) ? (
          <div
            className="testimonialContent"
            dangerouslySetInnerHTML={{ __html: partnerTestimonial.childContentfulRichText.html }}
          />
        ) : null
      }
    <div className="testimonialAuthor_single">
      <figure>
        <img src={commaImg} className="" alt="comma" />
      </figure>
      <div className="testimonialAuthor_details">
        {!isNull(partnerName) ? <h6 className="testimonialAuthor_name">{partnerName}</h6> : null}
        {!isNull(partnerDescription) ? (
          <div
            className="testimonialAuthor_position"
            dangerouslySetInnerHTML={{ __html: partnerDescription.childContentfulRichText.html }}
          />
          ) : null
        }

      </div>
    </div>
    <Button type="secondary" text="SEE CASE STUDY" />
  </div>
)

CenteredTestimonial.propTypes = {
  partnerLogo: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string,
    })
  }),
  partnerTestimonial: PropTypes.shape({
    childContentfulRichText: PropTypes.shape({
      html: PropTypes.string,
    })
  }),
  partnerName: PropTypes.string,
  partnerDescription: PropTypes.shape({
    childContentfulRichText: PropTypes.shape({
      html: PropTypes.string,
    })
  }),
}

CenteredTestimonial.defaultProps = {
  partnerLogo: {
    file: {
      url: '',
    },
  },
  partnerTestimonial: {
    childContentfulRichText: {
      html: '',
    }
  },
  partnerName: '',
  partnerDescription: {
    childContentfulRichText: {
      html: '',
    }
  },
}

export default CenteredTestimonial
