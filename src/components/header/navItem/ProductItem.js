import React from "react"

import ProductItemImage from "../../images/svgComponents/ProductItemImage"
import TargetLink from "../../atoms/targetLink"
import isNull from "../../../helpers/isNull"

const ProductItem = ({ title, description, webpageName }) => (
  <TargetLink to={webpageName} className="flex-submenu">
    <figure>
      <ProductItemImage />
    </figure>
    <h5>{title}</h5>
    {!isNull(description) && (
      <div
        dangerouslySetInnerHTML={{
          __html: description.childContentfulRichText.html,
        }}
      />
    )}
  </TargetLink>
)

export default ProductItem
