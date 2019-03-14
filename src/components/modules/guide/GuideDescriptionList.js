import React from 'react'

const GuideDescriptionList = ({
  content,
  description,
  image,
}) => (
  <section>
    <div className="container">
      <div className="guideTemplate">
        <div className="guideTemplate_head">
          <div dangerouslySetInnerHTML={{ __html: content.childContentfulRichText.html }} />
        </div>
      </div>
    </div>
  </section>
)

export default GuideDescriptionList