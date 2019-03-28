import React from "react"

import ProductItem from "../navItem/ProductItem"

const ProductNavGroup = ({ onExpand, isExpanded, onClose }) => {
  const onMouseEnterOrExit = () => {
    if (window.outerWidth > 992) {
      isExpanded ? onClose() : onExpand()
    }
  }

  const onTapOnOrOff = () => {
    if (window.outerWidth <= 992) {
      isExpanded ? onClose() : onExpand()
    }
  }
  return (
    <li
      className="dropdown-accord"
      onMouseEnter={onMouseEnterOrExit}
      onClick={onTapOnOrOff}
      onMouseLeave={onMouseEnterOrExit}
    >
      <span href="#" className="dropdown js-scroll-trigger nav-link">
        PRODUCTS
      </span>
      <div
        className={`dropdown-content ${
          isExpanded ? "active" : ""
        }  accordion-content product-content`}
      >
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
}

export default ProductNavGroup
