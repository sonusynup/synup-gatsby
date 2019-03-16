import React from 'react'

const WebinarAgenda = ({
  agenda
}) => (
  <div className="agenda_block">
    <h3 className="agenda_title">Agenda</h3>
    <ul className="agenda_list">
      {agenda.map(eachAgenda => <li className="agenda_li">{agenda}</li>)}
    </ul>
  </div>
)

export default WebinarAgenda