import React from 'react';

import Button from '../../../atoms/Buttons';
import BlueBox from '../../../images/png/blue-rectangle.png';

const WrapperBlockReverse = () => (
  <section>
    <div class="container">
        <div class="blockWrapper">
            <div class="leftBlock block_contentWrap">
                <h3>A Comprehensive Local Marketing Dashboard</h3>
                <p class="block_contentText">An end-to-end white label local marketing suite to manage your
                    clients’ location data,
                    reviews, and reporting at scale</p>
                <Button type="primary" text="LEARN MORE" />
            </div>
            <div class="rightBlock">
                <img src={BlueBox} className="img_fluid" alt="" />
            </div>
        </div>
    </div>
  </section>
)

export default WrapperBlockReverse