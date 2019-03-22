import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Button from '../../../atoms/button';

// TODO: Make the buttons generic
const Feature = ({
  featureType,
  ...props,
}) => {
  switch (featureType) {
    case 'default':
      return (
        <FeatureDefault
          {...props}
        />
      )
      break;
    case 'inverted':
      return (
        <FeatureInverted
          {...props}
        />
      )
      break;
    case 'whitelabelType':
      return (
        <FeatureDefault
          {...props}
        />
      )
      break;
  }
}

Feature.propTypes = {
  wrapperClass: PropTypes.string,
  featureDescription: PropTypes.object,
  actionType: PropTypes.string,
  actionText: PropTypes.string,
  to: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
}

Feature.defaultProps = {
  featureDescription: {
    childContentfulRichText: {
      html: null,
    }
  }
}

export default Feature