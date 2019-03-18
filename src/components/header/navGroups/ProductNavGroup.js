import React from 'react'

import ProductItem from "../navItem/ProductItem";

const ProductNavGroup = ({
  onHover,
  isHovered,
  onBlur
}) => (
  <li className="dropdown-accord" onMouseOver={onHover} onMouseLeave={onBlur}>
    <a href="#" className="dropdown js-scroll-trigger nav-link">PRODUCTS</a>
    <div className={`dropdown-content ${isHovered ? 'active' : ''}  accordion-content product-content`}>
      <div className="product-submenu arrow_box">
        <ProductItem
          title="LOCATIONS"
          description="Manage all your business locations"
        />
        <ProductItem
          title="LOCATIONS1"
          description="Manage all your business locations"
        />
        <ProductItem
          title="MAnalytics"
          description="Manage all your business locations"
        />
        <ProductItem
          title="Agency Tools"
          description="Manage all your business locations"
        />
      </div>
    </div>
  </li>
)

export default ProductNavGroup