import React from 'react';

import Button from '../../../atoms/Buttons';

const HeroEnterprise = () => (
  <section class="paddingControl">
  <div class="container">
      <div class="enterprise_blockWrapper">
          <div class="leftBlock">
              <h3 class="whiteTitle">Manage all your business <br></br> locations with ease</h3>
              <ul class="list_enterprise">
                  <li class="whiteTitle">Automate data management for all your locations</li>
                  <li class="whiteTitle">Track and measure the growth of your business locations</li>
                  <li class="whiteTitle">Compare customer engagement metrics across your business locations</li>
              </ul>
              <Button type="secondary" text="GET STARTED" />
              <span class="space"></span>
              <Button type="secondary" text="LEARN MORE" />
          </div>
      </div>
  </div>
</section>
)

export default HeroEnterprise