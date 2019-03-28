import React from "react"

import PropTypes from 'prop-types'

const InlineTestimonial = ({
  partnerPhoto,
  partnerTestimonial,
  partnerName,
  partnerDescription,
  children,
}) => (
  <div className="blockWrapper">
    <div class="testimonialWrapper">
      <p
        class="testimonialContent"
        dangerouslySetInnerHTML={{ __html: partnerTestimonial.childContentfulRichText.html }}
      />
      <div class="testimonialAuthor">
        <div class="testimonialAuthor_img">
          <figure>
            <img src={partnerPhoto.file.url} class="avartar-img" alt="" />
          </figure>
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
      url: PropTypes.string,
    },
  },
  partnerTestimonial: {
    childContentfulRichText: {
      html: PropTypes.string,
    }
  },
  partnerName: PropTypes.string,
  partnerDescription: {
    childContentfulRichText: {
      html: PropTypes.string,
    }
  },
  children: PropTypes.node,
}

export default InlineTestimonial
