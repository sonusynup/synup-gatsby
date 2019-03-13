import React from 'react'

import StatisticsCard from './StatisticsCard'

const CaseStudyHeader = () => (
  <section className="section_casestudy">
    <div className="container">
      <div className="casestudy_block">
        <h3>How IHMC 
          <span className="secoundary_text">increased their calls by 83%</span> using Synup</h3>
        <ul className="casecard_wrapper">
          <StatisticsCard
            value="65%"
            description="increase in website visits"
          />
          <StatisticsCard
            value="61%"
            description="increase in website visits"
          />
          <StatisticsCard
            value="91%"
            description="increase in website visits"
          />
        </ul>
      </div>
    </div>
  </section>
)

export default CaseStudyHeader
