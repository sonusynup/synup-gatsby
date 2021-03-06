import React from "react"

import StatisticsCard from "./statisticsCard"

// Renders the case study header
const CaseStudyHeader = ({ title, stats }) => (
  <section className="section_casestudy">
    <div className="container">
      <div className="casestudy_block">
        <h3>
          <span className="secondary_text">{title.casestudyTitle}</span>
        </h3>
        <ul className="casecard_wrapper">
          {stats
            ? stats.map(stat => (
                <StatisticsCard
                  value={stat}
                  description="increase in website visits"
                />
              ))
            : null}
        </ul>
      </div>
    </div>
  </section>
)

export default CaseStudyHeader
