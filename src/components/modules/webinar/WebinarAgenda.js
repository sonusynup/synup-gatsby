import React from 'react'

const WebinarAgenda = ({
  agenda
}) => (
  <div class="agenda_block">
    <h3 class="agenda_title">Agenda</h3>
    <ul class="agenda_list">
      {agenda.map(eachAgenda => <li class="agenda_li">{agenda}</li>)}
    </ul>
  </div>
)

export default WebinarAgenda