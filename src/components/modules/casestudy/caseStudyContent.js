import React from "react"
import PropTypes from "prop-types"

import Testimonial from "../../molecules/caseStudy/testimonial"
import isNull from "../../../helpers/isNull"

const CaseStudyContent = props => {
  const partner = !isNull(props.partner) ? props.partner : {}
  const description = !isNull(props.description) ? props.description : ""
  const {
    partnerTestimonial,
    partnerName,
    partnerDescription,
    partnerPhoto,
    partnerLogo,
    partnerGoal,
  } = partner

  return (
    <section className="section_casestudy_content">
      <div className="container">
        {!isNull(partnerPhoto) && !isNull(partnerDescription) ? (
          <Testimonial
            type="default"
            partnerImage={partnerPhoto.file.url}
            partnerTestimonial={partnerTestimonial.content[0].content[0].value}
            partnerName={partnerName}
            partnerPosition={partnerDescription.content[0].content[0].value}
            partnerLogo={partnerLogo}
            partnerSuccess={partnerGoal}
          />
        ) : null}
        {description
          ? description.map(item => (
              <ul className="casestudy_set">
                <li>
                  <h5>{item.title}</h5>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item.description.childContentfulRichText.html,
                    }}
                  />
                </li>
              </ul>
            ))
          : null}
      </div>
    </section>
  )
}

CaseStudyContent.propTypes = {
  partner: PropTypes.shape({
    partnerPhoto: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
    partnerLogo: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }),
}

CaseStudyContent.defaultProps = {
  partner: {
    partnerLogo: {
      file: {
        url: "",
      },
    },
    partnerPhoto: {
      file: {
        url: "",
      },
    },
  },
}
export default CaseStudyContent
