import React from 'react'
import PropTypes from 'prop-types'

//TODO: Refactor this case study section
const CaseStudyContent = ({
  partner: {
    partnerTestimonial,
    partnerName,
    partnerDescription,
    partnerPhoto,
    partnerLogo,
    partnerIndustry,
    partnerGoal,
  },
  description,
}) => {
  return (
    <section className="section_casestudy_content">
      <div className="container">
        <div className="blockWrapper">
          <div className="testimonialWrapper-customer">
            <div className="testimonialAuthorShadeimg">
              <div className="overlay_content">
                <div className="testimonial_overlay green-overlay"></div>
                <figure>
                  <img src={partnerPhoto.file.url} className="img_fluid" alt="" />
                </figure>
              </div>
            </div>
            <p className="testimonialContentOutline">
              {partnerTestimonial.content[0].content[0].value}
            </p>
            <div className="testimonialAuthor">
              <div className="testimonialAuthor_details">
                <h6 className="testimonialAuthor_name">{partnerName}</h6>
                <p className="testimonialAuthor_position">{partnerDescription.content[0].content[0].value}</p>
              </div>
            </div>
          </div>
          <div className="testimonial_wrapperCard">
            <div className="va_list">
              <div className="business-card">
                <img className="business-card-logo" src={partnerLogo !== null && partnerLogo.file.url} alt="" />
                <p className="business-card_title"> <b>Industry:</b> {partnerIndustry}y</p>
                <p className="business-card-description"> <b>Business Goal:</b> 
                  {partnerGoal}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="casestudy_set" dangerouslySetInnerHTML={{ __html: description.childContentfulRichText.html }} />
      </div>
    </section>
  )
}

CaseStudyContent.propTypes = {
  partner: PropTypes.shape({
    partnerPhoto: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string
      })
    }),
    partnerLogo: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string
      })
    })
  })
}

CaseStudyContent.defaultProps = {
  partner: {
    partnerLogo: {
      file: {
        url: ''
      }
    },
    partnerPhoto: {
      file: {
        url: ''
      }
    },
  }
}
export default CaseStudyContent