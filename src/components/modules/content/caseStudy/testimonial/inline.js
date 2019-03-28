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
    <div class="testimonialWrapper">
      {
        !isNull(partnerTestimonial) ? (
          <div
            className="testimonialContent"
            dangerouslySetInnerHTML={{ __html: partnerTestimonial.childContentfulRichText.html }}
          />
        ) : null
      }
      <div class="testimonialAuthor">
        <div class="testimonialAuthor_img">
          {
            !isNull(partnerTestimonial) ? (
              <figure>
                <img src={partnerPhoto.file.url} class="avartar-img" alt="" />
              </figure>
            ) : null
          }
        </div>
        <div class="testimonialAuthor_details">
          <h6 class="testimonialAuthor_name">{partnerName}</h6>
          <p
            class="testimonialAuthor_position"
            dangerouslySetInnerHTML={{ __html: partnerDescription.childContentfulRichText.html }}
          />
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
