import React from "react"
import { Link } from "gatsby"
import PropTypes from 'prop-types'
import isNull from '../../../../../helpers/isNull'
import Button from "../../../../atoms/button"
import commaImg from '../../../../images/svg/comma.svg'

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
        <Link to="">
          <img
            src={partnerLogo.file.url}
            className="img_fluid"
            alt=""
          />
        </Link>
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
          <p
            className="testimonialAuthor_position"
            dangerouslySetInnerHTML={{ __html: partnerDescription.childContentfulRichText.html }}
          />
        ) : null}
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
