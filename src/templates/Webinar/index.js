import React from 'react'

import Layout from '../../components/layout'
import WebinarDetails from '../../components/modules/webinar/WebinarDetails'
import WebinarRegisterForm from '../../components/modules/webinar/WebinarRegisterForm'

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
      webinarJoinLink,
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
          {/* <WebinarBenefits /> */}
        </div>
      </div>
    </section>
  </Layout>
)

export default Webinar