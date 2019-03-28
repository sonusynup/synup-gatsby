import React from "react"
import WebinarSpeakers from "./webinarSpeakers"

// Todo bring this to the right format
// January 15, 2019 / 9:00AM EST</pre>
const parseTime = date => {
  return date
}

// Renders the webinar details
const WebinarDetails = ({
  title,
  date,
  duration,
  description,
  speakers,
  status,
}) => (
  <div className="webinar_wrapper">
    <div className="webinar_wrapperHead">
      <span className="badge badge_secondary">{status} Webinars</span>
      <h3>{title}</h3>
      <div className="date_wrapper webinar_description">
        <pre>{date}</pre>
        <pre>Duration: {duration} mins</pre>
      </div>
      <p className="webinar_description">{description.webinarDescription}</p>
    </div>
    <WebinarSpeakers speakers={speakers} />
  </div>
)

export default WebinarDetails
