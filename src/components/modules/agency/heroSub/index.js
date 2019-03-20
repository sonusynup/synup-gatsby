import React from 'react';

import ActionableList from '../../../atoms/actionableList';

const listItems = [
  "Generate more leads for your agency directly from your website",
  "Manage your clients' location data from one dashboard",
  "Automate your agency’s client reporting",
]

const HeroSub = () => (
  <section className="section_hero">
    <div class="container">
      <div class="blockWrapper">
        <ActionableList
          listItems={listItems}
          actionType="primary"
          actionText="GET STARTED"
          to=""
          title="Accelerate your agency's growth"
        />  
        <div class="rightBlock">
          <img src="" className="img_fluid" alt="" />
        </div>
      </div>
    </div>
  </section>
)

export default HeroSub