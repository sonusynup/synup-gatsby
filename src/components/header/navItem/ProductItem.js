import React from "react"
import { Link } from "gatsby"

import ProductItemImage from "../../images/svgComponents/ProductItemImage"
import TargetLink from "../../atoms/targetLink"

const ProductItem = ({ title, description, webpageName }) => (
  <TargetLink to={webpageName} className="flex-submenu">
    <figure>
      <ProductItemImage />
    </figure>
    <h5>{title}</h5>
    <div
      dangerouslySetInnerHTML={{
        __html: description.childContentfulRichText.html,
      }}
    />
  </TargetLink>
)

export default ProductItem
