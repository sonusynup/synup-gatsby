import React from 'react';

import Button from '../../../atoms/button';

// Hero component of the home page
const Hero = () => (
  <section className="section_homepage">
    <div className="container">
      <div className="heroblock">
        <h2>Get found everywhere</h2>
        <p>Manage business location data on search, voice, and social </p>
        <Button type="primary" text="GET STARTED" />
      </div>
    </div>
  </section>
)

export default Hero