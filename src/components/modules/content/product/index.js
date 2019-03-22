import React from 'react'

import ProductSectionWithImage from './productSectionWithImages'
import ProductSectionWithTitle from './productSectionWithTitles'

const Product = ({
  productSectionType,
  ...props
}) => {
  switch (productSectionType) {
    case 'Section with title':
      return (
        <ProductSectionWithTitle
          {...props}
        />
      )
      break;
    case 'Section with image':
      return (
        <ProductSectionWithImage
          {...props}
        />
      )
      break;
    case 'section with none':
      return (
        <ProductSectionWithTitle
          {...props}
        />
      )
    default:
      return null;
  }
}

export default Product