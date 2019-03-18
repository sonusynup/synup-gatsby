import React from 'react'
import { Link } from 'gatsby'
import SolutionNavItem from "../navItem/SolutionItem";

const SolutionNavGroup = ({
  onExpand,
  onClose,
  isExpanded
}) => {
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
    <li className="dropdown-accord"
      onMouseEnter={onMouseEnterOrExit}
      onClick={onTapOnOrOff}
      onMouseLeave={onMouseEnterOrExit}
    >
      <span className="dropdown js-scroll-trigger nav-link">
        SOLUTIONS
      </span>
      <div className={`dropdown-content ${isExpanded ? 'active' : ''} accordion-content solutions-content`}>
        <div className="solutions-submenu arrow_box">
          <SolutionNavItem
            title="SINGLE - LOCATION BUSINESS"
            description="Manage all your business locations and whatever comes here"
          />
          <SolutionNavItem
            title="MULTI - LOCATION BUSINESS"
            description="Manage all your business locations and whatever comes here"
          />
          <SolutionNavItem
            title="MARKETING AGENCY"
            description="Manage all your business locations and whatever comes here"
          />
        </div>
      </div>
    </li>
  )
}


export default SolutionNavGroup