import React from "react"

import HeroDefault from "./HeroDefault"
import HeroContinuousBlock from "./HeroContinuousBlock"
import HeroWithoutImage from "./HeroWithoutImage"

const Hero = ({ heroType, ...props }) => {
  switch (heroType) {
    case "default":
      return <HeroDefault {...props} />
    case "Continuous block":
      return <HeroContinuousBlock {...props} />
    case "Without Image":
      return <HeroWithoutImage {...props} />
    default:
      return null
  }
}

export default Hero
