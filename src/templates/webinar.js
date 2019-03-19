import React from 'react'

import Layout from '../components/layout'
import WebinarDetails from '../components/modules/webinar/WebinarDetailss'
import WebinarRegisterForm from '../components/modules/webinar/WebinarRegisterForms'
import WebinarBenefits from '../components/modules/webinar/WebinarBenefitss'

// Renders Webinar component
const Webinar = ({
  pathContext: {
    webinarDetails: {
      webinarTitle,
      webinarStatus,
      webinarAgenda,
      webinarDate,
      webinarDescription,
      webinarDuration,
      webinarLearning,
      speakers,
      webinarJoinLink, // What to do with this
    }
  }
}) => (
  <Layout>
    <section className="section_hero">
      <div className="container">
        <div className="blockWrapper">
          <WebinarDetails
            title={webinarTitle}
            date={webinarDate}
            duration={webinarDuration}
            description={webinarDescription}
            speakers={speakers}
            status={webinarStatus}
          />
          <WebinarRegisterForm />
        </div>
      </div>
    </section>
    <WebinarBenefits
      agenda={webinarAgenda}
      learning={webinarLearning}
    />
  </Layout>
)

export default Webinar