import React from "react"

// Renders the Webinar Learnings
const WebinarLearnings = ({ learning }) => (
  <div className="learn_block">
    <h5 className="learn_title">What you’ll learn</h5>
    <div className="learn_cardBlock">
      {learning.map((learnItem, index) => (
        <div className="learn_card" key={index}>
          <h6 className="learn_cardCount">0{index}</h6>
          <p className="learn_cardPre">{learnItem}</p>
        </div>
      ))}
    </div>
  </div>
)

export default WebinarLearnings
