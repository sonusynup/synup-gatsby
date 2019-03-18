import React from 'react'
import { Link } from 'gatsby'
import SolutionNavItem from "../navItem/SolutionItem";

const SolutionNavGroup = ({
  onHover,
  onBlur,
  isHovered
}) => (
  <li className="dropdown-accord" onMouseOver={onHover} onMouseLeave={onBlur}>
    <Link to="/"
      className="dropdown js-scroll-trigger nav-link"
    >
      SOLUTIONS
    </Link>
    <div className={`dropdown-content ${isHovered ? 'active' : ''} accordion-content solutions-content`}>
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

export default SolutionNavGroup