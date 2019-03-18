import React from 'react'
import WebinarLearnings from './WebinarLearnings';
import WebinarAgenda from './WebinarAgenda';

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