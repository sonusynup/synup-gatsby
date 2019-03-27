import React from 'react'

const HeroWithoutImage = ({
  heroIcon,
  heroCaption,
  heroDescription,
  heroTitle
}) => (
  <section class="section_featureshero">
    <div class="container">
      <div class="heroblock_features">
        <div class="heroblock_innerFeatures">
          <img class="heroblock_icon" src={heroIcon.file.url} alt="" />
          <h5 class="card_title">{heroCaption}</h5>
        </div>
        <h2>{heroTitle}</h2>
        <p dangerouslySetInnerHTML={{ __html: heroDescription.childContentfulRichText.html }}/>
      </div>
    </div>
  </section>
)

export default HeroWithoutImage