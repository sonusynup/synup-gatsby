import React from 'react'

//TODO: Assign classname to speaker and logo
const WebinarSpeakers = ({
  speakers,
}) => (
  <div className="speakers_wrapper">
    <h5 className="speakers_title">Speakers</h5>
    <div className="speakers_wrapperBlock">
      <div className="speakers_block">
        <figure>
          <img src={speakers.speakerPhoto.file.url} alt="" />
        </figure>
        <h6 className="speaker_name">{speakers.speakerName}</h6>
        <div className="speaker_details">
          <p className="speaker_position">{speakers.speakerDescription.content[0].content[0].value}</p>
        </div>
        <figure>
          <img src={speakers.speakerLogo.file.url} alt="" width="85px"/>
        </figure>
      </div>
    </div>
  </div>
)

export default WebinarSpeakers