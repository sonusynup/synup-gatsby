import React from "react"

import PropTypes from 'prop-types'
import isNull from '../../../../../helpers/isNull'

const DefaultTestimonial = ({
  partnerPhoto,
  partnerTestimonial,
  partnerName,
  partnerDescription,
  children,
}) => (
  <div className="blockWrapper">
    <div className="testimonialWrapper-customer">
      <div className="testimonialAuthorShadeimg">
        <div className="overlay_content">
          <div className="testimonial_overlay green-overlay" />
          <figure>
            {
              !isNull(partnerPhoto) ? (
                <img
                  src={partnerPhoto.file.url}
                  className="img_fluid"
                  alt=""
                />
              ) : null
            }
          </figure>
        </div>
      </div>
      {
        !isNull(partnerTestimonial) ? (
          <div
            className="testimonialContentOutline"
            dangerouslySetInnerHTML={{ __html: partnerTestimonial.childContentfulRichText.html }}
          />
        ) : null
      }
      <div className="testimonialAuthor">
        <div className="testimonialAuthor_details">
          {!isNull(partnerName) ? <h6 className="testimonialAuthor_name">{partnerName}</h6> : null}
          {!isNull(partnerDescription) ? (
            <p
              className="testimonialAuthor_position"
              dangerouslySetInnerHTML={{ __html: partnerDescription.childContentfulRichText.html }}
            />
            ) : null
          }
        </div>
      </div>
    </div>
    {children}
  </div>
)

DefaultTestimonial.propTypes = {
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

DefaultTestimonial.defaultProps = {
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

}

export default DefaultTestimonial
