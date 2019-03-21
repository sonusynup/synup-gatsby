import React from 'React'

import ProductSectionWithImage from './ProductSectionWithImage'
import ProductSectionWithTitle from './ProductSectionWithTitle'

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

    default:
      return null;
  }
}

export default Product