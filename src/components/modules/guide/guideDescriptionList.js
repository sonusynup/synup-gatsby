import React from 'react'
import Meta from './Meta'

// Renders Guide description list component
const GuideDescriptionList = ({
  content,
  description,
}) => (
  <section>
    <div className="container">
      <div className="guideTemplate">
        <div className="guideTemplate_head">
          <p dangerouslySetInnerHTML={{ __html: description.childContentfulRichText.html }} />
          {
            content.map((item, index) => (
              <>
                <li className="guideTemplate_wrapper">
                  <div className="guideTemplate_content">
                      <span>step {index+1}</span>
                      <h5>{item.title}</h5>
                      <p dangerouslySetInnerHTML={{ __html: item.description.childContentfulRichText.html }} />
                  </div>
                  <div className="guideTemplate_block">
                    <div className="guideTemplate_img">
                      <figure>
                        <img
                          src={item.images[0].file.url}
                          className="img_fluid"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </li>
                <Meta meta={item.meta} />
              </>
            ))
          }
        </div>
      </div>
    </div>
  </section>
)

export default GuideDescriptionList