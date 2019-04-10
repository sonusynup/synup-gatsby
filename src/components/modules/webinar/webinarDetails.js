import React from "react"
import WebinarSpeakers from "./webinarSpeakers"

// Todo bring this to the right format
// January 15, 2019 / 9:00AM EST</pre>
const parseTime = time => {
  const date = new Date(time);
  const year = date.getFullYear();
  let month = date.getMonth();
  let dt = date.getDate();
  if (dt < 10) {
    dt = '0' + dt;
  }
  if (month < 10) {
    month = '0' + month;
  }
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return `${months[month-'0']} ${dt} / ${time.split('T')[1]} EST`;
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
        <pre>{parseTime(date)}</pre>
        <pre>Duration: {duration} mins</pre>
      </div>
      <p className="webinar_description">{description.webinarDescription}</p>
    </div>
    <WebinarSpeakers speakers={speakers} />
  </div>
)

export default WebinarDetails
