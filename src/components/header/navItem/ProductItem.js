import React from 'react'
import { Link } from 'gatsby'

import ProductItemImage from '../../images/svgComponents/ProductItemImage'

const ProductItem = ({
  title,
  description
}) => (
  <Link to="/" className="flex-submenu">
    <figure>
      <ProductItemImage />
    </figure>
    <h5>{title}</h5>
    <p>{description}</p>
  </Link>
)

export default ProductItem