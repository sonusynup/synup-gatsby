import React from 'react'
import { Link } from 'gatsby'

import Button from '../atoms/button'

const Prefooter = () => (
  <section class="section_grandient">
    <div class="container">
      <div class="grandientWrapper">
        <h3 class="whiteTitle">See Synup in action</h3>
        <p>Take a closer look at the product, and how it can change your local
            marketing game</p>
        <Link to="/" >
          <Button type="invert-primary" text="GET STARTED" />
        </Link>
      </div>
    </div>
  </section>
)

export default Prefooter