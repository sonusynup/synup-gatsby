import React from 'react'
import WebinarLearnings from './WebinarLearnings';
import WebinarAgenda from './WebinarAgenda';

const WebinarBenefits = ({
  agenda,
  learning,
}) => (
  <>
    <section class="section_learn">
      <div class="container">
        <div class="blockWrapper">
          <WebinarLearnings learning={learning} />
          <WebinarAgenda agenda={agenda} />
        </div>
      </div>
    </section>
</>
)

export default WebinarBenefits;