import React from 'react'

const CaseStudyContent = () => (
  <section className="section_casestudy_content">
    <div className="container">
      <div className="blockWrapper">
        <div className="testimonialWrapper-customer">
          <div className="testimonialAuthorShadeimg">
            <div className="overlay_content">
              <div className="testimonial_overlay green-overlay"></div>
              <figure>
                <img src="images/svg/testi-icon1.svg" className="img_fluid" alt="" />
              </figure>
            </div>
          </div>
          <p className="testimonialContentOutline">"I was using Yext and switched to Synup.
              The services and
              features offered by Synup are more convenient and easy to use
              and the support team with Synup helped me set up all locations with ease. Their system has
              more features in comparison
              to other competitors and their cost is much cheaper."
          </p>
          <div className="testimonialAuthor">
            <div className="testimonialAuthor_details">
              <h6 className="testimonialAuthor_name">Ziad Rawashdeh</h6>
              <p className="testimonialAuthor_position">CEO, RAWA Law Group APC &amp; SmartCPA</p>
            </div>
          </div>
        </div>
        <div className="testimonial_wrapperCard">
          <div className="va_list">
            <div className="business-card">
              <img className="business-card-logo" src="images/svg/businesscard-icon.svg" alt="" />
              <p className="business-card_title"> <b>Industry:</b> Marketing agency</p>
              <p className="business-card-description"> <b>Business Goal:</b> Consistently update
                  information for clients
                  across the web</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default CaseStudyContent