import React from 'react'

const GuideHeader = ({
  title,
  cover
}) => (
  <section className="section_heroGuide">
    <div className="container">
        <div className="heroblock">
            <img
              className="heroblock_icon"
              src={cover}
              alt=""
            />
            <h3>{title}</h3>
            <p className="heroGuide_pre">N/A</p>
        </div>
    </div>
  </section>
)

export default GuideHeader