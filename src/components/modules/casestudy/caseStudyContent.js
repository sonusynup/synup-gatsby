import React from 'react'
import PropTypes from 'prop-types'

import CaseStudy from '../../molecules/caseStudy'

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
        <CaseStudy
          isAdvantage
          partnerImage={partnerPhoto.file.url}
          partnerTestimonial={partnerTestimonial.content[0].content[0].value}
          partnerName={partnerName}
          partnerPosition={partnerDescription.content[0].content[0].value}
          advantageImage={partnerLogo}
          advantageIndustry={partnerIndustry}
          advantageGoal={partnerGoal}
        />
        {
          description.map((item) => (
            <ul class="casestudy_set">
              <li>
                <h5>{item.title}</h5>
                <span dangerouslySetInnerHTML={{ __html: item.description.childContentfulRichText.html }} />
              </li>
            </ul>
          ))
        }
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