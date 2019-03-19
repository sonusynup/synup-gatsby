import React from 'react'
import WebinarLearnings from './WebinarLearningss';
import WebinarAgenda from './WebinarAgendas';

// Renders the Webinar Benefits
const WebinarBenefits = ({
  agenda,
  learning,
}) => (
  <>
    <section className="section_learn">
      <div className="container">
        <div className="blockWrapper">
          <WebinarLearnings learning={learning} />
          <WebinarAgenda agenda={agenda} />
        </div>
      </div>
    </section>
</>
)

export default WebinarBenefits;