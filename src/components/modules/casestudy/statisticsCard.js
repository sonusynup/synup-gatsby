import React from "react"

// A simple statistic card component
const StatisticsCard = ({ value, description }) => (
  <li className="casecard">
    <h4 className="casecard_title">{value}</h4>
    <p className="casecard_description">{description}</p>
  </li>
)

export default StatisticsCard
