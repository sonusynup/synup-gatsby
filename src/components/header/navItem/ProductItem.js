import React from "react"
import { Link } from "gatsby"

import ProductItemImage from "../../images/svgComponents/ProductItemImage"

const ProductItem = ({
  title,
  description,
  webpageName,
}) => (
  <Link to={webpageName} className="flex-submenu">
    <figure>
      <ProductItemImage />
    </figure>
    <h5>{title}</h5>
    <div dangerouslySetInnerHTML={{ __html: description.childContentfulRichText.html }} />
  </Link>
)

export default ProductItem
