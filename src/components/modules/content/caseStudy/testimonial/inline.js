import React from "react"

import PropTypes from 'prop-types'
import isNull from '../../../../../helpers/isNull'

const InlineTestimonial = ({
  partnerPhoto,
  partnerTestimonial,
  partnerName,
  partnerDescription,
  children,
}) => (
  <div className="blockWrapper">
    <div className="testimonialWrapper">
      {
        !isNull(partnerTestimonial) ? (
          <div
            className="testimonialContent"
            dangerouslySetInnerHTML={{ __html: partnerTestimonial.childContentfulRichText.html }}
          />
        ) : null
      }
      <div className="testimonialAuthor">
        <div className="testimonialAuthor_img">
          {
            !isNull(partnerTestimonial) ? (
              <figure>
                <img src={partnerPhoto.file.url} className="avartar-img" alt="" />
              </figure>
            ) : null
          }
        </div>
        <div className="testimonialAuthor_details">
          {!isNull(partnerName) ? <h6 className="testimonialAuthor_name">{partnerName}</h6> : null}
          {
            !isNull(partnerDescription) ? (
              <p
                className="testimonialAuthor_position"
                dangerouslySetInnerHTML={{ __html: partnerDescription.childContentfulRichText.html }}
              />
            ) : null
          }
        </div>
      </div>
    </div>
    <div className="testimonial_wrapperCard">{children}</div>
  </div>
)

InlineTestimonial.propTypes = {
  partnerPhoto: PropTypes.shape({
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
  children: PropTypes.node,
}

InlineTestimonial.defaultProps = {
  partnerPhoto: {
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
  children: PropTypes.node,
}

export default InlineTestimonial
