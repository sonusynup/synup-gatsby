import React from 'react'

import Button from '../../../atoms/Buttons'

const Features = () => (
  <section className="section_network">
    <div className="container">
      <div className="blockWrapper">
        <div className="network_wrapper">
          <h3>Synup Premium Network</h3>
          <p className="network_text">
            Whether your business has 1 or 1000 locations, managing multiple
              clients, we are here to
              help managing multiple clients. Whether your business has 1 or 1000 locations, managing
              multiple clients, we are
              here to help managing multiple clients.
          </p>
          <Button type="primary" text="SEE OUR NETWORK" />
        </div>
        <div className="rightBlock">
          <figure>
            <img
              src={''}
              className="img_fluid"
              alt=""
            />
          </figure>
        </div>
      </div>
    </div>
  </section>
)

export default Features