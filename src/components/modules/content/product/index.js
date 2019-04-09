import React from "react"

import ProductSectionWithImage from "./productSectionWithImage"
import ProductSectionWithTitle from "./productSectionWithTitle"

const Product = ({ productSectionType, ...props }) => {
  switch (productSectionType) {
    case "Section with title":
      return <ProductSectionWithTitle {...props} />
    case "Section with image":
      return <ProductSectionWithImage {...props} />
    case "section with none":
      return <ProductSectionWithTitle {...props} />
    default:
      return null
  }
}

export default Product
