import React from "react"

import ProductItem from "../navItem/ProductItem"

const ProductNavGroup = ({ onExpand, isExpanded, onClose, items }) => {
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
      <span href="#" className={`dropdown js-scroll-trigger nav-link ${isExpanded ? "expanded" : ""}`}>
        PRODUCTS
      </span>
      <div
        className={`dropdown-content ${
          isExpanded ? "active" : ""
        }  accordion-content product-content`}
      >
        <div className="product-submenu arrow_box">
          {items
            .sort(
              (x, y) => x.node.navbar.navbarOrder - y.node.navbar.navbarOrder
            )
            .map((item, index) => (
              <ProductItem
                key={index}
                title={item.node.navbar.navbarTitle}
                description={item.node.navbar.navbarDescription}
                webpageName={item.node.webpageName}
              />
            ))}
        </div>
      </div>
    </li>
  )
}

export default ProductNavGroup
