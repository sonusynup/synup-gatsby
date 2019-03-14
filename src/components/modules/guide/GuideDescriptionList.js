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
                        .map((line, index) => (
                          <>{line}</>
                        ))
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
      <div class="guideTemplate_video">
        <div class="guideTemplate_content">
          <span class="guideTemplate_video">video</span>
          <h5>1 Minute Guide : Add Business On Google My Business</h5>
        </div>
        <div class="guideTemplate_videoClip">
          <div class="embed-responsive embed-responsive-1by1">
            <iframe class="embed-responsive-item" width="100%" height="100%" min-height="400px" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default GuideDescriptionList