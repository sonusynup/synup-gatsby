import React from 'react'

//TODO: Assign classname to speaker and logo
const WebinarSpeakers = ({
  speakers,
}) => (
  <div className="speakers_wrapper">
    <h5 className="speakers_title">Speakers</h5>
    <div className="speakers_wrapperBlock">
      {
        speakers.speakers.map(speaker => (
            <div className="speakers_block">
              <figure>
                <img src={speaker.speakerPhoto.file.url} className="speakers_img" alt="" />
              </figure>
              <h6 className="speaker_name">{speaker.speakerName}</h6>
              <div className="speaker_details">
                <p className="speaker_position">{speaker.speakerDescription.content[0].content[0].value}</p>
              </div>
              <figure>
                <img src={speaker.speakerLogo.file.url} alt="" width="85px"/>
              </figure>
            </div>
        ))
      }
    </div>
  </div>
)

export default WebinarSpeakers