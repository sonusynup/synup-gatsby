import React from 'react';

import Button from '../../../atoms/Buttons';
import HeroSubImg from '../../../images/svg/dummyIllustration.svg'

const HeroSub = () => (
  <section className="section_hero">
    <div class="container">
        <div class="blockWrapper">
            <div class="leftBlock">
                <h3>Accelerate your agency’s growth</h3>
                <ul class="list_unstyled">
                    <li>Generate more leads for your agency directly from your website</li>
                    <li>Manage your clients' location data from one dashboard</li>
                    <li>Automate your agency’s client reporting</li>
                </ul>
            <Button type="primary" text="GET STARTED" />
            </div>
            <div class="rightBlock">
                    <img src={HeroSubImg} className="img_fluid" alt="" />
            </div>
        </div>
    </div>
  </section>
)

export default HeroSub