import React from 'react'

import StatisticsCard from './StatisticsCard'

const CaseStudyHeader = ({
  title,
  stats,
  partner
}) => (
  <section className="section_casestudy">
    <div className="container">
      <div className="casestudy_block">
        <h3>
          <span className="secondary_text">
            {title.casestudyTitle}
          </span>
        </h3>
        <ul className="casecard_wrapper">
          <StatisticsCard
            value={stats[0]}
            description="increase in website visits"
          />
          <StatisticsCard
            value={stats[1]}
            description="increase in website visits"
          />
          <StatisticsCard
            value={stats[2]}
            description="increase in website visits"
          />
        </ul>
      </div>
    </div>
  </section>
)

export default CaseStudyHeader
