import React from "react"
import { Link } from "gatsby"
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
          {
            items
              .sort((x, y) => (x.node.navbarOrder - y.node.navbarOrder))
              .map((item) => (
              <SolutionNavItem
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

export default SolutionNavGroup
