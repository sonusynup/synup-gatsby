import React from 'react'

const GuideDescriptionList = ({
  content,
  description,
  image,
}) => (
  <section>
    <div class="container">
      <div class="guideTemplate">
        <div class="guideTemplate_head">
          <p>
            {content.content[0].content[0].value}
          </p>
        </div>
        {
          description.guideItemDescriptionList.map((item, index) => (
            <ul key={index} class="guideTemplate_body">
              <li class="guideTemplate_wrapper">
                <div class="guideTemplate_content">
                  <span>step {index+1}</span>
                  <h5>{item.title.title}</h5>
                  <p>
                    {
                      item.description.description
                        .split('\n')
                        .map(line => <>{line}</>)
                    }
                  </p>
                </div>
                <div class="guideTemplate_block">
                  <div class="guideTemplate_img">
                    <figure>
                      <img src={item.image.file.url} class="img_fluid" alt="" />
                    </figure>
                  </div>
                </div>
              </li>
            </ul>
          ))
        }
      </div>
    </div>
  </section>
)

export default GuideDescriptionList