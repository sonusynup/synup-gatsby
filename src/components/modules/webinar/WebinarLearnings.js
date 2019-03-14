import React from 'react'

const WebinarLearnings = ({
  learning
}) => (
  <div class="learn_block">
    <h5 class="learn_title">What you’ll learn</h5>
    {
      learning.map((learnItem, index) => (
        <div class="learn_card" key={index}>
          <h6 class="learn_cardCount">0{index}</h6>
          <p class="learn_cardPre">{learnItem}</p>
        </div>
      ))
    }
  </div>
)

export default WebinarLearnings