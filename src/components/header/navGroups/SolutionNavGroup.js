import React from "react"
import SolutionNavItem from "../navItem/SolutionItem"

const SolutionNavGroup = ({ onExpand, onClose, isExpanded, items }) => {
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
      <span className="dropdown js-scroll-trigger nav-link">SOLUTIONS</span>
      <div
        className={`dropdown-content ${
          isExpanded ? "active" : ""
        } accordion-content solutions-content`}
      >
        <div className="solutions-submenu arrow_box">
          {items
            .sort(
              (x, y) => x.node.navbar.navbarOrder - y.node.navbar.navbarOrder
            )
            .map((item, index) => (
              <SolutionNavItem
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

export default SolutionNavGroup
