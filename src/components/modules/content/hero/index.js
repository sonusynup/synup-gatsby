import React from 'react';

import HeroDefault from './HeroDefault'
import HeroContinuousBlock from './HeroContinuousBlock'


const Hero = ({
  heroType,
  ...props,
}) => {
  switch (heroType) {
    case 'default':
      return <HeroDefault {...props} />
    case 'Continuous block':
      return <HeroContinuousBlock {...props} />
  }
}

export default Hero;