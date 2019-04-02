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
      <span href="#" className="dropdown js-scroll-trigger nav-link">
        PRODUCTS
      </span>
      <div
        className={`dropdown-content ${
          isExpanded ? "active" : ""
        }  accordion-content product-content`}
      >
        <div className="product-submenu arrow_box">
          {
            items
              .sort((x, y) => (x.node.navbarOrder - y.node.navbarOrder))
              .map((item) => (
              <ProductItem
                title={item.node.navbarTitle}
                description={item.node.navbarDescription}
                webpageName={item.node.webpageName}
              />
            ))
          }
        </div>
      </div>
    </li>
  )
}

export default ProductNavGroup
