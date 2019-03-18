import React from 'react';

import ActionableCard from '../../../molecules/ActionableCardList/ActionableCard'

const HeroEnterprise = () => (
  <section class="paddingControl">
  <div class="container">
    <div class="enterprise_blockWrapper">
      <ActionableCard
        index={0}
        inverted
        title="Manage all your business locations with ease"
        subListItems={
          [
            'Automate data management for all your locations',
            'Track and measure the growth of your business locations',
            'Compare customer engagement metrics across your business locations',
          ]
        }
      />
    </div>
  </div>
</section>
)

export default HeroEnterprise