import React from 'react'

const WebinarLearnings = ({
  learning
}) => (
  <div class="learn_block">
    <h5 class="learn_title">What you’ll learn</h5>
    <div class="learn_cardBlock">
      <div class="learn_card">
        <h6 class="learn_cardCount">01</h6>
        <p class="learn_cardPre">{learning[0]}</p>
      </div>
      <div class="learn_card">
        <h6 class="learn_cardCount">02</h6>
        <p class="learn_cardPre">{learning[1]}</p>
      </div>
    </div>
    <div class="learn_cardBlock">
      <div class="learn_card">
        <h6 class="learn_cardCount">03</h6>
        <p class="learn_cardPre">{learning[2]}</p>
      </div>
      <div class="learn_card">
        <h6 class="learn_cardCount">04</h6>
        <p class="learn_cardPre">{learning[3]}</p>
      </div>
    </div>
  </div>
)

export default WebinarLearnings